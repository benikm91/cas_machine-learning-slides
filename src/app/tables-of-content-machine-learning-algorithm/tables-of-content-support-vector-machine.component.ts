import {Component, Input, OnInit} from '@angular/core';
import {
  TableOfContentEntry
} from "../tables-of-content/table-of-content-data";
import {
  createSupportVectorMachineTableOfContent,
  SupportVectorMachineTableOfContentLabel
} from "./table-of-content-linear-regression-data";
import {Slide} from "../slide/slide";

@Component({
  selector: 'tables-of-content-support-vector-machine',
  styleUrls: ['./tables-of-content-machine-learning-algorithm.component.scss'],
  templateUrl: './tables-of-content-machine-learning-algorithm.component.pug',
})
export class TablesOfContentSupportVectorMachineComponent extends Slide implements OnInit {

  root: TableOfContentEntry<SupportVectorMachineTableOfContentLabel> | null = null;

  @Input() active: SupportVectorMachineTableOfContentLabel | null = null;

  override ngOnInit(): void {
    super.ngOnInit();
    this.root = createSupportVectorMachineTableOfContent(this.active);
  }

}
