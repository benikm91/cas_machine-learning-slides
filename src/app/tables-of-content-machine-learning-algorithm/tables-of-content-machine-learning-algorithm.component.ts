import {Component, Input, OnInit} from '@angular/core';
import {
  c,
  MethodTableOfContentLabel,
  TableOfContentEntry
} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'tables-of-content-machine-learning-algorithm',
  styleUrls: ['./tables-of-content-machine-learning-algorithm.component.scss'],
  templateUrl: './tables-of-content-machine-learning-algorithm.component.pug',
})
export class TablesOfContentMachineLearningAlgorithmComponent implements OnInit {

  root: TableOfContentEntry<string> | null = null;

  @Input() algorithmName: string = MethodTableOfContentLabel.ALGORITHMUS;
  @Input() active: string | null = null;

  ngOnInit(): void {
    this.root =
      c(this.algorithmName, this.active, [
        c(MethodTableOfContentLabel.MODEL, this.active, []),
        c(MethodTableOfContentLabel.COST_FUNCTION, this.active, [ ]),
        c(MethodTableOfContentLabel.OPTIMIERUNG, this.active, []),
        c(MethodTableOfContentLabel.DATA_SPECIFICATION, this.active, []),
      ]
    )
  }

}
