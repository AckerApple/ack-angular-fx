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

import {
  inTransition,
  outTransition,
  inOutTransitions,
  childInOutTransitions,
  stylize,
  combo,
  childInOutTransition
} from "./helper"

const inStyles = [
  style({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0}),
  style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
]

const outStyles = [
  style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0}),
  style({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1})
]

const inUpStyles = [
  style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0}),
  style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6}),
  style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
]

const outUpStyles = [
  style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
  style({transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4}),
  style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1})
]

const inDownStyles = [
  style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0}),
  style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6}),
  style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
]

const outDownStyles = [
  style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
  style({transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4}),
  style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1})
]

const inLeftStyles = [
  style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0}),
  style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}),
  style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
]

const outLeftStyles = [
  style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
  style({transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}),
  style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1})
]

const inRightStyles = [
  style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0}),
  style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}),
  style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
]

const outRightStyles = [
  style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
  style({transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}),
  style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1})
]

const fxInKids = trigger('zoomInOutKids',
  [childInOutTransition(inStyles,outStyles)]
)

const inUpKids = trigger(
  'zoomInOutUpKids',
  childInOutTransitions(inUpStyles,outUpStyles,inDownStyles,outDownStyles)
)

const inDownKids = trigger(
  'zoomInOutDownKids',
  childInOutTransitions(inDownStyles,outDownStyles,inUpStyles,outUpStyles)
)

const inLeftKids = trigger(
  'zoomInOutLeftKids',
  childInOutTransitions(inLeftStyles,outLeftStyles,inRightStyles,outRightStyles)
)


const inRightKids = trigger(
  'zoomInOutRightKids',
  childInOutTransitions(inRightStyles,outRightStyles,inLeftStyles,outLeftStyles)
)

export const triggers : AnimationTriggerMetadata[] = [
  trigger('zoomIn',
    [inTransition(inStyles)]
  ), 
  trigger('zoomOut',
    [outTransition(outStyles)]
  ), 
  trigger('zoomInOut',
    inOutTransitions(inStyles,outStyles)
  ), 
  
  trigger(
    'zoomInUp',
    [inTransition(inUpStyles)]
  ),
  trigger(
    'zoomOutUp',
    [outTransition(outUpStyles)]
  ),
  trigger(
    'zoomInOutUp',
    inOutTransitions(inUpStyles,outUpStyles)
  ),
  
  trigger(
    'zoomInDown',
    [inTransition(inDownStyles)]
  ),
  trigger(
    'zoomOutDown',
    [outTransition(outDownStyles)]
  ),
  trigger(
    'zoomInOutDown',
    inOutTransitions(inDownStyles,outDownStyles)
  ),

  trigger(
    'zoomInLeft',
    [inTransition(inLeftStyles)]
  ),
  trigger(
    'zoomOutLeft',
    [outTransition(outLeftStyles)]
  ),
  trigger(
    'zoomInOutLeft',
    inOutTransitions(inLeftStyles,outLeftStyles)
  ),

  trigger(
    'zoomInRight',
    [inTransition(inRightStyles)]
  ),
  trigger(
    'zoomOutRight',
    [outTransition(outRightStyles)]
  ),
  trigger(
    'zoomInOutRight',
    inOutTransitions(inRightStyles,outRightStyles)
  ),
  
  fxInKids, inUpKids, inDownKids, inLeftKids, inRightKids
]

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