"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var helper_1 = require("./helper");
function slide(timing, options) {
    return slideOptions(helper_1.combo(timing, options));
}
exports.slide = slide;
function slideOptions(options) {
    return [
        core_1.state('slideOutDown', core_1.style({
            display: 'none'
        })),
        core_1.state('slideOutLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('slideOutRight', core_1.style({
            display: 'none'
        })),
        core_1.state('slideOutUp', core_1.style({
            display: 'none'
        })),
        core_1.transition(options.options.igniter + ' => slideInDown', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, -100%, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('slideInDown => void, ' + options.options.igniter + ' => slideOutDown', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 100%, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => slideInLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(-100%, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('slideInLeft => void, ' + options.options.igniter + ' => slideOutRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'translate3d(100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => slideInRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(100%, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('slideInRight => void, ' + options.options.igniter + ' => slideOutLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'translate3d(-100%, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => slideInUp', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, 100%, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('slideInUp => void, ' + options.options.igniter + ' => slideOutUp', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ transform: 'translate3d(0, 0, 0)', offset: 0 }, options.options),
                helper_1.stylize({ transform: 'translate3d(0, -100%, 0)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.slideOptions = slideOptions;
;
//# sourceMappingURL=slide.js.map