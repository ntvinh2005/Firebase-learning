import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarElement = () => {
  return (
    <Navbar bg="light" expanded="sm">
      <Navbar.Brand className="ms-3" as={Link} to="/">
        V.Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarElement;
