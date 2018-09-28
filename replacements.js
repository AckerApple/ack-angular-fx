const aPath = require('ack-path')

aPath( __dirname ).join('dist').recurFiles(filePath=>{
  aPath( filePath ).File().readAsString().then(string=>{
    if( string.search(/(\.\.\/).+\/node_modules\//)>=0 ){
      string = string.replace(/(\.\.\/).+\/node_modules\//,'')
      aPath( filePath ).File().write( string )
    }
  })
})