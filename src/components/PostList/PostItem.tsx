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
          <div className="author">{post.createBy}</div>
        </Link>
      </div>
      <div className="postInfo">
        <div>{post.lastCommentBy}</div>
        <div>{`Last comment: ${formatDateTime(post?.lastCommentAt)}`}</div>
      </div>
    </div>
  );
}

export default PostItem;
