import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import l from '../image/amt-logo.svg';
const NavBarr = () => {
  return (
    <div>
      <Navbar expand="lg" className="bground   ">
        <Container>
          <Navbar.Brand>
            <img src={l} alt="img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="wehhhoo w-100">
              <div className="wrapper">
                <div className="navslinks">About us</div>
                <div className="navslinks">Our Solutions</div>
                <div className="navslinks">Compliance & QHSSE</div>
                <div className="navslinks">News</div>
                <div className="navslinks">Career</div>
                <div className="navslinks">FAQS</div>
                <button className="contact_us">Contact Us</button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarr;
