const index = require("../src/index")
const fs = require("fs")
const path = require("path")
//const output = 'export const array = ' + JSON.stringify(index.getFxArray(), null, 2)

let output=`import { trigger,style,state,transition,animate,keyframes,AnimationEntryMetadata } from '@angular/core'
export class fxArray{`

let fxArray = index.getFxArray()
const triggers = []
for(let trigIndex=fxArray.length-1; trigIndex >= 0; --trigIndex){
  let fx = fxArray[trigIndex]
  let states = pushStateDefs(fx.definitions)
  let name = fx.name
  //let trig = trigger(name, states)
  //animations.push( trig )
  triggers.push(`\npublic static _${name} = trigger('${name}', ${states})`)
  //triggers.push(`\ntrigger('${name}', ${states})`)
  /*
  if(array[trigIndex].name == 'absoluteSwap500'){
    console.log('array[trigIndex].name',array[trigIndex].name)
    console.log('states0', states[0])
    //console.log('states', states)
    console.log('trig', trig)
  }*/
}
//output += triggers.join()
output += triggers.join('\n\n')
//const outFilePath = path.join(__dirname, 'prefx.ts')
const outFilePath = path.join(__dirname, 'prefx', 'prefx.ts')

fs.writeFileSync(outFilePath, output+'}')

//returns string
function pushStateDefs(defs){
  let states = []
  let trans = ''
  let steps = ''
  let style = ''
  for(let defIndex=defs.length-1; defIndex >= 0; --defIndex){
    let def = defs[defIndex]

    if( def.styles ){
      style = JSON.stringify( def.styles.styles[0] )
      steps = `\nstyle(${style})`
      trans = `\nstate('${def.stateNameExpr}', ${steps})`
    }else{
      steps = animateSteps(def.steps._steps)
      //let trans = transition(def["stateChangeExpr"], steps)
      trans = `\ntransition('${def.stateChangeExpr}', ${steps})`
    }
    
    states.push( trans )
  }
  return '['+states.join()+']'
}

//returns string
function animateSteps(steps){
  const animations = []
  for(let stepIndex=0; stepIndex < steps.length; ++stepIndex){
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
    let styling = `\nstyle(${JSON.stringify(step.styles[0])})`
    stylings.push( styling )
  }
  return `keyframes([${stylings.join()}])`
}

