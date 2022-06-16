import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { AuthorizationService } from '../services/authorization.service'

@Component({
  selector: 'app-auth-modal',
  template: `
    <div [ngClass]="['fixed', 'top-0', 'left-0', 'right-0', 'h-screen', 'w-screen', 'backdrop-blur', 'bg-black/25',
     'overflow-auto', 'grid', 'place-items-center']">
      <mat-card class="example-card">
        <mat-card-subtitle>Регистрация</mat-card-subtitle>
        <mat-card-title>Придумайте никнейм</mat-card-title>
        <mat-card-content>
          <mat-form-field class="w-full" appearance="outline">
            <mat-label>Ваш ник</mat-label>
            <input matInput id="name" type="text" [formControl]="name">
            <mat-hint class="mat-error" *ngIf="serverError">{{ serverError }}</mat-hint>
            <mat-hint>Никнейм должен быть не менее 3-х и не более 20-ти символов</mat-hint>
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
  styles: [],
})
export class AuthModalComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ])
  progressBarMode: 'determinate' | 'indeterminate' = 'determinate'
  serverError: string = ''

  constructor(private authService: AuthorizationService) { }

  ngOnInit(): void {
    this.authService.serverError$.subscribe((error) => {
      this.serverError = error
    })
  }

  signUp() {
    if (this.name.valid) {
      this.progressBarMode = 'indeterminate'
      this.authService.signUp(this.name.value as string)
    }
  }

}
