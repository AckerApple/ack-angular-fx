"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var index_1 = require("../index");
var helper_1 = require("./helper");
function triggers(config) {
    if (config === void 0) { config = {}; }
    var time = index_1.getConfigTiming(config);
    var params = { time: '200ms 0ms linear' };
    var inUpGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 0 }),
        animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1 })
    ]);
    var inDownGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 0 }),
        animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1 })
    ]);
    var inUp = animations_1.trigger('slideInUp', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inUpGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inDownGroup], { params: params })
    ]);
    var inDown = animations_1.trigger('slideInDown', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inDownGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inUpGroup], { params: params })
    ]);
    var inLeftGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
        animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1 })
    ]);
    var inRightGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 0 }),
        animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1 })
    ]);
    var inLeft = animations_1.trigger('slideInLeft', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inLeftGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inRightGroup], { params: params })
    ]);
    var inRight = animations_1.trigger('slideInRight', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inRightGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inLeftGroup], { params: params })
    ]);
    return [inUp, inDown, inLeft, inRight];
}
exports.triggers = triggers;
function slide(timing, options) {
    return slideOptions(helper_1.combo(timing, options));
}
exports.slide = slide;
function slideOptions(options) {
    return [
        animations_1.state('slideOutDown', animations_1.style({
            display: 'none'
        })),
        animations_1.state('slideOutLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('slideOutRight', animations_1.style({
            display: 'none'
        })),
        animations_1.state('slideOutUp', animations_1.style({
            display: 'none'
        })),
        animations_1.transition(options.options.igniter + ' => slideInDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('slideInDown => void', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => slideOutDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, 100%, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => slideInLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('slideInLeft => void', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => slideOutRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => slideInRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('slideInRight => void', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => slideOutLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(-100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => slideInUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('slideInUp => void', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => slideOutUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ visibility: 'visible', transform: 'translate3d(0, -100%, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.slideOptions = slideOptions;
;
//# sourceMappingURL=slide.js.map