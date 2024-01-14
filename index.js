//const my_math = require ('./my_math')

//let res = my_math.add(1,2)
//console.log(res)
//--------------------------------------------------
//const fs = require('fs')

//let result = fs.readFileSync('helloWorld.txt', 'utf-8')
//console.log(result)
//fs.writeFileSync('helloWorld.txt', 'Hello World!')
//fs.writeFileSync('helloWorld.txt', result + '\nHello World!')
//--------------------------------------------
const http = require('http')
const fs = require('fs')

let server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
   
   const stream = fs.createReadStream('./templates/index.html').pipe(res)
    
})

const PORT = 3000
const HOST = 'localhost'


server.listen(PORT, HOST, () => {
   console.log(`Сервер запущен http://${HOST}:${PORT}`)
})