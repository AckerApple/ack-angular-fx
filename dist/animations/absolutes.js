"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animations_1 = require("@angular/animations");
const abDef = {
    position: '{{ position }}',
    width: '100%',
    overflow: 'hidden'
};
const abKeyFrames = [
    animations_1.style(Object.assign({ offset: 0 }, abDef)),
    animations_1.style(Object.assign({ offset: .999 }, abDef)),
    animations_1.style({
        offset: 1
    })
];
const params = {
    time: '200ms 0ms linear',
    position: 'absolute'
};
const absoluteOutKids = animations_1.trigger('absoluteOutKids', [
    animations_1.transition('* <=> *', [
        animations_1.group([
            animations_1.query(':leave', [
                animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
            ], { optional: true })
        ])
    ], { params: params })
]);
const absoluteInKids = animations_1.trigger('absoluteInKids', [
    animations_1.transition('* <=> *', [
        animations_1.group([
            animations_1.query(':enter', [
                animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
            ], { optional: true })
        ])
    ], { params: params })
]);
const absoluteKids = animations_1.trigger('absoluteKids', [
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
const absoluteInOut = animations_1.trigger('absoluteInOut', [
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
