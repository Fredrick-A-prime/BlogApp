// const express = require('express')
// const mongoose = require('mongoose')
const path = require('path')
const BlogPost = require('../models/BlogPost')
// const { DB_URL } = require('../props')
// const router = express()

// mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => console.log('db connected'))
module.exports = (req, res) => {
  let image = req.files.image
  image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {
    await BlogPost.save({
      ...req.body,
      image: '/img/' + image.name
    })
    console.log(error)
    res.redirect('/')
  })
}

// module.exports = router
