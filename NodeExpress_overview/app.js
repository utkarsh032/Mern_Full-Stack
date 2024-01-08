// first code in node.js
/*const fs = require('fs')
const userName = 'Utkarsh'

fs.writeFile('user-Data.text', 'Name: ' + userName, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('File Created')
})*/

// req/res

{/*const http = require('http')

const server = http.createServer((req, res) => {
  console.log("It's an incoming Request")
  console.log(req.method, req.url)

  if (req.method === 'POST') {
    let body = ''
    req.on('end', () => {
      const userName = body.split('=')[1]
      res.end('<h1>' + userName + '</h1>')
    })
    req.on('data', (chunk) => {
      body += chunk
    })
  } else {
    res.setHeader('Content-Type', 'text/html')
    res.end('<form method="post"><input type="text" name="username"><button>Submit</button></form>')
  }
})

server.listen(3001)*/}


//////////////// express  

const bodyParser = require('body-parser')

const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/user', (req, res, next) => {
  res.send('<h1>User:' + req.body.userName + '</h1>')
})

app.get('/', (req, res, next) => {
  res.send('<form action= "/user" method="post"><input type="text" name="userName"/><button>Create User</button></form>')
})

app.listen(5001)


