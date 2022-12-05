import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import model from './model/model.xml';
import modelWithDimensions from './model/modelWithDimensions.xml';
import costFunction from './cost-function/cost-function.xml';
import coordinateDescent from './optimization/coordinate-descent.xml';
import {
  NMFTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'nmf',
  styleUrls: ['./nmf.component.scss'],
  templateUrl: './nmf.component.pug',
})
export class NonNegativeMatrixFactorizationComponent extends Slide {

  model = model
  modelWithDimensions = modelWithDimensions
  costFunction = costFunction
  coordinateDescent = coordinateDescent

  features: Array<string> = ['pixel_1', 'pixel_2', 'pixel_3', 'pixel_4', 'pixel_5', 'pixel_6']
  dataPoints: Array<string> = ['image_1', 'image_2', 'image_3', 'image_4', 'image_5', 'image_6', 'image_7', 'image_8']

  nmfLabel = NMFTableOfContentLabel
  conceptLabel = ConceptTableOfContentLabel

}
