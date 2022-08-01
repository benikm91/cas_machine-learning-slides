import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import Two from "two.js";
import {Path} from "two.js/src/path";
import {group} from "@angular/animations";

@Component({
  selector: 'supervised-model-visualization',
  styleUrls: ['./supervised-model-visualization.component.scss'],
  templateUrl: './supervised-model-visualization.component.pug',
})
export class SupervisedModelVisualizationComponent implements AfterViewInit {

  @Input('input-label') inputLabel: string = 'Input(s)';
  @Input('model-label') modelLabel: string = 'Model';
  @Input('output-label') outputLabel: string = 'Output';

  @ViewChild('supervisedLearningAnimationContainer') supervisedLearningAnimationContainer: ElementRef | undefined;

  ngAfterViewInit(): void {
    this.initVisualization();
  }

  private initVisualization() {

    function createTextRect(label: string, width: number, height: number): any {
      const text = two.makeText(label, 0, 0, {
        size: 24,
        fill: 'white'
      });
      const box = two.makeRectangle(0, 0, width, height);
      box.fill = '#5c6bc0';
      box.stroke = '#26418f';
      const group = two.makeGroup(box, text);
      group.position.y = two.height / 2;
      return group;
    }

    const params = {
      height: 200
    }
    const elem = this.supervisedLearningAnimationContainer;
    const two = new Two(params).appendTo(elem?.nativeElement);

    const boxWidth = 150;

    const model = createTextRect(this.modelLabel, boxWidth, 150)
    model.position.x = boxWidth + 75 + 50;
    model.position.y = two.height / 2;

    const input = createTextRect(this.inputLabel, boxWidth, 100);
    const output = createTextRect(this.outputLabel, boxWidth, 100);

    const inputGoal = model.position.x;
    const outputGoal = 2 * boxWidth + 75 + 50 + 50;

    const inputStartX = boxWidth / 2;
    const outputStartX = model.position.x;

    input.position.x = inputStartX;
    output.position.x = outputStartX;

    const animateInputTime = 60;
    const animateOutputTime = 60;

    two.add(input);
    two.add(output);
    two.add(model);

    two.bind('update', update);
    two.play();

    function update(frameCount: number) {
      function animateInput(deltaT: number) {
        input.position.x = inputStartX + (inputGoal - inputStartX) * deltaT;
      }
      function animateModel(deltaT: number) {
        deltaT = 1 - Math.abs(deltaT - 0.5) * 2
        model.scale = 1 + 0.125 * Math.pow(deltaT, 2);
      }
      function animateOutput(deltaT: number) {
        output.position.x = outputStartX + (outputGoal - outputStartX) * deltaT;
      }
      switch(Math.floor(frameCount / 60) % 5) {
        case 0:
          output.position.x = -300;
          input.position.x = inputStartX
          break
        case 1:
          animateInput((frameCount % animateInputTime) / animateInputTime);
          break;
        case 2:
          input.position.x = -300;
          animateModel((frameCount % animateInputTime) / animateInputTime);
          break;
        case 3:
          animateOutput((frameCount % animateOutputTime) / animateOutputTime);
          break;
        case 4:
          break;
      }
    }
  }

}
