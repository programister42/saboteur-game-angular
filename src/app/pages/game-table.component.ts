import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-table',
  template: `
    <app-game-board class="flex-1" appDragToScroll></app-game-board>
    <app-in-hand-cards appDragToScroll></app-in-hand-cards>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background-color: #000;
        background-image: url('assets/background.jpg');
        background-position: center;
        background-size: cover;
      }
    `,
  ],
})
export class GameTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
