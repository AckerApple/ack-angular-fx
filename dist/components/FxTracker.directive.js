"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FxTracker = /** @class */ (function () {
    function FxTracker() {
    }
    FxTracker.prototype.ngOnChanges = function (changes) {
        if (changes.value) {
            this.produceFxId(changes.value.currentValue);
        }
    };
    FxTracker.prototype.produceFxId = function (value) {
        var histLen = this.history.length;
        var isBack = histLen && this.history[this.histPos - 1] == value;
        var isForward = histLen && this.history[this.histPos + 1] == value;
        console.log('history', isBack, this.histPos, this.history, value);
        //back
        if (isBack) {
            --this.histPos;
            this.fxId = this.fxId === 0 ? false : 0;
            this.fxIdChange.emit(this.fxId);
            return this.fxId;
        }
        this.fxId = this.fxId === 1 ? true : 1;
        this.fxIdChange.emit(this.fxId);
        if (isForward) {
            ++this.histPos;
            return this.fxId;
        }
        this.history.push(value);
        this.histPos = this.history.length - 1;
        this.history.splice(25, this.history.length); //ensure history no greater than 25. If not this command does nothing
        return this.fxId;
    };
    return FxTracker;
}());
exports.FxTracker = FxTracker;
//# sourceMappingURL=FxTracker.directive.js.map