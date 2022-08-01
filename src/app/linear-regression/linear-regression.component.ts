import {Component} from '@angular/core';
import linearRegressionEquation from './linear-regression.tex';
import linearRegressionEquationModel from './linear-regression-model.tex';
import linearRegressionEquationModelWithNames from './linear-regression-model-with-names.tex';
import {Slide} from "../slide/slide";
import {MethodTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'linear-regression',
  styleUrls: ['./linear-regression.component.scss'],
  templateUrl: './linear-regression.component.pug',
})
export class LinearRegressionComponent extends Slide {

  methodTableOfContentLabel = MethodTableOfContentLabel

  linearEquation = linearRegressionEquation
  linearEquationModel = linearRegressionEquationModel
  linearEquationModelWithNames = linearRegressionEquationModelWithNames

}
