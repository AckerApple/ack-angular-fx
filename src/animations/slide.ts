/*import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';*/
import { keyframes, AnimationMetadata, state, style, transition, animate } from '@angular/animations';

import { defaultOptions, stylize, combo } from "./helper"

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
        stylize({transform: 'translate3d(0, -100%, 0)', offset: 0}, options.options),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('slideInDown => void, '+options.options.igniter+' => slideOutDown', [
      animate(options.timing, keyframes([
        stylize({transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'translate3d(0, 100%, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideInLeft', [
      animate(options.timing, keyframes([
        stylize({transform: 'translate3d(-100%, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('slideInLeft => void, '+options.options.igniter+' => slideOutRight', [
      animate(options.timing, keyframes([
        stylize({transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'translate3d(100%, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideInRight', [
      animate(options.timing, keyframes([
        stylize({transform: 'translate3d(100%, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('slideInRight => void, '+options.options.igniter+' => slideOutLeft', [
      animate(options.timing, keyframes([
        stylize({transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'translate3d(-100%, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => slideInUp', [
      animate(options.timing, keyframes([
        stylize({transform: 'translate3d(0, 100%, 0)', offset: 0}, options.options),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('slideInUp => void, '+options.options.igniter+' => slideOutUp', [
      animate(options.timing, keyframes([
        stylize({transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'translate3d(0, -100%, 0)', offset: 1}, options.options)
      ]))
    ])
  ]
};