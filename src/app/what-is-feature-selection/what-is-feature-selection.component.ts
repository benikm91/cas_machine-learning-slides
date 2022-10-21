import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'what-is-feature-selection',
  styleUrls: ['./what-is-feature-selection.component.scss'],
  templateUrl: './what-is-feature-selection.component.pug',
})
export class WhatIsFeatureSelectionComponent extends Slide {

  inputs = '<math display="block"><msub class="label"><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub class="label"><mi>x</mi><mn>2</mn></msub></math>'
  features = '<math display="block"><msub class="label"><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub class="label"><mi>x</mi><mn>7</mn></msub></math>'
  outputs = '<math display="block"><mi>y</mi></math>'

  methodLabels = ConceptTableOfContentLabel

  override ngOnInit() {
    super.ngOnInit()
    this.inputs = '<math display="block">'
    let i
    for (i = 1; i < 9; i++) {
      this.inputs += '<mrow><msub class="label"><mi>x</mi><mn>'+i+'</mn></msub><mo>,</mo></mrow>'
    }
    this.inputs += '<msub class="label"><mi>x</mi><mn>'+i+'</mn></msub>'
    this.inputs += '</math>'
  }

}
