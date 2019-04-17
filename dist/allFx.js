"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animations_1 = require("@angular/animations");
function childOut(_from, to) {
    return !to ? true : false;
}
exports.childOut = childOut;
function childIn(_from, to) {
    return to ? true : false;
}
exports.childIn = childIn;
function voidFromIn(from, to) {
    return from !== 'nofx' && from !== 'void' && to === 'void' ? true : false;
}
exports.voidFromIn = voidFromIn;
function inFromVoid(from, to) {
    return to !== null && to !== 'nofx' && from === 'void' && to !== 'void' ? true : false;
}
exports.inFromVoid = inFromVoid;
exports.animations = [
    animations_1.trigger("zoomInOutRightKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("zoomInOutLeftKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("zoomInOutDownKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("zoomInOutUpKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("zoomInOutKids", [
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
    animations_1.trigger("zoomInOutRight", [
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
        }),
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
        })
    ]),
    animations_1.trigger("zoomOutRight", [
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
        })
    ]),
    animations_1.trigger("zoomInOutLeft", [
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
        }),
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
        })
    ]),
    animations_1.trigger("zoomOutLeft", [
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
        })
    ]),
    animations_1.trigger("zoomInOutDown", [
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
        }),
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
        })
    ]),
    animations_1.trigger("zoomOutDown", [
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
        })
    ]),
    animations_1.trigger("zoomInOutUp", [
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
        }),
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
        })
    ]),
    animations_1.trigger("zoomOutUp", [
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
        })
    ]),
    animations_1.trigger("zoomInOut", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "scale3d(.1, .1, .1)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "scale3d(1, 1, 1)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("zoomOut", [
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
        })
    ]),
    animations_1.trigger("slideInOutRightKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("slideInOutLeftKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("slideInOutDownKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("slideInOutUpKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("slideInOutRight", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideOutRight", [
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
        })
    ]),
    animations_1.trigger("slideInOutLeft", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideOutLeft", [
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
        })
    ]),
    animations_1.trigger("slideInOutDown", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideOutDown", [
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
        })
    ]),
    animations_1.trigger("slideInOutUp", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "visibility": "hidden", "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "visibility": "visible", "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("slideOutUp", [
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
        })
    ]),
    animations_1.trigger("rotateInOutDownRightKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("rotateInOutDownLeftKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("rotateInOutUpRightKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("rotateInOutUpLeftKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("rotateInOutKids", [
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
    animations_1.trigger("rotateInOutDownRight", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateOutDownRight", [
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
        })
    ]),
    animations_1.trigger("rotateInOutDownLeft", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateOutDownLeft", [
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
        })
    ]),
    animations_1.trigger("rotateInOutUpRight", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "right bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateOutUpRight", [
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
        })
    ]),
    animations_1.trigger("rotateInOutUpLeft", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, -45deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 45deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "left bottom", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateOutUpLeft", [
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
        })
    ]),
    animations_1.trigger("rotateInOut", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, -200deg)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transformOrigin": "center", "transform": "rotate3d(0, 0, 1, 0deg)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("rotateOut", [
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
        })
    ]),
    animations_1.trigger("bounceInOutRightKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("bounceInOutLeftKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("bounceInOutDownKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("bounceInOutUpKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("bounceInOutKids", [
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
    animations_1.trigger("bounceInOutRight", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-1000px, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
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
        })
    ]),
    animations_1.trigger("bounceOutRight", [
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
        })
    ]),
    animations_1.trigger("bounceInOutLeft", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(-20px, 0, 0)", "offset": 0.2 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(1000px, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
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
        })
    ]),
    animations_1.trigger("bounceOutLeft", [
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
        })
    ]),
    animations_1.trigger("bounceInOutDown", [
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
        }),
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
        })
    ]),
    animations_1.trigger("bounceOutDown", [
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
        })
    ]),
    animations_1.trigger("bounceInOutUp", [
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
        }),
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
        })
    ]),
    animations_1.trigger("bounceOutUp", [
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
        })
    ]),
    animations_1.trigger("bounceInOut", [
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
        }),
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
        })
    ]),
    animations_1.trigger("bounceOut", [
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
        })
    ]),
    animations_1.trigger("fadeInOutRightKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("fadeInOutLeftKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("fadeInOutDownKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("fadeInOutUpKids", [
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
        }),
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
        })
    ]),
    animations_1.trigger("fadeInOutKids", [
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
    animations_1.trigger("fadeInOutRight", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeOutRight", [
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
        })
    ]),
    animations_1.trigger("fadeInOutLeft", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(100%, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(-100%, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeOutLeft", [
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
        })
    ]),
    animations_1.trigger("fadeInOutDown", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeOutDown", [
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
        })
    ]),
    animations_1.trigger("fadeInOutUp", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, -100%, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "transform": "translate3d(0, 100%, 0)", "offset": 0 }),
                animations_1.style({ "opacity": 1, "transform": "translate3d(0, 0, 0)", "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeOutUp", [
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
        })
    ]),
    animations_1.trigger("fadeInOut", [
        animations_1.transition(voidFromIn, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 1, "offset": 0 }),
                animations_1.style({ "opacity": 0, "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        }),
        animations_1.transition(inFromVoid, [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "opacity": 0, "offset": 0 }),
                animations_1.style({ "opacity": 1, "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear"
            }
        })
    ]),
    animations_1.trigger("fadeOut", [
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
        })
    ]),
    animations_1.trigger("absoluteOutKids", [
        animations_1.transition("* <=> *", [
            animations_1.group([
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 0.999, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 1 })
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
                        animations_1.style({ "offset": 0.999, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 1 })
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
    animations_1.trigger("absoluteKids", [
        animations_1.transition("* <=> *", [
            animations_1.group([
                animations_1.query(":animating", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 0.999, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":leave", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 0.999, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 1 })
                    ]))
                ], {
                    "optional": true
                }),
                animations_1.query(":enter", [
                    animations_1.animate("{{ time }}", animations_1.keyframes([
                        animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 0.999, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                        animations_1.style({ "offset": 1 })
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
    animations_1.trigger("absoluteInOut", [
        animations_1.transition("* <=> *", [
            animations_1.animate("{{ time }}", animations_1.keyframes([
                animations_1.style({ "offset": 0, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "offset": 0.999, "position": "{{ position }}", "width": "100%", "overflow": "hidden" }),
                animations_1.style({ "offset": 1 })
            ]))
        ], {
            "params": {
                "time": "200ms 0ms linear",
                "position": "absolute"
            }
        })
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
