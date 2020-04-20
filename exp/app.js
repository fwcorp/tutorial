let express = require('express')
let server = express()
const port = 8080

// static middleware
server.use('/pic',express.static('img'))

// basic rest
/*
server.get('/',(req,res)=>res.send('Hello world'))
server.post('/',(req,res)=>res.send('Post'))
server.put('/',(req,res)=>res.send('put'))
server.delete('/',(req,res)=>res.send('delete'))
*/

server.listen(port,()=>console.log('listening'))
