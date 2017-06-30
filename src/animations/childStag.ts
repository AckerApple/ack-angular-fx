import { trigger, AnimationTriggerMetadata, AnimationMetadata, transition, query, stagger, animateChild } from '@angular/animations';

/*
    trigger('childStag', [
      transition('* => *', [
        query('.childFx', [
          stagger(100, [animateChild()])
        ], {optional:true, limit:500})
      ])
      //,query('*', animateChild())
    ]),
*/

export const childStags = [
  trigger('childStag50', [
    transition('* => *', [
      query('.childFx', [
        stagger(50, [animateChild()])
      ], {optional:true, limit:500})
    ])
  ]),
  trigger('childStag', [
    transition('* => *', [
      query('.childFx', [
        stagger(100, [animateChild()])
      ], {optional:true, limit:500})
    ])
  ]),
  trigger('childStag200', [
    transition('* => *', [
      query('.childFx', [
        stagger(200, [animateChild()])
      ], {optional:true, limit:500})
    ])
  ]),
  trigger('childStag300', [
    transition('* => *', [
      query('.childFx', [
        stagger(300, [animateChild()])
      ], {optional:true, limit:500})
    ])
  ]),
  trigger('childStag400', [
    transition('* => *', [
      query('.childFx', [
        stagger(400, [animateChild()])
      ], {optional:true, limit:500})
    ])
  ]),
  trigger('childStag500', [
    transition('* => *', [
      query('.childFx', [
        stagger(500, [animateChild()])
      ], {optional:true, limit:500})
    ])
  ])
]
