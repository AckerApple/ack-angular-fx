"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animations_1 = require("@angular/animations");
const helper_1 = require("./helper");
const inStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
];
const outStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 })
];
const inUpStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
const outUpStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1 })
];
const inDownStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
const outDownStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 })
];
const inLeftStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
const outLeftStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 })
];
const inRightStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
const outRightStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 })
];
const fxInKids = animations_1.trigger('zoomInOutKids', [helper_1.childInOutTransition(inStyles, outStyles)]);
const inUpKids = animations_1.trigger('zoomInOutUpKids', helper_1.childInOutTransitions(inUpStyles, outUpStyles, inDownStyles, outDownStyles));
const inDownKids = animations_1.trigger('zoomInOutDownKids', helper_1.childInOutTransitions(inDownStyles, outDownStyles, inUpStyles, outUpStyles));
const inLeftKids = animations_1.trigger('zoomInOutLeftKids', helper_1.childInOutTransitions(inLeftStyles, outLeftStyles, inRightStyles, outRightStyles));
const inRightKids = animations_1.trigger('zoomInOutRightKids', helper_1.childInOutTransitions(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
exports.triggers = [
    animations_1.trigger('zoomIn', [helper_1.inTransition(inStyles)]),
    animations_1.trigger('zoomOut', [helper_1.outTransition(outStyles)]),
    animations_1.trigger('zoomInOut', helper_1.inOutTransitions(inStyles, outStyles)),
    animations_1.trigger('zoomInUp', [helper_1.inTransition(inUpStyles)]),
    animations_1.trigger('zoomOutUp', [helper_1.outTransition(outUpStyles)]),
    animations_1.trigger('zoomInOutUp', helper_1.inOutTransitions(inUpStyles, outUpStyles)),
    animations_1.trigger('zoomInDown', [helper_1.inTransition(inDownStyles)]),
    animations_1.trigger('zoomOutDown', [helper_1.outTransition(outDownStyles)]),
    animations_1.trigger('zoomInOutDown', helper_1.inOutTransitions(inDownStyles, outDownStyles)),
    animations_1.trigger('zoomInLeft', [helper_1.inTransition(inLeftStyles)]),
    animations_1.trigger('zoomOutLeft', [helper_1.outTransition(outLeftStyles)]),
    animations_1.trigger('zoomInOutLeft', helper_1.inOutTransitions(inLeftStyles, outLeftStyles)),
    animations_1.trigger('zoomInRight', [helper_1.inTransition(inRightStyles)]),
    animations_1.trigger('zoomOutRight', [helper_1.outTransition(outRightStyles)]),
    animations_1.trigger('zoomInOutRight', helper_1.inOutTransitions(inRightStyles, outRightStyles)),
    fxInKids, inUpKids, inDownKids, inLeftKids, inRightKids
];
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
