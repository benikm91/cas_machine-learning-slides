import {Component, Input, OnInit} from '@angular/core';
import {
  TableOfContentEntry
} from "../tables-of-content/table-of-content-data";
import {
  createLinearRegressionTableOfContent,
  LinearRegressionTableOfContentLabel
} from "./table-of-content-linear-regression-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'tables-of-content-machine-learning-algorithm',
  styleUrls: ['./tables-of-content-machine-learning-algorithm.component.scss'],
  templateUrl: './tables-of-content-machine-learning-algorithm.component.pug',
})
export class TablesOfContentMachineLearningAlgorithmComponent extends Slide implements OnInit {

  root: TableOfContentEntry<LinearRegressionTableOfContentLabel> | null = null;

  @Input() active: LinearRegressionTableOfContentLabel | null = null;

  override ngOnInit(): void {
    super.ngOnInit();
    this.root = createLinearRegressionTableOfContent(this.active);
  }

}
