//import { style } from '@angular/core';
import { style } from '@angular/animations';

export function stylize(styleDef, options){
  return style( {...styleDef, ...options.whileStyle} )
}

export function defaultOptions(options={}){
  return {igniter:'*', ...options}
}

export function combo(timing, options){
  return {timing:timing, options:defaultOptions(options)}
}
