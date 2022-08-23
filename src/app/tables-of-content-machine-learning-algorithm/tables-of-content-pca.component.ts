import {Component, Input, OnInit} from '@angular/core';
import {
  TableOfContentEntry
} from "../tables-of-content/table-of-content-data";
import {
  createPCATableOfContent,
  PCATableOfContentLabel
} from "./table-of-content-linear-regression-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'tables-of-content-pca',
  styleUrls: ['./tables-of-content-machine-learning-algorithm.component.scss'],
  templateUrl: './tables-of-content-machine-learning-algorithm.component.pug',
})
export class TablesOfContentPCAComponent extends Slide implements OnInit {

  root: TableOfContentEntry<PCATableOfContentLabel> | null = null;

  @Input() active: PCATableOfContentLabel | null = null;

  override ngOnInit(): void {
    super.ngOnInit();
    this.root = createPCATableOfContent(this.active);
  }

}
