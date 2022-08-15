import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import anime from "animejs";
import {moveTargetsTo} from "../anime/util";

@Component({
  selector: 'model-3-visualization',
  styleUrls: ['./model-3-visualization.component.scss'],
  templateUrl: './model-3-visualization.component.pug',
})
export class Model3VisualizationComponent implements AfterViewInit {

  @ViewChild("input") public input: ElementRef | null = null;
  @ViewChild("pre") public pre: ElementRef | null = null;
  @ViewChild("feature") public feature: ElementRef | null = null;
  @ViewChild("model") public model: ElementRef | null = null;
  @ViewChild("output") public output: ElementRef | null = null;

  @Input("with-trigger") public withTrigger: boolean = true;

  @Input("input-header") public inputHeader: string | null = null;
  @Input("feature-header") public featureHeader: string | null = null;
  @Input("output-header") public outputHeader: string | null = null;

  inputContent: string = "";
  animation: anime.AnimeInstance[] = [];

  ngAfterViewInit() {
    function makeBig(elementRef: ElementRef) {
      return {
        targets: elementRef.nativeElement,
        scale: 1.2,
        easing: 'easeInOutExpo',
        // direction: 'alternate', // does not work?
        duration: 500,
      }
    }
    function makeSmall(elementRef: ElementRef) {
      return {
        targets: elementRef.nativeElement,
        scale: 1.0,
        easing: 'easeInOutExpo',
        duration: 500,
      }
    }
    const self = this;
    this.inputContent = this.input!!.nativeElement.innerHTML;
    const featureContent = this.feature!!.nativeElement.innerHTML;
    const outputContent = this.output!!.nativeElement.innerHTML;
    this.animation.push(anime
        .timeline({
          loop: true,
          autoplay: false,
          easing: 'easeInOutExpo',
          duration: 1000,
        })
        .add({
          ...moveTargetsTo(this.input!!.nativeElement, this.pre!!.nativeElement),
          scale: 0.5,
          startDelay: 1000,
        })
        .add(makeBig(this.pre!!))
        .add({
          ...makeSmall(this.pre!!),
          update: function(anim) {
            self.input!!.nativeElement.innerHTML = (anim.progress <= 50) ? self.inputContent : featureContent;
          }
        })
        .add({
          ...moveTargetsTo(this.input!!.nativeElement, this.feature!!.nativeElement),
          scale: 1.0,
          endDelay: 1000,
        })
      .add({
        ...moveTargetsTo(this.input!!.nativeElement, this.model!!.nativeElement),
        scale: 0.5,
        startDelay: 1000,
      })
      .add(makeBig(this.model!!))
      .add({
        ...makeSmall(this.model!!),
        update: function(anim) {
          // Gets called with anim.progress = 0 on loop reset by anim.js, do nothing here so prev. update resets inputContent correctly.
          if (anim.progress > 0) {
            self.input!!.nativeElement.innerHTML = (anim.progress <= 50) ? featureContent : outputContent;
          }
        },
      })
      .add({
        ...moveTargetsTo(this.input!!.nativeElement, this.output!!.nativeElement),
        scale: 1.0,
        endDelay: 1000,
      })
    );
  }

  public start() {
    this.feature!!.nativeElement.style.visibility='hidden';
    this.output!!.nativeElement.style.visibility='hidden';
    this.animation.forEach(a => a.play())
  }

  public end() {
    this.feature!!.nativeElement.style.visibility='visible';
    this.output!!.nativeElement.style.visibility='visible';
    this.input!!.nativeElement.innerHTML = this.inputContent;
    this.animation.forEach(a => a.restart())
    this.animation.forEach(a => a.pause())
  }

}

