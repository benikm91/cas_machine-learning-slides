import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import anime from "animejs";
import {moveTargetsTo} from "../anime/util";

@Component({
  selector: 'model-visualization',
  styleUrls: ['./model-visualization.component.scss'],
  templateUrl: './model-visualization.component.pug',
})
export class ModelVisualizationComponent implements AfterViewInit {

  @ViewChild("input") public input: ElementRef | null = null;
  @ViewChild("model") public model: ElementRef | null = null;
  @ViewChild("output") public output: ElementRef | null = null;

  @Input("with-trigger") public withTrigger: boolean = true;

  @Input("input-header") public inputHeader: string | null = null;
  @Input("output-header") public outputHeader: string | null = null;

  inputContent: string = "";
  animation: anime.AnimeInstance[] = [];

  ngAfterViewInit() {
    const self = this;
    this.inputContent = this.input!!.nativeElement.innerHTML;
    const outputContent = this.output!!.nativeElement.innerHTML;
    this.animation.push(anime
        .timeline({
          loop: true,
          autoplay: false,
          easing: 'easeInOutExpo',
          duration: 1000,
        })
        .add({
          ...moveTargetsTo(this.input!!.nativeElement, this.model!!.nativeElement),
          scale: 0.5,
          startDelay: 1000,
        })
        .add({
          targets: this.model!!.nativeElement,
          scale: 1.2,
          easing: 'easeInOutExpo',
          // direction: 'alternate', // does not work?
          duration: 500,
        })
        .add({
          targets: this.model!!.nativeElement,
          scale: 1.0,
          easing: 'easeInOutExpo',
          duration: 500,
          update: function(anim) {
            self.input!!.nativeElement.innerHTML = (anim.progress <= 50) ? self.inputContent : outputContent;
          }
        })
        .add({
          ...moveTargetsTo(this.input!!.nativeElement, this.output!!.nativeElement),
          scale: 1.0,
          endDelay: 1000,
        })
    );
  }

  public start() {
    this.output!!.nativeElement.style.visibility='hidden';
    this.animation.forEach(a => a.play())
  }

  public end() {
    this.output!!.nativeElement.style.visibility='visible';
    this.input!!.nativeElement.innerHTML = this.inputContent;
    this.animation.forEach(a => a.restart())
    this.animation.forEach(a => a.pause())
  }

}

