import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {
  FNNTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";
import linearRegression from './linear-model/linear-regression.xml';
import logisticRegression from './linear-model/logistic-regression.xml';
import logisticRegressionY1 from './linear-model/logistic-regression-y1.xml';
import logisticRegressionYo from './linear-model/logistic-regression-yo.xml';
import oneHiddenLayerZ1 from './one-hidden-layer/z1.xml';
import oneHiddenLayerZh from './one-hidden-layer/zh.xml';
import oneHiddenLayerOutput from './one-hidden-layer/output.xml';
import oneHiddenLayerWithActivationZ1 from './one-hidden-layer-with-activation/z1.xml';
import oneHiddenLayerWithActivationZh from './one-hidden-layer-with-activation/zh.xml';
import oneHiddenLayerWithActivationZ1Colored from './one-hidden-layer-with-activation/z1-colored.xml';
import oneHiddenLayerWithActivationZhColored from './one-hidden-layer-with-activation/zh-colored.xml';
import oneHiddenLayerWithActivationOutput from './one-hidden-layer-with-activation/output.xml';
import oneHiddenLayerWithActivationY1 from './one-hidden-layer-with-activation/y1.xml';
import oneHiddenLayerWithActivationYo from './one-hidden-layer-with-activation/yo.xml';
import backpropSetting from './back-prop/setting.xml';
import backpropSetting2 from './back-prop/setting2.xml';
import backpropSetting3 from './back-prop/setting3.xml';

@Component({
  selector: 'feed-forward-neural-network',
  styleUrls: ['./feed-forward-neural-network.component.scss'],
  templateUrl: './feed-forward-neural-network.component.pug',
})
export class FeedForwardNeuralNetworkComponent extends Slide {

  fnnLabels = FNNTableOfContentLabel
  linearRegression = linearRegression
  logisticRegression = logisticRegression
  logisticRegressionY1 = logisticRegressionY1
  logisticRegressionYo = logisticRegressionYo
  oneHiddenLayerZ1 = oneHiddenLayerZ1
  oneHiddenLayerZh = oneHiddenLayerZh
  oneHiddenLayerOutput = oneHiddenLayerOutput
  oneHiddenLayerWithActivationZ1 = oneHiddenLayerWithActivationZ1
  oneHiddenLayerWithActivationZh = oneHiddenLayerWithActivationZh
  oneHiddenLayerWithActivationZ1Colored = oneHiddenLayerWithActivationZ1Colored
  oneHiddenLayerWithActivationZhColored = oneHiddenLayerWithActivationZhColored
  oneHiddenLayerWithActivationOutput = oneHiddenLayerWithActivationOutput
  oneHiddenLayerWithActivationY1 = oneHiddenLayerWithActivationY1
  oneHiddenLayerWithActivationYo = oneHiddenLayerWithActivationYo

  backpropSetting = backpropSetting
  backpropSetting2 = backpropSetting2
  backpropSetting3 = backpropSetting3

}
