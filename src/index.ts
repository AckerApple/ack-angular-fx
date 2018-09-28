export * from "./types"
export * from "./helpers"
export * from "./AckFx.module"

import { getConfigTiming } from "./helpers"

import {
  trigger,
  AnimationTriggerMetadata,
  AnimationStateMetadata,
  AnimationTransitionMetadata
} from '@angular/animations';

import { fxArray } from "./allFx"
export { fxArray } from "./allFx"

import { states as fadeStates } from './animations/fade';
import { bounce } from './animations/bounce';
import { rotate } from './animations/rotate';
import { slide } from './animations/slide';
import { zoom } from './animations/zoom';
import {
  selectedFxMetaData, fxConfig, effectsTypeObject
} from "./types"
export const availEffects:string[] = ['fade','bounce','rotate','slide','zoom']
export const delayArray:number[] = [100,200,300,400,500,600,700,800,900,1000,1500,2000]
export const animateDefaults = {
  //duration   : 500,
  //delay      : 0,
  //easing     : 'linear',
  stagger    : 0,
  name       : 'animate',
  igniter    : '*',
  whileStyle : {},
  effects    : availEffects
}

export const absSwap:fxConfig = {
  easing:'linear', name:'absoluteSwap', igniter:'void',
  whileStyle:{
    position: 'absolute', width:'100%', 'overflow':'hidden'
  }
}

export const menu = {
  absoluteSwap:{duration:500, ...absSwap},
  absoluteSwap100:{duration:100, ...absSwap},
  absoluteSwap200:{duration:200, ...absSwap},
  absoluteSwap300:{duration:300, ...absSwap},
  absoluteSwap400:{duration:400, ...absSwap},
  absoluteSwap500:{duration:500, ...absSwap},
  absoluteSwap600:{duration:600, ...absSwap},
  absoluteSwap700:{duration:700, ...absSwap},
  absoluteSwap800:{duration:800, ...absSwap},
  absoluteSwap900:{duration:900, ...absSwap},
  absoluteSwap1000:{duration:1000, ...absSwap},
  absoluteSwap1500:{duration:1500, ...absSwap},
  absoluteSwap2000:{duration:2000, ...absSwap},
  absoluteSwap2500:{duration:2500, ...absSwap},

  "100":{duration:100},
  "200":{duration:200},
  "300":{duration:300},
  "400":{duration:400},
  "500":{duration:500},
  "600":{duration:600},
  "700":{duration:700},
  "800":{duration:800},
  "900":{duration:900},
  "1000":{duration:1000},
  "1500":{duration:1500},
  "2000":{duration:2000}
}

export function defaultConfig(config){
  return {
    ...animateDefaults,
    ...config
  }
}

/*export function checkStagger(config){
  return (!config.stagger || console.log('ack-angular-fx does not support stagger as of this release')) && config
}*/

export function animateConfig(
  name:string,
  config:fxConfig
) : AnimationTriggerMetadata{
  const dConfig = defaultConfig(config)
  const timing = getConfigTiming(dConfig)
  return createTriggerBy(name, config, timing)
}

export function createTriggerBy(
  name:string,
  config:fxConfig,
  timing:string
) : AnimationTriggerMetadata{
  return trigger(name, stateEffectsByConfig(timing,config))
}

export function effectsArrayToTypes( eArray:string[] ) : effectsTypeObject {
  const ob = {}

  for(let x=availEffects.length-1; x >= 0; --x){
    let fx = availEffects[x]
    if( eArray.indexOf(fx)>=0 ){
      ob[fx] = true
    }
  }

  return ob
}

export function stateEffectsByConfig(
  timing:string,
  config:fxConfig
) : (AnimationStateMetadata|AnimationTransitionMetadata)[] {
  const array = []
  const fxTypes = effectsArrayToTypes( config.effects || availEffects )

  if( fxTypes.fade ){
    array.push(...fadeStates(config))
  }

  if( fxTypes.bounce ){
    array.push(...bounce(timing, config))
  }

  if( fxTypes.rotate ){
    array.push(...rotate(timing, config))
  }

  if( fxTypes.slide ){
    array.push(...slide(timing, config))
  }

  if( fxTypes.zoom ){
    array.push(...zoom(timing, config))
  }

  return array
}

export function upgradeComponent(component, animations?){
  const annots = window['Reflect'].getMetadata("annotations", component)
  if(!annots)return
  
  annots[0].animations = annots[0].animations || []
  
  const fxArr = animations || fxArray
  
  annots[0].animations.push.apply(annots[0].animations, fxArr)
}

export function selectFx(
  args:string[],
  effectList:string[],
  config = <fxConfig>{igniter:'start'}
) : selectedFxMetaData {
  const selectedFx = { states:[], triggers:[] }

  //loop an array like [100,200,"childStag"]
  args.forEach(fxType=>{
    const cloneConfig:fxConfig = {...menu[fxType]}
    const newConfig = {...cloneConfig, ...config}
    const newSelect = processSelect(fxType, newConfig, effectList)
    selectedFx.states.push( newSelect )
  })

  selectedFx.triggers = processTriggerSelect(config, effectList)

  return selectedFx
}

/** Goes into specialized fx files and plucks out the stand alone triggers */
// ---- NOT DONE ----
function processTriggerSelect(config:fxConfig, effectList){
  const fxs = []
  const fxTypes = effectsArrayToTypes( config.effects || availEffects )
  
  fxs.push.apply(fxs, fxArray)
  
  return fxs
}

export function processSelect(
  name:string,
  config:fxConfig,
  effectArray?:string[]
) : AnimationTriggerMetadata{
  config.igniter = config.igniter || 'void'
  return animateConfig(name, config)
}

/*export const easeArray = [
  {name:'Ease', value:'ease'},
  {name:'EaseIn', value:'ease-in'},
  {name:'EaseOut', value:'ease-out'},
  {name:'EaseInOut', value:'ease-in-out'}
]*/


//fxArray + deprecated fxs
export function getFxArray() : AnimationTriggerMetadata[] {
  const allFx = [
    processSelect("absoluteSwap", menu["absoluteSwap400"] ),
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

  allFx.push.apply(allFx, fxArray)

  return allFx
}

export let absSwapClone = {name:null, duration:null, whileStyle:null}

export function upgradeComponents(array, animations?){
  for(let x=array.length-1; x >= 0; --x){
    upgradeComponent(array[x], animations)
  }
}
