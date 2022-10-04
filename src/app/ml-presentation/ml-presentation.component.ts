import {Component} from '@angular/core';
import {ConceptTableOfContentLabel, ProblemTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {Question} from "../question-slide/question-slide.component";

@Component({
  selector: 'ml-presentation',
  styleUrls: ['./ml-presentation.component.scss'],
  templateUrl: './ml-presentation.component.pug',
})
export class MlPresentationComponent {

  problemLabels = ProblemTableOfContentLabel
  methodLabels = ConceptTableOfContentLabel

  linearRegressionQuestions = [
    new Question('Was für Annahmen trifft die Lineare Regression?', '1. Output ist Gewichtete Summe von Features; 2. Mean Squared Error als Cost Function'),
    new Question('Was sind lernbare Parameter?', 'Die Parameter lernt das Modell (mittels Optimierung) aus den Daten, z.B. die Betas in der Linearen Regression.'),
    new Question('Wie kann ich die Lineare Regression optimieren?', 'Analytisch oder mit Gradient Descent'),
  ]

  encodingQuestions = [
    new Question('Was ist Ordinal-Encoding?', 'Für alle Werte erstellen wir ein Numerisches-Feature und zählen hoch.'),
    new Question('Was ist One-Hot-Encoding?', 'Für jeden Wert erstellen wir jeweils ein Boolean-Feature ala "is this Wert?".'),
    new Question('Wann One-Hot-Encoding vs. Ordinal-Encoding?', 'Ordinal Encoding nimmt einen Zusammenhang der Encoding-Reihenfolge an, da aufsteigende Zahlen einen Zusammenhang haben.'),
  ]

  featureEngineeringQuestions = [
    new Question('Was ist Feature Engineering', 'Aus gesammelten Features neue Features kreieren. Kreativer Prozess, meist mit viel Fachwissen der Domäne.'),
    new Question('Wozu Feature Engineering', 'Mechanismus um dem Modell mit weiteren Annahmen zu helfen. Beispielsweise die Kombination dieser beiden Features könnte helfen...'),
  ]

  modelComplexityQuestions = [
    new Question('Was ist Underfitting?', 'Wir treffen zu starke Annahmen. Verschenktes Potenzial mit den verfügbaren Daten. Beim Lernen wird zu wenig auf die Daten "gefittet"'),
    new Question('Was ist Overfitting?', 'Wir treffen zu wenig Annahmen. Beim Lernen wird zu stark auf die Daten "gefittet"'),
    new Question('Wie können wir Overfitting feststellen?', 'Evaluation auf Train-Data und ungesehenen Daten (e.g. Validation-Data) vergleichen. Bei Grossem Unterschied besteht allenfalls Overfitting.'),
  ]

  regularizationAndStandardizationQuestions = [
    new Question('Was ist Regularisierung?', '(Weitere) Annahmen über lernbare Parameter treffen.'),
    new Question('Wozu Regularisierung?', 'Modell einschränken. Hilft gegen Overfitting.'),
    new Question('Was ist Standardisieren?', 'Für jeded Feature: Minus Durchschnitt, Durch Standardabweichung'),
    new Question('Wozu Standardisieren?', 'Daten um Nullpunkt. Messungs-Einheit entfernen.'),
  ]

  logisticRegressionQuestions = [
    new Question('Was ist Ziel einer Klassifikation?', 'Klassen-Zugehörigkeit anhand von Features vorherzusagen.'),
    new Question('Was für Annahmen trifft die Logistic Regression?', 'Klassen sind mit einer linearen Decision Boundary gut trennbar.'),
    new Question('Was ist der Zusammenhang mit der Linearen Regression', 'Das Modell der Logistic Regression ist die Sigmoid Funktion mit den Modell der Linearen Regression darin.'),
  ]

  supportVectorMachineQuestions = [
    new Question('Was ist der Unterschied von der Logistischen Regression zur Support Vector Machine?', 'Hard-Margin vs. Wahrscheinlichkeit / Sigmoid vs. Heavyside Step / ...'),
    new Question('Was ist der Zusammenhang der SVM zur Linearen Regression?', 'Das Modell der SVM nutzt einfach das Vorzeichen des Linearen Modells.')
  ]

  pcaQuestions = [
    new Question('Was ist Dimensions Reduktion?', 'Lernen der Struktur eines Datensatzes um die Anzahl der Features zu reduzieren meist mit neuen Features.'),
    new Question('Was ist PCA?', 'Eine lineare Dimensionsreduktion. Es werden die wichtigsten Hauptkomponenten selektiert.'),
  ]

}
