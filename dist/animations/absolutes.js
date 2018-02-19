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
var index_1 = require("../index");
var helper_1 = require("./helper");
function triggers(config) {
    if (config === void 0) { config = {}; }
    var time = index_1.getConfigTiming(config);
    var abDef = {
        position: 'absolute',
        width: '100%',
        overflow: 'hidden'
    };
    var abKeyFrames = [
        helper_1.stylize(__assign({ offset: 0 }, abDef), config),
        helper_1.stylize(__assign({ offset: 1 }, abDef), config)
    ];
    var params = {
        time: '200ms 0ms linear',
        position: 'absolute'
    };
    var absoluteOut = animations_1.trigger('absoluteOut', [
        animations_1.transition('* <=> *', [
            animations_1.group([
                animations_1.query(':leave', [
                    animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
                ], { optional: true })
            ])
        ], { params: params })
    ]);
    var absoluteIn = animations_1.trigger('absoluteIn', [
        animations_1.transition('* <=> *', [
            animations_1.group([
                animations_1.query(':enter', [
                    animations_1.animate('{{ time }}', animations_1.keyframes(abKeyFrames))
                ], { optional: true })
            ])
        ], { params: params })
    ]);
    var absoluteInOut = animations_1.trigger('absoluteInOut', [
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
    return [absoluteInOut, absoluteIn, absoluteOut];
}
exports.triggers = triggers;
//# sourceMappingURL=absolutes.js.map