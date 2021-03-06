import React from "react";
import { PostInfo, posts } from "./Data";

const Post = ({ match }: any) => {
  const postInfo: PostInfo = posts[match.params.id];
  console.log(postInfo);
  return (
    <div className="post">
      <div className="post-header">
        <a href={postInfo.url}>
          <img
            className="post-banner"
            src={postInfo.bannerImageLink}
            alt="Bullet Journal Image"
          />
          <h3 className="post-title">{postInfo.title}</h3>
        </a>
      </div>
      {postInfo.bodyParagraphs.map((bodyParagraph, i) => (
        <p key={i} className="post-body">
          {bodyParagraph}
        </p>
      ))}
      <div className="post-footer">
        <a className="read-more" href={postInfo.url}>
          Don't leave a comment...
        </a>
        <p className="post-meta-info">8-21-2018 | Likes 49 | Comments 12</p>
      </div>
    </div>
  );
};

export default Post;
