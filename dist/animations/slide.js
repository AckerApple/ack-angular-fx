"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* NOTE: All the visibility definitions are to ensure staggering works correctly */
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
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
//# sourceMappingURL=slide.js.map