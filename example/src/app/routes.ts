import { RouterModule } from '@angular/router';
import { Component} from '@angular/core';

@Component({template:'Hello World A<br />Hello World A'}) export class FakeComponent{}
@Component({template:'Hello B World<br />Hello B World'}) export class FakeComponent2{}

export const declarations = [
  FakeComponent,
  FakeComponent2
]

export const routes = [
  {name: 'overview', path: 'overview',  component: FakeComponent},
  {name: 'overview2', path: 'overview2',  component: FakeComponent2},
  {path: '**',   redirectTo: 'overview' }//404
]

export const routeConfig = {useHash:true, initialNavigation:true, enableTracing:false}
export const routing = RouterModule.forRoot(routes, routeConfig)
