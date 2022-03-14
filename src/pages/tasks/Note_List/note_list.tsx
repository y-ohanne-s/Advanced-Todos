import React from "react";
import { Container, Row } from "react-bootstrap";

const noteList = () => <Container></Container>;

const NoteList = () => {
  return (
    <Container>
      <Row>{noteList}</Row>
      <Row>Add Note Form</Row>
    </Container>
  );
};

export default NoteList;
