import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//components
import { MainComponent } from './pages/main.component';
import { AppBarComponent } from './components/app-bar.component';
import { TablesComponent } from './components/tables.component';
//material components
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";

const materialModules = [
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AppBarComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ...materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
