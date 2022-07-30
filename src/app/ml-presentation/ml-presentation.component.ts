import {Component} from '@angular/core';
import {MethodTableOfContentLabel, ProblemTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'ml-presentation',
  styleUrls: ['./ml-presentation.component.scss'],
  templateUrl: './ml-presentation.component.pug',
})
export class MlPresentationComponent {

  problemLabels = ProblemTableOfContentLabel
  methodLabels = MethodTableOfContentLabel

}
