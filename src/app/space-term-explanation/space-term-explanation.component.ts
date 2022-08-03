import {Component} from "@angular/core";
import Two from "two.js";
import {createSpaceTextRect, createTextRect} from "../two-animation/util";
import {TwoAnimation} from "../two-animation/two.animation";
import {LinearInterpolator, TwoAnimationStep} from "../two-animation/two-animation.step";
import {TwoAnimationComponent} from "../two-animation/two-animation.component";

@Component({
  selector: 'space-term-explanation',
  styleUrls: ['./space-term-explanation.component.scss'],
  templateUrl: './space-term-explanation.component.pug',
})
export class SpaceTermExplanationComponents extends TwoAnimationComponent {

  override options = {
      height: 600,
      width: 600,
    };

  override initAnimation(two: Two): TwoAnimation {

    const boxWidth = 400;
    const boxHeight = 75;
    const startY = 50;
    const boxYDelta = 100;

    const leftSideX = two.width / 2 - boxWidth / 2 - 50
    const rightSideX = two.width / 2 + boxWidth / 2 + 50

    const slide = createTextRect(two, "x", 75, boxHeight);
    slide.visible = false;
    const slideStartX = leftSideX;
    const slideStartY = 50;

    const inputSpace = createSpaceTextRect(two, "Input Space", boxWidth, boxHeight)
    inputSpace.position.x = two.width / 2;
    inputSpace.position.y = 50;

    const featureEngineering = createTextRect(two, "Feature Engineering", boxWidth, boxHeight);
    featureEngineering.position.x = two.width / 2;
    featureEngineering.position.y = startY + boxYDelta;

    const featureSpace = createSpaceTextRect(two, "Feature Space", boxWidth, boxHeight);
    featureSpace.position.x = two.width / 2;
    featureSpace.position.y = startY + 2*boxYDelta;

    const model = createTextRect(two, "Model", boxWidth, boxHeight);
    model.position.x = two.width / 2;
    model.position.y = startY + 3*boxYDelta;

    const outputSpace = createSpaceTextRect(two, "Output Space", boxWidth, boxHeight);
    outputSpace.position.x = two.width / 2;
    outputSpace.position.y = startY + 4*boxYDelta;

    const resetScene = () => {
        slide.children[1].value = "x"
        slide.position.x = slideStartX;
        slide.position.y = slideStartY;
    }

    const moveToFeatureEngineering = new LinearInterpolator(slideStartY, featureEngineering.position.y);
    const moveToFeatureSpace = new LinearInterpolator(featureEngineering.position.y, featureSpace.position.y);
    const moveToModel = new LinearInterpolator(featureSpace.position.y, model.position.y);
    const moveToOutputSpace = new LinearInterpolator(model.position.y, outputSpace.position.y);
    const moveToRight = new LinearInterpolator(leftSideX, rightSideX);
    const moveToLeft = moveToRight.invert();

    const animation = new TwoAnimation([
          new TwoAnimationStep(
            60,
            deltaT => slide.visible = deltaT != 0.0,
            () => slide.visible = true,
          ),
          new TwoAnimationStep(
              moveToFeatureEngineering.frameCount(2.0),
              deltaT => slide.position.y = moveToFeatureEngineering.interpolate(deltaT),
              () => slide.position.y = moveToFeatureEngineering.to,
          ),
          TwoAnimation.smallPause,
          new TwoAnimationStep(
              moveToRight.frameCount(2.0),
      deltaT => {
                slide.position.x = moveToRight.interpolate(deltaT);
                if (deltaT > 0.5) slide.children[1].value = "x, x²"
              },
            () => slide.position.x = moveToRight.to
          ),
          TwoAnimation.smallPause,
          new TwoAnimationStep(
              moveToFeatureSpace.frameCount(2.0),
              deltaT => slide.position.y = moveToFeatureSpace.interpolate(deltaT),
              () => slide.position.y = moveToFeatureSpace.to,
          ),
          TwoAnimation.bigPause,
          new TwoAnimationStep(
              moveToModel.frameCount(2.0),
              deltaT => slide.position.y = moveToModel.interpolate(deltaT),
              () => slide.position.y = moveToModel.to,
          ),
          TwoAnimation.smallPause,
          new TwoAnimationStep(
              moveToLeft.frameCount(2.0),
              deltaT => {
                slide.position.x = moveToLeft.interpolate(deltaT);
                if (deltaT > 0.5) slide.children[1].value = "y"
              },
              () => slide.position.x = moveToLeft.to
          ),
          TwoAnimation.smallPause,
          new TwoAnimationStep(
              moveToOutputSpace.frameCount(2.0),
              deltaT => slide.position.y = moveToOutputSpace.interpolate(deltaT),
              () => slide.position.y = moveToOutputSpace.to,
          ),
          TwoAnimation.bigPause,
        ],
        resetScene
    )

    two.add(inputSpace, featureSpace, model, outputSpace, slide)
    two.play();

    return animation;
  }

}
