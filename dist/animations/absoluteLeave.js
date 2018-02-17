"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
var index_1 = require("../index");
var helper_1 = require("./helper");
function triggers(config) {
    var timing = index_1.getConfigTiming(config);
    var absolute = animations_1.trigger('absoluteLeave', [
        animations_1.transition('* <=> *', [
            animations_1.group([
                // block executes in parallel
                animations_1.query(':leave', [
                    animations_1.animate('{{timing}}', animations_1.keyframes([
                        helper_1.stylize({
                            position: 'absolute',
                            width: '100%',
                            overflow: 'hidden',
                            offset: 0
                        }, config),
                        helper_1.stylize({
                            position: 'absolute',
                            width: '100%',
                            overflow: 'hidden',
                            offset: 1
                        }, config)
                    ]))
                ], { optional: true, params: { timing: '200ms 0ms linear' } })
            ], { params: { timing: '200ms 0ms linear' } })
        ])
    ]);
    return [absolute];
}
exports.triggers = triggers;
//# sourceMappingURL=absoluteLeave.js.map