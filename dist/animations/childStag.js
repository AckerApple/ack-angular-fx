"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.childStags = [
    animations_1.trigger("childStag50", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(50, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag100", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(100, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(200, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag200", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(200, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag300", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(300, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag400", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(400, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag500", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(500, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag600", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(600, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag700", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(700, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag800", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(800, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag900", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(900, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag1000", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(1000, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag1500", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(1500, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    animations_1.trigger("childStag2000", [
        animations_1.transition("* => *", [
            animations_1.query(":enter, :leave", [
                animations_1.stagger(2000, [animations_1.animateChild()])
            ], { optional: true, limit: 300 })
        ])
    ])
];
