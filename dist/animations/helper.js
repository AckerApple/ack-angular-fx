"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animations_1 = require("@angular/animations");
function stylize(styleDef, options) {
    return animations_1.style(Object.assign({}, styleDef, options.whileStyle));
}
exports.stylize = stylize;
function defaultOptions(options = {}) {
    return Object.assign({ igniter: '*' }, options);
}
exports.defaultOptions = defaultOptions;
function combo(timing, options) {
    return { timing: timing, options: defaultOptions(options) };
}
exports.combo = combo;
function childInOutTransition(inStyles, outStyles) {
    const params = { time: '200ms 0ms linear' };
    return animations_1.transition('* <=> *', [inOutGroupQueryByStyles(inStyles, outStyles)], { params: params });
}
exports.childInOutTransition = childInOutTransition;
function inOutGroupQueryByStyles(inStyles, outStyles) {
    return animations_1.group([
        animations_1.query(':enter', [
            animations_1.animate('{{ time }}', animations_1.keyframes(inStyles))
        ], { optional: true }),
        animations_1.query(':leave', [
            animations_1.animate('{{ time }}', animations_1.keyframes(outStyles))
        ], { optional: true })
    ]);
}
exports.inOutGroupQueryByStyles = inOutGroupQueryByStyles;
function inFromVoid(from, to) {
    return to !== null && to !== 'nofx' && from === 'void' && to !== 'void' ? true : false;
}
exports.inFromVoid = inFromVoid;
function voidFromIn(from, to) {
    return from !== 'nofx' && from !== 'void' && to === 'void' ? true : false;
}
exports.voidFromIn = voidFromIn;
function inTransition(inStyles) {
    const params = { time: '200ms 0ms linear' };
    return animations_1.transition(inFromVoid, [
        animations_1.animate('{{ time }}', animations_1.keyframes(inStyles))
    ], { params: params });
}
exports.inTransition = inTransition;
function outTransition(outStyles) {
    const params = { time: '200ms 0ms linear' };
    return animations_1.transition(voidFromIn, [
        animations_1.animate('{{ time }}', animations_1.keyframes(outStyles))
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
    const params = { time: '200ms 0ms linear' };
    const group = inOutGroupQueryByStyles(inStyles, outStyles);
    const backGroup = inOutGroupQueryByStyles(backInStyles, backOutStyles);
    return [
        animations_1.transition(childIn, [group], { params: params }),
        animations_1.transition(childOut, [backGroup], { params: params })
    ];
}
exports.childInOutTransitions = childInOutTransitions;
