import {Component, Input} from '@angular/core';
import Two from "two.js";
import {LinearInterpolator, TwoAnimationStep} from "../two-animation/two-animation.step";
import {TwoAnimation} from "../two-animation/two.animation";
import {createTextRect} from "../two-animation/util";
import {TwoAnimationComponent} from "../two-animation/two-animation.component";

@Component({
  selector: 'supervised-model-visualization',
  styleUrls: ['./supervised-model-visualization.component.scss'],
  templateUrl: './supervised-model-visualization.component.pug',
})
export class SupervisedModelVisualizationComponent extends TwoAnimationComponent {

  @Input('input-label') inputLabel: string = 'Input(s)';
  @Input('model-label') modelLabel: string = 'Model';
  @Input('output-label') outputLabel: string = 'Output';

  readonly boxWidth = 150;

  override readonly options = {
    height: 200,
    width: this.boxWidth * 3 + 50 + 50
  }

  override initAnimation(two: Two) {

    const model = createTextRect(two, this.modelLabel, this.boxWidth, 150)
    model.position.x = this.boxWidth + 75 + 50;
    model.position.y = two.height / 2;

    const slide = createTextRect(two, this.inputLabel, this.boxWidth, 100);

    const outputGoal = 2 * this.boxWidth + 75 + 50 + 50;

    const slideStartX = this.boxWidth / 2;

    const resetScene = () => {
      slide.children[1].value = this.inputLabel;
      slide.position.x = slideStartX;
    }

    resetScene();

    two
      .add(slide, model)
      .play();

    const moveInModel = new LinearInterpolator(slide.position.x, model.position.x);
    const moveOutModel = new LinearInterpolator(model.position.x, outputGoal);

    return new TwoAnimation([
        TwoAnimation.bigPause,
        new TwoAnimationStep(
            60,
            deltaT => slide.position.x = moveInModel.interpolate(deltaT),
            () => slide.position.x = moveInModel.to,
        ),
        TwoAnimation.smallPause,
        new TwoAnimationStep(
            60,
            deltaT => {
              slide.children[1].value = this.outputLabel;
              deltaT = 1 - Math.abs(deltaT - 0.5) * 2
              model.scale = 1 + 0.125 * Math.pow(deltaT, 2);
            }
        ),
        TwoAnimation.smallPause,
        new TwoAnimationStep(
            60,
            deltaT => slide.position.x = moveOutModel.interpolate(deltaT),
          () => slide.position.x = moveOutModel.to,
        ),
        TwoAnimation.bigPause,
      ],
      resetScene
    )

  }

}

