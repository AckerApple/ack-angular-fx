import { platformBrowserDynamic }      from '@angular/platform-browser-dynamic'
import { AppModule } from './src/app/app.module'
import { enableProdMode } from "@angular/core"
import { supportDocument } from '../web-animations.min'

supportDocument(document)

enableProdMode()

platformBrowserDynamic().bootstrapModule(AppModule)