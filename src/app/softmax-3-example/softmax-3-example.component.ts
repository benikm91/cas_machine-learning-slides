import {Component, Input} from '@angular/core';

@Component({
  selector: 'softmax-3-example',
  styleUrls: ['./softmax-3-example.component.scss'],
  templateUrl: './softmax-3-example.component.pug',
})
export class Softmax3ExampleComponent {

  @Input() i1: number = 5;
  @Input() i2: number = 5;
  @Input() i3: number = 5;

  softmax(input: number) {
    return Math.round(Math.exp(input) / (Math.exp(this.i1)+ Math.exp(this.i2)+ Math.exp(this.i3)) * 10000) / 100
  }

}
