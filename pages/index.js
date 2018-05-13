import React from 'react'
import Link from 'next/link'
import client from '../client'

const Index = ({ posts = [] }) => <div>
  <h1>Welcome to a blog!</h1>
  <ul>Posts
      {
          posts.map(({_id, title = '', slug = ''}) =>
              slug && <li key={_id}>
                <Link prefetch href={`/blog/${slug}`}><a>{title}</a></Link>
              </li>
          )
      }
  </ul>
</div>

Index.getInitialProps = async ({ query: { slug } }) => {
    return { posts: await client.fetch(`*[_type == "post"][0..1000]{
      _id,
      title,
      "slug": slug.current
    }`) }
}

export default Index