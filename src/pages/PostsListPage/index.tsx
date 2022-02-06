import { useState, useEffect } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getPostsList } from "../../actions";
import PostList from "../../components/PostList";
import { RoutesUrls } from "../../utils/interfaces";

export default function PostsListPage() {
  const [posts, setPosts] = useState([]);

  // onComponentDidMount
  useEffect(() => {
    getPostsList((posts: any) => setPosts(posts));
  }, []);

  return (
    <>
      <Row className="w-100">
        <Link to={`${RoutesUrls.CREATE_NEW_POST}`}>
          <Button variant="outline-secondary">New Post</Button>
        </Link>
      </Row>

      <PostList posts={posts} />
    </>
  );
}
