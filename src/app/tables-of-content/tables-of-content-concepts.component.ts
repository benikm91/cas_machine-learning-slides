import {Component, Input, OnInit} from '@angular/core';
import { Slide } from '../slide/slide';
import {
  createProblemTableOfContent,
  TableOfContentEntry,
  ProblemTableOfContentLabel, createMethodTableOfContent, ConceptTableOfContentLabel,
} from "./table-of-content-data";

@Component({
  selector: 'tables-of-content-concepts',
  styleUrls: ['./tables-of-content.component.scss'],
  templateUrl: './tables-of-content.component.pug',
})
export class TablesOfContentConceptsComponent extends Slide implements OnInit {
  methodRootNode: TableOfContentEntry<ConceptTableOfContentLabel> | null = null;

  @Input() title: string = 'Table(s) of Content';
  @Input() active: ConceptTableOfContentLabel | null = null;
  @Input("depth") depth: number = 0
  @Input("depth-after-active") depthAfterActive: number = 0
  @Input('show-siblings') showSiblingsOfActualActive: boolean = true;

  override ngOnInit(): void {
    super.ngOnInit()
    this.methodRootNode = createMethodTableOfContent(this.active);
  }

}
