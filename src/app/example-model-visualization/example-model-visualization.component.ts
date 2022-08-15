import {Component, ElementRef, Input, ViewChild, ViewContainerRef} from '@angular/core';
import anime from "animejs";
import _ from "underscore";
import {ModelVisualizationComponent} from "../model-visualization/model-visualization.component";

@Component({
  selector: 'example-model-visualization',
  styleUrls: ['./example-model-visualization.component.scss'],
  templateUrl: './example-model-visualization.component.pug',
})
export class ExampleModelVisualizationComponent {

  @ViewChild("input") public input: ElementRef | null = null;
  @ViewChild("model") public model: ElementRef | null = null;
  @ViewChild("output") public output: ElementRef | null = null;

  @ViewChild(ModelVisualizationComponent, { read: ElementRef }) modelWrapper: ElementRef | null = null;

  @Input("positives") positive = ['input', 'model', 'output'];

  readonly successColor = '#2e7d32';
  readonly errorColor = '#c62828';

  animation: anime.AnimeInstance[] = [];

  public highlightStart(): void {
    const self = this;
    this.animation.push(anime.timeline({})
      .add({
        targets: this.modelWrapper?.nativeElement.querySelectorAll(".input, .model, .output"),
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

  public highlightEnd(): void {
    this.animation.forEach(a => a.restart());
    this.animation.forEach(a => a.pause());
  }
}
