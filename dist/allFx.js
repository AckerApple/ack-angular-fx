"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
function inFromVoid(from, to) {
    return to && to !== 'nofx' && from === 'void' && to !== 'void' ? true : false;
}
exports.inFromVoid = inFromVoid;
function voidFromIn(from, to) {
    return from !== 'nofx' && from !== 'void' && to === 'void' ? true : false;
}
exports.voidFromIn = voidFromIn;
function childIn(from, to) {
    return to ? true : false;
}
exports.childIn = childIn;
function childOut(from, to) {
    return !to ? true : false;
}
exports.childOut = childOut;
exports.fxArray = [
    animations_1.trigger("childStag50", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(50, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag100", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(100, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(200, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag200", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(200, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag300", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(300, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag400", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(400, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag500", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(500, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag600", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(600, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag700", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(700, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag800", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(800, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag900", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(900, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag1000", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(1000, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag1500", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(1500, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag2000", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(2000, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("2000", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("1500", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("1000", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("900", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("800", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("700", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("600", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("500", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("400", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("300", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("200", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("100", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("absoluteSwap", [
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOut", animations_1.style({ "display": "none" }))
    ]),
    animations_1.trigger("childStag50", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(50, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag100", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(100, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(200, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag200", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(200, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag300", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(300, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag400", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(400, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag500", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(500, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag600", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(600, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag700", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(700, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag800", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(800, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag900", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(900, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag1000", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(1000, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag1500", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(1500, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag2000", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(2000, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("absoluteInOut", [
        animations_1.transition("* <=> *", [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "offset": 1, "position": "{{ position }}", "width": "100%", "overflow": "hidden" })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear",
                "position": "absolute"
            }
        })
    ]),
    animations_1.trigger("absoluteKids", [
        animations_1.transition("* <=> *", [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 1, "position": "{{ position }}", "width": "100%", "overflow": "hidden" })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 1, "position": "{{ position }}", "width": "100%", "overflow": "hidden" })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear",
                "position": "absolute"
            }
        })
    ]),
    animations_1.trigger("absoluteInKids", [
        animations_1.transition("* <=> *", [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 1, "position": "{{ position }}", "width": "100%", "overflow": "hidden" })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear",
                "position": "absolute"
            }
        })
    ]),
    animations_1.trigger("absoluteOutKids", [
        animations_1.transition("* <=> *", [
            animations_1.group([
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 1, "position": "{{ position }}", "width": "100%", "overflow": "hidden" })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear",
                "position": "absolute"
            }
        })
    ]),
    animations_1.trigger("fadeIn", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeInUp", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeInDown", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeInLeft", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeInRight", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeInKids", [
        animations_1.transition("* <=> *", [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "offset": 0 }),
                        animations_1.style({ "opacity": 1, "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "offset": 0 }),
                        animations_1.style({ "opacity": 0, "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeInUpKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeInDownKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeInLeftKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeInRightKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceIn", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceInUp", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceInDown", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceInLeft", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceInRight", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceInKids", [
        animations_1.transition("* <=> *", [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                        animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                        animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                        animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                        animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceInUpKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                        animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                        animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                        animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                        animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceInDownKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                        animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                        animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                        animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                        animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceInLeftKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                        animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                        animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                        animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                        animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("bounceInRightKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                        animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                        animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                        animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                        animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                        animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateIn", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateInUpLeft", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateInUpRight", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateInDownLeft", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateInDownRight", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateInKids", [
        animations_1.transition("* <=> *", [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateInUpLeftKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateInUpRightKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateInDownLeftKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateInDownRightKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideInUp", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideInDown", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideInLeft", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideInRight", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideInUpKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideInDownKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideInLeftKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideInRightKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomIn", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomInUp", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomInDown", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomInLeft", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomInRight", [
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomInKids", [
        animations_1.transition("* <=> *", [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomInUpKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomInDownKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomInLeftKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomInRightKids", [
        animations_1.transition(childIn, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(childOut, [
            animations_1.group([
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                        animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                        animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                        animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
                    ]))
                ], {
                    "optional": true
                })
            ])
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("absoluteSwap", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4, "position": "absolute", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1, "position": "absolute", "width": "100%", "overflow": "hidden" })
            ]))
        ])
    ]),
    animations_1.trigger("100", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("100ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("200", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("200ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("300", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("300ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("400", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("400ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("500", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("600", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("600ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("700", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("700ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("800", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("800ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("900", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("900ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("1000", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("1000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("1500", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("1500ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("2000", [
        animations_1.state("fadeOut", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("fadeOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => fadeIn", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeIn => void, void => fadeOut", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInDown => void, void => fadeOutDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInLeft => void, void => fadeOutRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInRight => void, void => fadeOutLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => fadeInUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("fadeInUp => void, void => fadeOutUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("bounceOut", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("bounceOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => bounceIn", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.2 }),
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.4 }),
                animations_1.style({ "transform": "scale3d(1.03, 1.03, 1.03)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(.97, .97, .97)", "offset": 0.8 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceIn => void, void => bounceOut", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "scale3d(.9, .9, .9)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1.1, 1.1, 1.1)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.3, .3, .3)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, 5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInDown => void, void => bounceOutDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(-10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInLeft => void, void => bounceOutRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(10px, 0, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(-5px, 0, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInRight => void, void => bounceOutLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => bounceInUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, -20px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "translate3d(0, 10px, 0)", "offset": 0.75 }),
                animations_1.style({ "transform": "translate3d(0, -5px, 0)", "offset": 0.9 }),
                animations_1.style({ "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("bounceInUp => void, void => bounceOutUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "transform": "translate3d(0, -10px, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 20px, 0)", "offset": 0.5 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("rotateOut", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutDownRight", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpLeft", animations_1.style({ "display": "none" })),
        animations_1.state("rotateOutUpRight", animations_1.style({ "display": "none" })),
        animations_1.transition("void => rotateIn", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateIn => void, void => rotateOut", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 200deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownLeft => void, void => rotateOutDownLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInDownRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInDownRight => void, void => rotateOutDownRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpLeft => void, void => rotateOutUpLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => rotateInUpRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("rotateInUpRight => void, void => rotateOutUpRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ]),
        animations_1.state("slideOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("slideOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => slideInDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInDown => void", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInLeft => void", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInRight => void", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideInUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("slideInUp => void", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => slideOutUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.state("zoomOut", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutDown", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutLeft", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutRight", animations_1.style({ "display": "none" })),
        animations_1.state("zoomOutUp", animations_1.style({ "display": "none" })),
        animations_1.transition("void => zoomIn", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomIn => void, void => zoomOut", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInDown => void, void => zoomOutDown", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, 60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInLeft => void, void => zoomOutRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInRight", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(1000px, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(-10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInRight => void, void => zoomOutLeft", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(10px, 0, 0)", "offset": 0.6 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("void => zoomInUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, 1000px, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.6 }),
                animations_1.style({ "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ]),
        animations_1.transition("zoomInUp => void, void => zoomOutUp", [
            animations_1.animate("2000ms 0ms linear", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1) translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "transform": "scale3d(.475, .475, .475) translate3d(0, -60px, 0)", "offset": 0.4 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1) translate3d(0, -1000px, 0)", "offset": 1 })
            ]))
        ])
    ]),
    animations_1.trigger("childStag2000", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(2000, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag1500", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(1500, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag1000", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(1000, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag900", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(900, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag800", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(800, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag700", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(700, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag600", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(600, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag500", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(500, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag400", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(400, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag300", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(300, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag200", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(200, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(200, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag100", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(100, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ]),
    animations_1.trigger("childStag50", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(50, [
                    animations_1.animateChild()
                ])
            ], {
                "optional": true,
                "limit": 300
            })
        ])
    ])
];
//# sourceMappingURL=allFx.js.map