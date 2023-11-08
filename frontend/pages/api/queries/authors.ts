import { groq } from "next-sanity";

export const GET_ALL_AUTHORS = groq`
    *[_type == "author" ] | order(publishedAt desc){
      'slug': slug.current,
      publishedAt,
      name,
      bio, 
      image, 
      'type': _type,
    }
  `;

export const GET_AUTHOR = groq`
    *[_type == "author" && slug.current == $slug][0]{
      title,
      "name": author->name,
      slug, 
      bio, 
      image, 
      'type': _type,
    }
  `;
