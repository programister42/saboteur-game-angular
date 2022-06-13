import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  template: `
    <mat-card>Game Table</mat-card>
    <mat-card>Game Table</mat-card>
    <mat-card>Game Table</mat-card>
    <mat-card>Game Table</mat-card>
    <mat-card>Game Table</mat-card>
    <mat-card>Game Table</mat-card>
    <mat-card>Game Table</mat-card>
    <mat-card>Game Table</mat-card>
    <mat-card>Game Table</mat-card>
    <mat-card>Game Table</mat-card>
  `,
  styles: [
    `mat-card {
      margin: 10px;
    }`
  ]
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
