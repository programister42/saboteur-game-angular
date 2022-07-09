import { Component, OnInit } from '@angular/core';
import { CardType, GameCard } from '../models/game-card';

@Component({
  selector: 'app-in-hand-cards',
  template: `
    <div
      [ngClass]="[
        'p-6',
        'flex',
        'justify-center',
        'gap-2',
        'w-max',
        'overflow-auto'
      ]"
    >
      <app-tunnel-card
        *ngFor="let card of cards"
        [card]="card"
      ></app-tunnel-card>
    </div>
  `,
  styles: [
    `
      :host {
        @apply backdrop-blur;
        @apply backdrop-brightness-200;
        @apply rounded-t;
        @apply border-t;
        @apply border-neutral-800;
      }
    `,
  ],
})
export class InHandCardsComponent implements OnInit {
  cards: GameCard[] = [
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
    new GameCard(0, 0, CardType.INTERSECTION),
  ];

  constructor() {}

  ngOnInit(): void {}
}
