import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as d3 from "d3";
import {Selection} from "d3-selection";

type Record = {
  x: number;
  y: number;
};

@Component({
  selector: 'model-complexity',
  styleUrls: ['./model-complexity.component.scss'],
  templateUrl: './model-complexity.component.pug',
})
export class ModelComplexityComponent implements OnInit, AfterViewInit {

  @ViewChild("data")
  private data!: ElementRef<HTMLInputElement>;

  @ViewChild("features")
  private features!: ElementRef<HTMLInputElement>;

  @ViewChild("complexity")
  private complexity!: ElementRef<HTMLInputElement>;

  private svg: d3.Selection<any, any, HTMLElement, any> | undefined;
  private modelPointX: number = 0.5
  private exponentialDecayVal: number = 0.95
  private exponentialDecayTrain: number = 0.95
  private exponentialIncreaseVal: number = 1.01
  private scaleExponentVal: number = 1 / 3
  private minHeightVal: number = 0.2
  private minHeightTrain: number = 0.2
  private exponentialTradeOffDomainVal: number = 100

  private width = 400;
  private height = 250;
  private margin = { top: 20, right: 30, bottom: 30, left: 40 };

  generateData(exponentialDecay: number = 0.95, exponentialIncrease: number = 1.01, scaleExponent: number = 1/3, modelPointX: number, minHeight: number): [Record[], Record[], Record, Record] {
    const [val, optimalPoint, modelPoint] = this.generateValidationCurveAndOptimalValue(exponentialDecay, exponentialIncrease, scaleExponent, modelPointX, minHeight)
    return [
      this.generateTrainCurve(this.exponentialDecayTrain, this.minHeightTrain),
      val,
      optimalPoint,
      modelPoint
    ]
  }

  generateTrainCurve(exponentialDecay: number, minHeight: number): Record[] {
    const result = []
    let y = 1
    for (let i = 0; i <= 150; i++) {
      result.push({
        x: i / 100, y: y
      });
      y = y * exponentialDecay + (1 - exponentialDecay) * minHeight
    }
    return result;
  }

  generateValidationCurveAndOptimalValue(exponentialDecay: number, exponentialIncrease: number, scaleExponent: number, modelPointX: number, minHeight: number): [Record[], Record, Record] {
    const weight = d3
      .scalePow<number>()
      .exponent(scaleExponent)
      .domain([0, this.exponentialTradeOffDomainVal])
      .range([1, 0]);

    const result = []
    let optimalPointX = null
    let optimalPointY = null
    let modelPointY = null
    let y = 1
    let lastY = 0
    for (let i = 0; i <= 150; i++) {
      result.push({
        x: i / 100, y: y
      });
      const w1 = weight(i)
      const w2 = 1 - w1
      y = (y * exponentialDecay + (1 - exponentialDecay) * minHeight) * w1 + y * exponentialIncrease * w2
      if (lastY > y + 0.0001) {
        optimalPointX = i / 100
        optimalPointY = y
      }
      if (i > modelPointX * 100 && modelPointY == null) {
        modelPointY = (y + lastY) / 2
      }
      lastY = y
    }
    return [
      result,
      {x: optimalPointX ?? 1, y: optimalPointY ?? 1},
      {x: modelPointX ?? 1, y: modelPointY ?? 1}
    ];
  }

  ngOnInit(): void {

    // append the svg object to the body of the page
    this.svg = d3.select("#model-complexity-visualization")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  ngAfterViewInit() {
    this.refreshParams()
    this.refreshDrawingByParams()
  }

  addRegularization(value: number) {
    this.complexity.nativeElement.value = '' + (this.complexity.nativeElement.valueAsNumber - value);
    this.updateParamsAndDrawing();
  }

  setComplexityToLinearRegression() {
    this.setComplexityTo(20 + this.features.nativeElement.valueAsNumber / 10)
  }

  setComplexityToPolynomialRegression() {
    this.setComplexityTo(40 + Math.pow(this.features.nativeElement.valueAsNumber / 10, 1.5))
  }

  setComplexityTo(value: number) {
    this.complexity.nativeElement.value = '' + value;
    this.updateParamsAndDrawing();
  }

  updateParamsAndDrawing() {
    this.refreshParams();
    this.refreshDrawingByParams();
  }

  refreshParams() {
    const dataValue = this.data.nativeElement.valueAsNumber / 100
    const featuresValue = this.features.nativeElement.valueAsNumber / 100
    const edWeightVal = (dataValue + (1 - featuresValue)) / 2
    const edWeightTrain = (dataValue + featuresValue) / 2
    this.exponentialDecayVal = 0.95 * edWeightVal + 0.98 * (1 - edWeightVal)
    this.exponentialDecayTrain = 0.95 * edWeightTrain + 0.99 * (1 - edWeightTrain)
    const eiWeight = (dataValue + 10*(1 - featuresValue)) / 11
    this.exponentialIncreaseVal = 1.001 * eiWeight + 1.010 * (1 - eiWeight)
    const mhWeightVal = (dataValue + featuresValue) / 2
    this.minHeightVal = 1 - 0.9 * mhWeightVal
    const mhWeightTrain = (3 * dataValue + (1 - featuresValue)) / 4
    this.minHeightTrain = mhWeightTrain - 0.8 * mhWeightTrain
    const seWeight = dataValue
    this.scaleExponentVal = 1 / 10 * (1 - seWeight) + 9 / 10 * seWeight
    this.exponentialTradeOffDomainVal = Math.max(1, 50 * (1 - seWeight) + 200 * seWeight)
    this.modelPointX = this.complexity.nativeElement.valueAsNumber / 100;
  }

  refreshDrawingByParams(): void {
    const [train, val, optimalPoint, modelPoint] = this.generateData(this.exponentialDecayVal, this.exponentialIncreaseVal, this.scaleExponentVal, this.modelPointX, this.minHeightVal)
    this.refreshDrawing(train, val, optimalPoint, modelPoint)
  }

  refreshDrawing(train: Record[], val: Record[], optimalPoint: Record, modelPoint: Record): void {
    const yDeltaOptimal = Math.abs(optimalPoint.y - modelPoint.y)
    const isOverfitting = yDeltaOptimal > 0.01 && modelPoint.x > optimalPoint.x
    const isUnderfitting = yDeltaOptimal > 0.01 && modelPoint.x < optimalPoint.x
    const x = d3
      .scaleLinear<number>()
      .domain([0, 1.5])
      .range([this.margin.left, this.width - this.margin.right]);

    const y = d3
      .scaleLinear<number>()
      .domain([0, 1])
      // .domain([0, d3.max(data, (d) => d.y)] as [number, number])
      // .nice()
      .range([this.height - this.margin.bottom, this.margin.top]);

    const line = d3
      .line<Record>()
      .x((d) => x(d.x))
      .y((d) => y(d.y));

    const svg = this.svg;
    if (svg === undefined) return;

    svg.selectAll("*").remove();

    svg.append("g")
      .attr("transform", "translate("+0+","+(this.height - this.margin.bottom)+")")
      .call(d3.axisBottom(x).ticks(0));

    svg.append("g")
      .attr("transform", "translate(40,0)")
      .call(d3.axisLeft(y).ticks(0));

    svg
      .append('g')
      .attr('transform', 'translate(' + 20 + ', ' + this.height / 2 + ')')
      .append('text')
      .style("font", "14px sans-serif")
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text('Loss');

    svg
      .append('g')
      .attr('transform', 'translate(' + (this.width / 2) + ', ' + (this.height - 5) + ')')
      .append('text')
      .style("font", "14px sans-serif")
      .attr('text-anchor', 'middle')
      .text('Modelkomplexität');

    svg.append("path")
      .datum(train)
      .attr("fill", "none")
      .attr("stroke", "#69b3a2")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    svg
      .append("circle")
      .data([
        optimalPoint
      ])
      .attr("cx", function(d) { return x(d.x); })
      .attr("cy", function(d) { return y(d.y); })
      .attr("r", "4")
      .style("fill", "green")
      .attr("stroke", "black")

    svg.append("path")
      .datum([
        {x: optimalPoint.x, y: 0},
        optimalPoint
      ])
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    svg
      .append("circle")
      .data([
        modelPoint
      ])
      .attr("cx", function(d) { return x(d.x); })
      .attr("cy", function(d) { return y(d.y); })
      .attr("r", "4")
      .style("fill", "red")
      .attr("stroke", "black")

    svg.append("path")
      .datum([
        {x: modelPoint.x, y: 0},
        modelPoint
      ])
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    if (isOverfitting || isUnderfitting)
      svg
        .append('g')
        .attr('transform', 'translate(' + (this.width / 2) + ', 0)')
        .append('text')
        .style("font", "14px sans-serif")
        .attr('text-anchor', 'middle')
        .text((isOverfitting) ? 'Unser Model is Overfitting' : 'Unser Model is Underfitting');

    svg.append("path")
      .datum(val)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }



}
