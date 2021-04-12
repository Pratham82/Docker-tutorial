const http = require('http')

http
  .createServer((req, res) => {
    res.end('New request received 😄', 'utf-8')
  })
  .listen(3000)

console.log('Server started...🟢')
