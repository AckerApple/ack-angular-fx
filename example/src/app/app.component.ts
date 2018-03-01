import { transition, query, stagger, state, animateChild, trigger, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { FxSession } from './FxSession.injectable';
import { string } from './app.template'

import {
  Router,
  NavigationStart,
  NavigationEnd,
  ActivatedRoute
} from '@angular/router';

import * as packJson from "../../../package.json"
//export const packJson = "0.0.0"

import { delayArray, fxArray } from '../../../src';

export const fxNameArray = [
  'fadeIn','fadeInDown','fadeInLeft','fadeInRight','fadeInUp',
  'bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp',
  'rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight',
  'slideInUp','slideInDown','slideInLeft','slideInRight',
  'zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp'
]

@Component({
  selector: 'app',
  template: string
  ,animations:fxArray
}) export class AppComponent {
  routes:string[] = ['overview','stagger','ngif','swapping','directives','deprecated']
  fxTime:string = "1000ms 0ms linear"
  version = packJson['version'] || '0.0.0'
  //panelAnimType: string = 'fadeInLeft'
  show: boolean = true
  state: string = ''
  inAnimations: any[]
  fxNameArray: any[] = fxNameArray

  show100:boolean
  show200:boolean
  show300:boolean
  show400:boolean
  show500:boolean
  show600:boolean
  show700:boolean
  show800:boolean
  show900:boolean
  show1000:boolean
  show1500:boolean
  show2000:boolean

  constructor( public FxSession:FxSession ){}

  ngAfterViewInit(){
    if( window['scriptLoadTime'] ){
      console.log('Script Load Time', Date.now()-window['scriptLoadTime'])
    }
  }

  onToggleOutItem(item) {
    item.state = item.state ? '' : item.key;
  }
}