const http = require("http")

const server = http.createServer((req, res)=>{
    res.end(`<h1>HELLO WORLD<h1/>`)
  
   

})

server.listen(3000)