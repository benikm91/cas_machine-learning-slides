import {Component} from '@angular/core';
import linearRegression1DExample from './linear-model/linear-regression-1d-example.xml';
import linearRegressionGeneralize1DExample from './linear-model/linear-regression-generalize-1d-example.xml';
import linearRegression1DToNDExample from './linear-model/linear-regression-1d-to-nd.xml';
import linearRegressionAnalytic from './linear-model/linear-regression-analytic.xml';
import linearRegressionFull from './linear-model/linear-regression-full.xml';
import noiseNormalDistributed from './linear-model/noise-normal-distributed.xml';
import metricResiduals from './metric/residuals.xml';
import metricMeanSquaredError from './metric/mean-squared-error.xml';
import metricMeanSquaredErrorM from './metric/mean-squared-error-m.xml';
import metricMeanSquaredErrorS from './metric/mean-squared-error-s.xml';
import metricMeanSquaredErrorE from './metric/mean-squared-error-e.xml';
import metricMeanAbsoluteErrorM from './metric/mean-absolute-error-m.xml';
import metricMeanAbsoluteErrorA from './metric/mean-absolute-error-a.xml';
import metricMeanAbsoluteErrorE from './metric/mean-absolute-error-e.xml';
import metricMeanAbsoluteError from './metric/mean-absolute-error.xml';
import metricCostFunctionMSE from './metric/cost-function-mse.xml';
import metricCostFunctionMSE1D from './metric/cost-function-mse-1d.xml';
import metricCostFunctionDerivative from './metric/cost-function-derivative.xml';
import gradientDescentInit from './gradient-descent/gradient-descent-init.xml';
import gradientDescentUpdate from './gradient-descent/gradient-descent-update.xml';
import gradientDescentStop from './gradient-descent/gradient-descent-stop.xml';
import {Slide} from "../slide/slide";
import {MethodTableOfContentLabel, ProblemTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import {Question} from "../question-slide/question-slide.component";

@Component({
  selector: 'linear-regression',
  styleUrls: ['./linear-regression.component.scss'],
  templateUrl: './linear-regression.component.pug',
})
export class LinearRegressionComponent extends Slide {

  problemLabels = ProblemTableOfContentLabel
  methodLabels = MethodTableOfContentLabel

  linearRegression1DExample = linearRegression1DExample
  linearRegressionGeneralize1DExample = linearRegressionGeneralize1DExample
  linearRegression1DToNDExample = linearRegression1DToNDExample
  linearRegressionFull = linearRegressionFull
  linearRegressionAnalytic = linearRegressionAnalytic
  noiseNormalDistributed = noiseNormalDistributed
  metricResiduals = metricResiduals
  metricMeanSquaredError = metricMeanSquaredError
  metricMeanSquaredErrorM = metricMeanSquaredErrorM
  metricMeanSquaredErrorS = metricMeanSquaredErrorS
  metricMeanSquaredErrorE = metricMeanSquaredErrorE
  metricMeanAbsoluteError = metricMeanAbsoluteError
  metricMeanAbsoluteErrorM = metricMeanAbsoluteErrorM
  metricMeanAbsoluteErrorA = metricMeanAbsoluteErrorA
  metricMeanAbsoluteErrorE = metricMeanAbsoluteErrorE
  metricCostFunctionMSE = metricCostFunctionMSE
  metricCostFunctionMSE1D = metricCostFunctionMSE1D
  metricCostFunctionDerivative = metricCostFunctionDerivative

  gradientDescentInit = gradientDescentInit
  gradientDescentUpdate = gradientDescentUpdate
  gradientDescentStop = gradientDescentStop

  linearRegressionQuestions = [
    new Question('Was ist das lineare Modell?', 'Eine Gewichtete Summe der Features (plus beta_0).'),
    new Question('Ist das lineare Modell immer eine Gerade?', 'Das lineare Modell ist immer eine Hyperebene. Es ist also nur mit 1 Feature eine Gerade. Aber es kann keine Krümmung im Feature-Raum lernen.'),
  ]

}
