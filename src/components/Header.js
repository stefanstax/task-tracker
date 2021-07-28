import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Task Tracker by Stax</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
