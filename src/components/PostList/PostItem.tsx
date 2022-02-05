import { Timestamp } from "firebase/firestore";
import React from "react";
import { Post } from "../../actions/interfaces";
import "./style.css";

function formatDateTime(ts: Timestamp): string {
  const date = ts.toDate();
  return `${date.getDay()}/${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`;
}

function PostItem(post: Post) {
  return (
    <div className="postItem">
      <div className="title">
        <div>{post.title}</div>
        <div className="author">{post.createBy}</div>
      </div>
      <div className="postInfo">
        <div>{post.lastCommentBy}</div>
        <div>{`Last comment: ${formatDateTime(post.lastCommentAt)}`}</div>
      </div>
    </div>
  );
}

export default PostItem;
