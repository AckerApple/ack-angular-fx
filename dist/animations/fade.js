"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var index_1 = require("../index");
var helper_1 = require("./helper");
function triggers(config) {
    var timing = index_1.getConfigTiming(config);
    var params = { timing: '200ms 0ms linear' };
    var fadeIn = animations_1.trigger('fadeIn', [
        animations_1.transition('* <=> *', [
            animations_1.group([
                animations_1.query(':enter', [
                    animations_1.animate('{{timing}}', animations_1.keyframes([
                        helper_1.stylize({ opacity: 0, offset: 0 }, config),
                        helper_1.stylize({ opacity: 1, offset: 1 }, config)
                    ]))
                ], { optional: true, params: params }),
                animations_1.query(':leave', [
                    animations_1.animate('{{timing}}', animations_1.keyframes([
                        helper_1.stylize({ opacity: 1, offset: 0 }, config),
                        helper_1.stylize({ opacity: 0, offset: 1 }, config)
                    ]))
                ], { optional: true, params: params })
            ])
        ])
    ]);
    var fadeInUpGroup = animations_1.group([
        animations_1.query(':enter', [
            animations_1.animate('{{timing}}', animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ], { optional: true, params: params }),
        animations_1.query(':leave', [
            animations_1.animate('{{timing}}', animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 }, config)
            ]))
        ], { optional: true, params: params })
    ]);
    var fadeInLeftGroup = animations_1.group([
        animations_1.query(':enter', [
            animations_1.animate('{{timing}}', animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ], { optional: true, params: params }),
        animations_1.query(':leave', [
            animations_1.animate('{{timing}}', animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 }, config)
            ]))
        ], { optional: true, params: params })
    ]);
    var fadeInRightGroup = animations_1.group([
        animations_1.query(':enter', [
            animations_1.animate('{{timing}}', animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ], { optional: true, params: params }),
        animations_1.query(':leave', [
            animations_1.animate('{{timing}}', animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 }, config)
            ]))
        ], { optional: true, params: params })
    ]);
    var fadeInDownGroup = animations_1.group([
        animations_1.query(':enter', [
            animations_1.animate('{{timing}}', animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ], { optional: true, params: params }),
        animations_1.query(':leave', [
            animations_1.animate('{{timing}}', animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 }, config)
            ]))
        ], { optional: true, params: params })
    ]);
    var fadeInUp = animations_1.trigger('fadeInUp', [
        animations_1.transition('* <=> *, * => 1, * => true', [fadeInUpGroup], { params: params }),
        animations_1.transition('void => *, * => 0, * => false', [fadeInDownGroup], { params: params })
    ]);
    var fadeInLeft = animations_1.trigger('fadeInLeft', [
        animations_1.transition('* <=> *, * => 1, * => true', [fadeInLeftGroup], { params: params }),
        animations_1.transition('void => *, * => 0, * => false', [fadeInRightGroup], { params: params })
    ]);
    var fadeInRight = animations_1.trigger('fadeInRight', [
        animations_1.transition('* <=> *, * => 1, * => true', [fadeInRightGroup], { params: params }),
        animations_1.transition('void => *, * => 0, * => false', [fadeInLeftGroup], { params: params })
    ]);
    var fadeInDown = animations_1.trigger('fadeInDown', [
        animations_1.transition('* <=> *, * => 1, * => true', [fadeInDownGroup], { params: params }),
        animations_1.transition('* => 0, * => false', [fadeInUpGroup], { params: params })
    ]);
    return [fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight];
}
exports.triggers = triggers;
function states(config) {
    var timing = index_1.getConfigTiming(config);
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
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, offset: 0 }, config),
                helper_1.stylize({ opacity: 1, offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(('fadeIn => void, ' + config.igniter + ' => fadeOut'), [
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, offset: 0 }, config),
                helper_1.stylize({ opacity: 0, offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(config.igniter + ' => fadeInDown', [
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition('fadeInDown => void, ' + config.igniter + ' => fadeOutDown', [
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(config.igniter + ' => fadeInLeft', [
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition('fadeInLeft => void, ' + config.igniter + ' => fadeOutRight', [
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(config.igniter + ' => fadeInRight', [
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition('fadeInRight => void, ' + config.igniter + ' => fadeOutLeft', [
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition(config.igniter + ' => fadeInUp', [
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, config)
            ]))
        ]),
        animations_1.transition('fadeInUp => void, ' + config.igniter + ' => fadeOutUp', [
            animations_1.animate(timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, config),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 }, config)
            ]))
        ])
    ];
}
exports.states = states;
//# sourceMappingURL=fade.js.map