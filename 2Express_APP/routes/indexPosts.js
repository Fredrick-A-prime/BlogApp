// const express = require('express')
// const path = require('path')
const BlogPost = require('../models/BlogPost')
// const router = express()

module.exports = async (req, res) => {
  const blogposts = await BlogPost.find({})
  console.log(req.session)
  res.render('index', {
    blogposts
  })
}

// module.exports = router
