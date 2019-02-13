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
  inTransition,
  outTransition,
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

const fxInKids = trigger('rotateInOutKids',
  [childInOutTransition(fxInStyles,fxOutStyles)]
)

const inUpLeftKids = trigger(
  'rotateInOutUpLeftKids',
  childInOutTransitions(inUpLeftStyles,outUpLeftStyles,inDownLeftStyles,outDownLeftStyles)
)

const inUpRightKids = trigger(
  'rotateInOutUpRightKids',
  childInOutTransitions(inUpRightStyles,outUpRightStyles,inDownRightStyles,outDownRightStyles)
)

const inDownLeftKids = trigger(
  'rotateInOutDownLeftKids',
  childInOutTransitions(inDownLeftStyles,outDownLeftStyles,inUpLeftStyles,outUpLeftStyles)
)

const inDownRightKids = trigger(
  'rotateInOutDownRightKids',
  childInOutTransitions(inDownRightStyles,outDownRightStyles,inUpRightStyles,outUpRightStyles)
)

export const triggers : AnimationTriggerMetadata[] = [
  trigger('rotateIn',
    [inTransition(fxInStyles)]
  ),
  trigger('rotateOut',
    [outTransition(fxOutStyles)]
  ),
  trigger('rotateInOut',
    inOutTransitions(fxInStyles,fxOutStyles)
  ),
  
  trigger(
    'rotateInUpLeft',
    [inTransition(inUpLeftStyles)]
  ),
  trigger(
    'rotateOutUpLeft',
    [outTransition(outUpLeftStyles)]
  ),
  trigger(
    'rotateInOutUpLeft',
    inOutTransitions(inUpLeftStyles,outUpLeftStyles)
  ),
  
  trigger(
    'rotateInUpRight',
    [inTransition(inUpRightStyles)]
  ),
  trigger(
    'rotateOutUpRight',
    [outTransition(outUpRightStyles)]
  ),
  trigger(
    'rotateInOutUpRight',
    inOutTransitions(inUpRightStyles,outUpRightStyles)
  ),
  
  trigger(
    'rotateInDownLeft',
    [inTransition(inDownLeftStyles)]
  ),
  trigger(
    'rotateOutDownLeft',
    [outTransition(outDownLeftStyles)]
  ),
  trigger(
    'rotateInOutDownLeft',
    inOutTransitions(inDownLeftStyles,outDownLeftStyles)
  ),
  
  trigger(
    'rotateInDownRight',
    [inTransition(inDownRightStyles)]
  ),
  trigger(
    'rotateOutDownRight',
    [outTransition(outDownRightStyles)]
  ),
  trigger(
    'rotateInOutDownRight',
    inOutTransitions(inDownRightStyles,outDownRightStyles)
  ),

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