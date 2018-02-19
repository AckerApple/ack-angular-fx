"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var index_1 = require("../index");
var helper_1 = require("./helper");
function triggers(config) {
    if (config === void 0) { config = {}; }
    var time = index_1.getConfigTiming(config);
    var params = { time: '200ms 0ms linear' };
    var fxIn = animations_1.trigger('fadeIn', [
        helper_1.inOutTransitionByStyles([
            animations_1.style({ opacity: 0, offset: 0 }),
            animations_1.style({ opacity: 1, offset: 1 })
        ], [
            animations_1.style({ opacity: 1, offset: 0 }),
            animations_1.style({ opacity: 0, offset: 1 })
        ])
    ]);
    var inUpGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }),
        animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 })
    ]);
    var inDownGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }),
        animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 })
    ]);
    var inUp = animations_1.trigger('fadeInUp', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inUpGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inDownGroup], { params: params })
    ]);
    var inDown = animations_1.trigger('fadeInDown', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inDownGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inUpGroup], { params: params })
    ]);
    var inLeftGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
        animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 })
    ]);
    var inRightGroup = helper_1.inOutGroupQueryByStyles([
        animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }),
        animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
    ], [
        animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
        animations_1.style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 })
    ]);
    var inLeft = animations_1.trigger('fadeInLeft', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inLeftGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inRightGroup], { params: params })
    ]);
    var inRight = animations_1.trigger('fadeInRight', [
        animations_1.transition(function (from, to) { return to ? true : false; }, [inRightGroup], { params: params }),
        animations_1.transition(function (from, to) { return !to ? true : false; }, [inLeftGroup], { params: params })
    ]);
    return [fxIn, inUp, inDown, inLeft, inRight];
}
exports.triggers = triggers;
function states(config) {
    var time = index_1.getConfigTiming(config);
    return [
        animations_1.state('fadeOut', animations_1.style({
            display: 'none'
        })),
        animations_1.state('fadeOutDown', animations_1.style({
            display: 'none'
        })),
        animations_1.state('fadeOutLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('fadeOutRight', animations_1.style({
            display: 'none'
        })),
        animations_1.state('fadeOutUp', animations_1.style({
            display: 'none'
        })),
        animations_1.transition(config.igniter + ' => fadeIn', [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, offset: 0 }, config),
                helper_1.stylize({ opacity: 1, offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(('fadeIn => void, ' + config.igniter + ' => fadeOut'), [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, offset: 0 }, config),
                helper_1.stylize({ opacity: 0, offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(config.igniter + ' => fadeInDown', [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition('fadeInDown => void, ' + config.igniter + ' => fadeOutDown', [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(config.igniter + ' => fadeInLeft', [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition('fadeInLeft => void, ' + config.igniter + ' => fadeOutRight', [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(config.igniter + ' => fadeInRight', [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition('fadeInRight => void, ' + config.igniter + ' => fadeOutLeft', [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(config.igniter + ' => fadeInUp', [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition('fadeInUp => void, ' + config.igniter + ' => fadeOutUp', [
            animations_1.animate(time, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 }, config)
            ]))
        ])
    ];
}
exports.states = states;
//# sourceMappingURL=fade.js.map