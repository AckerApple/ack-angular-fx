"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var core_1 = require("@angular/core");
var fade_1 = require("./animations/fade");
var bounce_1 = require("./animations/bounce");
var rotate_1 = require("./animations/rotate");
var slide_1 = require("./animations/slide");
var zoom_1 = require("./animations/zoom");
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
    return animateConfig(config);
}
exports.animateFactory = animateFactory;
;
function animateConfig(config) {
    config = config || {};
    config.duration = config.duration == null ? exports.animateDefaults.duration : config.duration;
    config.delay = config.delay == null ? exports.animateDefaults.delay : config.delay;
    config.easing = config.easing = null ? exports.animateDefaults.easing : config.easing;
    config.stagger = config.stagger = null ? exports.animateDefaults.stagger : config.stagger;
    config.name = config.name == null ? exports.animateDefaults.name : config.name;
    config.igniter = config.igniter == null ? exports.animateDefaults.igniter : config.igniter;
    config.whileStyle = config.whileStyle == null ? exports.animateDefaults.whileStyle : config.whileStyle;
    if (config.stagger) {
        console.log('ack-angular-fx does not support stagger as of this release');
    }
    var timing = [
        typeof (config.duration) === 'number' ? config.duration + "ms" : config.duration,
        typeof (config.delay) === 'number' ? config.delay + "ms" : config.delay,
        config.easing
    ].join(' ');
    return core_1.trigger(config.name, fade_1.fade(timing, config).concat(bounce_1.bounce(timing, config), rotate_1.rotate(timing, config), slide_1.slide(timing, config), zoom_1.zoom(timing, config)));
}
exports.animateConfig = animateConfig;
;
exports.delayArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000];
/*export const easeArray = [
  {name:'Ease', value:'ease'},
  {name:'EaseIn', value:'ease-in'},
  {name:'EaseOut', value:'ease-out'},
  {name:'EaseInOut', value:'ease-in-out'}
]*/
function upgradeComponent(component, animations) {
    animations = animations || getFxArray();
    var annots = Reflect.getMetadata("annotations", component);
    annots[0].animations = annots[0].animations || [];
    annots[0].animations.push.apply(annots[0].animations, fxArray);
}
exports.upgradeComponent = upgradeComponent;
var fxArray = [];
function getFxArray() {
    if (fxArray.length)
        return fxArray;
    var absSwap = {
        easing: 'linear', name: 'absoluteSwap', igniter: 'void',
        whileStyle: {
            position: 'absolute', width: '100%', 'overflow': 'hidden'
        }
    };
    fxArray.push(animateConfig(absSwap));
    var absSwapClone = { name: null, duration: null, whileStyle: null };
    for (var x = exports.delayArray.length - 1; x >= 0; --x) {
        var n = exports.delayArray[x];
        fxArray.push(animateConfig({ duration: n, name: n.toString() }));
        absSwapClone = Object.assign({ name: null, duration: null, whileStyle: null }, absSwap);
        absSwapClone.name = absSwapClone.name + n;
        absSwapClone.duration = n;
        fxArray.push(animateConfig(absSwapClone));
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
    }
    return fxArray;
}
exports.getFxArray = getFxArray;
function upgradeComponents(array, animations) {
    for (var x = array.length - 1; x >= 0; --x) {
        upgradeComponent(array[x], animations);
    }
}
exports.upgradeComponents = upgradeComponents;
//# sourceMappingURL=index.js.map