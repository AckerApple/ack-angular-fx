"use strict";
exports.__esModule = true;
var builder = require('./builder');
var fs = require("fs");
var path = require("path");
//being TypeScript
require('ts-node').register({});
var index = require("../dist/index");
//const index = require("../src/index")
var outPath = process.cwd();
var outIndex = process.argv.indexOf('--out');
if (outIndex) {
    outPath = path.join(outPath, process.argv[outIndex + 1]);
}
else {
    outPath = path.join(outPath, 'prefx.ts');
}
var selects = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1500, 2000, "childStag"];
var selectIndex = process.argv.indexOf('--select');
if (selectIndex >= 0) {
    selects = process.argv[selectIndex + 1].split(',');
}
var igniter = '*';
var igniterIndex = process.argv.indexOf('--igniter');
if (igniterIndex >= 0) {
    igniter = process.argv[igniterIndex + 1];
}
var effectArray = index.availEffects;
var effectsIndex = process.argv.indexOf('--effects');
if (effectsIndex >= 0) {
    effectArray = process.argv[effectsIndex + 1].split(',');
}
//an array of triggers
var selectedFxMetaData = index.selectFx(selects, effectArray, { igniter: igniter });
//array of triggers to one string
//const output = builder.selectedFxToImportSyntax(selectedFxMetaData)
var output = builder.selectedFxToImportSyntax({ triggers: index.fxArray });
console.log('\x1b[36m[ack-angular-fx]\x1b[0m:', 'wrote file :', outPath.substring(process.cwd().length, outPath.length));
require('mkdirp').sync(path.join(outPath, '../'));
fs.writeFileSync(outPath, output);
