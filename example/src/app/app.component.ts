import { transition, query, stagger, state, animateChild, trigger, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { FxSession } from './FxSession.injectable';
import { string } from './app.template'
import * as packJson from "../../../package.json"

//import { fxArray } from './prefx';
import { delayArray, getFxArray } from '../../../src';
const fxArray = getFxArray()

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
  fxTime:string = "500ms 0ms linear"
  version = packJson['version'] || '0.0.0'
  //panelAnimType: string = 'fadeInLeft'
  show: boolean = true
  state: string = ''
  delayArray: any[] = delayArray
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

  constructor(public FxSession:FxSession){}

  ngAfterViewInit(){
    if( window['scriptLoadTime'] ){
      console.log('Script Load Time', Date.now()-window['scriptLoadTime'])
    }
  }

  toggleAllShorts(){
    this.delayArray.forEach((v,i)=>{
      this['show'+v]=!this['show'+v]
    });
  }

  getOutletPath(outlet){
    if(!outlet)return
    console.log('console.log()',outlet)
    //console.log('console.log()',outlet.activatedRoute.url.value[0].path)
    return outlet.activatedRoute.url.value[0].path
  }

  onToggleOutItem(item) {
    item.state = item.state ? '' : item.key;
  }
}