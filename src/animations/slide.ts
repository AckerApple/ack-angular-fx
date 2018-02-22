/* NOTE: All the visibility definitions are to ensure staggering works correctly */
import {
  trigger,
  AnimationTriggerMetadata,
  keyframes,
  AnimationMetadata,
  state,
  style,
  transition,
  animate
} from '@angular/animations'

import { getConfigTiming, fxConfig } from "../index"

import {
  inOutTransitions,
  childInOutTransitions,
  fxConfigCombo,
  defaultOptions,
  stylize,
  combo,
  inOutGroupQueryByStyles
} from "./helper"

const inUpStyles = [
  style({visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 0}),
  style({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outUpStyles = [
  style({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1})
]

const inDownStyles = [
  style({visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 0}),
  style({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outDownStyles = [
  style({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1})
]

const inLeftStyles = [
  style({visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 0}),
  style({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outLeftStyles = [
  style({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1})
]

const inRightStyles = [
  style({visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 0}),
  style({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outRightStyles = [
  style({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0}),
  style({visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1})
]

const inUp = trigger(
  'slideInUp',
  inOutTransitions(inUpStyles,outUpStyles)
)

const inUpKids = trigger(
  'slideInUpKids',
  childInOutTransitions(inUpStyles,outUpStyles,inDownStyles,outDownStyles)
)

const inDown = trigger(
  'slideInDown',
  inOutTransitions(inDownStyles,outDownStyles)
)

const inDownKids = trigger(
  'slideInDownKids',
  childInOutTransitions(inDownStyles,outDownStyles,inUpStyles,outUpStyles)
)

const inLeft = trigger(
  'slideInLeft',
  inOutTransitions(inLeftStyles,outLeftStyles)
)

const inLeftKids = trigger(
  'slideInLeftKids',
  childInOutTransitions(inRightStyles,outRightStyles,inLeftStyles,outLeftStyles)
)

const inRight = trigger(
  'slideInRight',
  inOutTransitions(inRightStyles,outRightStyles)
)

const inRightKids = trigger(
  'slideInRightKids',
  childInOutTransitions(inRightStyles,outRightStyles,inLeftStyles,outLeftStyles)
)

export const triggers : AnimationTriggerMetadata[] = [
  inUp, inDown, inLeft, inRight,
  inUpKids, inDownKids, inLeftKids, inRightKids
]

export function slide(timing: string, options): AnimationMetadata[]{
  return slideOptions(combo(timing, options))
}

export function slideOptions(options): AnimationMetadata[]{
  return [
    state('slideOutDown', style({
      display: 'none'
    })),
    state('slideOutLeft', style({
      display: 'none'
    })),
    state('slideOutRight', style({
      display: 'none'
    })),
    state('slideOutUp', style({
      display: 'none'
    })),
    transition(options.options.igniter+' => slideInDown', [
      animate(options.timing, keyframes([
        stylize({visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 0}, options.options),
        stylize({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('slideInDown => void', [
      animate(options.timing, keyframes([
        stylize({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideOutDown', [
      animate(options.timing, keyframes([
        stylize({visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'visible', transform: 'translate3d(0, 100%, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideInLeft', [
      animate(options.timing, keyframes([
        stylize({visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('slideInLeft => void', [
      animate(options.timing, keyframes([
        stylize({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideOutRight', [
      animate(options.timing, keyframes([
        stylize({visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'visible', transform: 'translate3d(100%, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideInRight', [
      animate(options.timing, keyframes([
        stylize({visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('slideInRight => void', [
      animate(options.timing, keyframes([
        stylize({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideOutLeft', [
      animate(options.timing, keyframes([
        stylize({visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'visible', transform: 'translate3d(-100%, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideInUp', [
      animate(options.timing, keyframes([
        stylize({visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 0}, options.options),
        stylize({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('slideInUp => void', [
      animate(options.timing, keyframes([
        stylize({visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideOutUp', [
      animate(options.timing, keyframes([
        stylize({visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({visibility: 'visible', transform: 'translate3d(0, -100%, 0)', offset: 1}, options.options)
      ]))
    ])
  ]
};