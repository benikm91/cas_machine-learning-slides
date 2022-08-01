import {Component} from '@angular/core';
import {ProblemTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'what-is-regression',
  styleUrls: ['./what-is-regression.component.scss'],
  templateUrl: './what-is-regression.component.pug',
})
export class WhatIsRegressionComponent extends Slide {

  problemTableOfContentLabel = ProblemTableOfContentLabel

}
