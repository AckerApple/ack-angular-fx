"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.childInOutTransitions = exports.childOut = exports.childIn = exports.inOutTransitions = exports.outTransition = exports.inTransition = exports.voidFromIn = exports.inFromVoid = exports.inOutGroupQueryByStyles = exports.childInOutTransition = exports.combo = exports.defaultOptions = exports.stylize = void 0;
//import { style } from '@angular/core';
var animations_1 = require("@angular/animations");
function stylize(styleDef, options) {
    return (0, animations_1.style)(__assign(__assign({}, styleDef), options.whileStyle));
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
function childInOutTransition(inStyles, outStyles) {
    var params = { time: '200ms 0ms linear' };
    return (0, animations_1.transition)('* <=> *', [inOutGroupQueryByStyles(inStyles, outStyles)], { params: params });
}
exports.childInOutTransition = childInOutTransition;
function inOutGroupQueryByStyles(inStyles, outStyles) {
    return (0, animations_1.group)([
        (0, animations_1.query)(':enter', [
            (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(inStyles))
        ], { optional: true }),
        (0, animations_1.query)(':leave', [
            (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(outStyles))
        ], { optional: true })
    ]);
}
exports.inOutGroupQueryByStyles = inOutGroupQueryByStyles;
//used for showing
function inFromVoid(from, to) {
    return to !== null && to !== 'nofx' && from === 'void' && to !== 'void' ? true : false;
}
exports.inFromVoid = inFromVoid;
//used for hidding
function voidFromIn(from, to) {
    return from !== 'nofx' && from !== 'void' && to === 'void' ? true : false;
}
exports.voidFromIn = voidFromIn;
function inTransition(inStyles) {
    var params = { time: '200ms 0ms linear' };
    return (0, animations_1.transition)(inFromVoid, 
    //'void => *',
    [
        (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(inStyles))
    ], { params: params });
}
exports.inTransition = inTransition;
function outTransition(outStyles) {
    var params = { time: '200ms 0ms linear' };
    return (0, animations_1.transition)(voidFromIn, 
    //'* => void',
    [
        (0, animations_1.animate)('{{ time }}', (0, animations_1.keyframes)(outStyles))
    ], { params: params });
}
exports.outTransition = outTransition;
function inOutTransitions(inStyles, outStyles) {
    return [
        inTransition(inStyles),
        outTransition(outStyles)
    ];
}
exports.inOutTransitions = inOutTransitions;
function childIn(_from, to) {
    return to ? true : false;
}
exports.childIn = childIn;
function childOut(_from, to) {
    return !to ? true : false;
}
exports.childOut = childOut;
function childInOutTransitions(inStyles, outStyles, backInStyles, backOutStyles) {
    var params = { time: '200ms 0ms linear' };
    var group = inOutGroupQueryByStyles(inStyles, outStyles);
    var backGroup = inOutGroupQueryByStyles(backInStyles, backOutStyles);
    return [
        (0, animations_1.transition)(childIn, [group], { params: params }),
        (0, animations_1.transition)(childOut, [backGroup], { params: params })
    ];
}
exports.childInOutTransitions = childInOutTransitions;
