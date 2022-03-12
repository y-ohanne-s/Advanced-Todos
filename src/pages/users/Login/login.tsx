import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import "./login.css";

const Login = () => {
  return (
    <Container className="login-container">
      <Card>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control size="sm"  type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formBasicPassword">
              <Form.Label >Password</Form.Label>
              <Form.Control type="password" placeholder="Password" size="sm"/>
            </Form.Group>
          <div className="text-center">
          <Button variant="dark" type="submit" size="sm">
              Login
            </Button>
          </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
