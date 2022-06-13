import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  template: `
    <mat-toolbar>
      <span>Saboteur Game</span>
    </mat-toolbar>
  `,
  styles: [
  ]
})
export class AppBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
