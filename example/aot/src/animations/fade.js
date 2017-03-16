"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var helper_1 = require("./helper");
function fade(timing, options) {
    return fadeOptions(helper_1.combo(timing, options));
}
exports.fade = fade;
function fadeOptions(options) {
    return [
        core_1.state('fadeOut', core_1.style({
            display: 'none'
        })),
        core_1.state('fadeOutDown', core_1.style({
            display: 'none'
        })),
        core_1.state('fadeOutLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('fadeOutRight', core_1.style({
            display: 'none'
        })),
        core_1.state('fadeOutUp', core_1.style({
            display: 'none'
        })),
        core_1.transition(options.options.igniter + ' => fadeIn', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(('fadeIn => void, ' + options.options.igniter + ' => fadeOut'), [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => fadeInDown', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('fadeInDown => void, ' + options.options.igniter + ' => fadeOutDown', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => fadeInLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('fadeInLeft => void, ' + options.options.igniter + ' => fadeOutRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => fadeInRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('fadeInRight => void, ' + options.options.igniter + ' => fadeOutLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => fadeInUp', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('fadeInUp => void, ' + options.options.igniter + ' => fadeOutUp', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.fadeOptions = fadeOptions;
//# sourceMappingURL=fade.js.map