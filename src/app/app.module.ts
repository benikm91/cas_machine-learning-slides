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

@NgModule({
  declarations: [
    WimlComponent, RevealPresentationComponent, MlPresentationComponent, KnowledgeViewComponent,
    TablesOfContentComponent, TableOfContentNode,
    QuestionSlideComponent, RemoveWrapperDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ MlPresentationComponent ]
})
export class AppModule { }
