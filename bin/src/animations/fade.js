"use strict";
exports.__esModule = true;
var animations_1 = require("@angular/animations");
var helper_1 = require("./helper");
var inStyles = [
    animations_1.style({ opacity: 0, offset: 0 }),
    animations_1.style({ opacity: 1, offset: 1 })
];
var outStyles = [
    animations_1.style({ opacity: 1, offset: 0 }),
    animations_1.style({ opacity: 0, offset: 1 })
];
var inUpStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outUpStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 })
];
var inDownStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outDownStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 })
];
var inLeftStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outLeftStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 })
];
var inRightStyles = [
    animations_1.style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outRightStyles = [
    animations_1.style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    animations_1.style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 })
];
exports.triggers = [
    animations_1.trigger('fadeIn', [helper_1.inTransition(inStyles)]),
    animations_1.trigger('fadeOut', [helper_1.outTransition(outStyles)]),
    animations_1.trigger('fadeInOut', helper_1.inOutTransitions(inStyles, outStyles)),
    animations_1.trigger('fadeInUp', [helper_1.inTransition(inUpStyles)]),
    animations_1.trigger('fadeOutUp', [helper_1.outTransition(outUpStyles)]),
    animations_1.trigger('fadeInOutUp', helper_1.inOutTransitions(inUpStyles, outUpStyles)),
    animations_1.trigger('fadeInDown', [helper_1.inTransition(inDownStyles)]),
    animations_1.trigger('fadeOutDown', [helper_1.outTransition(outDownStyles)]),
    animations_1.trigger('fadeInOutDown', helper_1.inOutTransitions(inDownStyles, outDownStyles)),
    animations_1.trigger('fadeInLeft', [helper_1.inTransition(inLeftStyles)]),
    animations_1.trigger('fadeOutLeft', [helper_1.outTransition(outLeftStyles)]),
    animations_1.trigger('fadeInOutLeft', helper_1.inOutTransitions(inLeftStyles, outLeftStyles)),
    animations_1.trigger('fadeInRight', [helper_1.inTransition(inRightStyles)]),
    animations_1.trigger('fadeOutRight', [helper_1.outTransition(outRightStyles)]),
    animations_1.trigger('fadeInOutRight', helper_1.inOutTransitions(inRightStyles, outRightStyles)),
    animations_1.trigger('fadeInOutKids', [helper_1.childInOutTransition(inStyles, outStyles)]),
    animations_1.trigger('fadeInOutUpKids', helper_1.childInOutTransitions(inUpStyles, outUpStyles, inDownStyles, outDownStyles)),
    animations_1.trigger('fadeInOutDownKids', helper_1.childInOutTransitions(inDownStyles, outDownStyles, inUpStyles, outUpStyles)),
    animations_1.trigger('fadeInOutLeftKids', helper_1.childInOutTransitions(inLeftStyles, outLeftStyles, inRightStyles, outRightStyles)),
    animations_1.trigger('fadeInOutRightKids', helper_1.childInOutTransitions(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles))
];
