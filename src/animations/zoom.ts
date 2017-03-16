import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';

import { defaultOptions, stylize, combo } from "./helper"

export function zoom(timing: string, options): AnimationMetadata[]{
  return zoomOptions(combo(timing, options))
}

export function zoomOptions(options): AnimationMetadata[]{
  return [
    state('zoomOut', style({
      display: 'none'
    })),
    state('zoomOutDown', style({
      display: 'none'
    })),
    state('zoomOutLeft', style({
      display: 'none'
    })),
    state('zoomOutRight', style({
      display: 'none'
    })),
    state('zoomOutUp', style({
      display: 'none'
    })),
    transition(options.options.igniter+' => zoomIn', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1}, options.options)
      ]))
    ]),
    transition('zoomIn => void, '+options.options.igniter+' => zoomOut', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0}, options.options),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => zoomInDown', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6}, options.options),
        stylize({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('zoomInDown => void, '+options.options.igniter+' => zoomOutDown', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4}, options.options),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => zoomInLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}, options.options),
        stylize({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('zoomInLeft => void, '+options.options.igniter+' => zoomOutRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}, options.options),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => zoomInRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}, options.options),
        stylize({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('zoomInRight => void, '+options.options.igniter+' => zoomOutLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}, options.options),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => zoomInUp', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6}, options.options),
        stylize({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('zoomInUp => void, '+options.options.igniter+' => zoomOutUp', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4}, options.options),
        stylize({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1}, options.options)
      ]))
    ])
  ]
};