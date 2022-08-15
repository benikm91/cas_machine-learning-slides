import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import anime from "animejs";

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

