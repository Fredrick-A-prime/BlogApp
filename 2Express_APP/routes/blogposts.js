const express = require('express')
const path = require('path')
const BlogPost = require('../models/BlogPost')
const router = express()

router.post('/posts/store', (req, res) => {
  // models creates a new doc with browser data
  const createBlogPost = (data) => {
    return new Promise((resolve, reject) => {
      BlogPost.create(data, (error, blogpost) => {
        if (error) {
          reject(error)
        } else {
          resolve(blogpost)
        }
      })
    })
  }

  // Usage
  createBlogPost(req.body)
    .then((blogpost) => {
      res.redirect('/')
    })
    .catch((error) => {
      // Handle the error
      console.error(error)
    })
})

module.exports = router
