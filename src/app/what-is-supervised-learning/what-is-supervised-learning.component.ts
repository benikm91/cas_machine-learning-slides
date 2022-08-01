import {Component, ElementRef, ViewChild} from '@angular/core';
import {ProblemTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'what-is-supervised-learning',
  styleUrls: ['./what-is-supervised-learning.component.scss'],
  templateUrl: './what-is-supervised-learning.component.pug',
})
export class WhatIsSupervisedLearningComponent extends Slide {

  @ViewChild('supervisedLearningAnimationContainer') supervisedLearningAnimationContainer: ElementRef | undefined;

  problemTableOfContentLabel = ProblemTableOfContentLabel

}
