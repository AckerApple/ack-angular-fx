import "zone.js"
import "reflect-metadata"

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "./app.module"
import { enableProdMode } from "@angular/core"

//cross browser animation support
//made from `npm install web-animations-js`
import { supportDocument } from "../../web-animations.min"
supportDocument(document)

enableProdMode()

platformBrowserDynamic().bootstrapModule(AppModule)