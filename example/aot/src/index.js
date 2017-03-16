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
require("reflect-metadata");
//import "web-animations-js"
//import { setDocument } from "web-animations-js"
var core_1 = require("@angular/core");
var fade_1 = require("./animations/fade");
var bounce_1 = require("./animations/bounce");
var rotate_1 = require("./animations/rotate");
var slide_1 = require("./animations/slide");
var zoom_1 = require("./animations/zoom");
/*import { setDocument } from "./web-animations.min"

export function browserSupport(){
  return setDocument(document)
}*/
exports.animateDefaults = {
    duration: 500,
    delay: 0,
    easing: 'linear',
    stagger: 0,
    name: 'animate',
    igniter: '*',
    whileStyle: {}
};
function animateFactory(duration, delay, easing, stagger, name) {
    var config = {
        duration: duration,
        delay: delay,
        easing: easing,
        stagger: stagger,
        name: name
    };
    return animateConfig(name, config);
}
exports.animateFactory = animateFactory;
;
function defaultConfig(config) {
    return __assign({}, exports.animateDefaults, config);
}
exports.defaultConfig = defaultConfig;
function checkStagger(config) {
    return (!config.stagger || console.log('ack-angular-fx does not support stagger as of this release')) && config;
}
exports.checkStagger = checkStagger;
function animateConfig(name, config) {
    return animateFixedConfig(name, defaultConfig(config));
    //return animateFixedConfig( checkStagger( defaultConfig(config) ) )
}
exports.animateConfig = animateConfig;
function animateFixedConfig(name, config) {
    return createTriggerBy(name, config, getConfigTiming(config));
}
exports.animateFixedConfig = animateFixedConfig;
function getConfigTiming(config) {
    return [
        //typeof(config.duration) === 'number' ? config.duration+'ms' : config.duration,
        config.duration + 'ms',
        //typeof(config.delay) === 'number' ? config.delay+'ms' : config.delay,
        config.delay + 'ms',
        config.easing
    ].join(' ');
}
exports.getConfigTiming = getConfigTiming;
function createTriggerBy(name, config, timing) {
    return core_1.trigger(name, fade_1.fade(timing, config).concat(bounce_1.bounce(timing, config), rotate_1.rotate(timing, config), slide_1.slide(timing, config), zoom_1.zoom(timing, config)));
}
exports.createTriggerBy = createTriggerBy;
function upgradeComponent(component) {
    var annots = Reflect.getMetadata("annotations", component);
    annots[0].animations = annots[0].animations || [];
    annots[0].animations.push.apply(annots[0].animations, getFxArray());
}
exports.upgradeComponent = upgradeComponent;
function selectFx() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var array = [animateConfig(exports.absSwap.name, exports.absSwap)];
    args.forEach(function (v) {
        var a = processEachDelay(v);
        return array.push.apply(array, a); //[...array, ...a][a[0],a[1]]
    });
    return array;
}
exports.selectFx = selectFx;
exports.absSwap = {
    easing: 'linear', name: 'absoluteSwap', igniter: 'void',
    whileStyle: {
        position: 'absolute', width: '100%', 'overflow': 'hidden'
    }
};
exports.delayArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000];
/*export const easeArray = [
  {name:'Ease', value:'ease'},
  {name:'EaseIn', value:'ease-in'},
  {name:'EaseOut', value:'ease-out'},
  {name:'EaseInOut', value:'ease-in-out'}
]*/
function getFxArray() {
    return [
        animateConfig(exports.absSwap.name, exports.absSwap)
    ].concat(processEachDelay('100'), processEachDelay('200'), processEachDelay('300'), processEachDelay('400'), processEachDelay('500'), processEachDelay('600'), processEachDelay('700'), processEachDelay('800'), processEachDelay('900'), processEachDelay('1000'), processEachDelay('1500'), processEachDelay('2000'));
}
exports.getFxArray = getFxArray;
exports.absSwapClone = { name: null, duration: null, whileStyle: null };
function processEachDelay(n) {
    return [
        animateConfig(n, { duration: n, name: n }),
        animateConfig('absoluteSwap' + n, __assign({ name: null, duration: null, whileStyle: null }, exports.absSwap, { name: 'absoluteSwap' + n, duration: n }))
    ];
}
exports.processEachDelay = processEachDelay;
/* Experimental ease references

  for(let eIndex=easeArray.length-1; eIndex >= 0; --eIndex){
    let ease = easeArray[eIndex]

    fxArray.push(
      animateConfig({duration:n, name:n+ease.name, ease:ease.value})
    )

    absSwapClone = Object.assign({name:null, duration:null, whileStyle:null}, absSwap)
    absSwapClone.name = absSwapClone.name+n+ease.name
    absSwapClone.duration = n
    absSwapClone.ease = ease.value
    fxArray.push(
      animateConfig( absSwapClone )
    )
  }
*/
function upgradeComponents(array) {
    for (var x = array.length - 1; x >= 0; --x) {
        upgradeComponent(array[x]);
    }
}
exports.upgradeComponents = upgradeComponents;
//# sourceMappingURL=index.js.map