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

const express = require('express')
const app = express()

app.use((req, res, next) => {

  let body = '';
  req.on('end', () => {
    const userName = body.split('=')[1]
    if (userName) {
      req.body = { name: userName }
    }
    next()
  })
  req.on('data', chunk => {
    body += chunk;
  })
})

app.use((req, res, next) => {
  if (req.body) {
    return res.send('<h1>' + req.body.name + '</h1>')
  }
  res.send('<form method="post"><input type="text" name="userName"/><button>Create User</button></form>')
})

app.listen(5001)


