"use strict";
exports.__esModule = true;
exports.bounceOptions = exports.bounce = exports.triggers = void 0;
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
var fxInStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }),
    (0, animations_1.style)({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
    (0, animations_1.style)({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
    (0, animations_1.style)({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
    (0, animations_1.style)({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
];
var fxOutStyles = [
    (0, animations_1.style)({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }),
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }),
];
var inUpStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6 }),
    (0, animations_1.style)({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }),
    (0, animations_1.style)({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }),
    (0, animations_1.style)({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outUpStyles = [
    (0, animations_1.style)({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5 }),
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1 })
];
var inDownStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6 }),
    (0, animations_1.style)({ transform: 'translate3d(0, -10px, 0)', offset: 0.75 }),
    (0, animations_1.style)({ transform: 'translate3d(0, 5px, 0)', offset: 0.9 }),
    (0, animations_1.style)({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outDownStyles = [
    (0, animations_1.style)({ transform: 'translate3d(0, 10px, 0)', offset: 0.2 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5 }),
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1 })
];
var inLeftStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6 }),
    (0, animations_1.style)({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }),
    (0, animations_1.style)({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }),
    (0, animations_1.style)({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outLeftStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2 }),
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1 })
];
var inRightStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6 }),
    (0, animations_1.style)({ transform: 'translate3d(10px, 0, 0)', offset: 0.75 }),
    (0, animations_1.style)({ transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }),
    (0, animations_1.style)({ transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outRightStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }),
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1 })
];
var inFxKids = (0, animations_1.trigger)('bounceInOutKids', [(0, helper_1.childInOutTransition)(fxInStyles, fxOutStyles)]);
var inUpKids = (0, animations_1.trigger)('bounceInOutUpKids', (0, helper_1.childInOutTransitions)(inUpStyles, outUpStyles, inDownStyles, outDownStyles));
var inDownKids = (0, animations_1.trigger)('bounceInOutDownKids', (0, helper_1.childInOutTransitions)(inDownStyles, outDownStyles, inUpStyles, outUpStyles));
var inLeftKids = (0, animations_1.trigger)('bounceInOutLeftKids', (0, helper_1.childInOutTransitions)(inLeftStyles, outLeftStyles, inRightStyles, outRightStyles));
var inRightKids = (0, animations_1.trigger)('bounceInOutRightKids', (0, helper_1.childInOutTransitions)(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
exports.triggers = [
    (0, animations_1.trigger)('bounceIn', [(0, helper_1.inTransition)(fxInStyles)]),
    (0, animations_1.trigger)('bounceOut', [(0, helper_1.outTransition)(fxOutStyles)]),
    (0, animations_1.trigger)('bounceInOut', (0, helper_1.inOutTransitions)(fxInStyles, fxOutStyles)),
    (0, animations_1.trigger)('bounceInUp', [(0, helper_1.inTransition)(inUpStyles)]),
    (0, animations_1.trigger)('bounceOutUp', [(0, helper_1.outTransition)(outUpStyles)]),
    (0, animations_1.trigger)('bounceInOutUp', (0, helper_1.inOutTransitions)(inUpStyles, outUpStyles)),
    (0, animations_1.trigger)('bounceInDown', [(0, helper_1.inTransition)(inDownStyles)]),
    (0, animations_1.trigger)('bounceOutDown', [(0, helper_1.outTransition)(outDownStyles)]),
    (0, animations_1.trigger)('bounceInOutDown', (0, helper_1.inOutTransitions)(inDownStyles, outDownStyles)),
    (0, animations_1.trigger)('bounceInLeft', [(0, helper_1.inTransition)(inLeftStyles)]),
    (0, animations_1.trigger)('bounceOutLeft', [(0, helper_1.outTransition)(outLeftStyles)]),
    (0, animations_1.trigger)('bounceInOutLeft', (0, helper_1.inOutTransitions)(inLeftStyles, outLeftStyles)),
    (0, animations_1.trigger)('bounceInRight', [(0, helper_1.inTransition)(inRightStyles)]),
    (0, animations_1.trigger)('bounceOutRight', [(0, helper_1.outTransition)(outRightStyles)]),
    (0, animations_1.trigger)('bounceInOutRight', (0, helper_1.inOutTransitions)(inRightStyles, outRightStyles)),
    inFxKids, inUpKids, inDownKids, inLeftKids, inRightKids
];
function bounce(timing, options) {
    return bounceOptions((0, helper_1.combo)(timing, options));
}
exports.bounce = bounce;
function bounceOptions(options) {
    return [
        (0, animations_1.state)('bounceOut', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('bounceOutDown', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('bounceOutLeft', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('bounceOutRight', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('bounceOutUp', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.transition)(options.options.igniter + ' => bounceIn', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('bounceIn => void, ' + options.options.igniter + ' => bounceOut', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }, options.options),
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => bounceInDown', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(0, -10px, 0)', offset: 0.75 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(0, 5px, 0)', offset: 0.9 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('bounceInDown => void, ' + options.options.igniter + ' => bounceOutDown', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ transform: 'translate3d(0, 10px, 0)', offset: 0.2 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => bounceInLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('bounceInLeft => void, ' + options.options.igniter + ' => bounceOutRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => bounceInRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(10px, 0, 0)', offset: 0.75 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('bounceInRight => void, ' + options.options.igniter + ' => bounceOutLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => bounceInUp', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }, options.options),
                (0, helper_1.stylize)({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('bounceInUp => void, ' + options.options.igniter + ' => bounceOutUp', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.bounceOptions = bounceOptions;
;
