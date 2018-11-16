"use strict";
exports.__esModule = true;
/* NOTE: All the visibility definitions are to ensure staggering works correctly */
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
var inUpStyles = [
    animations_1.style({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 0 }),
    animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outUpStyles = [
    animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1 })
];
var inDownStyles = [
    animations_1.style({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 0 }),
    animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outDownStyles = [
    animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1 })
];
var inLeftStyles = [
    animations_1.style({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
    animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outLeftStyles = [
    animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1 })
];
var inRightStyles = [
    animations_1.style({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 0 }),
    animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outRightStyles = [
    animations_1.style({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1 })
];
var inUp = animations_1.trigger('slideInUp', helper_1.inOutTransitions(inUpStyles, outUpStyles));
var inUpKids = animations_1.trigger('slideInUpKids', helper_1.childInOutTransitions(inUpStyles, outUpStyles, inDownStyles, outDownStyles));
var inDown = animations_1.trigger('slideInDown', helper_1.inOutTransitions(inDownStyles, outDownStyles));
var inDownKids = animations_1.trigger('slideInDownKids', helper_1.childInOutTransitions(inDownStyles, outDownStyles, inUpStyles, outUpStyles));
var inLeft = animations_1.trigger('slideInLeft', helper_1.inOutTransitions(inLeftStyles, outLeftStyles));
var inLeftKids = animations_1.trigger('slideInLeftKids', helper_1.childInOutTransitions(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
var inRight = animations_1.trigger('slideInRight', helper_1.inOutTransitions(inRightStyles, outRightStyles));
var inRightKids = animations_1.trigger('slideInRightKids', helper_1.childInOutTransitions(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
exports.triggers = [
    inUp, inDown, inLeft, inRight,
    inUpKids, inDownKids, inLeftKids, inRightKids
];
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
