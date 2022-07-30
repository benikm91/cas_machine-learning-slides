import {Component, Input, OnInit} from '@angular/core';
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
export class TablesOfContentComponent implements OnInit {
  problemRootNode: TableOfContentEntry<ProblemTableOfContentLabel> | null = null;
  methodRootNode: TableOfContentEntry<MethodTableOfContentLabel> | null = null;

  @Input() activeProblem: ProblemTableOfContentLabel | null = null;
  @Input() activeMethod: MethodTableOfContentLabel | null = null;

  ngOnInit(): void {
    this.problemRootNode = createProblemTableOfContent(this.activeProblem);
    this.methodRootNode = createMethodTableOfContent(this.activeMethod);
  }

}
