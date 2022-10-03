import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {
  LogisticRegressionTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";

import sigmoid from './model/sigmoid.xml'
import softmax from './model/softmax.xml'
import logisticRegression1D from './model/logistic-regression-1d.xml'
import logisticRegression2D from './model/logistic-regression-2d.xml'
import logisticRegression3D from './model/logistic-regression-3d.xml'
import logisticRegressionND from './model/logistic-regression-nd.xml'
import logisticRegressionNDVector from './model/logistic-regression-nd-vector.xml'
import metricAccuracy from './metric/accuracy.xml'
import metricAccuracyBinary from './metric/accuracy-binary.xml'
import metricF1Binary from './metric/f1-binary.xml'
import metricRecallBinary from './metric/recall-binary.xml'
import metricPrecisionBinary from './metric/precision-binary.xml'
import metricLikelihood from './metric/likelihood.xml'
import metricNegativeLogLikelihood from './metric/negative-log-likelihood.xml'
import metricNegativeLogLikelihoodNegate from './metric/negative-log-likelihood-negate.xml'
import metricNegativeLogLikelihoodLog from './metric/negative-log-likelihood-log.xml'
import logisticRegressionLikelihood from './model/logistic-regression-liklihood.xml'
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";
import modeModel from "./model/mode-model.xml";

@Component({
  selector: 'logistic-regression',
  styleUrls: ['./logistic-regression.component.scss'],
  templateUrl: './logistic-regression.component.pug',
})
export class LogisticRegressionComponent extends Slide {

  conceptLabels = ConceptTableOfContentLabel

  modeModel = modeModel

  logisticRegressionLabel = LogisticRegressionTableOfContentLabel
  sigmoid = sigmoid
  softmax = softmax
  logisticRegression1D = logisticRegression1D
  logisticRegression2D = logisticRegression2D
  logisticRegression3D = logisticRegression3D
  logisticRegressionND = logisticRegressionND
  logisticRegressionNDVector = logisticRegressionNDVector
  logisticRegressionLikelihood = logisticRegressionLikelihood

  metricAccuracy = metricAccuracy
  metricAccuracyBinary = metricAccuracyBinary

  metricF1Binary = metricF1Binary
  metricRecallBinary = metricRecallBinary
  metricPrecisionBinary = metricPrecisionBinary

  metricLikelihood = metricLikelihood
  metricNegativeLogLikelihood = metricNegativeLogLikelihood
  metricNegativeLogLikelihoodNegate = metricNegativeLogLikelihoodNegate
  metricNegativeLogLikelihoodLog = metricNegativeLogLikelihoodLog

}
