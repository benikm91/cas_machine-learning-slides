import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import l2Regularization from './regularization/l2-regularization.xml';
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'what-are-hyper-parameters',
  styleUrls: ['./what-are-hyper-parameters.component.scss'],
  templateUrl: './what-are-hyper-parameters.component.pug',
})
export class WhatAreHyperParametersComponent extends Slide {

  conceptLabels = ConceptTableOfContentLabel
  l2Regularization = l2Regularization

}
