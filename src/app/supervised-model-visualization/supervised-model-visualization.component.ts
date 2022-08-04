import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import Two from "two.js";
import {LinearInterpolator, TwoAnimationStep} from "../two-animation/two-animation.step";
import {TwoAnimation} from "../two-animation/two.animation";
import {createTextRect} from "../two-animation/util";
import {TwoAnimationComponent} from "../two-animation/two-animation.component";
import anime from "animejs";
import {moveTargetsTo} from "../anime/util";

@Component({
  selector: 'supervised-model-visualization',
  styleUrls: ['./supervised-model-visualization.component.scss'],
  templateUrl: './supervised-model-visualization.component.pug',
})
export class SupervisedModelVisualizationComponent {

  @Input('input-label') inputLabel: string = 'Input(s)';
  @Input('input-image') inputImageSrc: string | null = null;
  @Input('model-label') modelLabel: string = 'Model';
  @Input('output-label') outputLabel: string = 'Output';

  @ViewChild("input") input: ElementRef | null = null;
  @ViewChild("model") model: ElementRef | null = null;
  @ViewChild("output") output: ElementRef | null = null;

  inputContent: string = "";
  animation: anime.AnimeInstance[] = [];

}

