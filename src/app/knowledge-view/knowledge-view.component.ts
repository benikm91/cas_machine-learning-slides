import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import anime from 'animejs'

@Component({
  selector: 'knowledge-view',
  styleUrls: ['./knowledge-view.component.scss'],
  templateUrl: './knowledge-view.component.pug',
})
export class KnowledgeViewComponent implements AfterViewInit {

  @ViewChild("data") data: ElementRef | null = null;
  @ViewChild("human") human: ElementRef | null = null;
  @ViewChild("model") model: ElementRef | null = null;

  @Input("showHeader") showHeader: boolean = true;

  @Input("tradeoff") tradeoff: number = 0.5;

  animation: anime.AnimeInstance | null = null;

  distanceBetween(x: any, y: any) {
    function toNumber(pixels: string) {
      if (pixels == "") return 0;
      return Number(pixels.replace(/px$/, ''));
    }
    const deltaTop = toNumber(getComputedStyle(y).top) - toNumber(getComputedStyle(x).top);
    const deltaLeft = toNumber(getComputedStyle(y).left) - toNumber(getComputedStyle(x).left);
    return [ deltaLeft, deltaTop ];

  }

  ngAfterViewInit() {
    const self = this;

    function moveToModel(targets: any) {
      return {
        targets: targets,
        translateX: function(el: any) {
          return self.distanceBetween(el, self.model!!.nativeElement)[0];
        },
        translateY: function(el: any) {
          return self.distanceBetween(el, self.model!!.nativeElement)[1];
        },
        delay: 1000,
        duration: 1000,
        // scale: 0.25,
        opacity: 0.0,
      }
    }

    const humanScale = this.tradeoff / Math.max(this.tradeoff, 1 - this.tradeoff);
    const dataScale = (1 - this.tradeoff) / Math.max(this.tradeoff, 1 - this.tradeoff);

    this.human!!.nativeElement.style.transform = `scale(${humanScale})`;
    this.data!!.nativeElement.style.transform = `scale(${dataScale})`;

    const animationFields = {
      // background: "linear-gradient(rgba(88,82,187,1) 0%, rgba(0,212,255,1) 100%)",
      background: '#ffc046',
      borderRadius: "0px",
      // scale: humanScale + dataScale,
      borderColor: '#ff8f00',
    }

    this.animation = anime.timeline({
      loop: true,
      autoplay: false,
      easing: 'linear',
      duration: 750,
    })
      .add(moveToModel(this.human!!.nativeElement))
      .add({
        targets: this.model!!.nativeElement,
        ...animationFields,
        easing: function(el, i, total) {
          return function(t) {
            // only animate till tradeoff
            return (i + t) / total * self.tradeoff;
          }
        }
      })
      .add(moveToModel(this.data!!.nativeElement))
      .add({
        targets: this.model!!.nativeElement,
        ...animationFields,
        endDelay: 1000,
      });
  }

  public start() {
    console.log("START")
    this.animation!!.play();
  }

  public end() {
    this.animation!!.restart()
    this.animation!!.pause();
  }

}
