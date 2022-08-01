import {Component, Input} from '@angular/core';
import {Slide} from "../slide/slide";

@Component({
  selector: 'slide-with-header',
  styleUrls: ['./slide-with-header.component.scss'],
  templateUrl: './slide-with-header.component.pug',
})
export class SlideWithHeaderComponent extends Slide {

  @Input() header: string | null = null;

  @Input() extra: boolean = false;

}
