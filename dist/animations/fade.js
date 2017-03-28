"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
function fade(timing, options) {
    return fadeOptions(helper_1.combo(timing, options));
}
exports.fade = fade;
function fadeOptions(options) {
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
        animations_1.transition(options.options.igniter + ' => fadeIn', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(('fadeIn => void, ' + options.options.igniter + ' => fadeOut'), [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => fadeInDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('fadeInDown => void, ' + options.options.igniter + ' => fadeOutDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => fadeInLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('fadeInLeft => void, ' + options.options.igniter + ' => fadeOutRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => fadeInRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('fadeInRight => void, ' + options.options.igniter + ' => fadeOutLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => fadeInUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('fadeInUp => void, ' + options.options.igniter + ' => fadeOutUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.fadeOptions = fadeOptions;
//# sourceMappingURL=fade.js.map