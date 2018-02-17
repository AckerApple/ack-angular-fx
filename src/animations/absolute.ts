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

  const abKeyFrames = [
    stylize({
      position : 'absolute',
      width    : '100%',
      overflow : 'hidden',
      offset   : 0
    }, config),
    stylize({
      position : 'absolute',
      width    : '100%',
      overflow : 'hidden',
      offset   : 1
    }, config)
  ]

  const absoluteOut = trigger('absoluteOut', [
    transition('* <=> *',[
      group([
        query(':leave',[
          animate('{{timing}}',
            keyframes(abKeyFrames)
          )
        ],{optional: true, params:{timing:'200ms 0ms linear'}})
      ],{params:{timing:'200ms 0ms linear'}})
    ])
  ])

  const absoluteIn = trigger('absoluteIn', [
    transition('* <=> *',[
      group([
        query(':enter',[
          animate('{{timing}}',
            keyframes(abKeyFrames)
          )
        ],{optional: true, params:{timing:'200ms 0ms linear'}})
      ],{params:{timing:'200ms 0ms linear'}})
    ])
  ])

  const absoluteInOut = trigger('absoluteInOut', [
    transition('* <=> *',[
      group([
        query(':enter',[
          animate('{{timing}}',
            keyframes(abKeyFrames)
          )
        ],{optional: true, params:{timing:'200ms 0ms linear'}}),
        query(':leave',[
          animate('{{timing}}',
            keyframes(abKeyFrames)
          )
        ],{optional: true, params:{timing:'200ms 0ms linear'}})
      ],{params:{timing:'200ms 0ms linear'}})
    ])
  ])
  
  return [ absoluteInOut, absoluteIn, absoluteOut ]
}