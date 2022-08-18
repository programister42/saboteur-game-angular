import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatRippleModule } from '@angular/material/core'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppBarComponent } from './components/app-bar.component'
import { AuthModalComponent } from './components/auth-modal.component'
import { GameBoardComponent } from './components/game-board.component'
import { PlayersListComponent } from './components/players-list.component'
import { TablesComponent } from './components/tables.component'
import { TunnelCardComponent } from './components/tunnel-card.component'
import { GameTableComponent } from './pages/game-table.component'
import { MainComponent } from './pages/main.component';
import { InHandCardsComponent } from './components/in-hand-cards.component';
import { DragToScrollDirective } from './directives/drag-to-scroll.directive'

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatRippleModule,
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AppBarComponent,
    TablesComponent,
    AuthModalComponent,
    GameTableComponent,
    PlayersListComponent,
    GameBoardComponent,
    TunnelCardComponent,
    InHandCardsComponent,
    DragToScrollDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ...materialModules,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
