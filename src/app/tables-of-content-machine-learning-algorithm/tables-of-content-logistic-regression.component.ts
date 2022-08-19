import {Component, Input, OnInit} from '@angular/core';
import {
  TableOfContentEntry
} from "../tables-of-content/table-of-content-data";
import {
  createLogisticRegressionTableOfContent,
  LogisticRegressionTableOfContentLabel
} from "./table-of-content-linear-regression-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'tables-of-content-logistic-regression',
  styleUrls: ['./tables-of-content-machine-learning-algorithm.component.scss'],
  templateUrl: './tables-of-content-machine-learning-algorithm.component.pug',
})
export class TablesOfContentLogisticRegressionComponent extends Slide implements OnInit {

  root: TableOfContentEntry<LogisticRegressionTableOfContentLabel> | null = null;

  @Input() active: LogisticRegressionTableOfContentLabel | null = null;

  override ngOnInit(): void {
    super.ngOnInit();
    this.root = createLogisticRegressionTableOfContent(this.active);
  }

}
