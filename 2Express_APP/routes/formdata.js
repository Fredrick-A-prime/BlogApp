const express = require('express')
const path = require('path')
const router = express()

router.post('/posts/store', (req, res, next) => {
  // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
