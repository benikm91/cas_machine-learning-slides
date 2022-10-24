import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import svmModel2D from './model/support-vector-machine-2d.xml'
import svmModelND from './model/support-vector-machine-nd.xml'
import svmProblem from './optimiztation/problem.xml'
import svmProblem1 from './optimiztation/problem-1.xml'
import svmProblem2 from './optimiztation/problem-2.xml'
import svmProblem3 from './optimiztation/problem-3.xml'
import svmProblem4 from './optimiztation/problem-4.xml'
import svmProblemSlack from './optimiztation/problem-slack.xml'
import svmCostFunction from './optimiztation/cost-function.xml'
import {
  SupportVectorMachineTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'support-vector-machine',
  styleUrls: ['./support-vector-machine.component.scss'],
  templateUrl: './support-vector-machine.component.pug',
})
export class SupportVectorMachineComponent extends Slide {

  supportVectorMachineLabel = SupportVectorMachineTableOfContentLabel

  svmModelND = svmModelND
  svmModel2D = svmModel2D
  svmProblem = svmProblem
  svmProblem1 = svmProblem1
  svmProblem2 = svmProblem2
  svmProblem3 = svmProblem3
  svmProblem4 = svmProblem4
  svmProblemSlack = svmProblemSlack

  svmCostFunction = svmCostFunction
  conceptLabels = ConceptTableOfContentLabel

}
