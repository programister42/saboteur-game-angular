import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { combineLatest, Observable, zip } from 'rxjs';
import { AddGameCardButton, CardType, GameCard } from '../models/game-card';
import { GameEngineService } from '../services/game-engine.service';

@Component({
  selector: 'app-game-board',
  template: `
    <div
      [ngClass]="[
        'w-max',
        'h-max',
        'min-h-full',
        'p-4',
        'grid',
        'gap-2',
        'justify-start',
        'content-center',
        'auto-rows-max',
        'auto-cols-max'
      ]"
      #gameBoard
    >
      <app-tunnel-card
        *ngFor="let card of cards"
        [card]="card"
        [style.grid-row]="card.row"
        [style.grid-column]="card.column"
      ></app-tunnel-card>

      <div
        *ngFor="let addButton of addCardButtons"
        [ngClass]="['flex', 'p-4', 'justify-center', 'items-center']"
        [style.grid-row]="addButton.row"
        [style.grid-column]="addButton.column"
      >
        <button mat-mini-fab (click)="playCard(addButton)">
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </div>
  `,
})
export class GameBoardComponent implements OnInit {
  @ViewChild('gameBoard') gameBoard!: ElementRef

  cards: GameCard[] = [new GameCard(0, 0, CardType.INTERSECTION)];
  addCardButtons: AddGameCardButton[] = [];
  activeCard!: GameCard;

  constructor(private gameEngine: GameEngineService,private renderer: Renderer2) {
  }

  ngOnInit(): void {
    combineLatest([this.gameEngine.activeCard, this.gameEngine.chosingCardState, this.gameEngine.inHandCards]).subscribe(
      ([activeCard, chosingCardState, inHandCards]) => {
        if (chosingCardState) {
          this.activeCard = activeCard;
          this.addButtons(activeCard);
        } else this.addCardButtons = [];
      }
    );
  }

  playCard(button: AddGameCardButton) {
    this.cards.push(new GameCard(button.x, button.y, this.activeCard.type, this.activeCard));
    this.gameEngine.finishCurrentMove();
  }

  addButtons(activeCard: GameCard) {
    this.addCardButtons = [];

    const addButton = (x: number, y: number) => {
      const cardForCheck = new GameCard(x, y, activeCard.type, activeCard);

      const front = this.findFront(cardForCheck);
      const back = this.findBack(cardForCheck);
      const left = this.findLeft(cardForCheck);
      const right = this.findRight(cardForCheck);

      if (
        (front && front.canConnectBack !== cardForCheck.canConnectFront) ||
        (back && back.canConnectFront !== cardForCheck.canConnectBack) ||
        (left && left.canConnectRight !== cardForCheck.canConnectLeft) ||
        (right && right.canConnectLeft !== cardForCheck.canConnectRight)
      ) return

      this.addCardButtons.push(new AddGameCardButton(x, y));
    };

    this.cards.forEach((card) => {
      if (card.canConnectFront && !this.findFront(card)) {
        addButton(card.x + 1, card.y);
      }
      if (card.canConnectBack && !this.findBack(card)) {
        addButton(card.x - 1, card.y);
      }
      if (card.canConnectLeft && !this.findLeft(card)) {
        addButton(card.x, card.y - 1);
      }
      if (card.canConnectRight && !this.findRight(card)) {
        addButton(card.x, card.y + 1);
      }
    });
  }

  findLeft(card: GameCard) {
    return this.cards.find((el) => el.y === card.y - 1 && el.x === card.x);
  }

  findRight(card: GameCard) {
    return this.cards.find((el) => el.y === card.y + 1 && el.x === card.x);
  }

  findFront(card: GameCard) {
    return this.cards.find((el) => el.x === card.x + 1 && el.y === card.y);
  }

  findBack(card: GameCard) {
    return this.cards.find((el) => el.x === card.x - 1 && el.y === card.y);
  }
}
