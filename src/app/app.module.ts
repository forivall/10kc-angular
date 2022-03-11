import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge'

import { AppComponent } from './app.component';
import { IndicatorComponent } from './indicator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatBadgeModule ],
  declarations: [ AppComponent, IndicatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
