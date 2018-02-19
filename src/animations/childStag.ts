import {
  group,
  trigger,
  AnimationTriggerMetadata,
  AnimationMetadata,
  transition,
  query,
  stagger,
  animateChild
} from '@angular/animations';

export const childStags = [
  trigger('childStag50', [
    transition('* => *', [
      query('@*', [
        stagger(50, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag100', [
    transition('* => *', [
      query('@*', [
        stagger(100, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag', [
    transition('* => *', [
      query('@*', [
        stagger(100, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag200', [
    transition('* => *', [
      query('@*', [
        stagger(200, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag300', [
    transition('* => *', [
      query('@*', [
        stagger(300, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag400', [
    transition('* => *', [
      query('@*', [
        stagger(400, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag500', [
    transition('* => *', [
      query('@*', [
        stagger(500, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag600', [
    transition('* => *', [
      query('@*', [
        stagger(600, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag700', [
    transition('* => *', [
      query('@*', [
        stagger(700, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag800', [
    transition('* => *', [
      query('@*', [
        stagger(800, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag900', [
    transition('* => *', [
      query('@*', [
        stagger(900, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag1000', [
    transition('* => *', [
      query('@*', [
        stagger(1000, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag1500', [
    transition('* => *', [
      query('@*', [
        stagger(1500, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag2000', [
    transition('* => *', [
      query('@*', [
        stagger(2000, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ])
]
