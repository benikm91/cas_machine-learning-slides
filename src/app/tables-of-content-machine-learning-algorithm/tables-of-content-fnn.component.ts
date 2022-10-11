import {Component, Input, OnInit} from '@angular/core';
import {
  TableOfContentEntry
} from "../tables-of-content/table-of-content-data";
import {
  createFNNTableOfContent,
  FNNTableOfContentLabel
} from "./table-of-content-linear-regression-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'tables-of-content-fnn',
  styleUrls: ['./tables-of-content-machine-learning-algorithm.component.scss'],
  templateUrl: './tables-of-content-machine-learning-algorithm.component.pug',
})
export class TablesOfContentFNNComponent extends Slide implements OnInit {

  root: TableOfContentEntry<FNNTableOfContentLabel> | null = null;

  @Input() active: FNNTableOfContentLabel | null = null;

  override ngOnInit(): void {
    super.ngOnInit();
    this.root = createFNNTableOfContent(this.active);
  }

}
