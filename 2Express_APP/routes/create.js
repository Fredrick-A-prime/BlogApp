const express = require('express')
const path = require('path')
const router = express()

router.get('/createnewpost', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
  res.render('create')
})

module.exports = router
