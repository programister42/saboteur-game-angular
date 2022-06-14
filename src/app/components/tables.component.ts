import { Component, OnInit } from '@angular/core';

interface Table {
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-tables',
  template: `
    <mat-card *ngFor="let table of tables"
              matRipple
              class="lg:w-1/2 md:w-2/3 w-11/12 mx-auto my-3"
              [class.mat-elevation-z8]="table.isActive"
              (mouseenter)="table.isActive = true"
              (mouseleave)="table.isActive = false"
              (mousedown)="table.isActive = false"
              (mouseup)="table.isActive = true"
              (touchstart)="table.isActive = true"
              (touchend)="table.isActive = true"
    >{{table.name}}</mat-card>
  `,
})
export class TablesComponent implements OnInit {
  tables: Table[] = [
    { name: 'Игровой стол', isActive: false },
    { name: 'Стол игрока Женя', isActive: false },
    { name: 'Стор игрока Родион', isActive: false },
    { name: 'Стол игрока Тарас', isActive: false },
    { name: 'Стол с дополнением', isActive: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
