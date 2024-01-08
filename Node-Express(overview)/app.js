const fs = require('fs')

const userName = 'Utkarsh'


fs.writeFile('user-Data.text', 'Name: ' + userName, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('File Created')
})