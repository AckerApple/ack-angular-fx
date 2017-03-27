import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//console.log('BrowserModule',BrowserModule)
//console.log('BrowserAnimationsModule',BrowserAnimationsModule)
//BrowserAnimationsModule NoopAnimationsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

const declarations = [AppComponent]

@NgModule({
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    //,NoopAnimationsModule
    ,FormsModule
  ],
  declarations: declarations,
  bootstrap: [AppComponent]
}) export class AppModule {}