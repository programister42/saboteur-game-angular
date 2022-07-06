import { Component, Input, OnInit } from '@angular/core'
import { GameCard } from '../models/game-card'

@Component({
  selector: 'app-tunnel-card',
  template: `
    <mat-card>
      <mat-card-content>

      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class TunnelCardComponent implements OnInit {

  @Input() card: GameCard | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
