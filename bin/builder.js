const childStags = require('../dist/animations/childStag').childStags;

exports.fxArrayToImportSyntax = function fxArrayToImportSyntax(fxArray){
  return 'import { query, stagger, animateChild, AnimationTriggerMetadata,trigger,style,state,transition,animate,keyframes } from \'@angular/animations\'\n'+
  'export const fxArray = ['+
  fxArrayToSyntaxArray(fxArray).join() + ']'
}

exports.fxArrayToSyntaxArray = fxArrayToSyntaxArray

function fxArrayToSyntaxArray(fxArray){
  const triggers = []
  for(let trigIndex=fxArray.length-1; trigIndex >= 0; --trigIndex){
    let fx = fxArray[trigIndex]
    let states = pushStateDefs(fx.definitions,fx)
    let name = fx.name

    if(fx.name=='childStag'){
      triggers.push.apply(triggers, childStags.map(trig=>triggerToString(trig)))
      continue;
    }

    triggers.push(`\ntrigger('${name}', ${states})`)
  }

  return triggers
}

//returns string
function pushStateDefs(defs){
  let states = []
  let trans = ''
  let steps = ''
  let style = ''
  let expr = ''

  for(let defIndex=defs.length-1; defIndex >= 0; --defIndex){
    let def = defs[defIndex]
    expr = def.expr || def.name || def.stateChangeExpr//Angular v4.0.0+ || v2.4.0+

    if( def.styles ){
      style = JSON.stringify( def.styles.styles || def.styles.styles[0] )//Angular v4.0.0+ || v2.4.0+
      steps = `\nstyle(${style})`
      trans = `\nstate('${expr}', ${steps})`
    }else if(def.definitions){
      trans = triggerToString(def)//Angular v4.0.0+ || v2.4.0+
    }else{
      steps = animateSteps(def.animation || def.steps._steps)//Angular v4.0.0+ || v2.4.0+
      trans = `\ntransition('${expr}', ${steps})`
    }
    
    states.push( trans )
  }
  return '['+states.join()+']'
}

/** returns string
  Angular v2.4 - steps:[{styles:{steps:[]},}]
  Angular v4.0.0 - animation:{styles:{steps:[]},}
*/
function animateSteps(steps){
  const animations = []
  
  const stepCount = steps.length
  for(let stepIndex=0; stepIndex < stepCount; ++stepIndex){
    let step = steps[stepIndex]
    let anim = animationToString(step)

    animations.push( anim )
  }
  return '['+animations.join()+']'
}

function animationToString(step){
  if( step.selector ){
    return queryToString(step)
  }else if( isStaggerStep(step) ){
    return staggerToString(step)
  }else if( isAnimateChild(step) ){
    return animateChildToString(step)
  }else{
    return animateToString(step)
  }
}

function animateToString(step){
  let keySteps = keyframeSteps(step.styles.steps)
  //anim = animate(step.timings, keySteps)
  return `\nanimate('${step.timings}', ${keySteps})`
}

function triggerToString(step){
  return `\ntrigger('${step.name}', ${pushStateDefs(step.definitions)})`
}

function animateChildToString(step){
  return `\nanimateChild()`
}

function intQuoter(v){
  return isNaN(Number(v)) ? "'"+v+"'" : Number(v)
}

function staggerToString(step){
  return `\nstagger(${intQuoter(step.timings)}, ${animateSteps(step.animation)})`
}

function isStaggerStep(step){
  return step.type==12
}

function isAnimateChild(step){
  return step.type==9
}

function queryToString(step){
  return `\nquery('${step.selector}', ${animateSteps(step.animation)}, ${JSON.stringify(step.options,null,2)})`
}

function keyframeSteps(steps){
  const stylings = []
  for(let styleIndex=0; styleIndex < steps.length; ++styleIndex){
    let step = steps[styleIndex]
    //let styling = style(step)
    let styles = step.styles.length ? step.styles[0] : step.styles
    let styling = `\nstyle(${JSON.stringify(styles)})`
    stylings.push( styling )
  }
  return `keyframes([${stylings.join()}])`
}
