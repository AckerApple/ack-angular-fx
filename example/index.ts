import { platformBrowserDynamic }      from '@angular/platform-browser-dynamic';

//import { AppModuleNgFactory } from './aot/src/app/app.module.ngfactory';
import { AppModule } from './src/app/app.module';
import { enableProdMode } from "@angular/core";

enableProdMode()

platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowserDynamic().bootstrapModuleFactory( AppModuleNgFactory );