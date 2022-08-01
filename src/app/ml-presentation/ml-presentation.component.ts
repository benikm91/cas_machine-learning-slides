import {Component} from '@angular/core';
import {MethodTableOfContentLabel, ProblemTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {Question} from "../question-slide/question-slide.component";

@Component({
  selector: 'ml-presentation',
  styleUrls: ['./ml-presentation.component.scss'],
  templateUrl: './ml-presentation.component.pug',
})
export class MlPresentationComponent {

  problemLabels = ProblemTableOfContentLabel
  methodLabels = MethodTableOfContentLabel

  linearRegressionQuestions = [
    new Question('What is 5+5?', '5+5 is 10'),
    new Question('What is 5-5?', '5-5 is 0'),
  ]

}
