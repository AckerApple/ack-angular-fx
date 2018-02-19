"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var FxTracker_directive_1 = require("./components/FxTracker.directive");
var AckFxModule = /** @class */ (function () {
    function AckFxModule() {
    }
    AckFxModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                    ],
                    declarations: [FxTracker_directive_1.FxTracker],
                    exports: [FxTracker_directive_1.FxTracker]
                },] },
    ];
    /** @nocollapse */
    AckFxModule.ctorParameters = function () { return []; };
    return AckFxModule;
}());
exports.AckFxModule = AckFxModule;
//# sourceMappingURL=AckFx.module.js.map