"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
let FxTracker = class FxTracker {
    constructor() {
        this.historyChange = new core_1.EventEmitter();
        this.indexChange = new core_1.EventEmitter();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.loaded = true);
    }
    ngOnChanges(changes) {
        if (changes.activatedRoute && changes.activatedRoute.currentValue) {
            this.produceByRoute(this.activatedRoute);
        }
        else if (changes.value) {
            this.produceFxId(this.value);
        }
    }
    produceByRoute(activatedRoute) {
        const path = this.getRoutePath(activatedRoute);
        this.produceFxId(path);
        this.value = path;
    }
    produceFxId(value) {
        this.history = this.history || [];
        if (this.orderArray) {
            this.id = this.produceOrderFxId(value);
        }
        else {
            this.index = this.index == null ? 0 : this.index;
            const histLen = this.history.length;
            const isBack = histLen && this.history[this.index + 1] == value;
            const isForward = histLen && this.history[this.index - 1] == value;
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
    }
    produceOrderFxId(value) {
        let oldIndex = 0;
        let newIndex = 0;
        const oldValue = this.history[this.history.length - 1];
        this.orderArray.forEach((item, index) => {
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
    }
    getRoutePath(activatedRoute) {
        let target = activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return target.routeConfig.path;
    }
    delayOutFx() {
        Promise.resolve().then(() => this.inFx = false);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FxTracker.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", router_1.ActivatedRoute)
], FxTracker.prototype, "activatedRoute", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FxTracker.prototype, "orderArray", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], FxTracker.prototype, "history", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FxTracker.prototype, "historyChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FxTracker.prototype, "index", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FxTracker.prototype, "indexChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FxTracker.prototype, "id", void 0);
FxTracker = __decorate([
    core_1.Directive({
        selector: "fx-tracker",
        exportAs: "FxTracker"
    })
], FxTracker);
exports.FxTracker = FxTracker;
