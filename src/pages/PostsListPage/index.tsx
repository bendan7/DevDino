import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
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
    <Link to={`${RoutesUrls.CREATE_NEW_POST}`}>
      <Button>
          New Post
        </Button>
    </Link>

      <PostList posts={posts} />
    </>
  );
}
