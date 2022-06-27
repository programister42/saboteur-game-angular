import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GameTableComponent } from './pages/game-table.component'
import { MainComponent } from './pages/main.component'

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: ':tableId', component: GameTableComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },  //TODO: redirect to 404 page
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
