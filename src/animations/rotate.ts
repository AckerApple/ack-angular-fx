import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';

import { defaultOptions, stylize, combo } from "./helper"

export function rotate(timing: string, options): AnimationMetadata[]{
  return rotateOptions(combo(timing, options))
}

export function rotateOptions(options): AnimationMetadata[]{
  return [
    state('rotateOut', style({
      display: 'none'
    })),
    state('rotateOutDownLeft', style({
      display: 'none'
    })),
    state('rotateOutDownRight', style({
      display: 'none'
    })),
    state('rotateOutUpLeft', style({
      display: 'none'
    })),
    state('rotateOutUpRight', style({
      display: 'none'
    })),
    transition(options.options.igniter+' => rotateIn', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0}, options.options),
        stylize({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}, options.options)
      ]))
    ]),
    transition('rotateIn => void, '+options.options.igniter+' => rotateOut', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}, options.options),
        stylize({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => rotateInDownLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}, options.options),
        stylize({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}, options.options)
      ]))
    ]),
    transition('rotateInDownLeft => void, '+options.options.igniter+' => rotateOutDownLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}, options.options),
        stylize({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => rotateInDownRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}, options.options),
        stylize({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}, options.options)
      ]))
    ]),
    transition('rotateInDownRight => void, '+options.options.igniter+' => rotateOutDownRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}, options.options),
        stylize({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => rotateInUpLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}, options.options),
        stylize({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}, options.options)
      ]))
    ]),
    transition('rotateInUpLeft => void, '+options.options.igniter+' => rotateOutUpLeft', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}, options.options),
        stylize({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1}, options.options)
      ]))
    ]),
    transition(options.options.igniter+' => rotateInUpRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}, options.options),
        stylize({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}, options.options)
      ]))
    ]),
    transition('rotateInUpRight => void, '+options.options.igniter+' => rotateOutUpRight', [
      animate(options.timing, keyframes([
        stylize({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}, options.options),
        stylize({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1}, options.options)
      ]))
    ])
  ]
};