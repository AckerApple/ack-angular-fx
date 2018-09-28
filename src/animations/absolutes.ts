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
  width    : '100%',
  overflow : 'hidden'
}

const abKeyFrames = [
  style({
    offset   : 0,
    ...abDef
  }),
  style({
    offset   : 1,
    ...abDef
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
      //,animateChild()
    ]
    //,{params:params}
    )
  ]
  , {params:params}
  )
])

const absoluteKids = trigger('absoluteKids', [
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

const absoluteInOut = trigger('absoluteInOut', [
  transition('* <=> *',[
    animate('{{ time }}',
      keyframes(abKeyFrames)
    )
  ],{params:params})
])

/*const relativeWrap = trigger('relativeWrap', [
  transition('* <=> *',[
    group([
      query(':self',[
        animate('{{ time }}',
          keyframes([
            style({border:'1px solid red', position:'relative', overflow:'hidden', offset:0}),
            style({border:'1px solid red', position:'relative', overflow:'hidden', offset:1})
          ])
        )
      ]),
      query('@absoluteKids, @absoluteInKids, @absoluteOutKids',[
        animate('{{ time }}',
          keyframes([
            style({width:'100%', height:'100%', offset:0}),
            style({width:'100%', height:'100%', offset:1})
          ])
        )
      ],{ optional: true })
    ])
  ],{params:params})
])*/

export const triggers : AnimationTriggerMetadata[] = [
  absoluteInOut,
  absoluteKids,
  absoluteInKids,
  absoluteOutKids
  //,relativeWrap
]
