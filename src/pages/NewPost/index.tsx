import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addNewPost } from "../../actions";
import { PostData } from "../../actions/interfaces";
import RichEditor from "../../components/RichTextEditor";
import { RoutesUrls } from "../../utils/interfaces";
import "./style.scss";

export default function NewPostPage(props: any) {
  const [postBody, setPostBody] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postTitle, setPostTitle] = useState("");
  let navigate = useNavigate();

  function onSubmit(event: any) {
    event.preventDefault();

    const newPost: PostData = {
      title: postTitle,
      createAt: Timestamp.now(),
      createBy: authorName,
      body: postBody,
    };

    addNewPost(newPost, onNewPostCreated);
  }

  function onNewPostCreated() {
    navigate(RoutesUrls.HOME);
  }

  return (
    <div className="new-post-page">
      <h1>Create New Post</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="AuthorName">
          <Form.Label>Author name</Form.Label>
          <Form.Control
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="PostTitle">
          <Form.Label>Post title</Form.Label>
          <Form.Control
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
        </Form.Group>
        <RichEditor onChange={setPostBody} />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
