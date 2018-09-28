import {
   keyframes,
   AnimationMetadata,
   AnimationTriggerMetadata,
   trigger,
   state,
   style,
   transition,
   animate
 } from '@angular/animations'

import {
  inOutTransitions,
  childInOutTransitions,
  stylize,
  combo,
  childInOutTransition
} from "./helper"


const fxInStyles = [
  style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0}),
  style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
]

const fxOutStyles = [
  style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
  style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 1})
]

const inUpLeftStyles = [
  style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
  style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
]

const outUpLeftStyles = [
  style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
  style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
]

const inUpRightStyles = [
  style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
  style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
]

const outUpRightStyles = [
  style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
  style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
]

const inDownLeftStyles = [
  style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
  style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
]

const outDownLeftStyles = [
  style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
  style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
]

const inDownRightStyles = [
  style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
  style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
]

const outDownRightStyles = [
  style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
  style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
]

const fxIn = trigger('rotateIn',
  inOutTransitions(fxInStyles,fxOutStyles)
)

const fxInKids = trigger('rotateInKids',
  childInOutTransition(fxInStyles,fxOutStyles)
)

const inUpLeft = trigger(
  'rotateInUpLeft',
  inOutTransitions(inUpLeftStyles,outUpLeftStyles)
)

const inUpLeftKids = trigger(
  'rotateInUpLeftKids',
  childInOutTransitions(inUpLeftStyles,outUpLeftStyles,inDownLeftStyles,outDownLeftStyles)
)

const inUpRight = trigger(
  'rotateInUpRight',
  inOutTransitions(inUpRightStyles,outUpRightStyles)
)

const inUpRightKids = trigger(
  'rotateInUpRightKids',
  childInOutTransitions(inUpRightStyles,outUpRightStyles,inDownRightStyles,outDownRightStyles)
)

const inDownLeft = trigger(
  'rotateInDownLeft',
  inOutTransitions(inDownLeftStyles,outDownLeftStyles)
)

const inDownLeftKids = trigger(
  'rotateInDownLeftKids',
  childInOutTransitions(inDownLeftStyles,outDownLeftStyles,inUpLeftStyles,outUpLeftStyles)
)

const inDownRight = trigger(
  'rotateInDownRight',
  inOutTransitions(inDownRightStyles,outDownRightStyles)
)

const inDownRightKids = trigger(
  'rotateInDownRightKids',
  childInOutTransitions(inDownRightStyles,outDownRightStyles,inUpRightStyles,outUpRightStyles)
)

export const triggers : AnimationTriggerMetadata[] = [
  fxIn, inUpLeft, inUpRight, inDownLeft, inDownRight,
  fxInKids, inUpLeftKids, inUpRightKids, inDownLeftKids, inDownRightKids
]

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