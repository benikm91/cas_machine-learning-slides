import {AfterContentInit, Component} from '@angular/core';
import Reveal from "./reveal";
import RevealSearch from "./reveal-search";
import RevealMenu from "./reveal-menu";

@Component({
  selector: 'reveal-presentation',
  styleUrls: ['./reveal-presentation.component.scss'],
  templateUrl: './reveal-presentation.component.pug',
})
export class RevealPresentationComponent implements AfterContentInit {
  ngAfterContentInit() {
    Reveal.initialize({
      slideNumber: 'c/t',
      hash: true,
      // showNotes: 'separate-page',
      pdfSeparateFragments: false,
      plugins: [ RevealSearch ],
    });
  }
}
