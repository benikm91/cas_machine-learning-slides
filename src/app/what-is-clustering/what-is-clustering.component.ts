import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {ProblemTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'what-is-clustering',
  styleUrls: ['./what-is-clustering.component.scss'],
  templateUrl: './what-is-clustering.component.pug',
})
export class WhatIsClusteringComponent extends Slide {

  problemLabel = ProblemTableOfContentLabel

}
