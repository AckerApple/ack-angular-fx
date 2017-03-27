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

export function bounce(timing: string, options): AnimationMetadata[]{
  return bounceOptions(combo(timing, options))
}

export function bounceOptions(options): AnimationMetadata[]{
  return [
    state('bounceOut', style({
      display: 'none'
    })),
    state('bounceOutDown', style({
      display: 'none'
    })),
    state('bounceOutLeft', style({
      display: 'none'
    })),
    state('bounceOutRight', style({
      display: 'none'
    })),
    state('bounceOutUp', style({
      display: 'none'
    })),
    transition(options.options.igniter+' => bounceIn', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0}, options.options),
        stylize({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}, options.options),
        stylize({transform: 'scale3d(.9, .9, .9)', offset: 0.4}, options.options),
        stylize({transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6}, options.options),
        stylize({transform: 'scale3d(.97, .97, .97)', offset: 0.8}, options.options),
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1}, options.options)
      ]))
    ]),
    transition('bounceIn => void, '+options.options.igniter+' => bounceOut', [
      animate(options.timing, keyframes([
        stylize({transform: 'scale3d(.9, .9, .9)', offset: 0.2}, options.options),
        stylize({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5}, options.options),
        stylize({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1}, options.options),
      ]))
    ]),
    transition(options.options.igniter+' => bounceInDown', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6}, options.options),
        stylize({transform: 'translate3d(0, -10px, 0)', offset: 0.75}, options.options),
        stylize({transform: 'translate3d(0, 5px, 0)', offset: 0.9}, options.options),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('bounceInDown => void, '+options.options.igniter+' => bounceOutDown', [
      animate(options.timing, keyframes([
        stylize({transform: 'translate3d(0, 10px, 0)', offset: 0.2}, options.options),
        stylize({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5}, options.options),
        stylize({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => bounceInLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6}, options.options),
        stylize({transform: 'translate3d(-10px, 0, 0)', offset: 0.75}, options.options),
        stylize({transform: 'translate3d(5px, 0, 0)', offset: 0.9}, options.options),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('bounceInLeft => void, '+options.options.igniter+' => bounceOutRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2}, options.options),
        stylize({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => bounceInRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6}, options.options),
        stylize({transform: 'translate3d(10px, 0, 0)', offset: 0.75}, options.options),
        stylize({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}, options.options),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('bounceInRight => void, '+options.options.igniter+' => bounceOutLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2}, options.options),
        stylize({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => bounceInUp', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6}, options.options),
        stylize({transform: 'translate3d(0, 10px, 0)', offset: 0.75}, options.options),
        stylize({transform: 'translate3d(0, -5px, 0)', offset: 0.9}, options.options),
        stylize({transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('bounceInUp => void, '+options.options.igniter+' => bounceOutUp', [
      animate(options.timing, keyframes([
        stylize({transform: 'translate3d(0, -10px, 0)', offset: 0.2}, options.options),
        stylize({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5}, options.options),
        stylize({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1}, options.options)
      ]))
    ]
  )
]};