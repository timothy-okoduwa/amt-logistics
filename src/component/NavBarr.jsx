import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import l from '../image/amt-logo.svg';

const NavBarr = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <div>
      <Navbar
        expand="lg"
        className={`bground ${scrolled ? 'scrolled' : ''}`}
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{ textDecoration: 'none', color: 'inherit' }}
              onClick={handleLinkClick}
            >
              <img src={l} alt="img" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="wehhhoo w-100">
              <div className="wrapper">
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/about"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={handleLinkClick}
                  >
                    About us
                  </Link>
                </div>
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/solutions"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={handleLinkClick}
                  >
                    Our Solutions
                  </Link>
                </div>
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/compliance"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={handleLinkClick}
                  >
                    Compliance & QHSSE
                  </Link>
                </div>
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/news"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={handleLinkClick}
                  >
                    News
                  </Link>
                </div>
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/career"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={handleLinkClick}
                  >
                    Career
                  </Link>
                </div>
                <div className={`navslinks ${scrolled ? 'scrolled' : ''}`}>
                  <Link
                    to="/faqs"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={handleLinkClick}
                  >
                    FAQS
                  </Link>
                </div>
                <Link
                  to="/contact"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={handleLinkClick}
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
