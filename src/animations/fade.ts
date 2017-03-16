import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationEntryMetadata,
  AnimationStateDeclarationMetadata,
  AnimationStateTransitionMetadata
} from '@angular/core';

import { defaultOptions, stylize, combo } from "./helper"

export function fade(timing: string, options){
  return fadeOptions(combo(timing, options))
}

export function fadeOptions(options){
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
    transition(options.options.igniter+' => fadeIn', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, offset: 0}, options.options),
        stylize({opacity: 1, offset: 1}, options.options)
      ]))
    ]),
    transition(('fadeIn => void, '+options.options.igniter+' => fadeOut'), [
      animate(options.timing, keyframes([
        stylize({opacity: 1, offset: 0}, options.options),
        stylize({opacity: 0, offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => fadeInDown', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('fadeInDown => void, '+options.options.igniter+' => fadeOutDown', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => fadeInLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('fadeInLeft => void, '+options.options.igniter+' => fadeOutRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => fadeInRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('fadeInRight => void, '+options.options.igniter+' => fadeOutLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => fadeInUp', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}, options.options),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, options.options)
      ]))
    ]),
    transition('fadeInUp => void, '+options.options.igniter+' => fadeOutUp', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, options.options),
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1}, options.options)
      ]))
    ])
  ]
}