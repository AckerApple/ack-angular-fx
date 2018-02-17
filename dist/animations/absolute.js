"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var index_1 = require("../index");
var helper_1 = require("./helper");
function triggers(config) {
    var timing = index_1.getConfigTiming(config);
    var abKeyFrames = [
        helper_1.stylize({
            position: 'absolute',
            width: '100%',
            overflow: 'hidden',
            offset: 0
        }, config),
        helper_1.stylize({
            position: 'absolute',
            width: '100%',
            overflow: 'hidden',
            offset: 1
        }, config)
    ];
    var absoluteOut = animations_1.trigger('absoluteOut', [
        animations_1.transition('* <=> *', [
            animations_1.group([
                animations_1.query(':leave', [
                    animations_1.animate('{{timing}}', animations_1.keyframes(abKeyFrames))
                ], { optional: true, params: { timing: '200ms 0ms linear' } })
            ], { params: { timing: '200ms 0ms linear' } })
        ])
    ]);
    var absoluteIn = animations_1.trigger('absoluteIn', [
        animations_1.transition('* <=> *', [
            animations_1.group([
                animations_1.query(':enter', [
                    animations_1.animate('{{timing}}', animations_1.keyframes(abKeyFrames))
                ], { optional: true, params: { timing: '200ms 0ms linear' } })
            ], { params: { timing: '200ms 0ms linear' } })
        ])
    ]);
    var absoluteInOut = animations_1.trigger('absoluteInOut', [
        animations_1.transition('* <=> *', [
            animations_1.group([
                animations_1.query(':enter', [
                    animations_1.animate('{{timing}}', animations_1.keyframes(abKeyFrames))
                ], { optional: true, params: { timing: '200ms 0ms linear' } }),
                animations_1.query(':leave', [
                    animations_1.animate('{{timing}}', animations_1.keyframes(abKeyFrames))
                ], { optional: true, params: { timing: '200ms 0ms linear' } })
            ], { params: { timing: '200ms 0ms linear' } })
        ])
    ]);
    return [absoluteInOut, absoluteIn, absoluteOut];
}
exports.triggers = triggers;
//# sourceMappingURL=absolute.js.map