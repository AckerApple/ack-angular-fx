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
var allFxDynamic_1 = require("./allFxDynamic");
var fade_1 = require("./animations/fade");
var bounce_1 = require("./animations/bounce");
var rotate_1 = require("./animations/rotate");
var slide_1 = require("./animations/slide");
var zoom_1 = require("./animations/zoom");
var animations_1 = require("@angular/animations");
exports.availEffects = ['fade', 'bounce', 'rotate', 'slide', 'zoom'];
exports.delayArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000];
exports.animateDefaults = {
    //duration   : 500,
    //delay      : 0,
    //easing     : 'linear',
    stagger: 0,
    name: 'animate',
    igniter: '*',
    whileStyle: {},
    effects: exports.availEffects
};
exports.absSwap = {
    easing: 'linear', name: 'absoluteSwap', igniter: 'void',
    whileStyle: {
        position: 'absolute', width: '100%', 'overflow': 'hidden'
    }
};
exports.menu = {
    absoluteSwap: __assign({ duration: 500 }, exports.absSwap),
    absoluteSwap100: __assign({ duration: 100 }, exports.absSwap),
    absoluteSwap200: __assign({ duration: 200 }, exports.absSwap),
    absoluteSwap300: __assign({ duration: 300 }, exports.absSwap),
    absoluteSwap400: __assign({ duration: 400 }, exports.absSwap),
    absoluteSwap500: __assign({ duration: 500 }, exports.absSwap),
    absoluteSwap600: __assign({ duration: 600 }, exports.absSwap),
    absoluteSwap700: __assign({ duration: 700 }, exports.absSwap),
    absoluteSwap800: __assign({ duration: 800 }, exports.absSwap),
    absoluteSwap900: __assign({ duration: 900 }, exports.absSwap),
    absoluteSwap1000: __assign({ duration: 1000 }, exports.absSwap),
    absoluteSwap1500: __assign({ duration: 1500 }, exports.absSwap),
    absoluteSwap2000: __assign({ duration: 2000 }, exports.absSwap),
    absoluteSwap2500: __assign({ duration: 2500 }, exports.absSwap),
    "100": { duration: 100 },
    "200": { duration: 200 },
    "300": { duration: 300 },
    "400": { duration: 400 },
    "500": { duration: 500 },
    "600": { duration: 600 },
    "700": { duration: 700 },
    "800": { duration: 800 },
    "900": { duration: 900 },
    "1000": { duration: 1000 },
    "1500": { duration: 1500 },
    "2000": { duration: 2000 }
};
function getConfigTiming(config) {
    return [
        (config.duration || 500) + 'ms',
        (config.delay || 0) + 'ms',
        (config.easing || 'linear')
    ].join(' ');
}
exports.getConfigTiming = getConfigTiming;
function defaultConfig(config) {
    return __assign({}, exports.animateDefaults, config);
}
exports.defaultConfig = defaultConfig;
/*export function checkStagger(config){
  return (!config.stagger || console.log('ack-angular-fx does not support stagger as of this release')) && config
}*/
function animateConfig(name, config) {
    var dConfig = defaultConfig(config);
    var timing = getConfigTiming(dConfig);
    return createTriggerBy(name, config, timing);
}
exports.animateConfig = animateConfig;
function createTriggerBy(name, config, timing) {
    return animations_1.trigger(name, stateEffectsByConfig(timing, config));
}
exports.createTriggerBy = createTriggerBy;
function effectsArrayToTypes(eArray) {
    var ob = {};
    for (var x = exports.availEffects.length - 1; x >= 0; --x) {
        var fx = exports.availEffects[x];
        if (eArray.indexOf(fx) >= 0) {
            ob[fx] = true;
        }
    }
    return ob;
}
exports.effectsArrayToTypes = effectsArrayToTypes;
function stateEffectsByConfig(timing, config) {
    var array = [];
    var fxTypes = effectsArrayToTypes(config.effects || exports.availEffects);
    if (fxTypes.fade) {
        array.push.apply(array, fade_1.states(config));
    }
    if (fxTypes.bounce) {
        array.push.apply(array, bounce_1.bounce(timing, config));
    }
    if (fxTypes.rotate) {
        array.push.apply(array, rotate_1.rotate(timing, config));
    }
    if (fxTypes.slide) {
        array.push.apply(array, slide_1.slide(timing, config));
    }
    if (fxTypes.zoom) {
        array.push.apply(array, zoom_1.zoom(timing, config));
    }
    return array;
}
exports.stateEffectsByConfig = stateEffectsByConfig;
/*export function upgradeComponent(component, animations?){
  const annots = window['Reflect'].getMetadata("annotations", component)
  if(!annots)return
  
  annots[0].animations = annots[0].animations || []
  
  const fxArr = animations || fxArray
  
  annots[0].animations.push.apply(annots[0].animations, fxArr)
}*/
function selectFx(args, effectList, config) {
    if (config === void 0) { config = { igniter: 'start' }; }
    var selectedFx = { states: [], triggers: [] };
    //loop an array like [100,200,"childStag"]
    args.forEach(function (fxType) {
        var cloneConfig = __assign({}, exports.menu[fxType]);
        var newConfig = __assign({}, cloneConfig, config);
        var newSelect = processSelect(fxType, newConfig, effectList);
        selectedFx.states.push(newSelect);
    });
    selectedFx.triggers = processTriggerSelect(config, effectList);
    return selectedFx;
}
exports.selectFx = selectFx;
/** Goes into specialized fx files and plucks out the stand alone triggers */
// ---- NOT DONE ----
function processTriggerSelect(config, effectList) {
    var fxs = [];
    //const fxTypes = effectsArrayToTypes( config.effects || availEffects )
    fxs.push.apply(fxs, allFxDynamic_1.fxArray);
    return fxs;
}
function processSelect(name, config, effectArray) {
    config.igniter = config.igniter || 'void';
    return animateConfig(name, config);
}
exports.processSelect = processSelect;
/*export const easeArray = [
  {name:'Ease', value:'ease'},
  {name:'EaseIn', value:'ease-in'},
  {name:'EaseOut', value:'ease-out'},
  {name:'EaseInOut', value:'ease-in-out'}
]*/
//fxArray + deprecated fxs
function getFxArray() {
    var allFx = [
        processSelect("absoluteSwap", exports.menu["absoluteSwap400"]),
        processSelect("absoluteSwap100", exports.menu["absoluteSwap100"]),
        processSelect("absoluteSwap200", exports.menu["absoluteSwap200"]),
        processSelect("absoluteSwap300", exports.menu["absoluteSwap300"]),
        processSelect("absoluteSwap400", exports.menu["absoluteSwap400"]),
        processSelect("absoluteSwap500", exports.menu["absoluteSwap500"]),
        processSelect("absoluteSwap600", exports.menu["absoluteSwap600"]),
        processSelect("absoluteSwap700", exports.menu["absoluteSwap700"]),
        processSelect("absoluteSwap800", exports.menu["absoluteSwap800"]),
        processSelect("absoluteSwap900", exports.menu["absoluteSwap900"]),
        processSelect("absoluteSwap1000", exports.menu["absoluteSwap1000"]),
        processSelect("absoluteSwap1500", exports.menu["absoluteSwap1500"]),
        processSelect("absoluteSwap2000", exports.menu["absoluteSwap2000"]),
        processSelect("100", exports.menu["100"]),
        processSelect("200", exports.menu["200"]),
        processSelect("300", exports.menu["300"]),
        processSelect("400", exports.menu["400"]),
        processSelect("500", exports.menu["500"]),
        processSelect("600", exports.menu["600"]),
        processSelect("700", exports.menu["700"]),
        processSelect("800", exports.menu["800"]),
        processSelect("900", exports.menu["900"]),
        processSelect("1000", exports.menu["1000"]),
        processSelect("1500", exports.menu["1500"]),
        processSelect("2000", exports.menu["2000"])
    ];
    allFx.push.apply(allFx, allFxDynamic_1.fxArray);
    return allFx;
}
exports.getFxArray = getFxArray;
exports.absSwapClone = {
    name: null, duration: null, whileStyle: null
};
/*
export function upgradeComponents(array, animations?){
  for(let x=array.length-1; x >= 0; --x){
    upgradeComponent(array[x], animations)
  }
}
*/ 
