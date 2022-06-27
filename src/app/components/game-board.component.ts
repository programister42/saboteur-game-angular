import { Component, OnInit } from '@angular/core'
import { GameCard } from '../models/game-card'

@Component({
  selector: 'app-game-board',
  template: `
    <div class="grid gap-4 justify-start">
      <mat-card *ngFor="let card of cards"
                class="w-min h-min"
                [style.grid-row]="card.row"
                [style.grid-column]="card.column">
        <mat-card-content>
          <p>x: {{ card.x }} y: {{ card.y }}</p>
          <p>
            <button
              mat-button
              [disabled]="findLeft(card)"
              (click)="cards.push(card.createLeftCard())">
              налево
            </button>
          </p>
          <p>
            <button
              mat-button
              [disabled]="findFront(card)"
              (click)="cards.push(card.createFrontCard())">
              прямо
            </button>
          </p>
          <p>
            <button
              mat-button
              [disabled]="findRight(card)"
              (click)="cards.push(card.createRightCard())">
              направо
            </button>
          </p>
          <p>
            <button
              mat-button
              [disabled]="findBack(card)"
              (click)="cards.push(card.createBackCard())">
              назад
            </button>
          </p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
})
export class GameBoardComponent implements OnInit {
  cards: GameCard[] = [
    new GameCard(0, 0, true),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  findLeft(card: GameCard) {
    return !!this.cards.find(el => el.y === card.y - 1 && el.x === card.x)
  }

  findRight(card: GameCard) {
    return !!this.cards.find(el => el.y === card.y + 1 && el.x === card.x)
  }

  findFront(card: GameCard) {
    return !!this.cards.find(el => el.x === card.x + 1 && el.y === card.y)
  }

  findBack(card: GameCard) {
    return !!this.cards.find(el => el.x === card.x - 1 && el.y === card.y)
  }
}
