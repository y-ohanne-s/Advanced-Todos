import React from "react";
import { Container, Image, Col } from "react-bootstrap";

interface Props {
  name: string;
  imageUrl: string;
}

const Profile: React.FC<Props> = ({ name, imageUrl }) => (
  <Container>
    <Col md="4" mr="2">
      <Image src={imageUrl} />
    </Col>
    <Col md="4" mr="2">
      <p>{name}</p>
    </Col>
  </Container>
);

export default Profile;
