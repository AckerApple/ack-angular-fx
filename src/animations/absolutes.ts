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

export function triggers( config:fxConfig={} ){
  const time = getConfigTiming( config )
  const abDef = {
    position : 'absolute',
    width    : '100%',
    overflow : 'hidden'
    //,border:'1px solid black'
  }
  
  const abKeyFrames = [
    stylize({
      offset   : 0,
      ...abDef
    }, config),
    stylize({
      offset   : 1,
      ...abDef
    }, config)    
  ]

  const params = {
    time:'200ms 0ms linear',
    position:'absolute'
  }

  const absoluteOut = trigger('absoluteOut', [
    transition('* <=> *',[
      group([
        query(':leave',[
          animate('{{ time }}',
            keyframes(abKeyFrames)
          )
        ],{ optional: true })
        //,animateChild()
      ])
    ], {params:params})
  ])

  const absoluteIn = trigger('absoluteIn', [
    transition('* <=> *',[
      group([
        query(':enter',[
          animate('{{ time }}',
            keyframes(abKeyFrames)
          )
        ],{ optional: true })
        //,animateChild()
      ]
      //,{params:params}
      )
    ]
    , {params:params}
    )
  ])

  const absoluteInOut = trigger('absoluteInOut', [
    transition('* <=> *',[
      group([
        query(':enter',[
          animate('{{ time }}',
            keyframes(abKeyFrames)
          )
        ],{ optional: true }),
        query(':leave',[
          animate('{{ time }}',
            keyframes(abKeyFrames)
          )
        ],{ optional: true })
        //,animateChild()
      ])
    ],{params:params})
  ])
  
  return [ absoluteInOut, absoluteIn, absoluteOut ]
}