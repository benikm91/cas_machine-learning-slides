import {Component, Input, OnInit} from '@angular/core';
import {
  TableOfContentEntry
} from "../tables-of-content/table-of-content-data";
import {
  createCNNTableOfContent,
  CNNTableOfContentLabel
} from "./table-of-content-linear-regression-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'tables-of-content-cnn',
  styleUrls: ['./tables-of-content-machine-learning-algorithm.component.scss'],
  templateUrl: './tables-of-content-machine-learning-algorithm.component.pug',
})
export class TablesOfContentCNNComponent extends Slide implements OnInit {

  root: TableOfContentEntry<CNNTableOfContentLabel> | null = null;

  @Input() active: CNNTableOfContentLabel | null = null;

  override ngOnInit(): void {
    super.ngOnInit();
    this.root = createCNNTableOfContent(this.active);
  }

}
