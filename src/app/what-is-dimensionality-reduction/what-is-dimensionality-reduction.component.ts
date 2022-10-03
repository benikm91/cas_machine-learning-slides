import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {
  PCATableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'what-is-dimensionality-reduction',
  styleUrls: ['./what-is-dimensionality-reduction.component.scss'],
  templateUrl: './what-is-dimensionality-reduction.component.pug',
})
export class WhatIsDimensionalityReductionComponent extends Slide {

  conceptLabels = ConceptTableOfContentLabel

}
