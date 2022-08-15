import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import anime from "animejs";
import {ModelVisualizationComponent} from "../model-visualization/model-visualization.component";

@Component({
  selector: 'example-model-visualization-tic-tac-toe',
  styleUrls: ['./example-model-visualization-tic-tac-toe.component.scss'],
  templateUrl: './example-model-visualization-tic-tac-toe.component.pug',
})
export class ExampleModelVisualizationTicTacToeComponent implements AfterViewInit {

  @ViewChild(ModelVisualizationComponent, { read: ElementRef }) model: ElementRef | null = null;

  readonly successColor = '#2e7d32';
  readonly errorColor = '#c62828';

  animation: anime.AnimeInstance[] = [];

  ngAfterViewInit() {

  }

  public highlightStart() {
    this.animation.push(anime({
        targets: this.model?.nativeElement.querySelectorAll(".input, .model, .output"),
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

  public highlightEnd() {
    this.animation.forEach(a => a.restart());
    this.animation.forEach(a => a.pause());
  }
}
