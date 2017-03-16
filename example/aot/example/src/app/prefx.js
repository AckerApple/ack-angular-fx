"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.fxArray = [
    core_1.trigger('absoluteSwap2000', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('2000', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('2000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap1500', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('1500', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('1500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap1000', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('1000', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('1000ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap900', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('900', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('900ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap800', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('800', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('800ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap700', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('700', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('700ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap600', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('600', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('600ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap500', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('500', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap400', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('400', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('400ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap300', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('300', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('300ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap200', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('200', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('200ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap100', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('100', [
        core_1.transition('zoomInUp => void, * => zoomOutUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInRight => void, * => zoomOutLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, * => zoomOutRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomInDown => void, * => zoomOutDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomInDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('zoomIn => void, * => zoomOut', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => zoomIn', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, * => slideOutUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInRight => void, * => slideOutLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInLeft => void, * => slideOutRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('slideInDown => void, * => slideOutDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => slideInDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, * => rotateOutUpRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInUpLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, * => rotateOutDownRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateInDownLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('rotateIn => void, * => rotateOut', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => rotateIn', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, * => bounceOutUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInRight => void, * => bounceOutLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, * => bounceOutRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceInDown => void, * => bounceOutDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceInDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('bounceIn => void, * => bounceOut', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => bounceIn', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, * => fadeOutUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInUp', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInRight => void, * => fadeOutLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, * => fadeOutRight', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInLeft', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeInDown => void, * => fadeOutDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeInDown', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        core_1.transition('fadeIn => void, * => fadeOut', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0 }),
                core_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        core_1.transition('* => fadeIn', [
            core_1.animate('100ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0 }),
                core_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ]),
    core_1.trigger('absoluteSwap', [
        core_1.transition('zoomInUp => void, void => zoomOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInRight => void, void => zoomOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInLeft => void, void => zoomOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomInDown => void, void => zoomOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('zoomIn => void, void => zoomOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => zoomIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('zoomOutUp', core_1.style({ "display": "none" })),
        core_1.state('zoomOutRight', core_1.style({ "display": "none" })),
        core_1.state('zoomOutLeft', core_1.style({ "display": "none" })),
        core_1.state('zoomOutDown', core_1.style({ "display": "none" })),
        core_1.state('zoomOut', core_1.style({ "display": "none" })),
        core_1.transition('slideInUp => void, void => slideOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInRight => void, void => slideOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInLeft => void, void => slideOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('slideInDown => void, void => slideOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => slideInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('slideOutUp', core_1.style({ "display": "none" })),
        core_1.state('slideOutRight', core_1.style({ "display": "none" })),
        core_1.state('slideOutLeft', core_1.style({ "display": "none" })),
        core_1.state('slideOutDown', core_1.style({ "display": "none" })),
        core_1.transition('rotateInUpRight => void, void => rotateOutUpRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInUpLeft => void, void => rotateOutUpLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInUpLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownRight => void, void => rotateOutDownRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateInDownLeft => void, void => rotateOutDownLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateInDownLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('rotateIn => void, void => rotateOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => rotateIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('rotateOutUpRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutUpLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownRight', core_1.style({ "display": "none" })),
        core_1.state('rotateOutDownLeft', core_1.style({ "display": "none" })),
        core_1.state('rotateOut', core_1.style({ "display": "none" })),
        core_1.transition('bounceInUp => void, void => bounceOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInRight => void, void => bounceOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInLeft => void, void => bounceOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceInDown => void, void => bounceOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('bounceIn => void, void => bounceOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => bounceIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('bounceOutUp', core_1.style({ "display": "none" })),
        core_1.state('bounceOutRight', core_1.style({ "display": "none" })),
        core_1.state('bounceOutLeft', core_1.style({ "display": "none" })),
        core_1.state('bounceOutDown', core_1.style({ "display": "none" })),
        core_1.state('bounceOut', core_1.style({ "display": "none" })),
        core_1.transition('fadeInUp => void, void => fadeOutUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInUp', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInRight => void, void => fadeOutLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInLeft => void, void => fadeOutRight', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInLeft', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeInDown => void, void => fadeOutDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeInDown', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('fadeIn => void, void => fadeOut', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.transition('void => fadeIn', [
            core_1.animate('500ms 0ms linear', core_1.keyframes([
                core_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                core_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        core_1.state('fadeOutUp', core_1.style({ "display": "none" })),
        core_1.state('fadeOutRight', core_1.style({ "display": "none" })),
        core_1.state('fadeOutLeft', core_1.style({ "display": "none" })),
        core_1.state('fadeOutDown', core_1.style({ "display": "none" })),
        core_1.state('fadeOut', core_1.style({ "display": "none" }))
    ])
];
//# sourceMappingURL=prefx.js.map