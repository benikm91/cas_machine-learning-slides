import {Component, Directive, ElementRef, EventEmitter, OnInit, Output, ViewChild} from "@angular/core";
import Reveal from "./reveal";

@Directive({
  selector: '[fragment-trigger]',
})
export class FragmentTriggerComponent implements OnInit {

  constructor(private triggerElementRef: ElementRef) { }

  private triggered: boolean = false;

  @Output() trigger = new EventEmitter();
  @Output() untrigger = new EventEmitter();

  private fireTrigger(): void {
    this.triggered = true;
    this.trigger.emit();
  }

  private fireUntrigger(): void {
    this.triggered = false;
    this.untrigger.emit();
  }

  ngOnInit(): void {
    Reveal.on('fragmentshown', (event: any) => {
      if (this.triggerElementRef?.nativeElement.classList.contains('visible') && !this.triggered) {
        this.fireTrigger();
      }
    } );
    Reveal.on('fragmenthidden', (event: any) => {
      if (!this.triggerElementRef?.nativeElement.classList.contains('visible') && this.triggered) {
        this.fireUntrigger();
      }
    } );
  }


}
