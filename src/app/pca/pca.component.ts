import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {
  PCATableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";

@Component({
  selector: 'pca',
  styleUrls: ['./pca.component.scss'],
  templateUrl: './pca.component.pug',
})
export class PcaComponent extends Slide {

  pcaLabel = PCATableOfContentLabel

}
