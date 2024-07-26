import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    // <Container fluid>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Basic Programs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/usestate">useState</Nav.Link>
            <Nav.Link as={Link} to="/image-download">Image Download</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    // </Container>
  );
};

export default Header;
