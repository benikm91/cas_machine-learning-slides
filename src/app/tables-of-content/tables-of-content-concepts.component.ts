import {Component, Input, OnInit} from '@angular/core';
import { Slide } from '../slide/slide';
import {
  createProblemTableOfContent,
  TableOfContentEntry,
  ProblemTableOfContentLabel, createMethodTableOfContent, MethodTableOfContentLabel,
} from "./table-of-content-data";

@Component({
  selector: 'tables-of-content',
  styleUrls: ['./tables-of-content.component.scss'],
  templateUrl: './tables-of-content.component.pug',
})
export class TablesOfContentComponent extends Slide implements OnInit {
  methodRootNode: TableOfContentEntry<MethodTableOfContentLabel> | null = null;

  @Input() activeMethod: MethodTableOfContentLabel | null = null;
  @Input("depth") depth: number = 2
  @Input("depth-after-active") depthAfterActive: number = 0

  problemLabels = ProblemTableOfContentLabel;

  override ngOnInit(): void {
    super.ngOnInit()
    this.methodRootNode = createMethodTableOfContent(this.activeMethod);
  }

}
