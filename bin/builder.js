"use strict";
exports.__esModule = true;
//import { childStags } from "../../src/animations/childStag"
var childStags = require('../dist/animations/childStag').childStags;
function selectedFxToImportSyntax(selectedFx) {
    var fxStateSyntax = fxStatesToSyntaxArray(selectedFx.states).join();
    var syntax = fxStateSyntax;
    if (selectedFx.triggers.length) {
        var fxTriggSyntax = fxTriggersToSyntaxArray(selectedFx.triggers).join();
        if (selectedFx.states.length) {
            syntax += ',';
        }
        syntax += fxTriggSyntax;
    }
    return 'import { group, query, stagger, animateChild, AnimationTriggerMetadata,trigger,style,state,transition,animate,keyframes } from "@angular/animations"\n' +
        'export const fxArray = [' + syntax + ']';
}
exports.selectedFxToImportSyntax = selectedFxToImportSyntax;
function fxTriggersToSyntaxArray(fxArray) {
    var triggers = [];
    for (var trigIndex = fxArray.length - 1; trigIndex >= 0; --trigIndex) {
        var fx = fxArray[trigIndex];
        var name = fx.name;
        triggers.push(line() + triggerToString(fx));
    }
    return triggers;
}
function fxStatesToSyntaxArray(fxArray) {
    var triggers = [];
    for (var trigIndex = fxArray.length - 1; trigIndex >= 0; --trigIndex) {
        var fx = fxArray[trigIndex];
        var name = fx.name;
        if (name === 'childStag') {
            triggers.push.apply(triggers, childStags.map(function (trig) { return triggerToString(trig); }));
            continue;
        }
        triggers.push(line() + triggerToString(fx));
    }
    return triggers;
}
function line(tabs) {
    if (tabs === void 0) { tabs = 0; }
    return '\n' + '  '.repeat(tabs);
}
function stateDefsBy(defs, tabs) {
    if (tabs === void 0) { tabs = 0; }
    var states = [];
    var trans = '';
    var steps = '';
    var style = '';
    var expr = '';
    var l = line(tabs);
    for (var defIndex = defs.length - 1; defIndex >= 0; --defIndex) {
        var def = defs[defIndex];
        if (def.stateChangeExpr) {
            expr = def.stateChangeExpr.toString();
        }
        else {
            expr = def.expr || def.name;
        }
        if (def.styles) {
            style = JSON.stringify(def.styles.styles || def.styles.styles[0]); //Angular v4.0.0+ || v2.4.0+
            steps = l + ("  style(" + style + ")"); //style goes inside state
            trans = l + ("state(\"" + expr + "\", " + steps + ")");
        }
        else if (def.definitions) {
            trans = triggerToString(def, tabs); //Angular v4.0.0+ || v2.4.0+
        }
        else {
            steps = animateSteps(def.animation || def.steps._steps, tabs + 1); //Angular v4.0.0+ || v2.4.0+
            trans = l + ("transition(\"" + expr + "\", " + steps + ")");
        }
        states.push(trans);
    }
    return '[' + states.join() + ']';
}
/** returns string
  Angular v2.4 - steps:[{styles:{steps:[]},}]
  Angular v4.0.0 - animation:{styles:{steps:[]},}
*/
function animateSteps(steps, tabs) {
    var animations = [];
    var stepCount = steps.length;
    for (var stepIndex = 0; stepIndex < stepCount; ++stepIndex) {
        var step = steps[stepIndex];
        var anim = animationToString(step, tabs);
        animations.push(anim);
    }
    return '[' + animations.join() + ']';
}
function animationToString(step, tabs) {
    if (step.selector) {
        return queryToString(step, tabs);
    }
    else if (isStaggerStep(step)) {
        return staggerToString(step, tabs);
    }
    else if (isAnimateChild(step)) {
        return animateChildToString(step, tabs);
    }
    else if (isGroupStep(step)) {
        return groupToString(step, tabs);
    }
    else if (isTransitionStep(step)) {
        return transitionToString(step, tabs);
    }
    else if (isStyleStep(step)) {
        return styleToString(step, tabs);
    }
    else {
        return animateToString(step, tabs);
    }
}
function animateToString(step, tabs) {
    var stepString = '';
    if (step.styles.steps) {
        stepString = keyframeSteps(step.styles.steps, ++tabs);
    }
    else {
        stepString = styleToString(step.styles.styles, ++tabs);
    }
    return line(tabs) + ("animate(\"" + step.timings + "\", " + stepString + ")");
}
function triggerToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    return line(tabs) + ("trigger(\"" + step.name + "\", " + stateDefsBy(step.definitions, ++tabs) + ")");
}
function animateChildToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    return line(tabs) + 'animateChild()';
}
function intQuoter(v) {
    return isNaN(Number(v)) ? "'" + v + "'" : Number(v);
}
function groupToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    return line(tabs) + ("group(" + animateSteps(step.steps, ++tabs) + ")");
}
function transitionToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    return line(tabs) + ("transition(\"" + step.expr + "\", " + animateSteps(step.animation, ++tabs) + ")");
}
function staggerToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    return line(tabs) + ("stagger(" + intQuoter(step.timings) + ", " + animateSteps(step.animation, ++tabs) + ")");
}
function queryToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    return line(tabs) + ("query(\"" + step.selector + "\", " + animateSteps(step.animation, ++tabs) + ", " + JSON.stringify(step.options, null, 2) + ")");
}
function styleToString(style, tabs) {
    if (tabs === void 0) { tabs = 0; }
    var styleJson = JSON.stringify(style);
    return line(tabs) + ("style(" + styleJson + ")");
}
function keyframeSteps(steps, tabs) {
    if (tabs === void 0) { tabs = 0; }
    var stylings = [];
    var l = line(tabs);
    for (var styleIndex = 0; styleIndex < steps.length; ++styleIndex) {
        var step = steps[styleIndex];
        var style = step.styles.length ? step.styles[0] : step.styles;
        var styling = styleToString(style, tabs + 1);
        stylings.push(styling);
    }
    return l + ("keyframes([" + stylings.join() + "])");
}
function isGroupStep(step) {
    return step.type == 3;
}
function isTransitionStep(step) {
    return step.type == 7;
}
function isStaggerStep(step) {
    return step.type == 12;
}
function isAnimateChild(step) {
    return step.type == 9;
}
function isStyleStep(step) {
    return step.type == 6;
}
