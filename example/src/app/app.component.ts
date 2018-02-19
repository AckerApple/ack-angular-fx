import { transition, query, stagger, state, animateChild, trigger, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { string } from './app.template'
import { delayArray, getFxArray } from '../../../src';
import * as packJson from "../../../package.json"

//import { fxArray } from './prefx';
const fxArray = getFxArray()

@Component({
  selector: 'app',
  template: string
  ,animations:fxArray
}) export class AppComponent {
  version = packJson['version'] || '0.0.0'
  fixedStaggers:boolean
  rowStaggers:boolean
  fxStaggerSpeed:number
  fxCount:number = 0//arbitrary fx value change to ignite stagger animations
  panelAnimation: string = 'fadeInLeft'
  //panelAnimType: string = 'fadeInLeft'
  panelAnimForward: string = 'fadeInLeft'
  panelAnimBack: string = 'fadeInRight'
  swapShow: number = 0
  allFx:any = {}
  show: boolean = true
  state: string = ''
  delayArray: any[] = delayArray
  inAnimations: any[]
  speeds = [100,200,300,400,500,600,700,800,900,1000,1500,2000]
  fxNameArray: any[] = [
    'fadeIn','fadeInDown','fadeInLeft','fadeInRight','fadeInUp',
    'bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp',
    'rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight',
    'slideInUp','slideInDown','slideInLeft','slideInRight',
    'zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp'
  ]

  outAnimations: any[] = [
    'fadeOut',
    'fadeOutDown',
    'fadeOutLeft',
    'fadeOutRight',
    'fadeOutUp',

    'bounceOut',
    'bounceOutDown',
    'bounceOutLeft',
    'bounceOutRight',
    'bounceOutUp',

    'rotateOut',
    'rotateOutDownLeft',
    'rotateOutDownRight',
    'rotateOutUpLeft',
    'rotateOutUpRight',

    'slideOutDown',
    'slideOutLeft',
    'slideOutRight',
    'slideOutUp',

    'zoomOut',
    'zoomOutDown',
    'zoomOutLeft',
    'zoomOutRight',
    'zoomOutUp',
  ];

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

  constructor() {
    this.inAnimations = this.fxNameArray.map(item => {
      this.allFx[item] = true
      return {
        key: item,
        show: true,
        bg: Math.floor(Math.random() * 16777215).toString(16)
      }
    });

    this.outAnimations = this.outAnimations.map(item => {
      return {
        key: item,
        bg: Math.floor(Math.random() * 16777215).toString(16)
      }
    });
  }

  ngAfterViewInit(){
    if(window['scriptLoadTime']){
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

  onToggleInAll() {
    ++this.fxCount
    this.inAnimations.forEach((item,i)=>{
      this.allFx[item.key] = !this.allFx[item.key]
      //item.show = !item.show
      //setTimeout(()=>item.show = !item.show, 200*i)
    });
  }

  /*onToggleOutAll() {
    this.outAnimations.forEach((item,i) => {
      item.state = item.state ? '' : item.key
      //setTimeout(()=>item.state = item.state ? '' : item.key, 200*i)
    });
  }*/

  onToggleOutItem(item) {
    item.state = item.state ? '' : item.key;
  }

  nextPanel(){
    this.panelAnimation=this.panelAnimForward
    setTimeout(()=>this.swapShow=this.swapShow==3?0:this.swapShow+1, 100)
  }

  priorPanel(){
    this.panelAnimation=this.panelAnimBack
    setTimeout(()=>this.swapShow=this.swapShow==0?3:this.swapShow-1, 100)
  }
}