/* NOTE: All the visibility definitions are to ensure staggering works correctly */
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