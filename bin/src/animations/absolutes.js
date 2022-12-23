"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.triggers = void 0;
var animations_1 = require("@angular/animations");
var abDef = {
    position: '{{ position }}',
    //top      : '0',
    width: '100%',
    overflow: 'hidden'
    //,border:'1px solid blue'
};
var abKeyFrames = [
    (0, animations_1.style)(__assign({ offset: 0 }, abDef)),
    (0, animations_1.style)(__assign({ offset: .999 }, abDef)),
    //ensure absolute not left on
    (0, animations_1.style)({
        offset: 1
    })
];
var params = {
    time: '200ms 0ms linear',
    position: 'absolute'
};
var absoluteOutKids = (0, animations_1.trigger)('absoluteOutKids', [
    (0, animations_1.transition)('* <=> *', [
        (0, animations_1.group)([
            (0, animations_1.query)(':leave', [
                (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(abKeyFrames))
            ], { optional: true })
            //,animateChild()
        ])
    ], { params: params })
]);
var absoluteInKids = (0, animations_1.trigger)('absoluteInKids', [
    (0, animations_1.transition)('* <=> *', [
        (0, animations_1.group)([
            (0, animations_1.query)(':enter', [
                (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(abKeyFrames))
            ], { optional: true })
        ])
    ], { params: params })
]);
var absoluteKids = (0, animations_1.trigger)('absoluteKids', [
    (0, animations_1.transition)('* <=> *', [
        (0, animations_1.group)([
            (0, animations_1.query)(':animating', [
                (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(abKeyFrames))
            ], { optional: true }),
            (0, animations_1.query)(':leave', [
                (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(abKeyFrames))
            ], { optional: true }),
            (0, animations_1.query)(':enter', [
                (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(abKeyFrames))
            ], { optional: true })
        ])
    ], { params: params })
]);
var absoluteInOut = (0, animations_1.trigger)('absoluteInOut', [
    (0, animations_1.transition)('* <=> *', [
        (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(abKeyFrames))
    ], { params: params })
]);
exports.triggers = [
    absoluteInOut,
    absoluteKids,
    absoluteInKids,
    absoluteOutKids
];
