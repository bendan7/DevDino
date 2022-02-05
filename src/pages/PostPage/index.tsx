import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsData } from "../../actions";
import { PostData } from "../../actions/interfaces";

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
  }, []);

  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>{post?.title}</h2>
    </div>
  );
}
