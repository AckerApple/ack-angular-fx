import { EventEmitter, Output, Input, Directive } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var FxTracker = (function () {
    function FxTracker(router) {
        var _this = this;
        this.router = router;
        this.history = [];
        this.historyChange = new EventEmitter();
        this.indexChange = new EventEmitter();
        router.events.subscribe(function (event) {
            if (event.constructor == NavigationStart) {
                _this.produceByRoute(_this.activatedRoute);
            }
        });
    }
    FxTracker.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            return _this.loaded = true;
        });
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
        var _a;
        var target = activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        var snap = target._routerState.snapshot;
        var ngOldPath = (_a = target.routeConfig) === null || _a === void 0 ? void 0 : _a.path;
        var path = ngOldPath || snap.url;
        return path;
    };
    FxTracker.prototype.delayOutFx = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.inFx = false; });
    };
    FxTracker.ɵfac = function FxTracker_Factory(t) { return new (t || FxTracker)(i0.ɵɵdirectiveInject(i1.Router)); };
    FxTracker.ɵdir = i0.ɵɵdefineDirective({ type: FxTracker, selectors: [["fx-tracker"]], inputs: { value: "value", activatedRoute: "activatedRoute", orderArray: "orderArray", history: "history", index: "index", id: "id" }, outputs: { historyChange: "historyChange", indexChange: "indexChange" }, exportAs: ["FxTracker"] });
    return FxTracker;
}());
export { FxTracker };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FxTracker, [{
        type: Directive,
        args: [{
                selector: 'fx-tracker',
                exportAs: 'FxTracker'
            }]
    }], function () { return [{ type: i1.Router }]; }, { value: [{
            type: Input
        }], activatedRoute: [{
            type: Input
        }], orderArray: [{
            type: Input
        }], history: [{
            type: Input
        }], historyChange: [{
            type: Output
        }], index: [{
            type: Input
        }], indexChange: [{
            type: Output
        }], id: [{
            type: Input
        }] }); })();
