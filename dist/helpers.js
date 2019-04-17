"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allFxDynamic_1 = require("./allFxDynamic");
var allFxDynamic_2 = require("./allFxDynamic");
exports.animations = allFxDynamic_2.animations;
const bounce_1 = require("./animations/bounce");
const rotate_1 = require("./animations/rotate");
const slide_1 = require("./animations/slide");
const zoom_1 = require("./animations/zoom");
const animations_1 = require("@angular/animations");
exports.availEffects = ['fade', 'bounce', 'rotate', 'slide', 'zoom'];
exports.delayArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000];
exports.animateDefaults = {
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
    absoluteSwap: Object.assign({ duration: 500 }, exports.absSwap),
    absoluteSwap100: Object.assign({ duration: 100 }, exports.absSwap),
    absoluteSwap200: Object.assign({ duration: 200 }, exports.absSwap),
    absoluteSwap300: Object.assign({ duration: 300 }, exports.absSwap),
    absoluteSwap400: Object.assign({ duration: 400 }, exports.absSwap),
    absoluteSwap500: Object.assign({ duration: 500 }, exports.absSwap),
    absoluteSwap600: Object.assign({ duration: 600 }, exports.absSwap),
    absoluteSwap700: Object.assign({ duration: 700 }, exports.absSwap),
    absoluteSwap800: Object.assign({ duration: 800 }, exports.absSwap),
    absoluteSwap900: Object.assign({ duration: 900 }, exports.absSwap),
    absoluteSwap1000: Object.assign({ duration: 1000 }, exports.absSwap),
    absoluteSwap1500: Object.assign({ duration: 1500 }, exports.absSwap),
    absoluteSwap2000: Object.assign({ duration: 2000 }, exports.absSwap),
    absoluteSwap2500: Object.assign({ duration: 2500 }, exports.absSwap),
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
    return Object.assign({}, exports.animateDefaults, config);
}
exports.defaultConfig = defaultConfig;
function animateConfig(name, config) {
    const dConfig = defaultConfig(config);
    const timing = getConfigTiming(dConfig);
    return createTriggerBy(name, config, timing);
}
exports.animateConfig = animateConfig;
function createTriggerBy(name, config, timing) {
    return animations_1.trigger(name, stateEffectsByConfig(timing, config));
}
exports.createTriggerBy = createTriggerBy;
function effectsArrayToTypes(eArray) {
    const ob = {};
    for (let x = exports.availEffects.length - 1; x >= 0; --x) {
        let fx = exports.availEffects[x];
        if (eArray.indexOf(fx) >= 0) {
            ob[fx] = true;
        }
    }
    return ob;
}
exports.effectsArrayToTypes = effectsArrayToTypes;
function stateEffectsByConfig(timing, config) {
    const array = [];
    const fxTypes = effectsArrayToTypes(config.effects || exports.availEffects);
    if (fxTypes.bounce) {
        array.push(...bounce_1.bounce(timing, config));
    }
    if (fxTypes.rotate) {
        array.push(...rotate_1.rotate(timing, config));
    }
    if (fxTypes.slide) {
        array.push(...slide_1.slide(timing, config));
    }
    if (fxTypes.zoom) {
        array.push(...zoom_1.zoom(timing, config));
    }
    return array;
}
exports.stateEffectsByConfig = stateEffectsByConfig;
function selectFx(args, effectList, config = { igniter: 'start' }) {
    const selectedFx = { states: [], triggers: [] };
    args.forEach(fxType => {
        const cloneConfig = Object.assign({}, exports.menu[fxType]);
        const newConfig = Object.assign({}, cloneConfig, config);
        const newSelect = processSelect(fxType, newConfig);
        selectedFx.states.push(newSelect);
    });
    selectedFx.triggers = processTriggerSelect(config, effectList);
    return selectedFx;
}
exports.selectFx = selectFx;
function processTriggerSelect(_config, _effectList) {
    const fxs = [];
    fxs.push.apply(fxs, allFxDynamic_1.animations);
    return fxs;
}
function processSelect(name, config) {
    config.igniter = config.igniter || 'void';
    return animateConfig(name, config);
}
exports.processSelect = processSelect;
function getAnimations() {
    const allFx = [
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
    allFx.push.apply(allFx, allFxDynamic_1.animations);
    return allFx;
}
exports.getAnimations = getAnimations;
exports.absSwapClone = {
    name: null, duration: null, whileStyle: null
};
