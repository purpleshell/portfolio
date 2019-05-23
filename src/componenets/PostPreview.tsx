import React from "react";
import { PostInfo } from "./Data";

interface Props {
  postInfo: PostInfo;
  blogUrl: string;
}

const PostPreview: React.FC<Props> = ({ postInfo, blogUrl }) => {
  return (
    <div className="post">
      <div className="post-header">
        <a href={`${blogUrl}/${postInfo.url}`}>
          <img
            className="post-banner"
            src={postInfo.bannerImageLink}
            alt="Bullet Journal Image"
          />
          <h3 className="post-title">{postInfo.title}</h3>
        </a>
      </div>
      {postInfo.bodyParagraphs.slice(0, 2).map((bodyParagraph, i) => (
        <p key={i} className="post-body">
          {bodyParagraph}
        </p>
      ))}
      <div className="post-footer">
        <a className="read-more" href={`${blogUrl}/${postInfo.url}`}>
          Read More...
        </a>
        <p className="post-meta-info">8-21-2018 | Likes 49 | Comments 12</p>
      </div>
    </div>
  );
};

export default PostPreview;
