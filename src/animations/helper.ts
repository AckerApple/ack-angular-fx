//import { style } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  keyframes,
  group,
  query,
  style,
  AnimationStyleMetadata,
  AnimationTransitionMetadata,
  AnimationGroupMetadata
} from '@angular/animations';
import { fxConfig } from '../index';

export function stylize(styleDef, options){
  return style( {...styleDef, ...options.whileStyle} )
}

export function defaultOptions(options={}){
  return {igniter:'*', ...options}
}

export interface fxConfigCombo{
  timing:string,
  options:fxConfig
}

export function combo(timing, options:fxConfig) : fxConfigCombo{
  return {timing:timing, options:defaultOptions(options)}
}

export function childInOutTransition(
  inStyles:AnimationStyleMetadata[],
  outStyles:AnimationStyleMetadata[]
) : AnimationTransitionMetadata[] {
  const params = {time:'200ms 0ms linear'}

  return [transition(
    '* <=> *',
    [inOutGroupQueryByStyles(inStyles, outStyles)],
    {params:params}
  )]
}

export function inOutGroupQueryByStyles(
  inStyles:AnimationStyleMetadata[],
  outStyles:AnimationStyleMetadata[]
) : AnimationGroupMetadata{
  return group([
    query(':enter',[
      animate('{{ time }}',
        keyframes(inStyles)
      )
    ],{ optional: true }),
    query(':leave',[
      animate('{{ time }}',
        keyframes(outStyles)
      )
    ],{ optional: true })
  ])
}

export function inOutTransitions(
  inStyles:AnimationStyleMetadata[],
  outStyles:AnimationStyleMetadata[]
) : AnimationTransitionMetadata[] {
  const params = {time:'200ms 0ms linear'}
  return [
    transition(
      (from,to)=>to && from==='void' && to!=='void' ? true : false,
      //'void => *',
      [
        animate('{{ time }}',
          keyframes(inStyles)
        )
      ],
      { params:params }
    ),
    transition(
      (from,to)=>from && from!=='void' && to==='void' ? true : false,
      //'* => void',
      [
        animate('{{ time }}',
          keyframes(outStyles)
        )
      ],
      { params:params }
    )
  ]
}

export function childInOutTransitions(
  inStyles:AnimationStyleMetadata[],
  outStyles:AnimationStyleMetadata[],
  backInStyles:AnimationStyleMetadata[],
  backOutStyles:AnimationStyleMetadata[]
){
  const params = {time:'200ms 0ms linear'}
  const group = inOutGroupQueryByStyles(inStyles,outStyles)
  const backGroup = inOutGroupQueryByStyles(backInStyles,backOutStyles)
  
  return [
    transition(
      (from,to)=>to ? true : false,
      [ group ]
      , {params:params}
    ),
    transition(
      (from,to)=>!to ? true : false,
      [ backGroup ]
      , {params:params}
    )
  ]
}
