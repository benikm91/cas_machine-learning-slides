import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WimlComponent } from './what-is-machine-learning/wiml.component';
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

@NgModule({
  declarations: [
    WimlComponent, RevealPresentationComponent, MlPresentationComponent, KnowledgeViewComponent,
    TablesOfContentComponent, TableOfContentNode,
    QuestionSlideComponent, RemoveWrapperDirective,
    StairSlideComponent, WhatIsRegressionComponent, LinearRegressionComponent,
    SpaceTermExplanationComponents, SlideWithHeaderComponent,
    WhatIsSupervisedLearningComponent, SupervisedModelVisualizationComponent, WhatIsClassificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ MlPresentationComponent ]
})
export class AppModule { }
