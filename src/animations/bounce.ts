import {
  trigger,
  keyframes,
  AnimationMetadata,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

import {
  inTransition,
  outTransition,
  inOutTransitions,
  childInOutTransitions,
  childInOutTransition,
  stylize,
  combo
} from "./helper"

const fxInStyles = [
  style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0}),
  style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
  style({transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
  style({transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6}),
  style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
  style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
]

const fxOutStyles = [
  style({transform: 'scale3d(.9, .9, .9)', offset: 0.2}),
  style({opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5}),
  style({opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1}),
]

const inUpStyles = [
  style({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0}),
  style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6}),
  style({transform: 'translate3d(0, 10px, 0)', offset: 0.75}),
  style({transform: 'translate3d(0, -5px, 0)', offset: 0.9}),
  style({transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outUpStyles = [
  style({transform: 'translate3d(0, -10px, 0)', offset: 0.2}),
  style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5}),
  style({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1})
]

const inDownStyles = [
  style({opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0}),
  style({opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6}),
  style({transform: 'translate3d(0, -10px, 0)', offset: 0.75}),
  style({transform: 'translate3d(0, 5px, 0)', offset: 0.9}),
  style({transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outDownStyles = [
  style({transform: 'translate3d(0, 10px, 0)', offset: 0.2}),
  style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5}),
  style({opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1})
]

const inLeftStyles = [
  style({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0}),
  style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6}),
  style({transform: 'translate3d(-10px, 0, 0)', offset: 0.75}),
  style({transform: 'translate3d(5px, 0, 0)', offset: 0.9}),
  style({transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outLeftStyles = [
  style({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2}),
  style({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1})
]

const inRightStyles = [
  style({opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0}),
  style({opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6}),
  style({transform: 'translate3d(10px, 0, 0)', offset: 0.75}),
  style({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}),
  style({transform: 'translate3d(0, 0, 0)', offset: 1})
]

const outRightStyles = [
  style({opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2}),
  style({opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1})
]

const inFxKids = trigger(
  'bounceInOutKids', 
  [childInOutTransition(fxInStyles,fxOutStyles)]
)

const inUpKids = trigger(
  'bounceInOutUpKids',
  childInOutTransitions(inUpStyles,outUpStyles,inDownStyles,outDownStyles)
)

const inDownKids = trigger(
  'bounceInOutDownKids',
  childInOutTransitions(inDownStyles,outDownStyles,inUpStyles,outUpStyles)
)

const inLeftKids = trigger(
  'bounceInOutLeftKids',
  childInOutTransitions(inLeftStyles,outLeftStyles,inRightStyles,outRightStyles)
)

const inRightKids = trigger(
  'bounceInOutRightKids', 
  childInOutTransitions(inRightStyles,outRightStyles,inLeftStyles,outLeftStyles)
)

export const triggers : AnimationTriggerMetadata[] = [
  trigger(
    'bounceIn',
    [inTransition(fxInStyles)]
  ),
  trigger(
    'bounceOut',
    [outTransition(fxOutStyles)]
  ),
  trigger(
    'bounceInOut',
    inOutTransitions(fxInStyles,fxOutStyles)
  ),

  trigger(
    'bounceInUp',
    [inTransition(inUpStyles)]
  ),
  trigger(
    'bounceOutUp',
    [outTransition(outUpStyles)]
  ),
  trigger(
    'bounceInOutUp',
    inOutTransitions(inUpStyles,outUpStyles)
  ),

  trigger(
    'bounceInDown',
    [inTransition(inDownStyles)]
  ),
  trigger(
    'bounceOutDown',
    [outTransition(outDownStyles)]
  ),
  trigger(
    'bounceInOutDown',
    inOutTransitions(inDownStyles,outDownStyles)
  ),

  trigger(
    'bounceInLeft',
    [inTransition(inLeftStyles)]
  ),
  trigger(
    'bounceOutLeft',
    [outTransition(outLeftStyles)]
  ),
  trigger(
    'bounceInOutLeft',
    inOutTransitions(inLeftStyles,outLeftStyles)
  ),
  
  trigger(
    'bounceInRight', 
    [inTransition(inRightStyles)]
  ),
  trigger(
    'bounceOutRight', 
    [outTransition(outRightStyles)]
  ),
  trigger(
    'bounceInOutRight', 
    inOutTransitions(inRightStyles,outRightStyles)
  ),

  inFxKids, inUpKids, inDownKids, inLeftKids, inRightKids
]

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