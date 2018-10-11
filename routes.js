const routes = require('next-routes')

module.exports = routes()
  .add('Blog', '/blog')
  .add('BlogPost', '/blog/:slug', 'Blog/Post')