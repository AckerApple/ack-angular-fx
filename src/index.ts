import 'reflect-metadata';
//import "web-animations-js"
//import { setDocument } from "web-animations-js"

import { trigger, AnimationEntryMetadata } from '@angular/core';

import { fade } from './animations/fade';
import { bounce } from './animations/bounce';
import { rotate } from './animations/rotate';
import { slide } from './animations/slide';
import { zoom } from './animations/zoom';


/*import { setDocument } from "./web-animations.min"

export function browserSupport(){
  return setDocument(document)
}*/

export const animateDefaults = {
  duration   : 500,
  delay      : 0,
  easing     : 'linear',
  stagger    : 0,
  name       : 'animate',
  igniter    : '*',
  whileStyle : {}
}

export function animateFactory(duration: string|number, delay: string|number, easing: string, stagger: number, name: string){
   const config = {
    duration:duration, 
    delay:delay, 
    easing:easing, 
    stagger:stagger, 
    name:name
   }
   return animateConfig(name,config);
};

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
    //typeof(config.duration) === 'number' ? config.duration+'ms' : config.duration,
    config.duration+'ms',
    //typeof(config.delay) === 'number' ? config.delay+'ms' : config.delay,
    config.delay+'ms',
    config.easing
  ].join(' ')
}

export function createTriggerBy(name, config, timing){
  return trigger(name, [
    ...fade(timing, config),
    ...bounce(timing, config),
    ...rotate(timing, config),
    ...slide(timing, config),
    ...zoom(timing, config)
  ])
}

export function upgradeComponent(component){
  const annots = Reflect.getMetadata("annotations", component)
  annots[0].animations = annots[0].animations || []
  annots[0].animations.push.apply(annots[0].animations, getFxArray())
}

export function selectFx(...args){
  const array = [animateConfig(absSwap.name, absSwap)]
  args.forEach(v=>{
    const a = processEachDelay(v)
    return array.push(...a) //[...array, ...a][a[0],a[1]]
  })
  return array
}

export const absSwap = {
  easing:'linear', name:'absoluteSwap', igniter:'void',
  whileStyle:{
    position: 'absolute', width:'100%', 'overflow':'hidden'
  }
}

export const delayArray = [100,200,300,400,500,600,700,800,900,1000,1500,2000]
/*export const easeArray = [
  {name:'Ease', value:'ease'},
  {name:'EaseIn', value:'ease-in'},
  {name:'EaseOut', value:'ease-out'},
  {name:'EaseInOut', value:'ease-in-out'}
]*/

export function getFxArray(){
  return [
    animateConfig(absSwap.name, absSwap),
    //...delayArray.map(processEachDelay)
    ...processEachDelay('100'),
    ...processEachDelay('200'),
    ...processEachDelay('300'),
    ...processEachDelay('400'),
    ...processEachDelay('500'),
    ...processEachDelay('600'),
    ...processEachDelay('700'),
    ...processEachDelay('800'),
    ...processEachDelay('900'),
    ...processEachDelay('1000'),
    ...processEachDelay('1500'),
    ...processEachDelay('2000')
  ]
}

export let absSwapClone = {name:null, duration:null, whileStyle:null}
export function processEachDelay(n){
  return [
    animateConfig(n,{duration:n, name:n})
    ,animateConfig('absoluteSwap'+n,{
      name:null, duration:null, whileStyle:null,
      ...absSwap,
      ...{name:'absoluteSwap'+n, duration:n}
    })
  ]
}
  /* Experimental ease references

    for(let eIndex=easeArray.length-1; eIndex >= 0; --eIndex){
      let ease = easeArray[eIndex]

      fxArray.push(
        animateConfig({duration:n, name:n+ease.name, ease:ease.value})
      )

      absSwapClone = Object.assign({name:null, duration:null, whileStyle:null}, absSwap)
      absSwapClone.name = absSwapClone.name+n+ease.name
      absSwapClone.duration = n
      absSwapClone.ease = ease.value
      fxArray.push(
        animateConfig( absSwapClone )
      )
    }
  */

export function upgradeComponents(array){
  for(let x=array.length-1; x >= 0; --x){
    upgradeComponent( array[x] )
  }
}
