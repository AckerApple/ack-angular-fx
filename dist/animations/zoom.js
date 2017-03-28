"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*import {
  style,
  state,
  transition,
  animate,
  keyframes,
  AnimationMetadata
} from '@angular/core';*/
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
function zoom(timing, options) {
    return zoomOptions(helper_1.combo(timing, options));
}
exports.zoom = zoom;
function zoomOptions(options) {
    return [
        animations_1.state('zoomOut', animations_1.style({
            display: 'none'
        })),
        animations_1.state('zoomOutDown', animations_1.style({
            display: 'none'
        })),
        animations_1.state('zoomOutLeft', animations_1.style({
            display: 'none'
        })),
        animations_1.state('zoomOutRight', animations_1.style({
            display: 'none'
        })),
        animations_1.state('zoomOutUp', animations_1.style({
            display: 'none'
        })),
        animations_1.transition(options.options.igniter + ' => zoomIn', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomIn => void, ' + options.options.igniter + ' => zoomOut', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => zoomInDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomInDown => void, ' + options.options.igniter + ' => zoomOutDown', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => zoomInLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomInLeft => void, ' + options.options.igniter + ' => zoomOutRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => zoomInRight', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomInRight => void, ' + options.options.igniter + ' => zoomOutLeft', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition(options.options.igniter + ' => zoomInUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        animations_1.transition('zoomInUp => void, ' + options.options.igniter + ' => zoomOutUp', [
            animations_1.animate(options.timing, animations_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.zoomOptions = zoomOptions;
;
//# sourceMappingURL=zoom.js.map