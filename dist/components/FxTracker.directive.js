"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FxTracker = /** @class */ (function () {
    function FxTracker() {
        this.historyChange = new core_1.EventEmitter();
        this.indexChange = new core_1.EventEmitter();
    }
    FxTracker.prototype.ngAfterViewInit = function () {
        var _this = this;
        //a much needed pause to properly routerOutlet.activated
        setTimeout(function () {
            return _this.loaded = true;
        }, 0);
    };
    FxTracker.prototype.ngOnChanges = function (changes) {
        if (changes.activatedRoute && changes.activatedRoute.currentValue) {
            this.produceByRoute(changes.activatedRoute.currentValue);
        }
        else if (changes.value) {
            this.produceFxId(changes.value.currentValue);
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
            var isBack = histLen && this.history[this.index - 1] == value;
            var isForward = histLen && this.history[this.index + 1] == value;
            if (isBack) {
                this.indexChange.emit(--this.index);
                this.id = this.id === 0 ? false : 0;
                return this.id;
            }
            this.id = this.id === 1 ? true : 1;
            if (isForward) {
                this.indexChange.emit(++this.index);
                return this.id;
            }
            this.index = this.history.length; //push will occur
        }
        this.history.push(value);
        this.indexChange.emit(this.index);
        this.history.splice(25, this.history.length); //ensure history no greater than 25. If not this command does nothing
        this.historyChange.emit(this.history);
        return this.id;
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
    FxTracker.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "fx-tracker",
                    exportAs: "FxTracker"
                },] },
    ];
    FxTracker.propDecorators = {
        value: [{ type: core_1.Input }],
        activatedRoute: [{ type: core_1.Input }],
        orderArray: [{ type: core_1.Input }],
        history: [{ type: core_1.Input }],
        historyChange: [{ type: core_1.Output }],
        index: [{ type: core_1.Input }],
        indexChange: [{ type: core_1.Output }],
        id: [{ type: core_1.Input }]
    };
    return FxTracker;
}());
exports.FxTracker = FxTracker;
//# sourceMappingURL=FxTracker.directive.js.map