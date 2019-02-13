import {
  keyframes,
  AnimationTriggerMetadata,
  style,
  transition,
  animate,

  query,
  trigger,
  group
} from '@angular/animations';

const abDef = {
  position : '{{ position }}',
  //top      : '0',
  width    : '100%',
  overflow : 'hidden'
  //,border:'1px solid blue'
}

const abKeyFrames = [
  style({
    offset   : 0,
    ...abDef
  }),
  style({
    offset   : .999,
    ...abDef
  }),
  //ensure absolute not left on
  style({
    offset   : 1
  })
]


const params = {
  time:'200ms 0ms linear',
  position:'absolute'
}

const absoluteOutKids = trigger('absoluteOutKids', [
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

const absoluteInKids = trigger('absoluteInKids', [
  transition('* <=> *',[
    group([
      query(':enter',[
        animate('{{ time }}',
          keyframes(abKeyFrames)
        )
      ],{ optional: true })
    ])
  ], {params:params})
])

const absoluteKids = trigger('absoluteKids', [
  transition('* <=> *',[
    group([
      query(':animating',[
        animate('{{ time }}',
          keyframes(abKeyFrames)
        )
      ],{ optional: true }),
      query(':leave',[
        animate('{{ time }}',
          keyframes(abKeyFrames)
        )
      ],{ optional: true }),
      query(':enter',[
        animate('{{ time }}',
          keyframes(abKeyFrames)
        )
      ],{ optional: true })
    ])
  ],{params:params})
])

const absoluteInOut = trigger('absoluteInOut', [
  transition('* <=> *',[
    animate('{{ time }}',
      keyframes(abKeyFrames)
    )
  ],{params:params})
])

export const triggers : AnimationTriggerMetadata[] = [
  absoluteInOut,
  absoluteKids,
  absoluteInKids,
  absoluteOutKids
]
