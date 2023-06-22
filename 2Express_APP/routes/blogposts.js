const express = require('express')
const path = require('path')
const BlogPost = require('../models/BlogPost')
const router = express()

router.post('/posts/store', async (req, res) => {
  await BlogPost.create(req.body)
  res.redirect('/')
})

module.exports = router
