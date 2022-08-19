import {Component} from '@angular/core';
import {MethodTableOfContentLabel, ProblemTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {Question} from "../question-slide/question-slide.component";
import l1Regularization from './regularization/l1-regularization.xml';
import l2Regularization from './regularization/l2-regularization.xml';

@Component({
  selector: 'ml-presentation',
  styleUrls: ['./ml-presentation.component.scss'],
  templateUrl: './ml-presentation.component.pug',
})
export class MlPresentationComponent {

  problemLabels = ProblemTableOfContentLabel
  methodLabels = MethodTableOfContentLabel

  l1Regularization = l1Regularization
  l2Regularization = l2Regularization

  linearRegressionQuestions = [
    new Question('Was für Annahmen trifft die Lineare Regression?', '1. Output ist Gewichtete Summe von Features; 2. Mean Squared Error als Cost Function'),
    new Question('Was sind lernbare Parameter?', 'Die Parameter lernt das Modell (mittels Optimierung) aus den Daten, z.B. die Betas in der Linearen Regression.'),
    new Question('Wie kann ich die Lineare Regression optimieren?', 'Analytisch oder mit Gradient Descent'),
  ]

  logisticRegressionQuestions = [
    new Question('Was ist Ziel einer Klassifikation?', 'Klassen-Zugehörigkeit anhand von Features vorherzusagen.'),
    new Question('Was für Annahmen trifft die Logistic Regression?', 'Klassen sind mit einer linearen Decision Boundary gut trennbar.'),
    new Question('Was ist der Zusammenhang mit der Linearen Regression', 'Das Modell der Logistic Regression ist die Sigmoid Funktion mit den Modell der Linearen Regression darin.'),
  ]

}
