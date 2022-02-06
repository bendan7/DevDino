import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function onSubmit(event: any) {
    event.preventDefault();

    if (!isFormValid()) {
      setError("Invalid Form");
      return;
    }

    setError("");
    setIsLoading(true);

    const newPost: PostData = {
      title: postTitle,
      createAt: Timestamp.now(),
      createBy: authorName,
      body: postBody,
    };

    addNewPost(newPost, onNewPostCreated);
  }

  function isFormValid(): Boolean {
    return !!postTitle && !!authorName && !!postBody;
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
        {isLoading ? (
          <Spinner animation="border" variant="secondary" />
        ) : (
          <Button variant="primary" type="submit" disabled={isLoading}>
            Submit
          </Button>
        )}
        {!!error ? <Alert variant="danger">{error}</Alert> : null}
      </Form>
    </div>
  );
}
