import {
  animation,
  keyframes,
  AnimationTransitionMetadata,
  AnimationTriggerMetadata,
  AnimationGroupMetadata,
  AnimationStyleMetadata,
  AnimationStateMetadata,
  AnimationMetadata,
  state,
  style,
  transition,
  animate,

  query,
  trigger,
  group,
  animateChild
} from '@angular/animations';

import { getConfigTiming, fxConfig } from "../index"

import {
  inOutTransitions,
  childInOutTransitions,
  fxConfigCombo,
  defaultOptions,
  stylize,
  combo,
  childInOutTransition,
  inOutGroupQueryByStyles
} from "./helper"

export function triggers() : AnimationTriggerMetadata[] {  
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

  const inLeftStyles=[
    style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}),
    style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
  ]

  const outLeftStyles=[
    style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
    style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1})
  ]

  const fxIn = trigger(
    'fadeIn',
    inOutTransitions(inStyles,outStyles)
  )

  const inUp = trigger(
    'fadeInUp',
    inOutTransitions(inUpStyles, outUpStyles)
  )

  const inDown = trigger(
    'fadeInDown',
    inOutTransitions(inDownStyles, outDownStyles)
  )
 
  const inLeft = trigger(
    'fadeInLeft',
    inOutTransitions(inLeftStyles, outLeftStyles)
  )

  const inRightStyles = [
    style({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}),
    style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1})
  ]

  const outRightStyles = [
    style({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}),
    style({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1})
  ]

  const inRight = trigger(
    'fadeInRight',
    inOutTransitions(inRightStyles, outRightStyles)
  )

  const fxInKids = trigger(
    'fadeInKids',
    childInOutTransition(inStyles,outStyles)
  )

  const inLeftKids = trigger(
    'fadeInLeftKids',
    childInOutTransitions(inLeftStyles,outLeftStyles,inRightStyles,outRightStyles)
  )

  const inRightKids = trigger(
    'fadeInRightKids',
    childInOutTransitions(inRightStyles,outRightStyles,inLeftStyles,outLeftStyles)
  )

  const inUpKids = trigger(
    'fadeInUpKids',
    childInOutTransitions(inUpStyles,outUpStyles,inDownStyles,outDownStyles)
  )

  const inDownKids = trigger(
    'fadeInDownKids',
    childInOutTransitions(inDownStyles,outDownStyles,inUpStyles,outUpStyles)
  )
 
  return [
    fxIn, inUp, inDown, inLeft, inRight,
    fxInKids, inUpKids, inDownKids, inLeftKids, inRightKids
   ]
}

export function states(config:fxConfig){
  const time = getConfigTiming( config )
  return [
    state('fadeOut', style({
      display: 'none'
    })),
    state('fadeOutDown', style({
      display: 'none'
    })),
    state('fadeOutLeft', style({
      display: 'none'
    })),
    state('fadeOutRight', style({
      display: 'none'
    })),
    state('fadeOutUp', style({
      display: 'none'
    })),
    transition(config.igniter+' => fadeIn', [
      animate(time, keyframes([
        stylize({opacity: 0, offset: 0}, config),
        stylize({opacity: 1, offset: 1}, config)
      ]))
    ]),
    transition(('fadeIn => void, '+config.igniter+' => fadeOut'), [
      animate(time, keyframes([
        stylize({opacity: 1, offset: 0}, config),
        stylize({opacity: 0, offset: 1}, config)
      ]))
    ]),
    transition(config.igniter+' => fadeInDown', [
      animate(time, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}, config),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition('fadeInDown => void, '+config.igniter+' => fadeOutDown', [
      animate(time, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1}, config)
      ]))
    ]),
    transition(config.igniter+' => fadeInLeft', [
      animate(time, keyframes([
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}, config),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition('fadeInLeft => void, '+config.igniter+' => fadeOutRight', [
      animate(time, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition(config.igniter+' => fadeInRight', [
      animate(time, keyframes([
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}, config),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition('fadeInRight => void, '+config.igniter+' => fadeOutLeft', [
      animate(time, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition(config.igniter+' => fadeInUp', [
      animate(time, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}, config),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition('fadeInUp => void, '+config.igniter+' => fadeOutUp', [
      animate(time, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1}, config)
      ]))
    ])
  ]
}