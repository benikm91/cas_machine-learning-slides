import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {
  PCATableOfContentLabel
} from "../tables-of-content-machine-learning-algorithm/table-of-content-linear-regression-data";
import encoder from './model/encoder.xml';
import encoderWithDim from './model/encoder_with_dim.xml';
import decoder from './model/decoder.xml';
import decoderWithDim from './model/decoder_with_dim.xml';
import encoderWithDecoder from './model/encoder_with_decoder.xml';
import costFunction from './cost-function/cost-function.xml';
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'pca',
  styleUrls: ['./pca.component.scss'],
  templateUrl: './pca.component.pug',
})
export class PcaComponent extends Slide {

  pcaLabel = PCATableOfContentLabel
  conceptLabel = ConceptTableOfContentLabel

  encoder = encoder
  encoderWithDim = encoderWithDim
  decoder = decoder
  decoderWithDim = decoderWithDim
  encoderWithDecoder = encoderWithDecoder
  costFunction = costFunction

}
