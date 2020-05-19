import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxTracker } from './components/FxTracker.directive';
import * as i0 from "@angular/core";
var AckFxModule = (function () {
    function AckFxModule() {
    }
    AckFxModule.ɵmod = i0.ɵɵdefineNgModule({ type: AckFxModule });
    AckFxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AckFxModule_Factory(t) { return new (t || AckFxModule)(); }, imports: [[
                CommonModule,
            ]] });
    return AckFxModule;
}());
export { AckFxModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AckFxModule, { declarations: [FxTracker], imports: [CommonModule], exports: [FxTracker] }); })();
(function () { i0.ɵsetClassMetadata(AckFxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [FxTracker],
                exports: [FxTracker]
            }]
    }], null, null); })();
