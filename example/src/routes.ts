import { RouterModule } from '@angular/router';
import { Input, Output, EventEmitter, Component } from '@angular/core';
import { fxNameArray } from "./app.component"
import { FxSession } from "./FxSession.injectable"

import { string as index } from "./index.template"
import { string as stagger } from "./stagger.template"
import { string as selectFx } from "./selectFx.template"
import { string as ngIf } from "./ngIf.template"
import { string as directives } from "./directives.template"
import { string as swapping } from "./swapping.template"
import { string as routeroutlet } from "./routeroutlet.template"

import { delayArray, fxArray, getFxArray } from '../../src';

@Component({
  template   : directives,
  animations : fxArray
}) export class DirectivesComponent{}

@Component({
  template   : swapping,
  animations : fxArray
}) export class SwappingComponent{
  fxId:boolean|number
  hideToggle:boolean
  swapIndex:number = 0
  fxTime:string = "1000ms 0ms linear"
  swapArray = [1,2,3,4,5,6,7,8]
  fxPosition:string = 'absolute'
  positions:string[] = ['static','relative','absolute','fixed']

  constructor(public FxSession:FxSession){}
}

@Component({
  template   : ngIf,
  animations : fxArray
}) export class NgIfComponent{
  hideToggle:boolean
  fxTime:string = "200ms 0ms linear"

  constructor(public FxSession:FxSession){}
}

@Component({
  template   : index,
  animations : fxArray
}) export class IndexComponent{
  fxTime:string = "200ms 0ms linear"
  allFx:any = {}
  fxCount:number = 1//arbitrary fx value change to ignite stagger animations

  constructor() {
    fxNameArray.forEach(item => this.allFx[item]=true)
  }

  onToggleInAll() {
    ++this.fxCount
    fxNameArray.forEach(item => this.allFx[item] = !this.allFx[item])
  }
}

@Component({
  template   : stagger,
  animations : fxArray
}) export class Stagger{
  fxTime:string = "200ms 0ms linear"
  fxStaggerSpeed:number
  speeds = [100,200,300,400,500,600,700,800,900,1000,1500,2000]
  stagArray = [1,2,3,4,5,6,7,8]
  rowStagArray = [1,2,3,4,5,6,7,8]

  constructor(public FxSession:FxSession){}
}

@Component({
  template   : routeroutlet,
  animations : fxArray
}) export class RouterOutletComponent{}

@Component({selector:'select-fx', template:selectFx}) export class SelectFx{
  fxNameArray = fxNameArray
  @Input() model:string
  @Output() modelChange:EventEmitter<string> = new EventEmitter()
}

export const declarations = [
  IndexComponent,
  Stagger,
  NgIfComponent,
  DirectivesComponent,
  SwappingComponent,
  SelectFx,
  RouterOutletComponent
]

export const routes = [
  {name: 'overview', path: 'overview',  component: IndexComponent},
  {name: 'stagger', path: 'stagger',  component: Stagger},
  {name: 'ngif', path: 'ngif',  component: NgIfComponent},
  {name: 'swapping', path: 'swapping',  component: SwappingComponent},
  {name: 'directives', path: 'directives',  component: DirectivesComponent},
  {name: 'router-outlet', path: 'router-outlet',  component: RouterOutletComponent},
  {path: '**',   redirectTo: 'overview' }//404
]

export const routeConfig = {useHash:true, initialNavigation:true, enableTracing:false}
export const routing = RouterModule.forRoot(routes, routeConfig)
