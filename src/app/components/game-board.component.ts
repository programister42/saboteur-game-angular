import { Component, OnInit } from '@angular/core';
import { AddGameCardButton, CardType, GameCard } from '../models/game-card';

@Component({
  selector: 'app-game-board',
  template: `
    <div class="p-4 grid gap-2 justify-start auto-rows-max auto-cols-max">
      <mat-card
        *ngFor="let card of cards"
        [style.grid-row]="card.row"
        [style.grid-column]="card.column"
      >
        <!-- <mat-card-header *ngIf="!isButton(card)">
          <mat-card-title>{{ card.cardType }}</mat-card-title>
          <mat-card-subtitle>x: {{ card.x }} y: {{ card.y }}</mat-card-subtitle>
        </mat-card-header> -->
        <mat-card-content>
          <div class="grid gap-4 place-items-center grid-cols-3 grid-rows-3">
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

      <div
        *ngFor="let addButton of addCardButtons"
        class="flex p-4 justify-center items-center"
        [style.grid-row]="addButton.row"
        [style.grid-column]="addButton.column"
      >
        <button mat-mini-fab (click)="createCard(addButton)">
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </div>
  `,
})
export class GameBoardComponent implements OnInit {
  cards: GameCard[] = [new GameCard(0, 0, CardType.INTERSECTION)];
  addCardButtons: AddGameCardButton[] = [];

  constructor() {}

  ngOnInit(): void {
    this.addButtons();
  }

  isButton(card: GameCard) {
    return card.cardType === CardType.ADD_CARD_BUTTON;
  }

  createCard(addCardButton: AddGameCardButton) {
    this.cards.push(
      addCardButton.possibleGameCards[
        Math.floor(Math.random() * addCardButton.possibleGameCards.length)
      ]
    );
    this.addButtons();
  }

  addButtons() {
    this.addCardButtons = [];

    const addButton = (x: number, y: number) => {
      const possibleCards: GameCard[] = [];

      const checkConnectionPossibilities = (card: GameCard) => {
        const front = this.findFront(card);
        const back = this.findBack(card);
        const left = this.findLeft(card);
        const right = this.findRight(card);

        if (
          (front && front.canConnectBack !== card.canConnectFront) ||
          (back && back.canConnectFront !== card.canConnectBack) ||
          (left && left.canConnectRight !== card.canConnectLeft) ||
          (right && right.canConnectLeft !== card.canConnectRight)
        )
          return;

        possibleCards.push(card);
      };

      Object.values(CardType)
        .filter((value) => value !== CardType.ADD_CARD_BUTTON)
        .forEach((cardType) => {
          checkConnectionPossibilities(new GameCard(x, y, cardType));
          checkConnectionPossibilities(new GameCard(x, y, cardType).rotate());
        });

      this.addCardButtons.push(new AddGameCardButton(x, y, possibleCards));
    };

    this.cards.forEach((card) => {
      if (this.isButton(card)) return;
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
