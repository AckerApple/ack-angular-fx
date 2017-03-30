exports.fxArrayToImportSyntax = function fxArrayToImportSyntax(fxArray){
  return 'import { AnimationTriggerMetadata,trigger,style,state,transition,animate,keyframes } from \'@angular/animations\'\n'+
  'export const fxArray = ['+
  fxArrayToSyntaxArray(fxArray).join() + ']'
}

exports.fxArrayToSyntaxArray = fxArrayToSyntaxArray

function fxArrayToSyntaxArray(fxArray){
  const triggers = []
  for(let trigIndex=fxArray.length-1; trigIndex >= 0; --trigIndex){
    let fx = fxArray[trigIndex]
    let states = pushStateDefs(fx.definitions)
    let name = fx.name
    //let trig = trigger(name, states)
    //animations.push( trig )
    
    //triggers.push(`\npublic static _${name} = trigger('${name}', ${states})`)
    triggers.push(`\ntrigger('${name}', ${states})`)
    
    /*
    if(array[trigIndex].name == 'absoluteSwap500'){
      console.log('array[trigIndex].name',array[trigIndex].name)
      console.log('states0', states[0])
      //console.log('states', states)
      console.log('trig', trig)
    }*/
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
    }else{
      steps = animateSteps(def.animation || def.steps._steps)//Angular v4.0.0+ || v2.4.0+
      //let trans = transition(def["stateChangeExpr"], steps)
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
//console.log('steps.styles.steps.length', steps)
  
  const stepCount = steps.length
  for(let stepIndex=0; stepIndex < stepCount; ++stepIndex){
    let step = steps[stepIndex]
    let keySteps = keyframeSteps(step.styles.steps)
    //let anim = animate(step.timings, keySteps)
    let anim = `\nanimate('${step.timings}', ${keySteps})`
    animations.push( anim )
  }
  return '['+animations.join()+']'
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
