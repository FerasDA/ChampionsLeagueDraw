import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotsComponent } from './pots/pots.component';
import { RoundOfSixteenComponent } from './round-of-sixteen/round-of-sixteen.component';

@NgModule({
  declarations: [
    AppComponent,
    PotsComponent,
    RoundOfSixteenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
