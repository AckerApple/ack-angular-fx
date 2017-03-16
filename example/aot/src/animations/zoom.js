"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var helper_1 = require("./helper");
function zoom(timing, options) {
    return zoomOptions(helper_1.combo(timing, options));
}
exports.zoom = zoom;
function zoomOptions(options) {
    return [
        core_1.state('zoomOut', core_1.style({
            display: 'none'
        })),
        core_1.state('zoomOutDown', core_1.style({
            display: 'none'
        })),
        core_1.state('zoomOutLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('zoomOutRight', core_1.style({
            display: 'none'
        })),
        core_1.state('zoomOutUp', core_1.style({
            display: 'none'
        })),
        core_1.transition(options.options.igniter + ' => zoomIn', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('zoomIn => void, ' + options.options.igniter + ' => zoomOut', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => zoomInDown', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('zoomInDown => void, ' + options.options.igniter + ' => zoomOutDown', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => zoomInLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('zoomInLeft => void, ' + options.options.igniter + ' => zoomOutRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => zoomInRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('zoomInRight => void, ' + options.options.igniter + ' => zoomOutLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => zoomInUp', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }, options.options),
                helper_1.stylize({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('zoomInUp => void, ' + options.options.igniter + ' => zoomOutUp', [
            core_1.animate(options.timing, core_1.keyframes([
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