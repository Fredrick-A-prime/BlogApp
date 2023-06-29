// const express = require('express')
// const path = require('path')
// const router = express()

module.exports = (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'pages/contact.html'))
  if (req.session.userId) {
    res.render('create')
  }
  res.redirect('/auth/login')
}

// module.exports = router
