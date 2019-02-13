"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var inUpKids = animations_1.trigger('slideInOutUpKids', helper_1.childInOutTransitions(inUpStyles, outUpStyles, inDownStyles, outDownStyles));
var inDownKids = animations_1.trigger('slideInOutDownKids', helper_1.childInOutTransitions(inDownStyles, outDownStyles, inUpStyles, outUpStyles));
var inLeftKids = animations_1.trigger('slideInOutLeftKids', helper_1.childInOutTransitions(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
var inRightKids = animations_1.trigger('slideInOutRightKids', helper_1.childInOutTransitions(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
exports.triggers = [
    animations_1.trigger('slideInUp', [helper_1.inTransition(inUpStyles)]),
    animations_1.trigger('slideOutUp', [helper_1.outTransition(outUpStyles)]),
    animations_1.trigger('slideInOutUp', helper_1.inOutTransitions(inUpStyles, outUpStyles)),
    animations_1.trigger('slideInDown', [helper_1.inTransition(inDownStyles)]),
    animations_1.trigger('slideOutDown', [helper_1.outTransition(outDownStyles)]),
    animations_1.trigger('slideInOutDown', helper_1.inOutTransitions(inDownStyles, outDownStyles)),
    animations_1.trigger('slideInLeft', [helper_1.inTransition(inLeftStyles)]),
    animations_1.trigger('slideOutLeft', [helper_1.outTransition(outLeftStyles)]),
    animations_1.trigger('slideInOutLeft', helper_1.inOutTransitions(inLeftStyles, outLeftStyles)),
    animations_1.trigger('slideInRight', [helper_1.inTransition(inRightStyles)]),
    animations_1.trigger('slideOutRight', [helper_1.outTransition(outRightStyles)]),
    animations_1.trigger('slideInOutRight', helper_1.inOutTransitions(inRightStyles, outRightStyles)),
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
