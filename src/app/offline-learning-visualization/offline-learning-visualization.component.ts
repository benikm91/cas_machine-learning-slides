import {Component} from '@angular/core';
import Two from "two.js";
import {LinearInterpolator, TwoAnimationStep} from "../two-animation/two-animation.step";
import {TwoAnimation} from "../two-animation/two.animation";
import {createTextRect} from "../two-animation/util";
import {TwoAnimationComponent} from "../two-animation/two-animation.component";

@Component({
  selector: 'offline-learning-visualization',
  styleUrls: ['./offline-learning-visualization.component.scss'],
  templateUrl: './offline-learning-visualization.component.pug',
})
export class OfflineLearningVisualizationComponent extends TwoAnimationComponent {

  readonly boxWidth = 150;

  override readonly options = {
    height: 600,
    width: 200
  }

  override initAnimation(two: Two) {

    const slide = createTextRect(two, "Data", 100, 100);
    slide.position.x = two.width / 2;
    slide.position.y = 50;

    const model = createTextRect(two, "Model", this.boxWidth, 150)
    model.position.x = two.width / 2;
    model.position.y = 350;

    const resetScene = () => {
      slide.position.y = 200;
    }

    const gear1 = makeGear(20, 30, 10)
    gear1.position.x = two.width / 2;
    gear1.position.y = 350;

    const gear2 = makeGear(20, 30, 10)
    gear2.position.x = two.width / 2 + 30;
    gear2.position.y = 400;

    const gear3 = makeGear(20, 30, 10)
    gear3.position.x = two.width / 2 - 30;
    gear3.position.y = 400;

    resetScene();

    two
      .add(slide, model, gear1, gear2, gear3)
      .play();

    const moveInModel = new LinearInterpolator(slide.position.y, model.position.y);
    const rotate = new LinearInterpolator(0, Math.PI);

    return new TwoAnimation([
        TwoAnimation.bigPause,
        new TwoAnimationStep(
          60,
          deltaT => slide.position.y = moveInModel.interpolate(deltaT),
          () => slide.position.y = moveInModel.to,
        ),
        TwoAnimation.smallPause,
        new TwoAnimationStep(
          60,
          deltaT => {
            gear1.rotation = rotate.interpolate(deltaT)
          },
        ),
        TwoAnimation.bigPause,
      ],
      resetScene
    )

      function makeGear(innerRadius: number, outerRadius: number, circleRadius: number, numberOfPoints: number = 32) {

        const anchors = [];

        for (let i = 0; i < numberOfPoints; i++) {
          const theta = i * Math.PI * 2 / numberOfPoints;
          const radius = i % 4 < 2 ? innerRadius : outerRadius;
          const x = Math.cos(theta) * radius;
          const y = Math.sin(theta) * radius;
          anchors.push(new Two.Anchor(x, y));
        }

        const circle = two.makeCircle(0, 0, circleRadius);
        circle.fill = '#FFFFFF';

        const gear = two.makeCurve(anchors);
        gear.fill = '#c06b5c';
        gear.stroke = '#8f4126';

        return two.makeGroup(
          gear,
          circle
        )

      }

  }

}

