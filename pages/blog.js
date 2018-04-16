import React, { Fragment } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
const builder = imageUrlBuilder(client)
console.log(client)
function urlFor(source) {
  return builder.image(source)
}

const CommaJoiner = ({ list = [], conjuction = 'and', separator = ',' }) => <Fragment>{list.map((item, index) => <span key={item}>{item}{
  (list.length === 1) ? '.' :
  (index + 2 === list.length) ? ` ${conjuction} ` :
  (index + 1 === list.length) ? '.' : `${separator} `
  }
  </span>)
}</Fragment>

const BlogPost = ({ title = 'No title', name = 'No name', categories = [], authorImage = {}, body = [] }) => <div>
  <h1>{title}</h1>
  By {name}. {categories && <span>Posted in <CommaJoiner list={categories} /></span>}
  <div><img src={urlFor(authorImage).width(50).url()} /></div>
  <BlockContent
    blocks={body}
    imageOptions={{w: 320, h: 240, fit: 'max'}}
    projectId={client.clientConfig.projectId}
    dataset={client.clientConfig.dataset}
  />
</div>

BlogPost.getInitialProps = async ({ query: { slug } }) => {
  const { title,
    name,
    categories,
    authorImage,
    body } = await client.fetch(`*[slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      "authorImage": author->image,
      body
    }`, { slug })
  return { title, name, categories, authorImage, body }
}

export default BlogPost