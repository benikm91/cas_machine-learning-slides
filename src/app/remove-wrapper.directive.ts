import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[remove-wrapper]'
})
export class RemoveWrapperDirective implements AfterViewInit {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit(): void {

        // access the DOM. get the element to unwrap
        const el = this.elRef.nativeElement;
        const parent = this.renderer.parentNode(this.elRef.nativeElement);

        // move all children out of the element
        while (el.firstChild) { // this line doesn't work with server-rendering
            this.renderer.appendChild(parent, el.firstChild);
        }

        // remove the empty element from parent
        this.renderer.removeChild(parent, el);
    }
}
