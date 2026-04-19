import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {
  CNNTableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";

@Component({
  selector: 'convolutional-neural-network',
  styleUrls: ['./convolutional-neural-network.component.scss'],
  templateUrl: './convolutional-neural-network.component.pug',
})
export class ConvolutionalNeuralNetworkComponent extends Slide {

  cnnLabels = CNNTableOfContentLabel

  selectedPadding: 'valid' | 'same' = 'valid';
  selectedKernel: 3 | 5 | 7 = 3;
  selectedStride: 1 | 2 | 3 = 1;

  get currentGifPath(): string {
    return `assets/images/convolutional-neural-network/params/conv_${this.selectedPadding}_s${this.selectedStride}_k${this.selectedKernel}.gif`;
  }

}
