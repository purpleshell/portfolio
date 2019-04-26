import React from "react";
import { posts } from "../componenets/Data";
import PostPreview from "../componenets/PostPreview";

export default ({ match }: any) => {
  const url = `${match.url}`;
  return (
    <>
      {posts.map((post, i) => (
        <PostPreview key={i} postInfo={post} blogUrl={url} />
      ))}
    </>
  );
};
