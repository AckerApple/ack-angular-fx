import { transition, query, stagger, state, animateChild, trigger, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { string } from './app.template'
import { delayArray } from '../../../src';
import { fxArray } from './prefx';
import * as packJson from "../../../package.json"

@Component({
  selector: 'app',
  template: string
  ,animations:fxArray
}) export class AppComponent {
  version = packJson['version'] || '0.0.0'
  fixedStaggers
  rowStaggers
  fxCount = 0
  panelAnimation: string = 'fadeInLeft'
  panelAnimType: string = 'fadeIn'
  swapShow: number = 0;
  show: boolean = true;
  state: string = '';
  delayArray: any[] = delayArray
  inAnimations: any[] = [
    'fadeIn',
    'fadeInDown',
    'fadeInLeft',
    'fadeInRight',
    'fadeInUp',

    'bounceIn',
    'bounceInDown',
    'bounceInLeft',
    'bounceInRight',
    'bounceInUp',

    'rotateIn',
    'rotateInDownLeft',
    'rotateInDownRight',
    'rotateInUpLeft',
    'rotateInUpRight',

    'slideInDown',
    'slideInLeft',
    'slideInRight',
    'slideInUp',

    'zoomIn',
    'zoomInDown',
    'zoomInLeft',
    'zoomInRight',
    'zoomInUp',
  ];

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

  show100
  show200
  show300
  show400
  show500
  show600
  show700
  show800
  show900
  show1000
  show1500
  show2000

  constructor() {
    this.inAnimations = this.inAnimations.map(item => {
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

  onToggleInAll() {
    ++this.fxCount
    this.inAnimations.forEach((item,i)=>{
      item.show = !item.show
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
    this.panelAnimation=this.panelAnimType+'Left'
    setTimeout(()=>this.swapShow=this.swapShow==3?0:this.swapShow+1, 100)
  }

  priorPanel(){
    this.panelAnimation=this.panelAnimType+'Right'
    setTimeout(()=>this.swapShow=this.swapShow==0?3:this.swapShow-1, 100)
  }
}