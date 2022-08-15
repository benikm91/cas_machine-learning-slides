import {AfterViewInit, Component, ElementRef, Input, ViewChild, ViewContainerRef} from '@angular/core';
import anime from "animejs";
import {ModelVisualizationComponent} from "../model-visualization/model-visualization.component";
import _ from "underscore";

@Component({
  selector: 'example-model-visualization-chess',
  styleUrls: ['./example-model-visualization-chess.component.scss'],
  templateUrl: './example-model-visualization-chess.component.pug',
})
export class ExampleModelVisualizationChessComponent implements AfterViewInit {

  @ViewChild(ModelVisualizationComponent, { read: ElementRef }) model: ElementRef | null = null;

  @Input("model-label") modelLabel = "f";
  @Input("positives") positive = ['input', 'output'];

  readonly successColor = '#2e7d32';
  readonly errorColor = '#c62828';

  animation: anime.AnimeInstance[] = [];

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngAfterViewInit() {

  }

  public highlightStart() {
    const self = this;
    this.animation.push(anime.timeline({})
      .add({
        targets: this.model?.nativeElement.querySelectorAll(".input, .model, .output"),
        borderColor: function(el: any) {
          return _.intersection(el.classList, self.positive).length > 0 ? self.successColor : self.errorColor;
        },
        borderWidth: 10,
        loop: false,
        autoplay: false,
        easing: 'easeInOutExpo',
        duration: 1000,
      })
    );
    this.animation.forEach(a => a.play());
  }

  public highlightEnd() {
    this.animation.forEach(a => a.restart());
    this.animation.forEach(a => a.pause());
  }
}
