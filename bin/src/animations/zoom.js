"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
var inStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
];
var outStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1 })
];
var inUpStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
var outUpStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1 })
];
var inDownStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
var outDownStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1 })
];
var inLeftStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
var outLeftStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1 })
];
var inRightStyles = [
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1 })
];
var outRightStyles = [
    animations_1.style({ opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6 }),
    animations_1.style({ opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1 })
];
var fxIn = animations_1.trigger('zoomIn', helper_1.inOutTransitions(inStyles, outStyles));
var fxInKids = animations_1.trigger('zoomInKids', helper_1.childInOutTransition(inStyles, outStyles));
var inUp = animations_1.trigger('zoomInUp', helper_1.inOutTransitions(inUpStyles, outUpStyles));
var inUpKids = animations_1.trigger('zoomInUpKids', helper_1.childInOutTransitions(inUpStyles, outUpStyles, inDownStyles, outDownStyles));
var inDown = animations_1.trigger('zoomInDown', helper_1.inOutTransitions(inDownStyles, outDownStyles));
var inDownKids = animations_1.trigger('zoomInDownKids', helper_1.childInOutTransitions(inDownStyles, outDownStyles, inUpStyles, outUpStyles));
var inLeft = animations_1.trigger('zoomInLeft', helper_1.inOutTransitions(inLeftStyles, outLeftStyles));
var inLeftKids = animations_1.trigger('zoomInLeftKids', helper_1.childInOutTransitions(inLeftStyles, outLeftStyles, inRightStyles, outRightStyles));
var inRight = animations_1.trigger('zoomInRight', helper_1.inOutTransitions(inRightStyles, outRightStyles));
var inRightKids = animations_1.trigger('zoomInRightKids', helper_1.childInOutTransitions(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles));
exports.triggers = [
    fxIn, inUp, inDown, inLeft, inRight,
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
