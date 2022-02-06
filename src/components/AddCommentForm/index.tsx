import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import { NewCommentValues } from "../../actions/interfaces";
import "./style.scss";

interface Props {
  onSubmit: (values: NewCommentValues, onSuccses: Function) => void;
}

export default function AddCommentForm(props: Props) {
  const [createBy, setCreateBy] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: any) {
    event.preventDefault();

    if (!isFormValid()) {
      setError("Invalid Form");
      return;
    }
    setError("");

    const commentData: NewCommentValues = {
      createBy,
      body,
      createAt: Timestamp.now(),
    };

    setCreateBy("");
    setBody("");
    setIsLoading(true);

    props.onSubmit(commentData, () => setIsLoading(false));
  }

  function isFormValid(): Boolean {
    return !!createBy && !!body;
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
            disabled={isLoading}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="CommentBody">
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Enter your comment"
            disabled={isLoading}
          />
        </Form.Group>
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
