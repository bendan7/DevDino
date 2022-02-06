import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.scss";

interface Props {
  onSubmit: (values: {
    createBy: string;
    body: string;
    createAt: Timestamp;
  }) => void;
}

export default function AddCommentForm(props: Props) {
  const [createBy, setCreateBy] = useState("");
  const [body, setBody] = useState("");

  function onSubmit(event: any) {
    event.preventDefault();

    if (props.onSubmit) {
      props.onSubmit({ createBy, body, createAt: Timestamp.now() });
      setCreateBy("");
      setBody("");
    }
  }

  return (
    <div className="new-commnet">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="createBy">
          <Form.Label>Author name</Form.Label>
          <Form.Control
            value={createBy}
            onChange={(e) => setCreateBy(e.target.value)}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="CommentBody">
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Enter your comment"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
