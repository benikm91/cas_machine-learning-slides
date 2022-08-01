import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  template: ''
})
export abstract class Slide implements OnInit {

  @ViewChild('slides', { static: true }) template: any;

  constructor(
      private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

}
