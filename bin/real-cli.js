const builder = require('./builder')
require('ts-node').register({ /* options */ })
const index = require("../dist/index")
const fs = require("fs")
const path = require("path")

let outPath = process.cwd()

const outIndex = process.argv.indexOf('--out')
if(outIndex){
  outPath = path.join(outPath, process.argv[outIndex+1])
}else{
  outPath = path.join(outPath,'prefx.ts')
}

const selectIndex = process.argv.indexOf('--select')
let selects = [100,200,300,400,500,600,700,800,900,1000,1500,2000]
if(selectIndex>=0){
  selects = process.argv[selectIndex+1].split(',')
}
let fxArray = index.selectFx(...selects)

output = builder.fxArrayToImportSyntax(fxArray)

console.log('\x1b[36m[ack-angular-fx]\x1b[0m:', 'wrote file :',outPath)
fs.writeFileSync(outPath, output)
