import { AnimationTriggerMetadata } from "@angular/animations"
import { selectedFxMetaData } from "../src/fxTypes"

//const childStags = require('../dist/animations/childStag').childStags;

export function selectedFxToImportSyntax(
  selectedFx:selectedFxMetaData
){
  let syntax = ""
  let functions = {}

  //deprecated functions
  //const fxStateSyntax = fxStatesToSyntaxArray( selectedFx.states ).join()
  //syntax += fxStateSyntax
  if( selectedFx.triggers.length ){
    const fxTriggSyntax = fxTriggersToSyntaxArray( selectedFx.triggers )
    /*if( selectedFx.states.length ){
      syntax += ','
    }*/
    syntax += fxTriggSyntax.string
    fxTriggSyntax.functions.map(f=>functions[f.name]=f)
  }

  let functionsString = ""
  for(let key in functions){
    let f = functions[key]
    functionsString += `\nexport ${f.toString()}\n`
  }
  
  //AnimationTriggerMetadata, state
  return 'import { group, query, stagger, animateChild, trigger,style,transition,animate,keyframes } from "@angular/animations"\n'+
  functionsString+
  '\nexport const animations = [' + syntax + ']'
}

function fxTriggersToSyntaxArray(
  animations:AnimationTriggerMetadata[]
) : {
  string:string,
  functions:Function[]
}
{
  const triggers = []
  const functions = []
  for(let trigIndex=animations.length-1; trigIndex >= 0; --trigIndex){
    let fx = animations[trigIndex]
    let name = fx.name
    let triggerDef = triggerToString(fx)
    functions.push.apply(functions,triggerDef.functions)
    let string = line() + triggerDef.string
    triggers.push( string )
  }

  return {
    string:triggers.join(),
    functions:functions
  }
}

function fxStatesToSyntaxArray( animations:AnimationTriggerMetadata[] ) : string[] {
  const triggers = []
  for(let trigIndex=animations.length-1; trigIndex >= 0; --trigIndex){
    let fx = animations[trigIndex]
    let name = fx.name

    /*
    if( name==='childStag' ){
      triggers.push.apply(
        triggers,
        childStags.map(trig=>triggerToString(trig).string)
      )
      continue;
    }
    */

    triggers.push( line() + triggerToString(fx).string)
  }

  return triggers
}

function line(tabs:number=0){
  return '\n' + '  '.repeat(tabs)
}

function stateDefsBy(
  defs:any[], tabs:number=0
) : {
  string:string,
  functions:Function[]
}{
  const functions = []
  let states = []
  let trans = ''
  let steps = ''
  let style = ''
  let expr:any = ''
  const l = line(tabs)

  for(let defIndex=defs.length-1; defIndex >= 0; --defIndex){
    let def = defs[defIndex]
    
    if( def.stateChangeExpr ){
      expr = def.stateChangeExpr.toString()
    }else{
      expr = def.expr || def.name
    }

    if( def.styles ){
      style = JSON.stringify( def.styles.styles || def.styles.styles[0] )//Angular v4.0.0+ || v2.4.0+
      steps = l + `  style(${style})`//style goes inside state
      trans = l + `state("${expr}", ${steps})`
    }else if(def.definitions){
      let triggerDef = triggerToString(def, tabs)
      trans = triggerDef.string//Angular v4.0.0+ || v2.4.0+
      functions.push.apply(functions, triggerDef.functions)
    }else{
      steps = animateSteps(def.animation || def.steps._steps, tabs+1)//Angular v4.0.0+ || v2.4.0+
      
      if( typeof expr==='string' ){
        expr = `"${expr}"`
      }else{
        functions.push(expr)//record functions
        //expr = expr.toString()
        expr = expr.name
      }

      trans = l + `transition(${expr}, ${steps}`
      if(def.options){
        trans += ',' + JSON.stringify(def.options,null,2)
      }
      trans += ')'
    }
    
    states.push( trans )
  }
  return {
    string:'['+states.join()+']',
    functions:functions
  }
}

/** returns string
  Angular v2.4 - steps:[{styles:{steps:[]},}]
  Angular v4.0.0 - animation:{styles:{steps:[]},}
*/
function animateSteps(steps, tabs?:number){
  const animations = []
  
  const stepCount = steps.length
  for(let stepIndex=0; stepIndex < stepCount; ++stepIndex){
    let step = steps[stepIndex]
    let anim = animationToString(step, tabs)

    animations.push( anim )
  }
  return '['+animations.join()+']'
}

function animationToString(step, tabs?:number){
  if( step.selector ){
    return queryToString(step, tabs)
  }else if( isStaggerStep(step) ){
    return staggerToString(step, tabs)
  }else if( isAnimateChild(step) ){
    return animateChildToString(step, tabs)
  }else if( isGroupStep(step) ){
    return groupToString(step, tabs)
  }else if( isTransitionStep(step) ){
    return transitionToString(step, tabs)
  }else if( isStyleStep(step) ){
    return styleToString(step, tabs)
  }else{
    return animateToString(step, tabs)
  }
}

function animateToString(step, tabs?:number){
  let stepString = ''

  if( step.styles.steps ){
    stepString = keyframeSteps(step.styles.steps, ++tabs)
  }else{//step.styles.styles
    stepString = styleToString(step.styles.styles, ++tabs)
  }

  return line(tabs) + `animate("${step.timings}", ${stepString})`
}

function triggerToString(
  step,
  tabs:number=0
):{
  string:string,
  functions:Function[]
}{
  const stateDefs = stateDefsBy(step.definitions,++tabs)
  const functions = stateDefs.functions
  const string = + stateDefs.string
  return {
    string:line(tabs) + `trigger("${step.name}", ${stateDefs.string})`,
    functions:stateDefs.functions
  }
}

function animateChildToString(step, tabs:number=0){
  return line(tabs) + 'animateChild()'
}

function intQuoter(v){
  return isNaN(Number(v)) ? "'"+v+"'" : Number(v)
}

function groupToString(step, tabs:number=0){
  return line(tabs) + `group(${animateSteps(step.steps, ++tabs)})`
}

function transitionToString(step, tabs:number=0){
  return line(tabs) + `transition("${step.expr}", ${animateSteps(step.animation, ++tabs)})`
}

function staggerToString(step, tabs:number=0){
  return line(tabs) + `stagger(${intQuoter(step.timings)}, ${animateSteps(step.animation, ++tabs)})`
}

function queryToString(step, tabs:number=0){
  return line(tabs) + `query("${step.selector}", ${animateSteps(step.animation, ++tabs)}, ${JSON.stringify(step.options,null,2)})`
}

function styleToString(style, tabs:number=0){
  let styleJson = JSON.stringify(style)
  return line(tabs) + `style(${styleJson})`  
}

function keyframeSteps(steps, tabs:number=0){
  const stylings = []
  const l = line(tabs)
  for(let styleIndex=0; styleIndex < steps.length; ++styleIndex){
    let step = steps[styleIndex]
    let style = step.styles.length ? step.styles[0] : step.styles
    let styling = styleToString(style,tabs+1)
    stylings.push( styling )
  }
  return l + `keyframes([${stylings.join()}])`
}

function isGroupStep(step){
  return step.type==3
}

function isTransitionStep(step){
  return step.type==7
}

function isStaggerStep(step){
  return step.type==12
}

function isAnimateChild(step){
  return step.type==9
}

function isStyleStep(step){
  return step.type==6
}
