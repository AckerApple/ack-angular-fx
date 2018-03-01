import { declarations as routeDecs, routing } from "./routes"
import { NgModule } from "@angular/core";
import { AckFxModule } from "../../src/AckFx.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FxSession } from "./FxSession.injectable";

const declarations = [ AppComponent, ...routeDecs ]

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AckFxModule,
    FormsModule,
    routing
  ],
  providers: [ FxSession ],
  declarations: declarations,
  bootstrap: [ AppComponent ]
}) export class AppModule {}