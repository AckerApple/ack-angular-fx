const builder = require('./builder')
const fs = require("fs")
const path = require("path")

//being TypeScript
require('ts-node').register({ /* options */ })
const index = require("../dist/index")
//const index = require("../src/index")

let outPath = process.cwd()

const outIndex = process.argv.indexOf('--out')
if(outIndex){
  outPath = path.join(outPath, process.argv[outIndex+1])
}else{
  outPath = path.join(outPath,'prefx.ts')
}

let selects = [100,200,300,400,500,600,700,800,900,1000,1500,2000,"childStag"]
const selectIndex = process.argv.indexOf('--select')
if(selectIndex>=0){
  selects = process.argv[selectIndex+1].split(',')
}

let igniter = '*'
const igniterIndex = process.argv.indexOf('--igniter')
if(igniterIndex>=0){
  igniter = process.argv[igniterIndex+1]
}

let effectArray = index.effects
const effectsIndex = process.argv.indexOf('--effects')
if(effectsIndex>=0){
  effectArray = process.argv[effectsIndex+1].split(',')
}
let fxArray = index.selectFx(selects, effectArray, {igniter:igniter})

output = builder.fxArrayToImportSyntax(fxArray)

console.log('\x1b[36m[ack-angular-fx]\x1b[0m:', 'wrote file :', outPath.substring(process.cwd().length, outPath.length))
require('mkdirp').sync(path.join(outPath,'../'))
fs.writeFileSync(outPath, output)
