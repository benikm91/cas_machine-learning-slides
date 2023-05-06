import {Component} from '@angular/core';
import {Slide} from "../slide/slide";
import {ConceptTableOfContentLabel} from "../tables-of-content/table-of-content-data";

@Component({
  selector: 'word-2-vec',
  styleUrls: ['./word-2-vec.component.scss'],
  templateUrl: './word-2-vec.component.pug',
})
export class Word2VecComponent extends Slide {

  encodingLabel = ConceptTableOfContentLabel.ENCODING

}
