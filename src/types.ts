import { AnimationTriggerMetadata } from '@angular/animations';

export interface selectedFxMetaData{
  triggers : AnimationTriggerMetadata[]
  states   : AnimationTriggerMetadata[]
}

export interface whileStyle{
  position : string
  width    : string
  overflow : string
}

export interface fxConfig{
  name?       : string
  stagger?    : number
  igniter?    : '*'|string,
  duration?   : number,
  effects?    : string[]
  delay?      : number
  easing?     : 'linear'|string
  whileStyle? : whileStyle
}

export interface effectsTypeObject{
  fade?   : boolean
  bounce? : boolean
  rotate? : boolean
  slide?  : boolean
  zoom?   : boolean
}
