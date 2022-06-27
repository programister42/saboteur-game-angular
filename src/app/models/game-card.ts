export class GameCard {
  x: number
  y: number
  isStart: boolean = false

  constructor(x: number, y: number, isStart: boolean = false) {
    this.x = x
    this.y = y
    this.isStart = isStart
  }

  get column() {
    return this.x < 0 ? this.x - 1 : this.x + 1
  }

  get row() {
    return this.y < 0 ? this.y - 1 : this.y + 1
  }

  createRightCard() {
    return new GameCard(this.x, this.y + 1)
  }

  createLeftCard() {
    return new GameCard(this.x, this.y - 1)
  }

  createFrontCard() {
    return new GameCard(this.x + 1, this.y)
  }

  createBackCard() {
    return new GameCard(this.x - 1, this.y)
  }
}
