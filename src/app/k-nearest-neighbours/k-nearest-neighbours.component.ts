import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {
  KNNTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";

@Component({
  selector: 'k-nearest-neighbours',
  styleUrls: ['./k-nearest-neighbours.component.scss'],
  templateUrl: './k-nearest-neighbours.component.pug',
})
export class KNearestNeighboursComponent extends Slide {

  knn2D = "Lookup & average neighbors"

  knnLabels = KNNTableOfContentLabel

  // https://www.fromthegenesis.com/pros-and-cons-of-k-nearest-neighbors/
  // homogeneous features

}
