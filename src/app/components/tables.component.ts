import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

interface Table {
  id: number;
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-tables',
  template: `
    <mat-card
      *ngFor="let table of tables"
      matRipple
      class="lg:w-1/2 md:w-2/3 w-11/12 mx-auto my-3"
      [class.mat-elevation-z8]="table.isActive"
      (mouseenter)="table.isActive = true"
      (mouseleave)="table.isActive = false"
      (mousedown)="table.isActive = false"
      (mouseup)="table.isActive = true"
      (touchstart)="table.isActive = true"
      (touchend)="table.isActive = true"
      (click)="selectTable(table)"
      >{{ table.name }}</mat-card
    >
  `,
})
export class TablesComponent implements OnInit {
  tables: Table[] = [
    { id: 1, name: 'Игровой стол', isActive: false},
    { id: 1, name: 'Стол игрока Женя', isActive: false },
    { id: 1, name: 'Стор игрока Родион', isActive: false },
    { id: 1, name: 'Стол игрока Тарас', isActive: false },
    { id: 1, name: 'Стол с дополнением', isActive: false },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectTable(table: Table): void {
    this.router.navigate([table.id]);
  }
}
