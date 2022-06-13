import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CardType, GameCard, InHandGameCard } from '../models/game-card';

@Injectable({
  providedIn: 'root',
})
export class GameEngineService {
  inHandCards: BehaviorSubject<InHandGameCard[]> = new BehaviorSubject([
    new InHandGameCard(0, 0, CardType.INTERSECTION),
    new InHandGameCard(0, 0, CardType.HORIZONTAL),
    new InHandGameCard(0, 0, CardType.VERTICAL),
    new InHandGameCard(0, 0, CardType.LEFT_TURN),
    new InHandGameCard(0, 0, CardType.RIGHT_TURN),
    new InHandGameCard(0, 0, CardType.HORIZONTAL_T_INTERSECTION),
    new InHandGameCard(0, 0, CardType.VERTICAL_T_INTERSECTION),
    new InHandGameCard(0, 0, CardType.HORIZONTAL_DEAD_END),
    new InHandGameCard(0, 0, CardType.VERTICAL_DEAD_END),
  ]);

  chosingCardState: BehaviorSubject<boolean> = new BehaviorSubject(false);

  activeCard: BehaviorSubject<GameCard> = new BehaviorSubject({} as GameCard);

  constructor() {}

  finishCurrentMove() {
    this.chosingCardState.next(false);
    this.inHandCards.next(
      this.inHandCards
        .getValue()
        .filter((card) => card !== this.activeCard.getValue())
    );
  }

  playCard(card: InHandGameCard) {
    this.activeCard.next(card);
    this.chosingCardState.next(true);

    this.inHandCards.next(
      this.inHandCards.getValue().map((card) => {
        card === this.activeCard.getValue()
          ? (card.isActive = true)
          : (card.isActive = false);
        return card;
      })
    );
  }

  rotateHand() {
    this.inHandCards.next(
      this.inHandCards.getValue().map((card) => {

        return card.rotate();
      })
    );
  }
}
