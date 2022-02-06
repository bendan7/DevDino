import { Form, Button } from "react-bootstrap";
import RichEditorExample from "../../components/RichTextEditor";

export default function NewPostPage() {
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>New Post</h2>
      <Form>
        <Form.Group className="mb-3" controlId="AuthorName">
          <Form.Label>Author name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="PostTitle">
          <Form.Label>Post title</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <RichEditorExample />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
