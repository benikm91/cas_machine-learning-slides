import {Component, Input, OnInit} from '@angular/core';
import { Slide } from '../slide/slide';
import {
  TableOfContentEntry,
  createProblemTableOfContent, ProblemTableOfContentLabel, ConceptTableOfContentLabel, createMethodTableOfContent,
} from "./table-of-content-data";

@Component({
  selector: 'tables-of-content-link',
  styleUrls: ['./tables-of-content.component.scss', 'tables-of-content-node.component.scss'],
  templateUrl: './tables-of-content-link.component.pug',
})
export class TablesOfContentLinkComponent extends Slide {

  @Input() active: ConceptTableOfContentLabel | null = null;

}
