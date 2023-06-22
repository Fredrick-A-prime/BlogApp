const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb+srv://ricktheCoder:Godblessme@blogcluster.fkfbwdk.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })

BlogPost.create({
  title: 'The Buster',
  body: 'well we thank God for these days'
})
  .then((blogpost) => {
    console.log(blogpost)
  })
  .catch((error) => {
    console.error(error)
  })
