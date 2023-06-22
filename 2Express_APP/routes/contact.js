const express = require('express')
const path = require('path')
const router = express()

router.get('/contact', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
  res.render('contact')
})

module.exports = router
