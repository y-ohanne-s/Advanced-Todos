import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import "./signup.css";

const Signup = () => {
  return (
    <Container className="signup-container">
      <Card>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control size="sm" type="email" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control size="sm" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" size="sm" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control size="sm" type="number" placeholder="Age" />
            </Form.Group>

            <div className="text-center">
              <Button variant="dark" type="submit" size="sm">
                Sign up
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;
