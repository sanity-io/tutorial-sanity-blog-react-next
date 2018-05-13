import React from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import client from '../client'

const Index = ({ posts = [] }) => <div>
  <h1>Welcome to a blog!</h1>
  <h2>Posts</h2>
  <ul>
      {
          posts.map(({_id, title = '', slug = '', _updatedAt = ''}) =>
              slug && <li key={_id}>
                <Link prefetch href={`/blog/${slug}`}><a>{title}</a></Link> ({format(_updatedAt, 'DD. MMMM, YYYY')})
              </li>
          )
      }
  </ul>
</div>

Index.getInitialProps = async () => {
    return { posts: await client.fetch(`*[_type == "post"][0..1000]{
      _id,
      title,
      "slug": slug.current,
      _updatedAt
    }`) }
}

export default Index