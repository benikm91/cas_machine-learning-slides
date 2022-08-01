import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import Two from "two.js";
import {TwoAnimationStep} from "../two-animation/two-animation.step";
import {TwoAnimation} from "../two-animation/two.animation";

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

    const boxWidth = 150;

    const two = new Two({
      height: 200,
      width: boxWidth * 3 + 50 + 50
    }).appendTo(this.supervisedLearningAnimationContainer?.nativeElement);

    const model = createTextRect(this.modelLabel, boxWidth, 150)
    model.position.x = boxWidth + 75 + 50;
    model.position.y = two.height / 2;

    const input = createTextRect(this.inputLabel, boxWidth, 100);
    const output = createTextRect(this.outputLabel, boxWidth, 100);

    const inputGoal = model.position.x;
    const outputGoal = 2 * boxWidth + 75 + 50 + 50;

    const inputStartX = boxWidth / 2;
    const outputStartX = model.position.x;

    const resetScene = () => {
      input.position.x = inputStartX;
      output.position.x = outputStartX;
    }

    resetScene();

    const animation = new TwoAnimation([
        new TwoAnimationStep(60),
        new TwoAnimationStep(
            60,
            deltaT => input.position.x = inputStartX + (inputGoal - inputStartX) * deltaT,
            () => input.position.x = -300,
        ),
        new TwoAnimationStep(
            60,
            deltaT => {
              deltaT = 1 - Math.abs(deltaT - 0.5) * 2
              model.scale = 1 + 0.125 * Math.pow(deltaT, 2);
            }
        ),
        new TwoAnimationStep(
            60,
            deltaT => output.position.x = outputStartX + (outputGoal - outputStartX) * deltaT,
        ),
        new TwoAnimationStep(60),
      ],
      resetScene
    )

    two
        .add(input, output, model)
        .bind('update', animation.animate.bind(animation))
        .play();

  }

}

