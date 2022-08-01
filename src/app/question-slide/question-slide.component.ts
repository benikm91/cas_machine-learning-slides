import {
  Component, Input,
} from '@angular/core';
import {Slide} from "../slide/slide";

@Component({
  selector: 'question-slide',
  styleUrls: ['./question-slide.component.scss'],
  templateUrl: './question-slide.component.pug',
})
export class QuestionSlideComponent extends Slide {

  @Input('questions') questions: Question[] = [];

}

export class Question {

  constructor(readonly question: string, readonly answer: string) { }


}