import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../services/authorization.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-main',
  template: `
    <app-app-bar [name]="name"></app-app-bar>
    <app-tables></app-tables>
    <app-auth-modal *ngIf="!(isAuthorized$ | async)"></app-auth-modal>
  `,
  styles: []
})
export class MainComponent implements OnInit {
  isAuthorized$: Observable<boolean> | undefined;
  name: string | undefined;

  constructor(private authService: AuthorizationService) {}

  ngOnInit(): void {
    this.isAuthorized$ = this.authService.isAuthorized$.pipe();
    this.authService.name$.subscribe(name => this.name = name);
  }
}
