"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
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
exports.childStags = [
    animations_1.trigger('childStag50', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(50, [animations_1.animateChild()])
            ], { optional: true, limit: 500 })
        ])
    ]),
    animations_1.trigger('childStag', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(100, [animations_1.animateChild()])
            ], { optional: true, limit: 500 })
        ])
    ]),
    animations_1.trigger('childStag200', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(200, [animations_1.animateChild()])
            ], { optional: true, limit: 500 })
        ])
    ]),
    animations_1.trigger('childStag300', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(300, [animations_1.animateChild()])
            ], { optional: true, limit: 500 })
        ])
    ]),
    animations_1.trigger('childStag400', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(400, [animations_1.animateChild()])
            ], { optional: true, limit: 500 })
        ])
    ]),
    animations_1.trigger('childStag500', [
        animations_1.transition('* => *', [
            animations_1.query('.childFx', [
                animations_1.stagger(500, [animations_1.animateChild()])
            ], { optional: true, limit: 500 })
        ])
    ])
];
//# sourceMappingURL=childStag.js.map