import {AfterContentInit, Component} from '@angular/core';
import Reveal from "./reveal";
import RevealNotes from "./reveal-notes";
import RevealMath from "./reveal-math";

@Component({
  selector: 'reveal-presentation',
  styleUrls: ['./reveal-presentation.component.scss'],
  templateUrl: './reveal-presentation.component.pug',
})
export class RevealPresentationComponent implements AfterContentInit {
  ngAfterContentInit() {
    Reveal.initialize({
      // showNotes: 'separate-page',
      pdfSeparateFragments: false,
      katex: {
        trust: true
      },
      plugins: [ RevealNotes, RevealMath.KaTeX ]
    });
  }
}
