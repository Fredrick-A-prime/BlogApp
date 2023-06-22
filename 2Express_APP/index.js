const http = require('http')
const app = require('./app.js')
const server = http.createServer(app)

const cfg = {
  port: process.env.PORT || 3000
}
server.listen(cfg.port, () => {
  console.log(`server is listening on ${cfg.port} ....`)
})
