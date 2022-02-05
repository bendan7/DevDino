import { ListGroup } from "react-bootstrap";
import { Post } from "../../actions/interfaces";
import PostItem from "./PostItem";

interface Props {
  posts: Post[];
}

function PostList(props: Props) {
  const { posts } = props;
  return (
    <div>
      <ListGroup>
        {posts?.map((post: Post) => (
          <ListGroup.Item key={post.id}>
            <PostItem {...post} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default PostList;
