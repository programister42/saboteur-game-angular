export enum CardType {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
  RIGHT_TURN = 'right-turn',
  LEFT_TURN = 'left-turn',
  INTERSECTION = 'intersection',
  HORIZONTAL_T_INTERSECTION = 'horizontal-t-intersection',
  VERTICAL_T_INTERSECTION = 'vertical-t-intersection',
  ADD_CARD_BUTTON = 'add-card-button',
  HORIZONTAL_DEAD_END = 'horizontal-dead-end',
  VERTICAL_DEAD_END = 'vertical-dead-end',
}

export class GameCard {
  x: number
  y: number
  type: CardType
  canConnectBack: boolean = false
  canConnectFront: boolean = false
  canConnectLeft: boolean = false
  canConnectRight: boolean = false

  constructor(x: number, y: number, cardType: CardType, card?: GameCard) {
    this.x = x
    this.y = y
    this.type = cardType
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
      case CardType.HORIZONTAL_T_INTERSECTION:
        this.canConnectBack = true
        this.canConnectLeft = true
        this.canConnectRight = true
        break
      case CardType.VERTICAL_T_INTERSECTION:
        this.canConnectBack = true
        this.canConnectFront = true
        this.canConnectLeft = true
        break
      case CardType.HORIZONTAL_DEAD_END:
        this.canConnectBack = true
        break
      case CardType.VERTICAL_DEAD_END:
        this.canConnectLeft = true
        break
    }

    if (card) {
      this.canConnectBack = card.canConnectBack
      this.canConnectFront = card.canConnectFront
      this.canConnectLeft = card.canConnectLeft
      this.canConnectRight = card.canConnectRight
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

export class InHandGameCard extends GameCard {
  isActive: boolean = false
}

export class AddGameCardButton extends GameCard {
  constructor(x: number, y: number) {
    super(x, y, CardType.ADD_CARD_BUTTON)
  }
}
