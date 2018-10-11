import React from "react";
import { format } from "date-fns";
import {Link} from "../../routes";
import client from "../../client";

const Index = ({ posts = [] }) => (
  <div>
    <h1>Blog archive</h1>
    {posts.map(
      ({ _id, title = "", slug = "", _updatedAt = "" }) =>
        slug && (
          <li key={_id}>
            <Link prefetch route={`/blog/${slug.current}`}>
              <a>{title}</a>
            </Link>{" "}
            ({format(_updatedAt, "DD. MMMM, YYYY")})
          </li>
        )
    )}
  </div>
);

Index.getInitialProps = async () => ({
  posts: await client.fetch(`*[_type == "post"]`)
});

export default Index;
