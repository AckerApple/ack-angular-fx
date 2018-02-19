"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var index_1 = require("../index");
var helper_1 = require("./helper");
function triggers(config) {
    if (config === void 0) { config = {}; }
    var time = index_1.getConfigTiming(config);
    var params = { time: '200ms 0ms linear' };
    var fxIn = animations_1.trigger('rotateIn', [
        helper_1.inOutTransitionByStyles([
            animations_1.style({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }),
            animations_1.style({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
        ], [
            animations_1.style({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
            animations_1.style({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1 })
        ])
    ]);
    var inUpLeftGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
        animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
        animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
    ]);
    var inUpRightGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
        animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
        animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
    ]);
    var inDownLeftGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
        animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
        animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
    ]);
    var inDownRightGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
        animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
        animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
    ]);
    var inUpLeft = animations_1.trigger('rotateInUpLeft', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inUpLeftGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inDownLeftGroup], { params: params })
    ]);
    var inUpRight = animations_1.trigger('rotateInUpRight', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inUpRightGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inDownRightGroup], { params: params })
    ]);
    var inDownLeft = animations_1.trigger('rotateInDownLeft', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inDownLeftGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inUpLeftGroup], { params: params })
    ]);
    var inDownRight = animations_1.trigger('rotateInDownRight', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inDownRightGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inUpRightGroup], { params: params })
    ]);
    return [fxIn, inUpLeft, inUpRight, inDownLeft, inDownRight];
}
exports.triggers = triggers;
function rotate(timing, options) {
    return rotateOptions(helper_1.combo(timing, options));
}
exports.rotate = rotate;
function rotateOptions(options) {
    return [
        animations_1.state('rotateOut', animations_1.style({
            display: 'none'
        })),
        animations_1.state('rotateOutDownLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('rotateOutDownRight', animations_1.style({
            display: 'none'
        })),
        animations_1.state('rotateOutUpLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('rotateOutUpRight', animations_1.style({
            display: 'none'
        })),
        animations_1.transition(options.options.igniter + ' => rotateIn', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateIn => void, ' + options.options.igniter + ' => rotateOut', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => rotateInDownLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateInDownLeft => void, ' + options.options.igniter + ' => rotateOutDownLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => rotateInDownRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateInDownRight => void, ' + options.options.igniter + ' => rotateOutDownRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => rotateInUpLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateInUpLeft => void, ' + options.options.igniter + ' => rotateOutUpLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => rotateInUpRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateInUpRight => void, ' + options.options.igniter + ' => rotateOutUpRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.rotateOptions = rotateOptions;
;
//# sourceMappingURL=rotate.js.map