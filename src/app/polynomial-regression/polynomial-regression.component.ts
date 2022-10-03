import {Component} from '@angular/core';
import {Slide} from "../slide/slide";

@Component({
  selector: 'polynomial-regression',
  styleUrls: ['./polynomial-regression.component.scss'],
  templateUrl: './polynomial-regression.component.pug',
})
export class PolynomialRegressionComponent extends Slide {

  inputs = '<math display="block"><msub><mi>x</mi><mn>1</mn></msub>,<msub><mi>x</mi><mn>2</mn></msub></math>'
  features = '<math display="block"><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msup class="label"><msub><mi>x</mi><mn>1</mn></msub><mn>2</mn></msup><mo>,</mo><msup class="label"><msub><mi>x</mi><mn>2</mn></msub><mn>2</mn></msup><mo>,</mo><mrow><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow></math>'
  outputs = '<math display="block"><mi>y</mi></math>'

}
