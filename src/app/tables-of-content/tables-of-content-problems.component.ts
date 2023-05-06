import {Component, Input, OnInit} from '@angular/core';
import { Slide } from '../slide/slide';
import {
  TableOfContentEntry,
  createProblemTableOfContent, ProblemTableOfContentLabel,
} from "./table-of-content-data";

@Component({
  selector: 'tables-of-content-problems',
  styleUrls: ['./tables-of-content.component.scss'],
  templateUrl: './tables-of-content.component.pug',
})
export class TablesOfContentProblemsComponent extends Slide implements OnInit {
  methodRootNode: TableOfContentEntry<ProblemTableOfContentLabel> | null = null;

  @Input() title: string = 'Table(s) of Content';
  @Input() active: ProblemTableOfContentLabel | null = null;
  @Input("depth") depth: number | null = null
  @Input("depth-after-active") depthAfterActive: number = 0
  @Input('show-siblings') showSiblingsOfActualActive: boolean = true;

  override ngOnInit(): void {
    super.ngOnInit()
    this.methodRootNode = createProblemTableOfContent(this.active);
  }

}
