"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { style } from '@angular/core';
var animations_1 = require("@angular/animations");
var index_1 = require("../index");
function stylize(styleDef, options) {
    return animations_1.style(__assign({}, styleDef, options.whileStyle));
}
exports.stylize = stylize;
function defaultOptions(options) {
    if (options === void 0) { options = {}; }
    return __assign({ igniter: '*' }, options);
}
exports.defaultOptions = defaultOptions;
function combo(timing, options) {
    return { timing: timing, options: defaultOptions(options) };
}
exports.combo = combo;
//# sourceMappingURL=helper.js.map