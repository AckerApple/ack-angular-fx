"use strict";
exports.__esModule = true;
exports.triggers = void 0;
var animations_1 = require("@angular/animations");
//import { getConfigTiming } from "../helpers"
//import { fxConfig } from "../fxTypes"
var helper_1 = require("./helper");
var inStyles = [
    (0, animations_1.style)({ opacity: 0, offset: 0 }),
    (0, animations_1.style)({ opacity: 1, offset: 1 })
];
var outStyles = [
    (0, animations_1.style)({ opacity: 1, offset: 0 }),
    (0, animations_1.style)({ opacity: 0, offset: 1 })
];
var inUpStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outUpStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 })
];
var inDownStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outDownStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 })
];
var inLeftStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outLeftStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 })
];
var inRightStyles = [
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
];
var outRightStyles = [
    (0, animations_1.style)({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
    (0, animations_1.style)({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 })
];
exports.triggers = [
    (0, animations_1.trigger)('fadeIn', [(0, helper_1.inTransition)(inStyles)]),
    (0, animations_1.trigger)('fadeOut', [(0, helper_1.outTransition)(outStyles)]),
    (0, animations_1.trigger)('fadeInOut', (0, helper_1.inOutTransitions)(inStyles, outStyles)),
    (0, animations_1.trigger)('fadeInUp', [(0, helper_1.inTransition)(inUpStyles)]),
    (0, animations_1.trigger)('fadeOutUp', [(0, helper_1.outTransition)(outUpStyles)]),
    (0, animations_1.trigger)('fadeInOutUp', (0, helper_1.inOutTransitions)(inUpStyles, outUpStyles)),
    (0, animations_1.trigger)('fadeInDown', [(0, helper_1.inTransition)(inDownStyles)]),
    (0, animations_1.trigger)('fadeOutDown', [(0, helper_1.outTransition)(outDownStyles)]),
    (0, animations_1.trigger)('fadeInOutDown', (0, helper_1.inOutTransitions)(inDownStyles, outDownStyles)),
    (0, animations_1.trigger)('fadeInLeft', [(0, helper_1.inTransition)(inLeftStyles)]),
    (0, animations_1.trigger)('fadeOutLeft', [(0, helper_1.outTransition)(outLeftStyles)]),
    (0, animations_1.trigger)('fadeInOutLeft', (0, helper_1.inOutTransitions)(inLeftStyles, outLeftStyles)),
    (0, animations_1.trigger)('fadeInRight', [(0, helper_1.inTransition)(inRightStyles)]),
    (0, animations_1.trigger)('fadeOutRight', [(0, helper_1.outTransition)(outRightStyles)]),
    (0, animations_1.trigger)('fadeInOutRight', (0, helper_1.inOutTransitions)(inRightStyles, outRightStyles)),
    (0, animations_1.trigger)('fadeInOutKids', [(0, helper_1.childInOutTransition)(inStyles, outStyles)]),
    (0, animations_1.trigger)('fadeInOutUpKids', (0, helper_1.childInOutTransitions)(inUpStyles, outUpStyles, inDownStyles, outDownStyles)),
    (0, animations_1.trigger)('fadeInOutDownKids', (0, helper_1.childInOutTransitions)(inDownStyles, outDownStyles, inUpStyles, outUpStyles)),
    (0, animations_1.trigger)('fadeInOutLeftKids', (0, helper_1.childInOutTransitions)(inLeftStyles, outLeftStyles, inRightStyles, outRightStyles)),
    (0, animations_1.trigger)('fadeInOutRightKids', (0, helper_1.childInOutTransitions)(inRightStyles, outRightStyles, inLeftStyles, outLeftStyles))
];
