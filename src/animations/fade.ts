import {
  //keyframes,
  AnimationTriggerMetadata,
  //state,
  style,
  //transition,
  //animate,
  trigger
} from '@angular/animations';

//import { getConfigTiming } from "../helpers"
//import { fxConfig } from "../fxTypes"

import {
  inTransition,
  outTransition,
  inOutTransitions,
  childInOutTransitions,
  //stylize,
  childInOutTransition
} from "./helper"

const inStyles = [
  style({opacity: 0, offset: 0}),
  style({opacity: 1, offset: 1})
]

const outStyles = [
  style({opacity: 1, offset: 0}),
  style({opacity: 0, offset: 1})
]

const inUpStyles = [
  style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}),
  style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outUpStyles = [
  style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1})
]

const inDownStyles = [
  style({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}),
  style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outDownStyles = [
  style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1})
]

const inLeftStyles = [
  style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
  style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outLeftStyles = [
  style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1})
]

const inRightStyles = [
  style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
  style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outRightStyles = [
  style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1})
]
 
export const triggers : AnimationTriggerMetadata[] = [
  trigger(
    'fadeIn',
    [inTransition(inStyles)]
  ),
  trigger(
    'fadeOut',
    [outTransition(outStyles)]
  ),
  trigger(
    'fadeInOut',
    inOutTransitions(inStyles,outStyles)
  ),

  trigger(
    'fadeInUp',
    [inTransition(inUpStyles)]
  ),
  trigger(
    'fadeOutUp',
    [outTransition(outUpStyles)]
  ),
  trigger(
    'fadeInOutUp',
    inOutTransitions(inUpStyles, outUpStyles)
  ),

  trigger(
    'fadeInDown',
    [inTransition(inDownStyles)]
  ),
  trigger(
    'fadeOutDown',
    [outTransition(outDownStyles)]
  ),
  trigger(
    'fadeInOutDown',
    inOutTransitions(inDownStyles, outDownStyles)
  ),

  trigger(
    'fadeInLeft',
    [inTransition(inLeftStyles)]
  ),
  trigger(
    'fadeOutLeft',
    [outTransition(outLeftStyles)]
  ),
  trigger(
    'fadeInOutLeft',
    inOutTransitions(inLeftStyles, outLeftStyles)
  ),

  trigger(
    'fadeInRight',
    [inTransition(inRightStyles)]
  ),
  trigger(
    'fadeOutRight',
    [outTransition(outRightStyles)]
  ),
  trigger(
    'fadeInOutRight',
    inOutTransitions(inRightStyles, outRightStyles)
  ),
  
  trigger(
    'fadeInOutKids',
    [childInOutTransition(inStyles,outStyles)]
  ),

  trigger(
    'fadeInOutUpKids',
    childInOutTransitions(inUpStyles,outUpStyles,inDownStyles,outDownStyles)
  ),

  trigger(
    'fadeInOutDownKids',
    childInOutTransitions(inDownStyles,outDownStyles,inUpStyles,outUpStyles)
  ),

  trigger(
    'fadeInOutLeftKids',
    childInOutTransitions(inLeftStyles,outLeftStyles,inRightStyles,outRightStyles)
  ),

  trigger(
    'fadeInOutRightKids',
    childInOutTransitions(inRightStyles,outRightStyles,inLeftStyles,outLeftStyles)
  )
]