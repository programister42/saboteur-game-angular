import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { AuthorizationService } from "../services/authorization.service";

@Component({
  selector: 'app-auth-modal',
  template: `
    <div class="fixed top-0 left-0 right-0 h-screen w-screen backdrop-blur overflow-auto grid place-items-center">
      <mat-card class="example-card">
        <mat-card-subtitle>Регистрация</mat-card-subtitle>
        <mat-card-title>Придумайте никнейм</mat-card-title>
        <mat-card-content>
          <mat-form-field class="w-full" appearance="standard">
            <mat-label>Ваш ник</mat-label>
            <input matInput id="name" type="text" [formControl]="name">
          </mat-form-field>
        </mat-card-content>
        <mat-divider inset></mat-divider>
        <mat-card-actions>
          <button mat-button class="w-full" [disabled]="!name.valid" (click)="signUp()">Зарегестрироваться</button>
        </mat-card-actions>
        <mat-card-footer>
          <mat-progress-bar [mode]=progressBarMode></mat-progress-bar>
        </mat-card-footer>
      </mat-card>
    </div>
  `,
  styles: []
})
export class AuthModalComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);
  progressBarMode: 'determinate' | 'indeterminate' = 'determinate';

  constructor(private authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  signUp() {
    if (this.name.valid) {
      this.progressBarMode = 'indeterminate';
      this.authService.signUp(this.name.value as string);
    }
  }

}
