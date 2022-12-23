"use strict";
exports.__esModule = true;
exports.childStags = void 0;
var animations_1 = require("@angular/animations");
exports.childStags = [
    (0, animations_1.trigger)("childStag50", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(50, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag100", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(100, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                //default must be same as all time defaults in individual fx files
                (0, animations_1.stagger)(200, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag200", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(200, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag300", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(300, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag400", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(400, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag500", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(500, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag600", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(600, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag700", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(700, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag800", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(800, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag900", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(900, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag1000", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(1000, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag1500", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(1500, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ]),
    (0, animations_1.trigger)("childStag2000", [
        (0, animations_1.transition)("* => *", [
            (0, animations_1.query)(":enter, :leave", [
                (0, animations_1.stagger)(2000, [(0, animations_1.animateChild)()])
            ], { optional: true, limit: 300 })
        ])
    ])
];
