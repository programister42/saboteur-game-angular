import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CardType, GameCard, InHandGameCard } from '../models/game-card';
import { GameEngineService } from '../services/game-engine.service';

@Component({
  selector: 'app-in-hand-cards',
  template: `

    <div
      [ngClass]="[
        'w-max',
        'mx-auto',
        'p-6',
        'flex',
        'justify-center',
        'items-center',
        'gap-2'
      ]"
    >
    <div [ngClass]="['flex', 'p-4', 'justify-center', 'items-center', 'sticky', 'left-0', 'z-50']">
      <button mat-fab (click)="rotateHand()">
        <mat-icon>rotate_left</mat-icon>
      </button>
    </div>
      <app-tunnel-card
        *ngFor="let card of cards | async"
        [card]="card"
        (click)="playCard(card)"
        [isActive]="card.isActive"
      ></app-tunnel-card>
    </div>
  `,
  styles: [
    `
      :host {
        @apply backdrop-blur-3xl;
        @apply rounded-t;
        @apply border-t;
        @apply border-neutral-800;
        @apply flex;
      }
    `,
  ],
})
export class InHandCardsComponent implements OnInit {
  cards!: Observable<InHandGameCard[]>;

  activeCard!: InHandGameCard;

  constructor(private gameEngine: GameEngineService) {}

  ngOnInit(): void {
    this.cards = this.gameEngine.inHandCards.pipe();
  }

  playCard(card: InHandGameCard): void {
    this.gameEngine.playCard(card);
  }

  rotateHand(): void {
    this.gameEngine.rotateHand();
  }
}
