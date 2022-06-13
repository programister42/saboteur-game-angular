import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDragToScroll]',
})
export class DragToScrollDirective {
  pos = { top: 0, left: 0, x: 0, y: 0 };
  canMove = false;

  constructor(private element: ElementRef, renderer2: Renderer2) {
    this.element.nativeElement.style.overflow = 'auto';
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.element.nativeElement.style.cursor = 'grabbing';

    this.canMove = true;

    this.pos = {
      // The current scroll
      left: this.element.nativeElement.scrollLeft,
      top: this.element.nativeElement.scrollTop,
      // Get the current mouse position
      x: event.clientX,
      y: event.clientY,
    };
  }

  @HostListener('mouseup', ['$event']) onMouseUp(event: MouseEvent) {
    event.preventDefault();
    this.element.nativeElement.style.cursor = 'grab';
    this.canMove = false;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (!this.canMove) return;
    event.preventDefault();
    this.element.nativeElement.scrollTo(
      this.pos.left - (event.clientX - this.pos.x),
      this.pos.top - (event.clientY - this.pos.y)
    );
  }
}
