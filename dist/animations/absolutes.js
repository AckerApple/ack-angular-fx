"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var abDef = {
    position: '{{ position }}',
    width: '100%',
    //height   : '100%',
    overflow: 'hidden'
};
var abKeyFrames = [
    animations_1.style(__assign({ offset: 0 }, abDef)),
    animations_1.style(__assign({ offset: 1 }, abDef))
];
var params = {
    time: '200ms 0ms linear',
    position: 'absolute'
};
var absoluteOutKids = animations_1.trigger('absoluteOutKids', [
    animations_1.transition('* <=> *', [
        animations_1.group([
            animations_1.query(':leave', [
                animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
            ], { optional: true })
        ])
    ], { params: params })
]);
var absoluteInKids = animations_1.trigger('absoluteInKids', [
    animations_1.transition('* <=> *', [
        animations_1.group([
            animations_1.query(':enter', [
                animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
            ], { optional: true })
        ])
    ], { params: params })
]);
var absoluteKids = animations_1.trigger('absoluteKids', [
    animations_1.transition('* <=> *', [
        animations_1.group([
            animations_1.query(':enter', [
                animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
            ], { optional: true }),
            animations_1.query(':leave', [
                animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
            ], { optional: true })
        ])
    ], { params: params })
]);
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
exports.triggers = [
    absoluteKids,
    absoluteInKids,
    absoluteOutKids
];
//# sourceMappingURL=absolutes.js.map