import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'what-is-machine-learning',
  styleUrls: ['./wiml.component.scss'],
  templateUrl: './wiml.component.pug',
})
export class WimlComponent implements OnInit {

  @ViewChild('slides', { static: true }) template: any;

  constructor(
      private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

}
