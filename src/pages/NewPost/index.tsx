import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import RichEditorExample from "../../components/RichTextEditor";
import "./style.scss";

export default function NewPostPage() {
  const [postBody, setPostBody] = useState("");

  function onSubmit(event: any) {
    event.preventDefault();
    console.log(postBody);
  }

  return (
    <div className="new-post-page">
      <h1>Create New Post</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="AuthorName">
          <Form.Label>Author name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="PostTitle">
          <Form.Label>Post title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <RichEditorExample onChange={setPostBody} />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
