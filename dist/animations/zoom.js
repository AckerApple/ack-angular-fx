"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
var index_1 = require("../index");
function triggers(config) {
    if (config === void 0) { config = {}; }
    var time = index_1.getConfigTiming(config);
    var params = { time: '200ms 0ms linear' };
    var fxIn = animations_1.trigger('zoomIn', [
        helper_1.inOutTransitionByStyles([
            animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }),
            animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
        ], [
            animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }),
            animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 })
        ])
    ]);
    var inUpGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }),
        animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }),
        animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4 }),
        animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1 })
    ]);
    var inDownGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }),
        animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }),
        animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }),
        animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 })
    ]);
    var inUp = animations_1.trigger('zoomInUp', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inUpGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inDownGroup], { params: params })
    ]);
    var inDown = animations_1.trigger('zoomInDown', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inDownGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inUpGroup], { params: params })
    ]);
    var inLeftGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }),
        animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
        animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
        animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 })
    ]);
    var inRightGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }),
        animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
        animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
        animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 })
    ]);
    var inLeft = animations_1.trigger('zoomInLeft', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inLeftGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inRightGroup], { params: params })
    ]);
    var inRight = animations_1.trigger('zoomInRight', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inRightGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inLeftGroup], { params: params })
    ]);
    return [fxIn, inUp, inDown, inLeft, inRight];
}
exports.triggers = triggers;
function zoom(timing, options) {
    return zoomOptions(helper_1.combo(timing, options));
}
exports.zoom = zoom;
function zoomOptions(options) {
    return [
        animations_1.state('zoomOut', animations_1.style({
            display: 'none'
        })),
        animations_1.state('zoomOutDown', animations_1.style({
            display: 'none'
        })),
        animations_1.state('zoomOutLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('zoomOutRight', animations_1.style({
            display: 'none'
        })),
        animations_1.state('zoomOutUp', animations_1.style({
            display: 'none'
        })),
        animations_1.transition(options.options.igniter + ' => zoomIn', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomIn => void, ' + options.options.igniter + ' => zoomOut', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => zoomInDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomInDown => void, ' + options.options.igniter + ' => zoomOutDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => zoomInLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomInLeft => void, ' + options.options.igniter + ' => zoomOutRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => zoomInRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomInRight => void, ' + options.options.igniter + ' => zoomOutLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => zoomInUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomInUp => void, ' + options.options.igniter + ' => zoomOutUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.zoomOptions = zoomOptions;
;
//# sourceMappingURL=zoom.js.map