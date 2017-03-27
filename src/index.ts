// Much of the repetition and "ugliness" of this file is from trying to accomediate AoT

//import "web-animations-js"
//import { setDocument } from "web-animations-js"

import { trigger } from '@angular/animations';

import { fade } from './animations/fade';
import { bounce } from './animations/bounce';
import { rotate } from './animations/rotate';
import { slide } from './animations/slide';
import { zoom } from './animations/zoom';


/*import { setDocument } from "./web-animations.min"

export function browserSupport(){
  return setDocument(document)
}*/

export const effects:Array<string> = ['fade','bounce','rotate','slide','zoom']
export const delayArray:Array<number> = [100,200,300,400,500,600,700,800,900,1000,1500,2000]
export const animateDefaults = {
  duration   : 500,
  delay      : 0,
  easing     : 'linear',
  stagger    : 0,
  name       : 'animate',
  igniter    : '*',
  whileStyle : {},
  effects    : effects
}
export const absSwap = {
  easing:'linear', name:'absoluteSwap', igniter:'void',
  whileStyle:{
    position: 'absolute', width:'100%', 'overflow':'hidden'
  }
}
export const menu = {
  absoluteSwap:{duration:500, ...absSwap},
  absoluteSwap100:{duration:100, ...absSwap},absoluteSwap200:{duration:200, ...absSwap},
  absoluteSwap300:{duration:300, ...absSwap},absoluteSwap400:{duration:400, ...absSwap},
  absoluteSwap500:{duration:500, ...absSwap},absoluteSwap600:{duration:600, ...absSwap},
  absoluteSwap700:{duration:700, ...absSwap},absoluteSwap800:{duration:800, ...absSwap},
  absoluteSwap900:{duration:900, ...absSwap},absoluteSwap1000:{duration:1000, ...absSwap},
  absoluteSwap2000:{duration:2000, ...absSwap},absoluteSwap2500:{duration:2500, ...absSwap},
  "100":{duration:100},"200":{duration:200},"300":{duration:300},
  "400":{duration:400},"500":{duration:500},"600":{duration:600},
  "700":{duration:700},"800":{duration:800},"900":{duration:900},
  "1000":{duration:1000},"1500":{duration:1500},"2000":{duration:2000}
}

export function animateFactory(duration: string|number, delay: string|number, easing: string, stagger: number, name: string){
   return animateConfig(name,{
    duration:duration, 
    delay:delay, 
    easing:easing, 
    stagger:stagger, 
    name:name
   })
}

export function defaultConfig(config){
  return {
    ...animateDefaults,
    ...config
  }
}

export function checkStagger(config){
  return (!config.stagger || console.log('ack-angular-fx does not support stagger as of this release')) && config
}

export function animateConfig(name,config){
  return animateFixedConfig(name, defaultConfig(config))
  //return animateFixedConfig( checkStagger( defaultConfig(config) ) )
}

export function animateFixedConfig(name,config){
  return createTriggerBy(name, config, getConfigTiming(config))
}

export function getConfigTiming(config){
  return [
    config.duration+'ms',
    config.delay+'ms',
    config.easing
  ].join(' ')
}

export function createTriggerBy(name, config, timing){
  return trigger(name, pushEffectsByConfig([],timing,config))
}

export function pushEffectsByConfig(array, timing, config){
  return (
    (config.effects.indexOf('fade')>=0 && array.push(...fade(timing, config)) && 0) ||
    (config.effects.indexOf('bounce')>=0 && array.push(...bounce(timing, config)) && 0) ||
    (config.effects.indexOf('rotate')>=0 && array.push(...rotate(timing, config)) && 0) ||
    (config.effects.indexOf('slide')>=0 && array.push(...slide(timing, config)) && 0) ||
    (config.effects.indexOf('zoom')>=0 && array.push(...zoom(timing, config)) && 0)
  ) || array
}

export function upgradeComponent(component, animations?){
  const annots = window['Reflect'].getMetadata("annotations", component)
  annots[0].animations = annots[0].animations || []
  annots[0].animations.push.apply(annots[0].animations, animations||getFxArray())
}

export function selectFx(args, effectList){
  const array = []
  args.forEach(v=>{
    return array.push( processSelect(v, menu[v], effectList) )
  })
  return array
}

/*export const easeArray = [
  {name:'Ease', value:'ease'},
  {name:'EaseIn', value:'ease-in'},
  {name:'EaseOut', value:'ease-out'},
  {name:'EaseInOut', value:'ease-in-out'}
]*/
export function getFxArray(){
  return [
    processSelect("absoluteSwap100", menu["absoluteSwap100"] ),
    processSelect("absoluteSwap200", menu["absoluteSwap200"] ),
    processSelect("absoluteSwap300", menu["absoluteSwap300"] ),
    processSelect("absoluteSwap400", menu["absoluteSwap400"] ),
    processSelect("absoluteSwap500", menu["absoluteSwap500"] ),
    processSelect("absoluteSwap600", menu["absoluteSwap600"] ),
    processSelect("absoluteSwap700", menu["absoluteSwap700"] ),
    processSelect("absoluteSwap800", menu["absoluteSwap800"] ),
    processSelect("absoluteSwap900", menu["absoluteSwap900"] ),
    processSelect("absoluteSwap1000", menu["absoluteSwap1000"] ),
    processSelect("absoluteSwap1500", menu["absoluteSwap1500"] ),
    processSelect("absoluteSwap2000", menu["absoluteSwap2000"] ),
    processSelect("100", menu["100"] ),
    processSelect("200", menu["200"] ),
    processSelect("300", menu["300"] ),
    processSelect("400", menu["400"] ),
    processSelect("500", menu["500"] ),
    processSelect("600", menu["600"] ),
    processSelect("700", menu["700"] ),
    processSelect("800", menu["800"] ),
    processSelect("900", menu["900"] ),
    processSelect("1000", menu["1000"] ),
    processSelect("1500", menu["1500"] ),
    processSelect("2000", menu["2000"] )
  ]
}

export let absSwapClone = {name:null, duration:null, whileStyle:null}

export function processSelect(name, config, effectArray?:Array<string>){
  return animateConfig(name, config)
}

export function upgradeComponents(array, animations?){
  for(let x=array.length-1; x >= 0; --x){
    upgradeComponent(array[x], animations)
  }
}
