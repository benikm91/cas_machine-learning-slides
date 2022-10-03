import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import modeModel from './model/mode-model.xml'
import modelAverage from './model/average.xml'
import modelProbability from './model/probability.xml'
import modeModelWithoutOutput from './model/mode-model-without-output.xml'
import optimizationGiniImpurity from './optimization/gini-impurity.xml'
import optimizationCrossEntropyImpurity from './optimization/cross-entropy-impurity.xml'
import optimizationSumOfImpurities from './optimization/sum-of-impurities.xml'
import optimizationGreedySplit from './optimization/greedy.xml'
import optimizationGreedySplitRegions from './optimization/greedy-regions.xml'
import {
  CartTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";

@Component({
  selector: 'cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.pug',
})
export class CartComponent extends Slide {

  cartLabels = CartTableOfContentLabel
  modelProbability = modelProbability
  modeModel = modeModel
  modelAverage = modelAverage
  modeModelWithoutOutput = modeModelWithoutOutput

  optimizationGiniImpurity = optimizationGiniImpurity
  optimizationCrossEntropyImpurity = optimizationCrossEntropyImpurity
  optimizationSumOfImpurities = optimizationSumOfImpurities
  optimizationGreedySplit = optimizationGreedySplit
  optimizationGreedySplitRegions = optimizationGreedySplitRegions

  // https://mljar.com/blog/visualize-decision-tree/

}
