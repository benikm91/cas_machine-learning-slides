import {
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'question-slide',
  styleUrls: ['./question-slide.component.scss'],
  templateUrl: './question-slide.component.pug',
})
export class QuestionSlideComponent implements OnInit {

  @ViewChild('slides', { static: true }) template: any;

  constructor(
      private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  questions = [{
    question: 'What is 5+5?',
    answer: '5+5 is 10.',
  }, {
    question: 'What is 5-5?',
    answer: '5-5 is 0.',
  }]
}
