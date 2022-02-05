import { PostListItem } from "../../actions/interfaces";
import PostItem from "./PostItem";

interface Props {
  posts: PostListItem[];
}

function PostList(props: Props) {
  const { posts } = props;
  return (
    <div>
      {posts?.map((post: PostListItem) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
}

export default PostList;
