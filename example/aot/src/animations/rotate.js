"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var helper_1 = require("./helper");
function rotate(timing, options) {
    return rotateOptions(helper_1.combo(timing, options));
}
exports.rotate = rotate;
function rotateOptions(options) {
    return [
        core_1.state('rotateOut', core_1.style({
            display: 'none'
        })),
        core_1.state('rotateOutDownLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('rotateOutDownRight', core_1.style({
            display: 'none'
        })),
        core_1.state('rotateOutUpLeft', core_1.style({
            display: 'none'
        })),
        core_1.state('rotateOutUpRight', core_1.style({
            display: 'none'
        })),
        core_1.transition(options.options.igniter + ' => rotateIn', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('rotateIn => void, ' + options.options.igniter + ' => rotateOut', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => rotateInDownLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, ' + options.options.igniter + ' => rotateOutDownLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => rotateInDownRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, ' + options.options.igniter + ' => rotateOutDownRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => rotateInUpLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, ' + options.options.igniter + ' => rotateOutUpLeft', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition(options.options.igniter + ' => rotateInUpRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 }, options.options)
            ]))
        ]),
        core_1.transition('rotateInUpRight => void, ' + options.options.igniter + ' => rotateOutUpRight', [
            core_1.animate(options.timing, core_1.keyframes([
                helper_1.stylize({ opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }, options.options),
                helper_1.stylize({ opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1 }, options.options)
            ]))
        ])
    ];
}
exports.rotateOptions = rotateOptions;
;
//# sourceMappingURL=rotate.js.map