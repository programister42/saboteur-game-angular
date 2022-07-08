import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-table',
  template: `
    <div
      class="w-full h-full overflow-auto"
      #container
      (mousedown)="onMouseDown($event, container)"
      (mouseup)="onMouseUp($event, container)"
      (mousemove)="onMouseMove($event, container)"
    >
      <!-- <app-players-list></app-players-list> -->
      <app-game-board></app-game-board>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class GameTableComponent implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  pos = { top: 0, left: 0, x: 0, y: 0 };
  canMove = false;

  onMouseDown(event: MouseEvent, container: HTMLElement) {
    event.preventDefault();
    container.style.cursor = 'grabbing';

    this.canMove = true;

    this.pos = {
      // The current scroll
      left: container.scrollLeft,
      top: container.scrollTop,
      // Get the current mouse position
      x: event.clientX,
      y: event.clientY,
    };
  }

  onMouseUp(event: MouseEvent, container: HTMLElement) {
    event.preventDefault();
    container.style.cursor = 'grab';
    this.canMove = false;
  }

  onMouseMove(event: MouseEvent, container: HTMLElement) {
    if (!this.canMove) return;
    event.preventDefault();

    // How far the mouse has been moved
    const dx = event.clientX - this.pos.x;
    const dy = event.clientY - this.pos.y;

    // Scroll the element
    container.scrollTop = this.pos.top - dy;
    container.scrollLeft = this.pos.left - dx;
  }
}
