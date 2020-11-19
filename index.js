const fs = require('fs-extra')

if (!fs.existsSync('./log')) {
  fs.mkdirSync('./log')
}

fs.writeFile('./log/demo.log', 'hello world', err => {
  if (err) {
    console.log(err, '----')
  }
})