import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { upgradeComponents } from '../../../src';

const declarations = [AppComponent]

upgradeComponents(declarations)

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: declarations,
    bootstrap: [AppComponent]
})
export class AppModule {
}