import 'reflect-metadata';

import { trigger, AnimationEntryMetadata } from '@angular/core';

import { fade } from './animations/fade';
import { bounce } from './animations/bounce';
import { rotate } from './animations/rotate';
import { slide } from './animations/slide';
import { zoom } from './animations/zoom';

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
   return animateConfig(config);
};

export function animateConfig(config){
  config = config || {}
  config.duration = config.duration==null ? animateDefaults.duration : config.duration
  config.delay = config.delay==null ? animateDefaults.delay : config.delay
  config.easing = config.easing=null ? animateDefaults.easing : config.easing
  config.stagger = config.stagger=null ? animateDefaults.stagger : config.stagger
  config.name = config.name==null ? animateDefaults.name : config.name
  config.igniter = config.igniter==null ? animateDefaults.igniter : config.igniter
  config.whileStyle = config.whileStyle==null ? animateDefaults.whileStyle : config.whileStyle

  if(config.stagger){
    console.log('ack-angular-fx does not support stagger as of this release')
  }

  let timing: string = [
    typeof(config.duration) === 'number' ? `${config.duration}ms` : config.duration,
    typeof(config.delay) === 'number' ? `${config.delay}ms` : config.delay,
    config.easing
  ].join(' ');

  return trigger(config.name, [
    ...fade(timing, config),
    ...bounce(timing, config),
    ...rotate(timing, config),
    ...slide(timing, config),
    ...zoom(timing, config)
  ]);
};

export const delayArray = [100,200,300,400,500,600,700,800,900,1000,1500,2000]
/*export const easeArray = [
  {name:'Ease', value:'ease'},
  {name:'EaseIn', value:'ease-in'},
  {name:'EaseOut', value:'ease-out'},
  {name:'EaseInOut', value:'ease-in-out'}
]*/

export function upgradeComponent(component, animations?){
  animations = animations || getFxArray()
  const annots = Reflect.getMetadata("annotations", component)
  annots[0].animations = annots[0].animations || []
  annots[0].animations.push.apply(annots[0].animations, fxArray)
}

const fxArray = []
export function getFxArray(){
  if(fxArray.length)return fxArray

  const absSwap = {
    easing:'linear', name:'absoluteSwap', igniter:'void',
    whileStyle:{
      position: 'absolute', width:'100%', 'overflow':'hidden'
    }
  }

  fxArray.push(animateConfig(absSwap))

  let absSwapClone = {name:null, duration:null, whileStyle:null}
  for(let x=delayArray.length-1; x >= 0; --x){
    let n = delayArray[x]

    fxArray.push(
      animateConfig({duration:n, name:n.toString()})
    )

    absSwapClone = Object.assign({name:null, duration:null, whileStyle:null}, absSwap)
    absSwapClone.name = absSwapClone.name+n
    absSwapClone.duration = n
    fxArray.push(
      animateConfig( absSwapClone )
    )
    
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
  }

  return fxArray
}

export function upgradeComponents(array, animations?){
  for(let x=array.length-1; x >= 0; --x){
    upgradeComponent( array[x], animations )
  }
}
