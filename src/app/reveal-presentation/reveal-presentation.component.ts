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
      // Several slides show more than one element in the same fragment step. Reveal then
      // computes a wrong fragment number for the URL, and with history: true that wrong URL
      // makes it jump back and forth between two slides. So the URL only names the slide.
      fragmentInURL: false,
      // showNotes: 'separate-page',
      pdfSeparateFragments: false,
      plugins: [ RevealSearch ],
      history: true,
    });
  }
}
