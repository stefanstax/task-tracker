import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Task Tracker by Stax</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
