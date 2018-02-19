"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FxTracker = /** @class */ (function () {
    function FxTracker() {
        this.historyChange = new core_1.EventEmitter();
        this.indexChange = new core_1.EventEmitter();
        this.fxIdChange = new core_1.EventEmitter();
    }
    FxTracker.prototype.ngOnChanges = function (changes) {
        if (changes.value) {
            this.produceFxId(changes.value.currentValue);
        }
    };
    FxTracker.prototype.produceFxId = function (value) {
        this.history = this.history || [];
        this.index = this.index == null ? 0 : this.index;
        var histLen = this.history.length;
        var isBack = histLen && this.history[this.index - 1] == value;
        var isForward = histLen && this.history[this.index + 1] == value;
        //back
        if (isBack) {
            this.indexChange.emit(--this.index);
            this.fxId = this.fxId === 0 ? false : 0;
            this.fxIdChange.emit(this.fxId);
            return this.fxId;
        }
        this.fxId = this.fxId === 1 ? true : 1;
        this.fxIdChange.emit(this.fxId);
        if (isForward) {
            this.indexChange.emit(++this.index);
            return this.fxId;
        }
        this.history.push(value);
        this.index = this.history.length - 1;
        this.indexChange.emit(this.index);
        this.history.splice(25, this.history.length); //ensure history no greater than 25. If not this command does nothing
        return this.fxId;
    };
    FxTracker.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "fx-tracker"
                },] },
    ];
    /** @nocollapse */
    FxTracker.ctorParameters = function () { return []; };
    FxTracker.propDecorators = {
        "value": [{ type: core_1.Input },],
        "history": [{ type: core_1.Input },],
        "historyChange": [{ type: core_1.Output },],
        "index": [{ type: core_1.Input },],
        "indexChange": [{ type: core_1.Output },],
        "fxId": [{ type: core_1.Input },],
        "fxIdChange": [{ type: core_1.Output },],
    };
    return FxTracker;
}());
exports.FxTracker = FxTracker;
//# sourceMappingURL=FxTracker.directive.js.map