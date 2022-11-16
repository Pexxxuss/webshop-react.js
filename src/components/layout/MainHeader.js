import React from 'react';
import './MainHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <Navbar className="navbar" sticky="top" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 py-5 my-lg-0"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              <p>HOME</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <p>ABOUT US</p>
            </Nav.Link>
            <NavDropdown title="RESERVATIONS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Reserve1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Reserve2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Reservation number
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand as={Link} to="/" className="logo">
              <h1>Galuois Bar</h1>
            </Navbar.Brand>
            <Nav.Link as={Link} to="/personality">
              <p>OUR STAFF</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/customers">
              <p>OUR CUSTOMERS</p>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <p>CONTACT US</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
