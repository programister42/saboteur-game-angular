import { Component, OnInit } from '@angular/core'

interface Player {
  name: string;
  isLanternBroken: boolean;
  isTrolleyBroken: boolean;
  isPickaxeBroken: boolean;
}

@Component({
  selector: 'app-players-list',
  template: `
    <div class="flex p-3 gap-2">
      <mat-card *ngFor="let player of players" class="gap-10">
        <mat-card-title>{{ player.name }}</mat-card-title>
        <mat-card-content>
          <p>Фонарь:
            <span [class]="player.isLanternBroken ? 'text-red-500' : 'text-green-500'">
              {{ player.isLanternBroken ? 'сломан' : 'цел' }}
            </span>
          </p>
          <p>Вагонетка:
            <span [class]="player.isTrolleyBroken ? 'text-red-500' : 'text-green-500'">
              {{ player.isTrolleyBroken ? 'сломана' : 'цела' }}
            </span>
          </p>
          <p>Кирка:
            <span [class]="player.isPickaxeBroken ? 'text-red-500' : 'text-green-500'">
              {{ player.isPickaxeBroken ? 'сломана' : 'цела' }}
            </span>
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button class="text-red-500">Забанить</button>
          <button mat-button class="text-green-500">Разбанить</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [],
})
export class PlayersListComponent implements OnInit {
  players: Player[] = [
    { name: 'Тарас', isLanternBroken: true, isTrolleyBroken: false, isPickaxeBroken: false },
    { name: 'Женя', isLanternBroken: false, isTrolleyBroken: true, isPickaxeBroken: false },
    { name: 'Родион', isLanternBroken: false, isTrolleyBroken: false, isPickaxeBroken: true },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
