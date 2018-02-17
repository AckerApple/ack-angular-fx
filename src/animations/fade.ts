import {
  animation,
  keyframes,
  AnimationTransitionMetadata,
  AnimationTriggerMetadata,
  AnimationStyleMetadata,
  AnimationStateMetadata,
  AnimationMetadata,
  state,
  style,
  transition,
  animate,

  query,
  trigger,
  group,
  animateChild
} from '@angular/animations';

import { getConfigTiming, fxConfig } from "../index"
import { fxConfigCombo, defaultOptions, stylize, combo } from "./helper"

export function triggers( config:fxConfig ){
  const timing = getConfigTiming( config )
  const params = {timing:'200ms 0ms linear'}
  
  const fadeIn = trigger('fadeIn', [
    transition('* <=> *',[
      group([
        query(':enter',[
          animate('{{timing}}',
            keyframes([
              stylize({opacity: 0, offset: 0}, config),
              stylize({opacity: 1, offset: 1}, config)
            ])
          )
        ],{ optional: true, params:params }),
        query(':leave',[
          animate('{{timing}}',
            keyframes([
              stylize({opacity: 1, offset: 0}, config),
              stylize({opacity: 0, offset: 1}, config)
            ])
          )
        ],{ optional: true, params:params })
      ])
    ])
  ])

  const fadeInUpGroup = group([
    query(':enter',[
      animate('{{timing}}',
        keyframes([
          stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}, config),
          stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
        ])
      )
    ],{ optional: true, params:params }),
    query(':leave',[
      animate('{{timing}}',
        keyframes([
          stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
          stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1}, config)
        ])
      )
    ],{ optional: true, params:params })
  ])

  const fadeInLeftGroup = group([
    query(':enter',[
      animate('{{timing}}',
        keyframes([
          stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}, config),
          stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
        ])
      )
    ],{ optional: true, params:params }),
    query(':leave',[
      animate('{{timing}}',
        keyframes([
          stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
          stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1}, config)
        ])
      )
    ],{ optional: true, params:params })
  ])

  const fadeInRightGroup = group([
    query(':enter',[
      animate('{{timing}}',
        keyframes([
          stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}, config),
          stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
        ])
      )
    ],{ optional: true, params:params }),
    query(':leave',[
      animate('{{timing}}',
        keyframes([
          stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
          stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1}, config)
        ])
      )
    ],{ optional: true, params:params })
  ])

  const fadeInDownGroup = group([
    query(':enter',[
      animate('{{timing}}',
        keyframes([
          stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}, config),
          stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
        ])
      )
    ],{ optional: true, params:params }),
    query(':leave',[
      animate('{{timing}}',
        keyframes([
          stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
          stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1}, config)
        ])
      )
    ],{ optional: true, params:params })
  ])

  const fadeInUp = trigger('fadeInUp', [
    transition('* <=> *, * => 1, * => true',[ fadeInUpGroup ], {params:params}),
    transition('void => *, * => 0, * => false',[ fadeInDownGroup ], {params:params})
  ])

  const fadeInLeft = trigger('fadeInLeft', [
    transition('* <=> *, * => 1, * => true',[ fadeInLeftGroup ], {params:params}),
    transition('void => *, * => 0, * => false',[ fadeInRightGroup ], {params:params})
  ])

  const fadeInRight = trigger('fadeInRight', [
    transition('* <=> *, * => 1, * => true',[ fadeInRightGroup ], {params:params}),
    transition('void => *, * => 0, * => false',[ fadeInLeftGroup ], {params:params})
  ])

  const fadeInDown = trigger('fadeInDown', [
    transition('* <=> *, * => 1, * => true',[ fadeInDownGroup ], {params:params}),
    transition('* => 0, * => false',[ fadeInUpGroup ], {params:params})
  ])
  
  return [ fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight ]
}

export function states(config:fxConfig){
  const timing = getConfigTiming( config )
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
    transition(config.igniter+' => fadeIn', [
      animate(timing, keyframes([
        stylize({opacity: 0, offset: 0}, config),
        stylize({opacity: 1, offset: 1}, config)
      ]))
    ]),
    transition(('fadeIn => void, '+config.igniter+' => fadeOut'), [
      animate(timing, keyframes([
        stylize({opacity: 1, offset: 0}, config),
        stylize({opacity: 0, offset: 1}, config)
      ]))
    ]),
    transition(config.igniter+' => fadeInDown', [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0}, config),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition('fadeInDown => void, '+config.igniter+' => fadeOutDown', [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1}, config)
      ]))
    ]),
    transition(config.igniter+' => fadeInLeft', [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0}, config),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition('fadeInLeft => void, '+config.igniter+' => fadeOutRight', [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition(config.igniter+' => fadeInRight', [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0}, config),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition('fadeInRight => void, '+config.igniter+' => fadeOutLeft', [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
        stylize({opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition(config.igniter+' => fadeInUp', [
      animate(timing, keyframes([
        stylize({opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0}, config),
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1}, config)
      ]))
    ]),
    transition('fadeInUp => void, '+config.igniter+' => fadeOutUp', [
      animate(timing, keyframes([
        stylize({opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0}, config),
        stylize({opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1}, config)
      ]))
    ])
  ]
}