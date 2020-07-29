import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FxTracker } from './components/FxTracker.directive';
var AckFxModule = (function () {
    function AckFxModule() {
    }
    AckFxModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: [FxTracker],
            exports: [FxTracker]
        })
    ], AckFxModule);
    return AckFxModule;
}());
export { AckFxModule };
