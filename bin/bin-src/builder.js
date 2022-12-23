"use strict";
exports.__esModule = true;
exports.selectedFxToImportSyntax = void 0;
//const childStags = require('../dist/animations/childStag').childStags;
function selectedFxToImportSyntax(selectedFx) {
    var syntax = "";
    var functions = {};
    //deprecated functions
    //const fxStateSyntax = fxStatesToSyntaxArray( selectedFx.states ).join()
    //syntax += fxStateSyntax
    if (selectedFx.triggers.length) {
        var fxTriggSyntax = fxTriggersToSyntaxArray(selectedFx.triggers);
        /*if( selectedFx.states.length ){
          syntax += ','
        }*/
        syntax += fxTriggSyntax.string;
        fxTriggSyntax.functions.map(function (f) { return functions[f.name] = f; });
    }
    var functionsString = "";
    for (var key in functions) {
        var f = functions[key];
        functionsString += "\nexport ".concat(f.toString(), "\n");
    }
    //AnimationTriggerMetadata, state
    return 'import { group, query, stagger, animateChild, trigger,style,transition,animate,keyframes } from "@angular/animations"\n' +
        functionsString +
        '\nexport const animations = [' + syntax + ']';
}
exports.selectedFxToImportSyntax = selectedFxToImportSyntax;
function fxTriggersToSyntaxArray(animations) {
    var triggers = [];
    var functions = [];
    for (var trigIndex = animations.length - 1; trigIndex >= 0; --trigIndex) {
        var fx = animations[trigIndex];
        var name = fx.name;
        var triggerDef = triggerToString(fx);
        functions.push.apply(functions, triggerDef.functions);
        var string = line() + triggerDef.string;
        triggers.push(string);
    }
    return {
        string: triggers.join(),
        functions: functions
    };
}
function fxStatesToSyntaxArray(animations) {
    var triggers = [];
    for (var trigIndex = animations.length - 1; trigIndex >= 0; --trigIndex) {
        var fx = animations[trigIndex];
        var name = fx.name;
        /*
        if( name==='childStag' ){
          triggers.push.apply(
            triggers,
            childStags.map(trig=>triggerToString(trig).string)
          )
          continue;
        }
        */
        triggers.push(line() + triggerToString(fx).string);
    }
    return triggers;
}
function line(tabs) {
    if (tabs === void 0) { tabs = 0; }
    return '\n' + '  '.repeat(tabs);
}
function stateDefsBy(defs, tabs) {
    if (tabs === void 0) { tabs = 0; }
    var functions = [];
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
            steps = l + "  style(".concat(style, ")"); //style goes inside state
            trans = l + "state(\"".concat(expr, "\", ").concat(steps, ")");
        }
        else if (def.definitions) {
            var triggerDef = triggerToString(def, tabs);
            trans = triggerDef.string; //Angular v4.0.0+ || v2.4.0+
            functions.push.apply(functions, triggerDef.functions);
        }
        else {
            steps = animateSteps(def.animation || def.steps._steps, tabs + 1); //Angular v4.0.0+ || v2.4.0+
            if (typeof expr === 'string') {
                expr = "\"".concat(expr, "\"");
            }
            else {
                functions.push(expr); //record functions
                //expr = expr.toString()
                expr = expr.name;
            }
            trans = l + "transition(".concat(expr, ", ").concat(steps);
            if (def.options) {
                trans += ',' + JSON.stringify(def.options, null, 2);
            }
            trans += ')';
        }
        states.push(trans);
    }
    return {
        string: '[' + states.join() + ']',
        functions: functions
    };
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
    else { //step.styles.styles
        stepString = styleToString(step.styles.styles, ++tabs);
    }
    return line(tabs) + "animate(\"".concat(step.timings, "\", ").concat(stepString, ")");
}
function triggerToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    var stateDefs = stateDefsBy(step.definitions, ++tabs);
    var functions = stateDefs.functions;
    var string = +stateDefs.string;
    return {
        string: line(tabs) + "trigger(\"".concat(step.name, "\", ").concat(stateDefs.string, ")"),
        functions: stateDefs.functions
    };
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
    return line(tabs) + "group(".concat(animateSteps(step.steps, ++tabs), ")");
}
function transitionToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    return line(tabs) + "transition(\"".concat(step.expr, "\", ").concat(animateSteps(step.animation, ++tabs), ")");
}
function staggerToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    return line(tabs) + "stagger(".concat(intQuoter(step.timings), ", ").concat(animateSteps(step.animation, ++tabs), ")");
}
function queryToString(step, tabs) {
    if (tabs === void 0) { tabs = 0; }
    return line(tabs) + "query(\"".concat(step.selector, "\", ").concat(animateSteps(step.animation, ++tabs), ", ").concat(JSON.stringify(step.options, null, 2), ")");
}
function styleToString(style, tabs) {
    if (tabs === void 0) { tabs = 0; }
    var styleJson = JSON.stringify(style);
    return line(tabs) + "style(".concat(styleJson, ")");
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
    return l + "keyframes([".concat(stylings.join(), "])");
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
