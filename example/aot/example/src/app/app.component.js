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
var core_1 = require("@angular/core");
var appHtml = require("./app-html");
//import { getFxArray,delayArray,animateConfig } from '../../../src';
var src_1 = require("../../../src");
var prefx_1 = require("./prefx");
//upgradeComponents(declarations)
//export const animations = getFxArray()
//const x = 'absoluteSwap'
var AppComponent = (function () {
    function AppComponent() {
        this.panelAnimation = 'slideInLeft';
        this.panelAnimType = 'slideIn';
        this.swapShow = 0;
        this.show = true;
        this.state = '';
        this.delayArray = src_1.delayArray;
        this.inAnimations = [
            'fadeIn',
            'fadeInDown',
            'fadeInLeft',
            'fadeInRight',
            'fadeInUp',
            'bounceIn',
            'bounceInDown',
            'bounceInLeft',
            'bounceInRight',
            'bounceInUp',
            'rotateIn',
            'rotateInDownLeft',
            'rotateInDownRight',
            'rotateInUpLeft',
            'rotateInUpRight',
            'slideInDown',
            'slideInLeft',
            'slideInRight',
            'slideInUp',
            'zoomIn',
            'zoomInDown',
            'zoomInLeft',
            'zoomInRight',
            'zoomInUp',
        ];
        this.outAnimations = [
            'fadeOut',
            'fadeOutDown',
            'fadeOutLeft',
            'fadeOutRight',
            'fadeOutUp',
            'bounceOut',
            'bounceOutDown',
            'bounceOutLeft',
            'bounceOutRight',
            'bounceOutUp',
            'rotateOut',
            'rotateOutDownLeft',
            'rotateOutDownRight',
            'rotateOutUpLeft',
            'rotateOutUpRight',
            'slideOutDown',
            'slideOutLeft',
            'slideOutRight',
            'slideOutUp',
            'zoomOut',
            'zoomOutDown',
            'zoomOutLeft',
            'zoomOutRight',
            'zoomOutUp',
        ];
        this.inAnimations = this.inAnimations.map(function (item) {
            return {
                key: item,
                show: true,
                bg: Math.floor(Math.random() * 16777215).toString(16)
            };
        });
        this.outAnimations = this.outAnimations.map(function (item) {
            return {
                key: item,
                bg: Math.floor(Math.random() * 16777215).toString(16)
            };
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        if (window['scriptLoadTime']) {
            console.log('Script Load Time', Date.now() - window['scriptLoadTime']);
        }
    };
    AppComponent.prototype.toggleAllShorts = function () {
        var _this = this;
        this.delayArray.forEach(function (v, i) {
            _this['show' + v] = !_this['show' + v];
        });
    };
    AppComponent.prototype.onToggleInAll = function () {
        this.inAnimations.forEach(function (item, i) {
            setTimeout(function () { return item.show = !item.show; }, 200 * i);
        });
    };
    AppComponent.prototype.onToggleOutAll = function () {
        this.outAnimations.forEach(function (item, i) {
            setTimeout(function () { return item.state = item.state ? '' : item.key; }, 200 * i);
        });
    };
    AppComponent.prototype.onToggleOutItem = function (item) {
        item.state = item.state ? '' : item.key;
    };
    AppComponent.prototype.nextPanel = function () {
        var _this = this;
        this.panelAnimation = this.panelAnimType + 'Left';
        setTimeout(function () { return _this.swapShow = _this.swapShow == 3 ? 0 : _this.swapShow + 1; }, 100);
    };
    AppComponent.prototype.priorPanel = function () {
        var _this = this;
        this.panelAnimation = this.panelAnimType + 'Right';
        setTimeout(function () { return _this.swapShow = _this.swapShow == 0 ? 3 : _this.swapShow - 1; }, 100);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: appHtml.string //require('./app.html'),
        //template: 'hello world'//require('./app.html'),
        //styles: [require('./app.css')]
        //,animations:animations
        //,animations:getFxArray()
        ,
        animations: prefx_1.fxArray
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map