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
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var abDef = {
    position: '{{ position }}',
    width: '100%',
    overflow: 'hidden'
};
var abKeyFrames = [
    animations_1.style(__assign({ offset: 0 }, abDef)),
    animations_1.style(__assign({ offset: .999 }, abDef)),
    animations_1.style({
        offset: 1
    })
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
            animations_1.query(':animating', [
                animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
            ], { optional: true }),
            animations_1.query(':leave', [
                animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
            ], { optional: true }),
            animations_1.query(':enter', [
                animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
            ], { optional: true })
        ])
    ], { params: params })
]);
var absoluteInOut = animations_1.trigger('absoluteInOut', [
    animations_1.transition('* <=> *', [
        animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
    ], { params: params })
]);
exports.triggers = [
    absoluteInOut,
    absoluteKids,
    absoluteInKids,
    absoluteOutKids
];
