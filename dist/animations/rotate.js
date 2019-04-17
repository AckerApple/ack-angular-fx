"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animations_1 = require("@angular/animations");
const helper_1 = require("./helper");
const fxInStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
const fxOutStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 1 })
];
const inUpLeftStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
const outUpLeftStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
];
const inUpRightStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
const outUpRightStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
];
const inDownLeftStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
const outDownLeftStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 })
];
const inDownRightStyles = [
    animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }),
    animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
];
const outDownRightStyles = [
    animations_1.style({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
    animations_1.style({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 })
];
const fxInKids = animations_1.trigger('rotateInOutKids', [helper_1.childInOutTransition(fxInStyles, fxOutStyles)]);
const inUpLeftKids = animations_1.trigger('rotateInOutUpLeftKids', helper_1.childInOutTransitions(inUpLeftStyles, outUpLeftStyles, inDownLeftStyles, outDownLeftStyles));
const inUpRightKids = animations_1.trigger('rotateInOutUpRightKids', helper_1.childInOutTransitions(inUpRightStyles, outUpRightStyles, inDownRightStyles, outDownRightStyles));
const inDownLeftKids = animations_1.trigger('rotateInOutDownLeftKids', helper_1.childInOutTransitions(inDownLeftStyles, outDownLeftStyles, inUpLeftStyles, outUpLeftStyles));
const inDownRightKids = animations_1.trigger('rotateInOutDownRightKids', helper_1.childInOutTransitions(inDownRightStyles, outDownRightStyles, inUpRightStyles, outUpRightStyles));
exports.triggers = [
    animations_1.trigger('rotateIn', [helper_1.inTransition(fxInStyles)]),
    animations_1.trigger('rotateOut', [helper_1.outTransition(fxOutStyles)]),
    animations_1.trigger('rotateInOut', helper_1.inOutTransitions(fxInStyles, fxOutStyles)),
    animations_1.trigger('rotateInUpLeft', [helper_1.inTransition(inUpLeftStyles)]),
    animations_1.trigger('rotateOutUpLeft', [helper_1.outTransition(outUpLeftStyles)]),
    animations_1.trigger('rotateInOutUpLeft', helper_1.inOutTransitions(inUpLeftStyles, outUpLeftStyles)),
    animations_1.trigger('rotateInUpRight', [helper_1.inTransition(inUpRightStyles)]),
    animations_1.trigger('rotateOutUpRight', [helper_1.outTransition(outUpRightStyles)]),
    animations_1.trigger('rotateInOutUpRight', helper_1.inOutTransitions(inUpRightStyles, outUpRightStyles)),
    animations_1.trigger('rotateInDownLeft', [helper_1.inTransition(inDownLeftStyles)]),
    animations_1.trigger('rotateOutDownLeft', [helper_1.outTransition(outDownLeftStyles)]),
    animations_1.trigger('rotateInOutDownLeft', helper_1.inOutTransitions(inDownLeftStyles, outDownLeftStyles)),
    animations_1.trigger('rotateInDownRight', [helper_1.inTransition(inDownRightStyles)]),
    animations_1.trigger('rotateOutDownRight', [helper_1.outTransition(outDownRightStyles)]),
    animations_1.trigger('rotateInOutDownRight', helper_1.inOutTransitions(inDownRightStyles, outDownRightStyles)),
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
