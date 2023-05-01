import {Component, Input, OnInit} from '@angular/core';
import {
  TableOfContentEntry
} from "../tables-of-content/table-of-content-data";
import {
  createAutoEncoderTableOfContent,
  AutoEncoderTableOfContentLabel
} from "./table-of-content-linear-regression-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'tables-of-content-auto-encoder',
  styleUrls: ['./tables-of-content-machine-learning-algorithm.component.scss'],
  templateUrl: './tables-of-content-machine-learning-algorithm.component.pug',
})
export class TablesOfContentAutoEncoderComponent extends Slide implements OnInit {

  root: TableOfContentEntry<AutoEncoderTableOfContentLabel> | null = null;

  @Input() active: AutoEncoderTableOfContentLabel | null = null;

  override ngOnInit(): void {
    super.ngOnInit();
    this.root = createAutoEncoderTableOfContent(this.active);
  }

}
