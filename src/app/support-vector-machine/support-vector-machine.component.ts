import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import svmModel2D from './model/support-vector-machine-2d.xml'
import svmModelND from './model/support-vector-machine-nd.xml'
import svmProblem from './optimiztation/problem.xml'
import {
  SupportVectorMachineTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";

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

}
