const aPath = require('ack-path');

aPath.default( __dirname ).join('dist').recurFiles(filePath=>{
  aPath.default( filePath ).File().readAsString().then(string=>{
    if( string.search(/(\.\.\/).+\/node_modules\//)>=0 ){
      string = string.replace(/(\.\.\/).+\/node_modules\//,'')
      aPath.default( filePath ).File().write( string )
    }
  })
})