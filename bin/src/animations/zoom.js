"use strict";
exports.__esModule = true;
exports.zoomOptions = exports.zoom = exports.triggers = void 0;
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
var inStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
];
var outStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 })
];
var inUpStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }),
    (0, animations_1.style)({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
var outUpStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4 }),
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1 })
];
var inDownStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }),
    (0, animations_1.style)({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
var outDownStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }),
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 })
];
var inLeftStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
    (0, animations_1.style)({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
var outLeftStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 })
];
var inRightStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
    (0, animations_1.style)({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
var outRightStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
    (0, animations_1.style)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 })
];
var fxInKids = (0, animations_1.trigger)('zoomInOutKids', [(0, helper_1.childInOutTransition)(inStyles, outStyles)]);
var inUpKids = (0, animations_1.trigger)('zoomInOutUpKids', (0, helper_1.childInOutTransitions)(inUpStyles, outUpStyles, inDownStyles, outDownStyles));
var inDownKids = (0, animations_1.trigger)('zoomInOutDownKids', (0, helper_1.childInOutTransitions)(inDownStyles, outDownStyles, inUpStyles, outUpStyles));
var inLeftKids = (0, animations_1.trigger)('zoomInOutLeftKids', (0, helper_1.childInOutTransitions)(inLeftStyles, outLeftStyles, inRightStyles, outRightStyles));
var inRightKids = (0, animations_1.trigger)('zoomInOutRightKids', (0, helper_1.childInOutTransitions)(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
exports.triggers = [
    (0, animations_1.trigger)('zoomIn', [(0, helper_1.inTransition)(inStyles)]),
    (0, animations_1.trigger)('zoomOut', [(0, helper_1.outTransition)(outStyles)]),
    (0, animations_1.trigger)('zoomInOut', (0, helper_1.inOutTransitions)(inStyles, outStyles)),
    (0, animations_1.trigger)('zoomInUp', [(0, helper_1.inTransition)(inUpStyles)]),
    (0, animations_1.trigger)('zoomOutUp', [(0, helper_1.outTransition)(outUpStyles)]),
    (0, animations_1.trigger)('zoomInOutUp', (0, helper_1.inOutTransitions)(inUpStyles, outUpStyles)),
    (0, animations_1.trigger)('zoomInDown', [(0, helper_1.inTransition)(inDownStyles)]),
    (0, animations_1.trigger)('zoomOutDown', [(0, helper_1.outTransition)(outDownStyles)]),
    (0, animations_1.trigger)('zoomInOutDown', (0, helper_1.inOutTransitions)(inDownStyles, outDownStyles)),
    (0, animations_1.trigger)('zoomInLeft', [(0, helper_1.inTransition)(inLeftStyles)]),
    (0, animations_1.trigger)('zoomOutLeft', [(0, helper_1.outTransition)(outLeftStyles)]),
    (0, animations_1.trigger)('zoomInOutLeft', (0, helper_1.inOutTransitions)(inLeftStyles, outLeftStyles)),
    (0, animations_1.trigger)('zoomInRight', [(0, helper_1.inTransition)(inRightStyles)]),
    (0, animations_1.trigger)('zoomOutRight', [(0, helper_1.outTransition)(outRightStyles)]),
    (0, animations_1.trigger)('zoomInOutRight', (0, helper_1.inOutTransitions)(inRightStyles, outRightStyles)),
    fxInKids, inUpKids, inDownKids, inLeftKids, inRightKids
];
function zoom(timing, options) {
    return zoomOptions((0, helper_1.combo)(timing, options));
}
exports.zoom = zoom;
function zoomOptions(options) {
    return [
        (0, animations_1.state)('zoomOut', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('zoomOutDown', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('zoomOutLeft', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('zoomOutRight', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('zoomOutUp', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.transition)(options.options.igniter + ' => zoomIn', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('zoomIn => void, ' + options.options.igniter + ' => zoomOut', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => zoomInDown', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('zoomInDown => void, ' + options.options.igniter + ' => zoomOutDown', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => zoomInLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('zoomInLeft => void, ' + options.options.igniter + ' => zoomOutRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => zoomInRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('zoomInRight => void, ' + options.options.igniter + ' => zoomOutLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => zoomInUp', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('zoomInUp => void, ' + options.options.igniter + ' => zoomOutUp', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.zoomOptions = zoomOptions;
;
