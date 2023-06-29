// const express = require('express')
const BlogPost = require('../models/BlogPost')
// const path = require('path')
// const router = express()

module.exports = async (req, res) => {
  const blogpost = await BlogPost.findById(req.params.id)
  res.render('post', {
    blogpost
  })
}

// module.exports = router
