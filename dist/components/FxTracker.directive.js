import { __decorate, __metadata } from "tslib";
import { EventEmitter, Output, Input, Directive } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
var FxTracker = (function () {
    function FxTracker() {
        this.history = [];
        this.historyChange = new EventEmitter();
        this.indexChange = new EventEmitter();
    }
    FxTracker.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            return _this.loaded = true;
        });
    };
    FxTracker.prototype.ngOnChanges = function (changes) {
        if (changes.activatedRoute && changes.activatedRoute.currentValue) {
            this.produceByRoute(this.activatedRoute);
        }
        else if (changes.value) {
            this.produceFxId(this.value);
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
            this.id = this.produceOrderFxId(value);
        }
        else {
            this.index = this.index == null ? 0 : this.index;
            var histLen = this.history.length;
            var isBack = histLen && this.history[this.index + 1] == value;
            var isForward = histLen && this.history[this.index - 1] == value;
            if (isBack) {
                this.indexChange.emit(++this.index);
                this.id = this.id === 0 ? false : 0;
                return this.id;
            }
            this.id = this.id === 1 ? true : 1;
            if (isForward) {
                this.indexChange.emit(--this.index);
                return this.id;
            }
        }
        this.history.splice(this.index, 0, value);
        this.indexChange.emit(this.index);
        this.history.splice(25, this.history.length);
        this.historyChange.emit(this.history);
        return this.id;
    };
    FxTracker.prototype.produceOrderFxId = function (value) {
        var oldIndex = 0;
        var newIndex = 0;
        var oldValue = this.orderArray[this.orderIndex];
        for (var index = this.orderArray.length - 1; index >= 0; --index) {
            var item = this.orderArray[index];
            if (value === item) {
                newIndex = index;
            }
            if (oldValue === item) {
                oldIndex = index;
            }
        }
        this.orderIndex = newIndex;
        if (newIndex <= oldIndex) {
            return this.id = this.id === 0 ? false : 0;
        }
        return this.id = this.id === 1 ? true : 1;
    };
    FxTracker.prototype.getRoutePath = function (activatedRoute) {
        var target = activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return target.routeConfig.path;
    };
    FxTracker.prototype.delayOutFx = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.inFx = false; });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FxTracker.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", ActivatedRoute)
    ], FxTracker.prototype, "activatedRoute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], FxTracker.prototype, "orderArray", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], FxTracker.prototype, "history", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], FxTracker.prototype, "historyChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], FxTracker.prototype, "index", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], FxTracker.prototype, "indexChange", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FxTracker.prototype, "id", void 0);
    FxTracker = __decorate([
        Directive({
            selector: 'fx-tracker',
            exportAs: 'FxTracker'
        })
    ], FxTracker);
    return FxTracker;
}());
export { FxTracker };
