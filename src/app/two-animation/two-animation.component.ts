import {
  AfterViewInit,
  Component, ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import Two from "two.js";
import {TwoAnimation} from "./two.animation";
import {TwoAnimationStep} from "./two-animation.step";

@Component({
  template: ''
})
export abstract class TwoAnimationComponent implements AfterViewInit {

  abstract readonly options: {
    fullscreen?: boolean,
    fitted?: boolean,
    autostart?: boolean,
    width?: number,
    height?: number,
    type?: string,
    domElement?: HTMLElement,
    overdraw?: boolean,
    smoothing?: boolean
  };

  @ViewChild('animationContainer') protected animationContainer: ElementRef | undefined;

  private two: Two | null = null;
  private animation: TwoAnimation | null = null;

  ngAfterViewInit(): void {
    this.two = new Two(this.options).appendTo(this.animationContainer?.nativeElement);
    this.animation = this.initAnimation(this.two);
  }

  protected abstract initAnimation(two: Two): TwoAnimation;

  public startAnimation() {
    if (this.two != null) {
      this.two.frameCount = 0;
      this.animation?.resetAnimation()
      this.two.bind('update', this.animation?.animate.bind(this.animation))
    }
  }

  public stopAnimation() {
    if (this.two != null) {
      this.animation?.resetAnimation()
      this.animation?.animate(0) // reset to start frame
      this.two.unbind('update') // unbind
    }
  }


}
