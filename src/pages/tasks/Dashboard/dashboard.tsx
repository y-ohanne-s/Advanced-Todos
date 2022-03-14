import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="profile-col">Profile</Col>
        <Col className="todo-list-col text-center" xs={8}>
          Note List and Add Note
        </Col>
        <Col className="add-todo-col">Individual Note</Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
