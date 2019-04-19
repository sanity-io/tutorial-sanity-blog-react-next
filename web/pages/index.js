import Link from 'next/link'
import client from '../client'

function Index(props) {
    const { posts = [] } = props
    return (
      <div>
        <h1>Welcome to a blog!</h1>
        {posts.map(
          ({ _id, title = '', slug = '', _updatedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link prefetch href={`/p/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
      </div>
    )
}

Index.getInitialProps = async () => ({
  posts: await client.fetch(`*[_type == "post"]`)
})

export default Index