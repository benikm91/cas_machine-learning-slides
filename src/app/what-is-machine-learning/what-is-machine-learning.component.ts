import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import anime from "animejs";

@Component({
  selector: 'what-is-machine-learning',
  styleUrls: ['./what-is-machine-learning.component.scss'],
  templateUrl: './what-is-machine-learning.component.pug',
})
export class WhatIsMachineLearningComponent implements OnInit, AfterViewInit {

  @ViewChild('slides', { static: true }) template: any;
  @ViewChild('ticTacToeInput') ticTacToeInput: any;
  @ViewChild('ticTacToeModel') ticTacToeModel: any;
  @ViewChild('ticTacToeOutput') ticTacToeOutput: any;

  readonly successColor = '#2e7d32';
  readonly errorColor = '#c62828';

  animation: anime.AnimeInstance[] = [];

  constructor(
      private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

  ngAfterViewInit() {

  }

  public ticTacToeHighlightStart() {
    this.animation.push(anime({
        targets: [ '#ticTacToeInput', '#ticTacToeOutput', '#ticTacToeModel' ],
        // background: this.successColor,
        borderColor: `${this.successColor}`,
        borderWidth: 5,
        loop: false,
        autoplay: false,
        easing: 'easeInOutExpo',
        duration: 1000,
      })
    );
    this.animation.forEach(a => a.play());
  }

  public ticTacToeHighlightEnd() {
    this.animation.forEach(a => a.restart());
    this.animation.forEach(a => a.pause());
  }

}
