import { groq } from "next-sanity";

export const GET_ALL_POSTS = groq`
    *[_type == "post" ] | order(publishedAt desc) {
      'slug': slug.current,
      title,
      publishedAt,
      body, 
      'type': _type,
    }
  `;

export const GET_POST = groq`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      "name": author->name,
      "categories": categories[]->title,
      body,
      'type': _type,
    }
  `;
