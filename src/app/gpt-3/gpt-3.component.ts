import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {LogisticRegressionTableOfContentLabel} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";

@Component({
  selector: 'gpt-3',
  styleUrls: ['./gpt-3.component.scss'],
  templateUrl: './gpt-3.component.pug',
})
export class Gpt3Component extends Slide {

  crossValidationHref = ConceptTableOfContentLabel.CROSS_VALIDATION.href;
  logisticRegressionHref = LogisticRegressionTableOfContentLabel.MODEL.href;

}
