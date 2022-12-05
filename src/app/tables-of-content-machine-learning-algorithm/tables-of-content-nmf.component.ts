import {Component, Input, OnInit} from '@angular/core';
import {
  TableOfContentEntry
} from "../tables-of-content/table-of-content-data";
import {
  createNMFTableOfContent,
  NMFTableOfContentLabel
} from "./table-of-content-linear-regression-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'tables-of-content-nmf',
  styleUrls: ['./tables-of-content-machine-learning-algorithm.component.scss'],
  templateUrl: './tables-of-content-machine-learning-algorithm.component.pug',
})
export class TablesOfContentNMFComponent extends Slide implements OnInit {

  root: TableOfContentEntry<NMFTableOfContentLabel> | null = null;

  @Input() active: NMFTableOfContentLabel | null = null;

  override ngOnInit(): void {
    super.ngOnInit();
    this.root = createNMFTableOfContent(this.active);
  }

}
