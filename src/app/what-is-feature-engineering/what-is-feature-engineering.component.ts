import {Component} from '@angular/core';
import {Slide} from "../slide/slide";

@Component({
  selector: 'what-is-feature-engineering',
  styleUrls: ['./what-is-feature-engineering.component.scss'],
  templateUrl: './what-is-feature-engineering.component.pug',
})
export class WhatIsFeatureEngineeringComponent extends Slide {

  inputs = '<math display="block"><mi>x</mi></math>'
  features = '<math display="block"><mi>x</mi><mo>,</mo><msup class="label"><mi>x</mi><mn>2</mn></msup></math>'
  outputs = '<math display="block"><mi>y</mi></math>'

}
