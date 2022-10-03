import {Component, Input} from '@angular/core';

@Component({
  selector: 'binary-classification-metric-example',
  styleUrls: ['./binary-classification-metric-example.component.scss'],
  templateUrl: './binary-classification-metric-example.component.pug',
})
export class BinaryClassificationMetricExampleComponent {

  @Input() tp: number = 5;
  @Input() fp: number = 5;
  @Input() tn: number = 5;
  @Input() fn: number = 5;

  toInt = parseInt
  round = Math.round

}
