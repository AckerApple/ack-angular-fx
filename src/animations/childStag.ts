import {
  trigger,
  transition,
  query,
  stagger,
  animateChild
} from '@angular/animations';

export const childStags = [
  trigger('childStag50', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(50, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag100', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(100, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag', [
    transition('* => *', [
      query(':enter, :leave', [
        //default must be same as all time defaults in individual fx files
        stagger(200, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag200', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(200, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag300', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(300, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag400', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(400, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag500', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(500, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag600', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(600, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag700', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(700, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag800', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(800, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag900', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(900, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag1000', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(1000, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag1500', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(1500, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ]),
  trigger('childStag2000', [
    transition('* => *', [
      query(':enter, :leave', [
        stagger(2000, [animateChild()])
      ], {optional:true, limit:300})
    ])
  ])
]
