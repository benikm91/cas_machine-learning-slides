import {Component} from '@angular/core';
import {Slide} from "../slide/slide";

@Component({
  selector: 'k-nearest-neighbours',
  styleUrls: ['./k-nearest-neighbours.component.scss'],
  templateUrl: './k-nearest-neighbours.component.pug',
})
export class KNearestNeighboursComponent extends Slide {

  knn2D = "Lookup & average neighbors"

  // https://www.fromthegenesis.com/pros-and-cons-of-k-nearest-neighbors/
  // homogeneous features

}
