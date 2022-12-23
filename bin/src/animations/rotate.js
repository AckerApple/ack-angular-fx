"use strict";
exports.__esModule = true;
exports.rotateOptions = exports.rotate = exports.triggers = void 0;
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
var fxInStyles = [
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var fxOutStyles = [
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 1 })
];
var inUpLeftStyles = [
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var outUpLeftStyles = [
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
];
var inUpRightStyles = [
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var outUpRightStyles = [
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
];
var inDownLeftStyles = [
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var outDownLeftStyles = [
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
];
var inDownRightStyles = [
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var outDownRightStyles = [
    (0, animations_1.style)({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
];
var fxInKids = (0, animations_1.trigger)('rotateInOutKids', [(0, helper_1.childInOutTransition)(fxInStyles, fxOutStyles)]);
var inUpLeftKids = (0, animations_1.trigger)('rotateInOutUpLeftKids', (0, helper_1.childInOutTransitions)(inUpLeftStyles, outUpLeftStyles, inDownLeftStyles, outDownLeftStyles));
var inUpRightKids = (0, animations_1.trigger)('rotateInOutUpRightKids', (0, helper_1.childInOutTransitions)(inUpRightStyles, outUpRightStyles, inDownRightStyles, outDownRightStyles));
var inDownLeftKids = (0, animations_1.trigger)('rotateInOutDownLeftKids', (0, helper_1.childInOutTransitions)(inDownLeftStyles, outDownLeftStyles, inUpLeftStyles, outUpLeftStyles));
var inDownRightKids = (0, animations_1.trigger)('rotateInOutDownRightKids', (0, helper_1.childInOutTransitions)(inDownRightStyles, outDownRightStyles, inUpRightStyles, outUpRightStyles));
exports.triggers = [
    (0, animations_1.trigger)('rotateIn', [(0, helper_1.inTransition)(fxInStyles)]),
    (0, animations_1.trigger)('rotateOut', [(0, helper_1.outTransition)(fxOutStyles)]),
    (0, animations_1.trigger)('rotateInOut', (0, helper_1.inOutTransitions)(fxInStyles, fxOutStyles)),
    (0, animations_1.trigger)('rotateInUpLeft', [(0, helper_1.inTransition)(inUpLeftStyles)]),
    (0, animations_1.trigger)('rotateOutUpLeft', [(0, helper_1.outTransition)(outUpLeftStyles)]),
    (0, animations_1.trigger)('rotateInOutUpLeft', (0, helper_1.inOutTransitions)(inUpLeftStyles, outUpLeftStyles)),
    (0, animations_1.trigger)('rotateInUpRight', [(0, helper_1.inTransition)(inUpRightStyles)]),
    (0, animations_1.trigger)('rotateOutUpRight', [(0, helper_1.outTransition)(outUpRightStyles)]),
    (0, animations_1.trigger)('rotateInOutUpRight', (0, helper_1.inOutTransitions)(inUpRightStyles, outUpRightStyles)),
    (0, animations_1.trigger)('rotateInDownLeft', [(0, helper_1.inTransition)(inDownLeftStyles)]),
    (0, animations_1.trigger)('rotateOutDownLeft', [(0, helper_1.outTransition)(outDownLeftStyles)]),
    (0, animations_1.trigger)('rotateInOutDownLeft', (0, helper_1.inOutTransitions)(inDownLeftStyles, outDownLeftStyles)),
    (0, animations_1.trigger)('rotateInDownRight', [(0, helper_1.inTransition)(inDownRightStyles)]),
    (0, animations_1.trigger)('rotateOutDownRight', [(0, helper_1.outTransition)(outDownRightStyles)]),
    (0, animations_1.trigger)('rotateInOutDownRight', (0, helper_1.inOutTransitions)(inDownRightStyles, outDownRightStyles)),
    fxInKids, inUpLeftKids, inUpRightKids, inDownLeftKids, inDownRightKids
];
function rotate(timing, options) {
    return rotateOptions((0, helper_1.combo)(timing, options));
}
exports.rotate = rotate;
function rotateOptions(options) {
    return [
        (0, animations_1.state)('rotateOut', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('rotateOutDownLeft', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('rotateOutDownRight', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('rotateOutUpLeft', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.state)('rotateOutUpRight', (0, animations_1.style)({
            display: 'none'
        })),
        (0, animations_1.transition)(options.options.igniter + ' => rotateIn', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('rotateIn => void, ' + options.options.igniter + ' => rotateOut', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => rotateInDownLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('rotateInDownLeft => void, ' + options.options.igniter + ' => rotateOutDownLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => rotateInDownRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('rotateInDownRight => void, ' + options.options.igniter + ' => rotateOutDownRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => rotateInUpLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('rotateInUpLeft => void, ' + options.options.igniter + ' => rotateOutUpLeft', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)(options.options.igniter + ' => rotateInUpRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        (0, animations_1.transition)('rotateInUpRight => void, ' + options.options.igniter + ' => rotateOutUpRight', [
            (0, animations_1.animate)(options.timing, (0, animations_1.keyframes)([
                (0, helper_1.stylize)({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                (0, helper_1.stylize)({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.rotateOptions = rotateOptions;
;
