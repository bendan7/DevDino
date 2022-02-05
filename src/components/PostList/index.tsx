import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { getPostsList } from "../../actions";
import { Post } from "../../actions/interfaces";
import PostItem from "./PostItem";

function PostList() {
  const [posts, setPosts] = useState([]);

  // onComponentDidMount
  useEffect(() => {
    getPostsList((posts: any) => setPosts(posts));
  }, []);

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
