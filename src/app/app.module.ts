import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WhatIsMachineLearningComponent } from './what-is-machine-learning/what-is-machine-learning.component';
import {RevealPresentationComponent} from "./reveal-presentation/reveal-presentation.component";
import {MlPresentationComponent} from "./ml-presentation/ml-presentation.component";
import {KnowledgeViewComponent} from "./knowledge-view/knowledge-view.component";
import {TablesOfContentConceptsComponent} from "./tables-of-content/tables-of-content-concepts.component";
import {TableOfContentNode} from "./tables-of-content/tables-of-content-node.component";
import {QuestionSlideComponent} from "./question-slide/question-slide.component";
import {RemoveWrapperDirective} from "./remove-wrapper.directive";
import {StairSlideComponent} from "./stair-slide/stair-slide.component";
import {WhatIsRegressionComponent} from "./what-is-regression/what-is-regression.component";
import {LinearRegressionComponent} from "./linear-regression/linear-regression.component";
import {WhatIsSupervisedLearningComponent} from "./what-is-supervised-learning/what-is-supervised-learning.component";
import {
  SupervisedModelVisualizationComponent
} from "./supervised-model-visualization/supervised-model-visualization.component";
import {WhatIsClassificationComponent} from "./what-is-classification/what-is-classification.component";
import {SlideWithHeaderComponent} from "./slide-with-header/slide-with-header.component";
import {SpaceTermExplanationComponents} from "./space-term-explanation/space-term-explanation.component";
import {RouterModule} from "@angular/router";
import {FragmentTriggerComponent} from "./fragment-trigger/fragment-trigger.component";
import {
  OfflineLearningVisualizationComponent
} from "./offline-learning-visualization/offline-learning-visualization.component";
import {ModelVisualizationComponent} from "./model-visualization/model-visualization.component";
import {
  ExampleModelVisualizationTicTacToeComponent
} from "./example-model-visualization-tic-tac-toe/example-model-visualization-tic-tac-toe.component";
import {
  ExampleModelVisualizationChessComponent
} from "./example-model-visualization-chess/example-model-visualization-chess.component";
import {ExampleModelVisualizationComponent} from "./example-model-visualization/example-model-visualization.component";
import { MathjaxModule } from 'mathjax-angular';
import {SideBySide3Component} from "./side-by-side-3/side-by-side-3.component";
import {TitlePageComponent} from "./title-page/title-page.component";
import {
  TablesOfContentMachineLearningAlgorithmComponent
} from "./tables-of-content-machine-learning-algorithm/tables-of-content-machine-learning-algorithm.component";
import {WhatIsEncodingComponent} from "./what-is-encoding/what-is-encoding.component";
import {
  SpaceTermExplanationFsOsComponents
} from "./space-term-explanation-fs-os/space-term-explanation-fs-os.component";
import {Model3VisualizationComponent} from "./model-3-visualization/model-3-visualization.component";
import {WhatIsFeatureEngineeringComponent} from "./what-is-feature-engineering/what-is-feature-engineering.component";
import {ModelComplexityComponent} from "./model-complexity/model-complexity.component";
import {LogisticRegressionComponent} from "./logistic-regression/logistic-regression.component";
import {
  TablesOfContentLogisticRegressionComponent
} from "./tables-of-content-machine-learning-algorithm/tables-of-content-logistic-regression.component";
import {PcaComponent} from "./pca/pca.component";
import {SupportVectorMachineComponent} from "./support-vector-machine/support-vector-machine.component";
import {
  TablesOfContentSupportVectorMachineComponent
} from "./tables-of-content-machine-learning-algorithm/tables-of-content-support-vector-machine.component";
import {KNearestNeighboursComponent} from "./k-nearest-neighbours/k-nearest-neighbours.component";
import {
  TablesOfContentPCAComponent
} from "./tables-of-content-machine-learning-algorithm/tables-of-content-pca.component";
import {WhatIsKernelTrickComponent} from "./what-is-kernel-trick/what-is-kernel-trick.component";
import {TablesOfContentProblemsComponent} from "./tables-of-content/tables-of-content-problems.component";
import {TablesOfContentLinkComponent} from "./tables-of-content/tables-of-content-link.component";
import {WhatIsStandardizationComponent} from "./what-is-standardization/what-is-standardization.component";
import {
  WhatIsDimensionalityReductionComponent
} from "./what-is-dimensionality-reduction/what-is-dimensionality-reduction.component";
import {
  BinaryClassificationMetricExampleComponent
} from "./binary-classification-metric-example/binary-classification-metric-example.component";
import {FormsModule} from "@angular/forms";
import {OverfittingUnderfittingExampleComponent} from "./overfitting-underfitting-example/overfitting-underfitting-example.component";
import {
  WhatIsOverfittingUnderfittingComponent
} from "./what-is-overfitting-underfitting/what-is-overfitting-underfitting.component";
import {WhatIsCrossValidationComponent} from "./what-is-cross-validation/what-is-cross-validation.component";
import {WhatIsRegularizationComponent} from "./what-is-regularization/what-is-regularization.component";
import {CartComponent} from "./cart/cart.component";
import {
  TablesOfContentCartComponent
} from "./tables-of-content-machine-learning-algorithm/tables-of-content-cart.component";
import {
  TablesOfContentKNNComponent
} from "./tables-of-content-machine-learning-algorithm/tables-of-content-knn.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {Softmax3ExampleComponent} from "./softmax-3-example/softmax-3-example.component";
import {PolynomialRegressionComponent} from "./polynomial-regression/polynomial-regression.component";
import {DataSciencePitfallsComponent} from "./data-science-pitfalls/data-science-pitfalls.component";
import {FeedForwardNeuralNetworkComponent} from "./feed-forward-neural-network/feed-forward-neural-network.component";
import {
  TablesOfContentFNNComponent
} from "./tables-of-content-machine-learning-algorithm/tables-of-content-fnn.component";
import {WhatIsClusteringComponent} from "./what-is-clustering/what-is-clustering.component";
import {KMeansComponent} from "./k-means/k-means.component";
import {
  TablesOfContentKMeansComponent
} from "./tables-of-content-machine-learning-algorithm/tables-of-content-kmeans.component";
import {ModelComplexitySlideComponent} from "./model-complexity-slide/model-complexity-slide.component";
import {
  DataSpecificationElementNumericalFeatureStandardizeComponent
} from "./data-specification-elements/data-specification-element-numerical-feature-standardize.component";
import {
  DataSpecificationElementCategoricalFeatureEncodedComponent
} from "./data-specification-elements/data-specification-element-categorical-feature-encoded.component";
import {WhatIsFeatureSelectionComponent} from "./what-is-feature-selection/what-is-feature-selection.component";
import {Day1TitleSlideComponent} from "./day-title-slide/day1-title-slide.component";
import {Day2TitleSlideComponent} from "./day-title-slide/day2-title-slide.component";
import {Day3TitleSlideComponent} from "./day-title-slide/day3-title-slide.component";
import {WhatAreHyperParametersComponent} from "./what-are-hyper-parameters/what-are-hyper-parameters.component";
import {
  DataSciencePitfallsInconsistentPreprocessingComponent
} from "./data-science-pitfalls/inconsistent-preprocessing/data-science-pitfalls-inconsistent-preprocessing.component";
import {
  DataSciencePitfallsDataLeakageComponent
} from "./data-science-pitfalls/data-leakage/data-science-pitfalls-data-leakage.component";
import {
  DataSciencePitfallsGarbageInGarbageOutComponent
} from "./data-science-pitfalls/garbage-in-garbage-out/data-science-pitfalls-garbage-in-garbage-out.component";
import {
  DataSciencePitfallsEnoughDataComponent
} from "./data-science-pitfalls/enough-data/data-science-pitfalls-enough-data.component";
import {
  DataSciencePitfallsMetricChoiceComponent
} from "./data-science-pitfalls/metric-choice/data-science-pitfalls-metric-choice.component";
import {
  DataSciencePitfallsTackleAProblemComponent
} from "./data-science-pitfalls/tackle-a-problem/data-science-pitfalls-tackle-a-problem.component";
import {
  DataSciencePitfallsCorrectResultInterpretationComponent
} from "./data-science-pitfalls/correct-result-interpretation/data-science-pitfalls-correct-result-interpretation.component";
import {
  DataSciencePitfallsModelDevelopmentComponent
} from "./data-science-pitfalls/model-development/data-science-pitfalls-model-development.component";
import {
  DataSciencePitfallsModelChoiceComponent
} from "./data-science-pitfalls/model-choice/data-science-pitfalls-model-choice.component";
import {NonNegativeMatrixFactorizationComponent} from "./nmf/nmf.component";
import {
  TablesOfContentNMFComponent
} from "./tables-of-content-machine-learning-algorithm/tables-of-content-nmf.component";
import {Day4TitleSlideComponent} from "./day-title-slide/day4-title-slide.component";

@NgModule({
  declarations: [
    Day1TitleSlideComponent, Day2TitleSlideComponent, Day3TitleSlideComponent, Day4TitleSlideComponent,
    WhatIsMachineLearningComponent, RevealPresentationComponent, MlPresentationComponent, KnowledgeViewComponent,
    TablesOfContentConceptsComponent, TablesOfContentProblemsComponent, TableOfContentNode,
    QuestionSlideComponent, RemoveWrapperDirective,
    StairSlideComponent, WhatIsRegressionComponent, LinearRegressionComponent,
    SpaceTermExplanationComponents, SpaceTermExplanationFsOsComponents, SlideWithHeaderComponent,
    WhatIsSupervisedLearningComponent, SupervisedModelVisualizationComponent, WhatIsClassificationComponent,
    FragmentTriggerComponent, OfflineLearningVisualizationComponent, ModelVisualizationComponent, Model3VisualizationComponent,
    ExampleModelVisualizationTicTacToeComponent, ExampleModelVisualizationChessComponent, ExampleModelVisualizationComponent,
    SideBySide3Component, TitlePageComponent, TablesOfContentMachineLearningAlgorithmComponent, WhatIsEncodingComponent,
    WhatIsFeatureEngineeringComponent, ModelComplexitySlideComponent, ModelComplexityComponent, LogisticRegressionComponent, TablesOfContentLogisticRegressionComponent,
    PcaComponent, SupportVectorMachineComponent, TablesOfContentSupportVectorMachineComponent, KNearestNeighboursComponent, TablesOfContentPCAComponent,
    WhatIsKernelTrickComponent, TablesOfContentLinkComponent, WhatIsStandardizationComponent, WhatIsDimensionalityReductionComponent, BinaryClassificationMetricExampleComponent,
    OverfittingUnderfittingExampleComponent, WhatIsOverfittingUnderfittingComponent, WhatIsCrossValidationComponent, WhatIsRegularizationComponent,
    CartComponent, TablesOfContentCartComponent, TablesOfContentKNNComponent, AboutMeComponent, Softmax3ExampleComponent, PolynomialRegressionComponent,
    DataSciencePitfallsComponent, FeedForwardNeuralNetworkComponent, TablesOfContentFNNComponent, WhatIsClusteringComponent, TablesOfContentKMeansComponent, KMeansComponent,
    DataSpecificationElementNumericalFeatureStandardizeComponent, DataSpecificationElementCategoricalFeatureEncodedComponent, WhatIsFeatureSelectionComponent,
    WhatAreHyperParametersComponent, DataSciencePitfallsInconsistentPreprocessingComponent, DataSciencePitfallsDataLeakageComponent, DataSciencePitfallsGarbageInGarbageOutComponent,
    DataSciencePitfallsEnoughDataComponent, DataSciencePitfallsTackleAProblemComponent, DataSciencePitfallsMetricChoiceComponent, DataSciencePitfallsCorrectResultInterpretationComponent,
    DataSciencePitfallsModelDevelopmentComponent, DataSciencePitfallsModelChoiceComponent, NonNegativeMatrixFactorizationComponent, TablesOfContentNMFComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    MathjaxModule.forRoot()
  ],
  providers: [],
  bootstrap: [ MlPresentationComponent ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
