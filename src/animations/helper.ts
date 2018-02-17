//import { style } from '@angular/core';
import { style, AnimationStyleMetadata } from '@angular/animations';
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

export function combo(timing, options:fxConfig):fxConfigCombo{
  return {timing:timing, options:defaultOptions(options)}
}
