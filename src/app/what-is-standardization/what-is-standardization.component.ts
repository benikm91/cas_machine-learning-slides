import {Component} from '@angular/core';
import {AlgorithmTableOfContentLabel, ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'what-is-standardization',
  styleUrls: ['./what-is-standardization.component.scss'],
  templateUrl: './what-is-standardization.component.pug',
})
export class WhatIsStandardizationComponent extends Slide {

  conceptLabel = ConceptTableOfContentLabel
  algorithmLabel = AlgorithmTableOfContentLabel

}
