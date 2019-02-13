import { Component } from '@angular/core';
import { FxSession } from './FxSession.injectable';
import { string } from './app.template'

import * as packJson from "../../package.json"
//export const packJson = "0.0.0"

import { animations } from '../../src/allFx';

export const fxNameArray = [
  'fadeIn','fadeOut','fadeInOut',
  'fadeInDown','fadeOutDown','fadeInOutDown',
  'fadeInLeft','fadeOutLeft','fadeInOutLeft',
  'fadeInRight','fadeOutRight','fadeInOutRight',
  'fadeInUp','fadeOutUp','fadeInOutUp',
  
  'bounceIn','bounceOut','bounceInOut',
  'bounceInDown','bounceOutDown','bounceInOutDown',
  'bounceInLeft','bounceOutLeft','bounceInOutLeft',
  'bounceInRight','bounceOutRight','bounceInOutRight',
  'bounceInUp','bounceOutUp','bounceInOutUp',
  
  'rotateIn','rotateOut','rotateInOut',
  'rotateInDownLeft','rotateOutDownLeft','rotateInOutDownLeft',
  'rotateInDownRight','rotateOutDownRight','rotateInOutDownRight',
  'rotateInUpLeft','rotateOutUpLeft','rotateInOutUpLeft',
  'rotateInUpRight','rotateOutUpRight','rotateInOutUpRight',
  
  'slideInUp','slideOutUp','slideInOutUp',
  'slideInDown','slideOutDown','slideInOutDown',
  'slideInLeft','slideOutLeft','slideInOutLeft',
  'slideInRight','slideOutRight','slideInOutRight',

  'zoomIn','zoomOut','zoomInOut',
  'zoomInDown','zoomOutDown','zoomInOutDown',
  'zoomInLeft','zoomOutLeft','zoomInOutLeft',
  'zoomInRight','zoomOutRight','zoomInOutRight',
  'zoomInUp','zoomOutUp','zoomInOutUp'
]

export const fxWithKids = [
  "fadeInOut","fadeInOutDown","fadeInOutLeft","fadeInOutRight","fadeInOutUp",
  "bounceInOut","bounceInOutLeft","bounceInOutRight","bounceInOutUp",
  "rotateInOut","rotateInOutDownLeft","rotateInOutDownRight","rotateInOutUpLeft","rotateInOutUpRight",
  "slideInOutUp","slideInOutDown","slideInOutLeft","slideInOutRight",
  "zoomInOut","zoomInOutDown","zoomInOutLeft","zoomInOutRight","zoomInOutUp"
]

@Component({
  selector: 'app',
  template: string
  ,animations:animations
}) export class AppComponent {
  inFx:boolean
  routes:string[] = [
    'overview','stagger','ngif',
    'swapping','directives','router-outlet'
  ]
  fxTime:string = "400ms 0ms linear"
  version = packJson['version'] || '0.0.0'
  //panelAnimType: string = 'fadeInLeft'
  show: boolean = true
  state: string = ''
  inAnimations: any[]
  
  fxNameArray: string[] = fxNameArray
  //fxWithKids: string[] = fxWithKids

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