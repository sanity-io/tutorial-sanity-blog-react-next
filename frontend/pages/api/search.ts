import client from "../../client";
import { groq } from "next-sanity";

export default async function search(req, res) {
  const { query, resultLength } = req.query;
  // store the query to access all the text in the block content fields
  const bodyQuery = "body[].children[].text";
  const bioQuery = "bio[].children[].text";

  const searchQuery = groq`
        *[_type in ['post', 'author', 'category'] && 
        (
        ${bodyQuery} match $queryString + '*' ||
        ${bioQuery} match $queryString + '*' ||
        description match $queryString + '*'  ||
        title match $queryString + '*' || 
        name match $queryString + '*' || 
        description match $queryString + '*'
        ) && !(_id in path('drafts.**')) ] | order(publishedAt desc) [$resultLength...$resultLength+2]{
          title,
          name, 
          bio,
          body,
          text,
          'slug' : slug.current,
          description,
          'type': _type,
          'searchedQuery': select(
           
            ${bodyQuery} match $queryString + '*' =>{
              'cardExcerpt': ${bodyQuery},
            },
            ${bioQuery} match $queryString + '*' =>{
              'cardExcerpt': ${bioQuery},
            },
            description match $queryString + '*' =>{
              'cardExcerpt': description,
            },
          ),
          
        }
    `;

  const data = await client.fetch(searchQuery, {
    queryString: query,
    resultLength: parseInt(resultLength),
  });

  res.status(200).json(data);
}
