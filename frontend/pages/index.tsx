import client from "../client";
import { GET_ALL_POSTS } from "./api/queries";
import { GET_ALL_AUTHORS } from "./api/queries/authors";
import getCardByType from "../utils/getCardbyType";

const Index = ({ posts, authors }) => {
  return (
    <div className="pageWrapper">
      <h1>Welcome to a blog!</h1>
      <div className="wrapper">
        {Array.isArray(posts) && posts.map((post) => getCardByType(post))}

        {Array.isArray(authors) &&
          authors.map((author) => getCardByType(author))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(GET_ALL_POSTS);
  const authors = await client.fetch(GET_ALL_AUTHORS);
  return {
    props: {
      posts,
      authors,
    },
  };
}

export default Index;
