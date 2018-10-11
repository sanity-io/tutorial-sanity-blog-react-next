import React, { PureComponent } from 'react'
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import { format } from 'date-fns'
import Error from 'next/error'
import { Link } from '../../routes'
import client from '../../client'
import CommaJoiner from '../../components/CommaJoiner'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export default class BlogPost extends PureComponent {
  static getInitialProps = async ({ res, query: { slug } }) => {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]{
          title,
          "name": author->name,
          "categories": categories[]->title,
          "authorImage": author->image,
          body,
          _updatedAt
        }`,
      { slug }
    )
    return {post}
  }

  render() {
    const {
      title = 'No title',
      name = 'No name',
      categories = [],
      authorImage = {},
      body = [],
      _updatedAt = ''
    } = this.props.post

    if (!_updatedAt) {
      return <Error statusCode={404} />
    }

    return (
      <div>
        <h1>{title}</h1>
        By {name}. Updated {format(_updatedAt, 'DD. MMMM, YYYY')}.{' '}
        {categories.length > 0 && (
          <span>
            Posted in <CommaJoiner list={categories} />
          </span>
        )}
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
          />
        </div>
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          projectId={client.clientConfig.projectId}
          dataset={client.clientConfig.dataset}
        />
        <Link route="/">
          <a>Back to home</a>
        </Link>
      </div>
    )
  }
}
