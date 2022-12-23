"use strict";
exports.__esModule = true;
exports.slideOptions = exports.slide = exports.triggers = void 0;
/* NOTE: All the visibility definitions are to ensure staggering works correctly */
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
var inUpStyles = [
    (0, animations_1.style)({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 0 }),
    (0, animations_1.style)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outUpStyles = [
    (0, animations_1.style)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1 })
];
var inDownStyles = [
    (0, animations_1.style)({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 0 }),
    (0, animations_1.style)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outDownStyles = [
    (0, animations_1.style)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1 })
];
var inLeftStyles = [
    (0, animations_1.style)({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outLeftStyles = [
    (0, animations_1.style)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1 })
];
var inRightStyles = [
    (0, animations_1.style)({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outRightStyles = [
    (0, animations_1.style)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1 })
];
var inUpKids = (0, animations_1.trigger)('slideInOutUpKids', (0, helper_1.childInOutTransitions)(inUpStyles, outUpStyles, inDownStyles, outDownStyles));
var inDownKids = (0, animations_1.trigger)('slideInOutDownKids', (0, helper_1.childInOutTransitions)(inDownStyles, outDownStyles, inUpStyles, outUpStyles));
var inLeftKids = (0, animations_1.trigger)('slideInOutLeftKids', (0, helper_1.childInOutTransitions)(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
var inRightKids = (0, animations_1.trigger)('slideInOutRightKids', (0, helper_1.childInOutTransitions)(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
exports.triggers = [
    (0, animations_1.trigger)('slideInUp', [(0, helper_1.inTransition)(inUpStyles)]),
    (0, animations_1.trigger)('slideOutUp', [(0, helper_1.outTransition)(outUpStyles)]),
    (0, animations_1.trigger)('slideInOutUp', (0, helper_1.inOutTransitions)(inUpStyles, outUpStyles)),
    (0, animations_1.trigger)('slideInDown', [(0, helper_1.inTransition)(inDownStyles)]),
    (0, animations_1.trigger)('slideOutDown', [(0, helper_1.outTransition)(outDownStyles)]),
    (0, animations_1.trigger)('slideInOutDown', (0, helper_1.inOutTransitions)(inDownStyles, outDownStyles)),
    (0, animations_1.trigger)('slideInLeft', [(0, helper_1.inTransition)(inLeftStyles)]),
    (0, animations_1.trigger)('slideOutLeft', [(0, helper_1.outTransition)(outLeftStyles)]),
    (0, animations_1.trigger)('slideInOutLeft', (0, helper_1.inOutTransitions)(inLeftStyles, outLeftStyles)),
    (0, animations_1.trigger)('slideInRight', [(0, helper_1.inTransition)(inRightStyles)]),
    (0, animations_1.trigger)('slideOutRight', [(0, helper_1.outTransition)(outRightStyles)]),
    (0, animations_1.trigger)('slideInOutRight', (0, helper_1.inOutTransitions)(inRightStyles, outRightStyles)),
    inUpKids, inDownKids, inLeftKids, inRightKids
];
function slide(timing, options) {
    return slideOptions((0, helper_1.combo)(timing, options));
}
exports.slide = slide;
function slideOptions(options) {
    return [
        (0, animations_1.state)('slideOutDown', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('slideOutLeft', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('slideOutRight', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('slideOutUp', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.transition)(options.options.igniter + ' => slideInDown', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('slideInDown => void', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => slideOutDown', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, 100%, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => slideInLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('slideInLeft => void', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => slideOutRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => slideInRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('slideInRight => void', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => slideOutLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(-100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => slideInUp', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('slideInUp => void', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => slideOutUp', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ visibility: 'hidden', transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ visibility: 'visible', transform: 'translate3d(0, -100%, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.slideOptions = slideOptions;
;
