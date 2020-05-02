import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavbarOne() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Sarah Salvini</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Item>
            <Link href="#home" to="/">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link href="#home" to="/projects">
              Projects
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarOne;
