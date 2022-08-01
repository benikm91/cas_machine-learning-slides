import {Component} from '@angular/core';
import {ProblemTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'what-is-classification',
  styleUrls: ['./what-is-classification.component.scss'],
  templateUrl: './what-is-classification.component.pug',
})
export class WhatIsClassificationComponent extends Slide {

  problemTableOfContentLabel = ProblemTableOfContentLabel

}
