export enum CardType {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
  RIGHT_TURN = 'right-turn',
  LEFT_TURN = 'left-turn',
  INTERSECTION = 'intersection',
  T_INTERSECTION = 't-intersection',
  ADD_CARD_BUTTON = 'add-card-button',
}

export class GameCard {
  x: number
  y: number
  cardType: CardType
  canConnectBack: boolean = false
  canConnectFront: boolean = false
  canConnectLeft: boolean = false
  canConnectRight: boolean = false

  constructor(x: number, y: number, cardType: CardType = CardType.INTERSECTION) {
    this.x = x
    this.y = y
    this.cardType = cardType
    switch (cardType) {
      case CardType.HORIZONTAL:
        this.canConnectBack = true
        this.canConnectFront = true
        break
      case CardType.VERTICAL:
        this.canConnectLeft = true
        this.canConnectRight = true
        break
      case CardType.RIGHT_TURN:
        this.canConnectBack = true
        this.canConnectRight = true
        break
      case CardType.LEFT_TURN:
        this.canConnectBack = true
        this.canConnectLeft = true
        break
      case CardType.INTERSECTION:
        this.canConnectBack = true
        this.canConnectFront = true
        this.canConnectLeft = true
        this.canConnectRight = true
        break
      case CardType.T_INTERSECTION:
        this.canConnectBack = true
        this.canConnectLeft = true
        this.canConnectRight = true
        break
    }
  }

  get column() {
    return this.x < 0 ? this.x - 1 : this.x + 1
  }

  get row() {
    return this.y < 0 ? this.y - 1 : this.y + 1
  }

  rotate() {
    [
      this.canConnectBack,
      this.canConnectFront,
      this.canConnectLeft,
      this.canConnectRight,
    ] = [
      this.canConnectFront,
      this.canConnectBack,
      this.canConnectRight,
      this.canConnectLeft,
    ]
    return this
  }
}

export class AddGameCardButton extends GameCard {
  possibleGameCards: GameCard[]

  constructor(x: number, y: number, possibleGameCards: GameCard[]) {
    super(x, y, CardType.ADD_CARD_BUTTON)
    this.possibleGameCards = possibleGameCards
  }
}
