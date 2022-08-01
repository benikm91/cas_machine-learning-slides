import {
  Component,
} from '@angular/core';
import {Slide} from "../slide/slide";

@Component({
  selector: 'question-slide',
  styleUrls: ['./question-slide.component.scss'],
  templateUrl: './question-slide.component.pug',
})
export class QuestionSlideComponent extends Slide {

  questions = [{
    question: 'What is 5+5?',
    answer: '5+5 is 10.',
  }, {
    question: 'What is 5-5?',
    answer: '5-5 is 0.',
  }]
}
