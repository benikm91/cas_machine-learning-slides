import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {
  KMeansTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";
import intuitiveForm from './cost-function/intuitive-form.xml';
import costFunction from './cost-function/cost-function.xml';

@Component({
  selector: 'k-means',
  styleUrls: ['./k-means.component.scss'],
  templateUrl: './k-means.component.pug',
})
export class KMeansComponent extends Slide {

  kmeansLabel = KMeansTableOfContentLabel
  costFunction = costFunction
  intuitiveForm = intuitiveForm

}
