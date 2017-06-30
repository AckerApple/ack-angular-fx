"use strict";
/*import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';*/
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
function bounce(timing, options) {
    return bounceOptions(helper_1.combo(timing, options));
}
exports.bounce = bounce;
function bounceOptions(options) {
    return [
        animations_1.state('bounceOut', animations_1.style({
            display: 'none'
        })),
        animations_1.state('bounceOutDown', animations_1.style({
            display: 'none'
        })),
        animations_1.state('bounceOutLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('bounceOutRight', animations_1.style({
            display: 'none'
        })),
        animations_1.state('bounceOutUp', animations_1.style({
            display: 'none'
        })),
        animations_1.transition(options.options.igniter + ' => bounceIn', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceIn => void, ' + options.options.igniter + ' => bounceOut', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }, options.options),
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => bounceInDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, -10px, 0)', offset: 0.75 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 5px, 0)', offset: 0.9 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceInDown => void, ' + options.options.igniter + ' => bounceOutDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, 10px, 0)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => bounceInLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }, options.options),
                helper_1.stylize({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceInLeft => void, ' + options.options.igniter + ' => bounceOutRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => bounceInRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'translate3d(10px, 0, 0)', offset: 0.75 }, options.options),
                helper_1.stylize({ transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceInRight => void, ' + options.options.igniter + ' => bounceOutLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => bounceInUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('bounceInUp => void, ' + options.options.igniter + ' => bounceOutUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.bounceOptions = bounceOptions;
;
//# sourceMappingURL=bounce.js.map