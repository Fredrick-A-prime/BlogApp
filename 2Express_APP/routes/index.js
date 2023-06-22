const express = require('express')
const path = require('path')
const router = express()

router.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/index.html'))
  res.render('index')
})

module.exports = router
