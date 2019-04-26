import React from "react";
import { PostInfo } from "./Data";

interface Props {
  postInfo: PostInfo;
  blogUrl: string;
}

const PostPreview: React.FC<Props> = ({ postInfo, blogUrl }) => {
  console.log({ postInfo });
  return (
    <div className="post">
      <div className="post-header">
        <a href="blog/journal.html">
          <img
            className="post-banner"
            src={postInfo.bannerImageLink}
            alt="Bullet Journal Image"
          />
          <h3 className="post-title">{postInfo.title}</h3>
        </a>
      </div>
      {postInfo.bodyPreview.map((bodyPreviewParagraph, i) => (
        <p key={i} className="post-preview">
          {bodyPreviewParagraph.body}
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
