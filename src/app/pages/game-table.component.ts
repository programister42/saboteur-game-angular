import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-table',
  template: `
    <app-players-list></app-players-list>
    <app-game-board></app-game-board>
  `,
})
export class GameTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
