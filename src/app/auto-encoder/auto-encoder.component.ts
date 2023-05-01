import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import costFunction from './cost-function/cost-function.xml';
import {
  AutoEncoderTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'auto-encoder',
  styleUrls: ['./auto-encoder.component.scss'],
  templateUrl: './auto-encoder.component.pug',
})
export class AutoEncoderComponent extends Slide {

  dimensionalityReductionLabel = ConceptTableOfContentLabel.DIMENSIONALITY_REDUCTION

  autoEncoderLabel = AutoEncoderTableOfContentLabel

  costFunction = costFunction

}
