import { CommentData } from "../../actions/interfaces";
import { formatDateTime } from "../../utils/formatter";
import "./style.scss";

export default function Comment(comment: CommentData) {
  return (
    <div className="comment">
      <div className="comment-info">
        By {comment.createBy} - {formatDateTime(comment.createAt)}
      </div>
      {comment.body}
    </div>
  );
}
