const express = require('express')
const path = require('path')
const router = express()

router.get('/post', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/post.html'))
  res.render('post')
})

module.exports = router
