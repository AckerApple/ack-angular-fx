"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
var fxInStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var fxOutStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 1 })
];
var inUpLeftStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var outUpLeftStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
];
var inUpRightStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var outUpRightStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
];
var inDownLeftStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var outDownLeftStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
];
var inDownRightStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
var outDownRightStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
];
var fxIn = animations_1.trigger('rotateIn', helper_1.inOutTransitions(fxInStyles, fxOutStyles));
var fxInKids = animations_1.trigger('rotateInKids', helper_1.childInOutTransition(fxInStyles, fxOutStyles));
var inUpLeft = animations_1.trigger('rotateInUpLeft', helper_1.inOutTransitions(inUpLeftStyles, outUpLeftStyles));
var inUpLeftKids = animations_1.trigger('rotateInUpLeftKids', helper_1.childInOutTransitions(inUpLeftStyles, outUpLeftStyles, inDownLeftStyles, outDownLeftStyles));
var inUpRight = animations_1.trigger('rotateInUpRight', helper_1.inOutTransitions(inUpRightStyles, outUpRightStyles));
var inUpRightKids = animations_1.trigger('rotateInUpRightKids', helper_1.childInOutTransitions(inUpRightStyles, outUpRightStyles, inDownRightStyles, outDownRightStyles));
var inDownLeft = animations_1.trigger('rotateInDownLeft', helper_1.inOutTransitions(inDownLeftStyles, outDownLeftStyles));
var inDownLeftKids = animations_1.trigger('rotateInDownLeftKids', helper_1.childInOutTransitions(inDownLeftStyles, outDownLeftStyles, inUpLeftStyles, outUpLeftStyles));
var inDownRight = animations_1.trigger('rotateInDownRight', helper_1.inOutTransitions(inDownRightStyles, outDownRightStyles));
var inDownRightKids = animations_1.trigger('rotateInDownRightKids', helper_1.childInOutTransitions(inDownRightStyles, outDownRightStyles, inUpRightStyles, outUpRightStyles));
exports.triggers = [
    fxIn, inUpLeft, inUpRight, inDownLeft, inDownRight,
    fxInKids, inUpLeftKids, inUpRightKids, inDownLeftKids, inDownRightKids
];
function rotate(timing, options) {
    return rotateOptions(helper_1.combo(timing, options));
}
exports.rotate = rotate;
function rotateOptions(options) {
    return [
        animations_1.state('rotateOut', animations_1.style({
            display: 'none'
        })),
        animations_1.state('rotateOutDownLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('rotateOutDownRight', animations_1.style({
            display: 'none'
        })),
        animations_1.state('rotateOutUpLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('rotateOutUpRight', animations_1.style({
            display: 'none'
        })),
        animations_1.transition(options.options.igniter + ' => rotateIn', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateIn => void, ' + options.options.igniter + ' => rotateOut', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => rotateInDownLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateInDownLeft => void, ' + options.options.igniter + ' => rotateOutDownLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => rotateInDownRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateInDownRight => void, ' + options.options.igniter + ' => rotateOutDownRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => rotateInUpLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateInUpLeft => void, ' + options.options.igniter + ' => rotateOutUpLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => rotateInUpRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('rotateInUpRight => void, ' + options.options.igniter + ' => rotateOutUpRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.rotateOptions = rotateOptions;
;
//# sourceMappingURL=rotate.js.map