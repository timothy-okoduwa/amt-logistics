import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import l from '../image/amt-logo.svg';
import { Link } from 'react-router-dom';
const NavBarr = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      <Navbar expand="lg" className={`bground ${scrolled ? 'scrolled' : ''}`}>
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={l} alt="img" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="wehhhoo w-100">
              <div className="wrapper">
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/about"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    About us
                  </Link>
                </div>
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/solutions"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Our Solutions
                  </Link>
                </div>
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/compliance"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Compliance & QHSSE
                  </Link>
                </div>
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/news"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    News
                  </Link>
                </div>

                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/career"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Career
                  </Link>
                </div>
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/faqs"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    FAQS
                  </Link>
                </div>
                <Link
                  to="/contact"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <button className="contact_us">Contact Us</button>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarr;
