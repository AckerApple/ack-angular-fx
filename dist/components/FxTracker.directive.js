"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FxTracker = (function () {
    function FxTracker() {
        this.historyChange = new core_1.EventEmitter();
        this.indexChange = new core_1.EventEmitter();
        this.fxIdChange = new core_1.EventEmitter();
    }
    FxTracker.prototype.ngOnChanges = function (changes) {
        if (changes.value) {
            this.produceFxId(changes.value.currentValue);
        }
        if (changes.activatedRoute && changes.activatedRoute.currentValue) {
            this.produceByRoute(changes.activatedRoute.currentValue);
        }
    };
    FxTracker.prototype.produceByRoute = function (activatedRoute) {
        var path = this.getRoutePath(activatedRoute);
        this.produceFxId(path);
        this.value = path;
    };
    FxTracker.prototype.produceFxId = function (value) {
        this.history = this.history || [];
        if (this.orderArray) {
            this.fxId = this.produceOrderFxId(value);
            this.fxIdChange.emit(this.fxId);
        }
        else {
            this.index = this.index == null ? 0 : this.index;
            var histLen = this.history.length;
            var isBack = histLen && this.history[this.index - 1] == value;
            var isForward = histLen && this.history[this.index + 1] == value;
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
            this.index = this.history.length; //push will occur
        }
        this.history.push(value);
        this.indexChange.emit(this.index);
        this.history.splice(25, this.history.length); //ensure history no greater than 25. If not this command does nothing
        this.historyChange.emit(this.history);
        return this.fxId;
    };
    FxTracker.prototype.produceOrderFxId = function (value) {
        var oldIndex = 0;
        var newIndex = 0;
        var oldValue = this.history[this.history.length - 1];
        this.orderArray.forEach(function (item, index) {
            if (value === item) {
                newIndex = index;
            }
            if (oldValue === item) {
                oldIndex = index;
            }
        });
        this.index = newIndex;
        if (newIndex > oldIndex) {
            return this.fxId = this.fxId === 0 ? false : 0;
        }
        return this.fxId = this.fxId === 1 ? true : 1;
    };
    FxTracker.prototype.getRoutePath = function (activatedRoute) {
        var target = activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return target.routeConfig.path;
    };
    FxTracker.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "fx-tracker",
                    exportAs: "fxTracker"
                },] },
    ];
    /** @nocollapse */
    FxTracker.ctorParameters = function () { return []; };
    FxTracker.propDecorators = {
        "value": [{ type: core_1.Input },],
        "activatedRoute": [{ type: core_1.Input },],
        "orderArray": [{ type: core_1.Input },],
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