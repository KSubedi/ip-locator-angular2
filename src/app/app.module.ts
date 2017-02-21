import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocatorComponent } from './locator/locator.component';

import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    AppComponent,
    LocatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBenPoA9xKEwHnwsVBF4vBRCf1uSEbPXyo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
