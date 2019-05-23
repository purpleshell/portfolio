import React from "react";
import { posts } from "../componenets/Data";
import PostPreview from "../componenets/PostPreview";
import value from "../posts/tasks.md";

export default ({ match }: any) => {
  const url = `${match.url}`;
  const MarkupComponent = require("react-markdown");

  return (
    <>
      <div className="blog-posts">
        {posts.map((post, i) => (
          <PostPreview key={i} postInfo={post} blogUrl={url} />
        ))}
      </div>
      <div className="markdown">
        {console.log(value)}
        <MarkupComponent source={value} />
      </div>
    </>
  );
};
