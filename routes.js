const routes = require('next-routes')

module.exports = routes()
  .add('Blog', '/blog', 'Blog/Index')
  .add('BlogPost', '/blog/:slug', 'Blog/Post')