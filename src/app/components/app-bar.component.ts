import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-app-bar',
  template: `
    <mat-toolbar>
      <span>Гномы-вредители</span>
      <span class="flex-auto"></span>
      <span class="text-sm">{{name}}</span>
    </mat-toolbar>
  `,
})
export class AppBarComponent implements OnInit {
  @Input() name: string | undefined

  constructor() { }

  ngOnInit(): void { }
}
