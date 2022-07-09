import { Component, Input, OnInit } from '@angular/core';
import { GameCard } from '../models/game-card';

@Component({
  selector: 'app-tunnel-card',
  template: `
    <mat-card>
      <mat-card-content>
        <div class="grid gap-4 place-items-center grid-cols-3 grid-rows-3 h-max w-max">
          <div></div>
          <div><span *ngIf="card.canConnectLeft">👆</span></div>
          <div></div>
          <div><span *ngIf="card.canConnectBack">👈</span></div>
          <div></div>
          <div><span *ngIf="card.canConnectFront">👉</span></div>
          <div></div>
          <div><span *ngIf="card.canConnectRight">👇</span></div>
          <div></div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class TunnelCardComponent implements OnInit {
  @Input() card!: GameCard;

  constructor() {}

  ngOnInit(): void {}
}
