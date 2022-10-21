import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import l1Regularization from './regularization/l1-regularization.xml';
import l2Regularization from './regularization/l2-regularization.xml';
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'what-is-regularization',
  styleUrls: ['./what-is-regularization.component.scss'],
  templateUrl: './what-is-regularization.component.pug',
})
export class WhatIsRegularizationComponent extends Slide {

  l1Regularization = l1Regularization
  l2Regularization = l2Regularization

  conceptLabels = ConceptTableOfContentLabel

}
