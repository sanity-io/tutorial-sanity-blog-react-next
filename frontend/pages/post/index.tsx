import Card from "../../components/Card/Card";
import client from "../../client";
import { GET_ALL_POSTS } from "../api/queries";

type PostProps = {
  title: string;
  excerpt: string;
  type: string;
  slug: string;
  ptComponents: any;
};

type Posts = {
  posts: PostProps[];
};

export const PostPage = ({ posts }: Posts) => {
  return (
    <div>
      <h1>Post Page</h1>
      {posts.map((post) => (
        <Card
          title={post.title}
          slug={post.slug}
          excerpt={post.excerpt}
          type={post.type}
          key={post.slug}
          ptComponents={post.ptComponents}
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(GET_ALL_POSTS);
  return {
    props: {
      posts,
    },
  };
}

export default PostPage;
