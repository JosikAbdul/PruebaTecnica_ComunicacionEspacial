import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadarComponent } from './radar/radar.component';
import { CommunicationService } from './communication.service';


@NgModule({
  declarations: [
    AppComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
