"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var helpers_1 = require("../helpers");
var helper_1 = require("./helper");
var inStyles = [
    animations_1.style({ opacity: 0, offset: 0 }),
    animations_1.style({ opacity: 1, offset: 1 })
];
var outStyles = [
    animations_1.style({ opacity: 1, offset: 0 }),
    animations_1.style({ opacity: 0, offset: 1 })
];
var inUpStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outUpStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 })
];
var inDownStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outDownStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 })
];
var inLeftStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outLeftStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 })
];
var inRightStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outRightStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 })
];
var fxIn = animations_1.trigger('fadeIn', helper_1.inOutTransitions(inStyles, outStyles));
var inUp = animations_1.trigger('fadeInUp', helper_1.inOutTransitions(inUpStyles, outUpStyles));
var inDown = animations_1.trigger('fadeInDown', helper_1.inOutTransitions(inDownStyles, outDownStyles));
var inLeft = animations_1.trigger('fadeInLeft', helper_1.inOutTransitions(inLeftStyles, outLeftStyles));
var inRight = animations_1.trigger('fadeInRight', helper_1.inOutTransitions(inRightStyles, outRightStyles));
var fxInKids = animations_1.trigger('fadeInKids', helper_1.childInOutTransition(inStyles, outStyles));
var inLeftKids = animations_1.trigger('fadeInLeftKids', helper_1.childInOutTransitions(inLeftStyles, outLeftStyles, inRightStyles, outRightStyles));
var inRightKids = animations_1.trigger('fadeInRightKids', helper_1.childInOutTransitions(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
var inUpKids = animations_1.trigger('fadeInUpKids', helper_1.childInOutTransitions(inUpStyles, outUpStyles, inDownStyles, outDownStyles));
var inDownKids = animations_1.trigger('fadeInDownKids', helper_1.childInOutTransitions(inDownStyles, outDownStyles, inUpStyles, outUpStyles));
exports.triggers = [
    fxIn, inUp, inDown, inLeft, inRight,
    fxInKids, inUpKids, inDownKids, inLeftKids, inRightKids
];
function states(config) {
    var time = helpers_1.getConfigTiming(config);
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