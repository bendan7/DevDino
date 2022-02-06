import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostsData } from "../../actions";
import { PostData, CommentData } from "../../actions/interfaces";
import { formatDateTime } from "../../utils/formatter";
import "./style.scss";
import Comment from "../../components/Comment";
import { Button } from "react-bootstrap";
import { RoutesUrls } from "../../utils/interfaces";
import RichEditor from "../../components/RichTextEditor";

interface urlParms {
  postId?: string;
}

export default function PostPage() {
  const params: urlParms = useParams();
  const postId = params?.postId;
  const [post, setPost] = useState<PostData>();

  // onComponentDidMount
  useEffect(() => {
    postId && getPostsData(postId, (post) => setPost(post));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return post ? (
    <div className="post-page">
      <Link to={`${RoutesUrls.HOME}`}>
        <Button variant="outline-secondary">Home</Button>
      </Link>

      <h1 className="title">{post?.title}</h1>
      <div>
        {post?.createBy} - {formatDateTime(post?.createAt)}
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
      <div className="text-editor">
        <RichEditor onChange={() => {}} />
      </div>
    </div>
  ) : (
    <h3>Loading...</h3>
  );
}
