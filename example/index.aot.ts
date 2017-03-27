import 'zone.js'
import 'reflect-metadata'

import { platformBrowserDynamic }      from '@angular/platform-browser-dynamic'
import { AppModuleNgFactory } from './aot/src/app/app.module.ngfactory'
import { enableProdMode } from "@angular/core"
import { supportDocument } from '../web-animations.min'

supportDocument(document)

enableProdMode()

platformBrowserDynamic().bootstrapModuleFactory( AppModuleNgFactory )