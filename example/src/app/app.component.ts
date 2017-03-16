import { Component } from '@angular/core';
import * as appHtml from './app-html'

//import { getFxArray,delayArray,animateConfig } from '../../../src';

import { delayArray } from '../../../src';
import { fxArray } from './prefx';

//upgradeComponents(declarations)

//export const animations = getFxArray()
//const x = 'absoluteSwap'


@Component({
  selector: 'app',
  template: appHtml.string//require('./app.html'),
  //template: 'hello world'//require('./app.html'),
  //styles: [require('./app.css')]
  //,animations:animations
  //,animations:getFxArray()
  ,animations:fxArray
}) export class AppComponent {
  panelAnimation: string = 'slideInLeft'
  panelAnimType: string = 'slideIn'
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

  public show100
  public show200
  public show300
  public show400
  public show500
  public show600
  public show700
  public show800
  public show900
  public show1000
  public show1500
  public show2000

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
    this.inAnimations.forEach((item,i)=>{
      setTimeout(()=>item.show = !item.show, 200*i)
    });
  }

  onToggleOutAll() {
    this.outAnimations.forEach((item,i) => {
      setTimeout(()=>item.state = item.state ? '' : item.key, 200*i)
    });
  }

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