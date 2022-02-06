import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PostListItem } from "../../actions/interfaces";
import { formatDateTime } from "../../utils/formatter";
import { RoutesUrls } from "../../utils/interfaces";
import "./style.scss";

function PostItem(post: PostListItem) {
  return (
    <div className="postItem">
      <div className="title">
        <Link to={`${RoutesUrls.POST}/${post.id}`}>
          <div>{post.title}</div>
        </Link>
        <div className="author">author: {post.createBy}</div>
        <div className="author">{formatDateTime(post?.createAt)}</div>
      </div>
      <div className="postInfo">
        <Col>
          <div>comments count: {post.commentsCount}</div>
          <div>
            {post.lastCommentBy && `last comment by: ${post.lastCommentBy}`}
          </div>
          <div>{formatDateTime(post?.lastCommentAt)}</div>
        </Col>
      </div>
    </div>
  );
}

export default PostItem;
