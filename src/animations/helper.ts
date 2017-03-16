import {
  style,
  AnimationStyleMetadata,
  AnimationEntryMetadata,
  AnimationStateDeclarationMetadata
} from '@angular/core';

export function stylize(styleDef, options){
  return style( {...styleDef, ...options.whileStyle} )
}

export function defaultOptions(options={}){
  return {igniter:'*', ...options}
}

export function combo(timing, options){
  return {timing:timing, options:defaultOptions(options)}
}
