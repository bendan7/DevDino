import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addNewComment, getPostsData } from "../../actions";
import { PostData, CommentData } from "../../actions/interfaces";
import { formatDateTime } from "../../utils/formatter";
import "./style.scss";
import Comment from "../../components/Comment";
import { Button, Spinner } from "react-bootstrap";
import { RoutesUrls } from "../../utils/interfaces";
import AddCommentForm from "../../components/AddCommentForm";

interface urlParms {
  postId?: string;
}

export default function PostPage() {
  const params: urlParms = useParams();
  const postId = params?.postId || "";
  const [post, setPost] = useState<PostData>();

  // onComponentDidMount
  useEffect(() => {
    postId && getPostsData(postId, (post) => setPost(post));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onNewCommentCreated() {
    getPostsData(postId, (post) => setPost(post));
  }

  return post ? (
    <div className="post-page">
      <Link to={`${RoutesUrls.HOME}`}>
        <Button variant="outline-secondary">Home</Button>
      </Link>

      <h1 className="title">{post?.title}</h1>
      <div>
        By {post?.createBy} - {formatDateTime(post?.createAt)}
      </div>
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      <div className="comments">
        {post?.comments?.map((comment: CommentData, index: number) => (
          <Comment key={`${post.id}_${index}`} {...comment} />
        ))}
      </div>
      <div className="comment-form">
        <h3>Add Comment</h3>
        <AddCommentForm
          onSubmit={(values, onSuccses) =>
            addNewComment(postId, values, () => {
              onNewCommentCreated();
              onSuccses();
            })
          }
        />
      </div>
    </div>
  ) : (
    <Spinner animation="border" variant="secondary" />
  );
}
