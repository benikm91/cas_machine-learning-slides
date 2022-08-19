import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WhatIsMachineLearningComponent } from './what-is-machine-learning/what-is-machine-learning.component';
import {RevealPresentationComponent} from "./reveal-presentation/reveal-presentation.component";
import {MlPresentationComponent} from "./ml-presentation/ml-presentation.component";
import {KnowledgeViewComponent} from "./knowledge-view/knowledge-view.component";
import {TablesOfContentComponent} from "./tables-of-content/tables-of-content.component";
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

@NgModule({
  declarations: [
    WhatIsMachineLearningComponent, RevealPresentationComponent, MlPresentationComponent, KnowledgeViewComponent,
    TablesOfContentComponent, TableOfContentNode,
    QuestionSlideComponent, RemoveWrapperDirective,
    StairSlideComponent, WhatIsRegressionComponent, LinearRegressionComponent,
    SpaceTermExplanationComponents, SpaceTermExplanationFsOsComponents, SlideWithHeaderComponent,
    WhatIsSupervisedLearningComponent, SupervisedModelVisualizationComponent, WhatIsClassificationComponent,
    FragmentTriggerComponent, OfflineLearningVisualizationComponent, ModelVisualizationComponent, Model3VisualizationComponent,
    ExampleModelVisualizationTicTacToeComponent, ExampleModelVisualizationChessComponent, ExampleModelVisualizationComponent,
    SideBySide3Component, TitlePageComponent, TablesOfContentMachineLearningAlgorithmComponent, WhatIsEncodingComponent,
    WhatIsFeatureEngineeringComponent, ModelComplexityComponent, LogisticRegressionComponent, TablesOfContentLogisticRegressionComponent,
    PcaComponent, SupportVectorMachineComponent, TablesOfContentSupportVectorMachineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MathjaxModule.forRoot()
  ],
  providers: [],
  bootstrap: [ MlPresentationComponent ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
