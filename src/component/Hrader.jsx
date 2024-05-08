import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c from '../image/cargo.svg';
import e from '../image/h2.svg';
import f from '../image/h3.svg';
import { Link } from 'react-router-dom';
const Hrader = () => {
  return (
    <div className="push_up">
      <Carousel fade>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={c} className="" alt="slides" text="First slide" />

          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy">
                <div className="bus_name">
                  <span>AMT- Cameroon</span>
                </div>
                <div className="empowering">
                  <span>
                    Empowering Connections, Delivering Excellence: Unveiling the
                    Logistics Marvel
                  </span>
                </div>
                <div className="waii">
                  <Link
                    to="/solutions"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <button className="serr">Our Solutions</button>
                  </Link>

                  <Link
                    to="/contact"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <button className="conn">Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={e} className="zoom-in" alt="slides" text="Second slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy">
                <div className="bus_name">
                  <span>AMT- Cameroon</span>
                </div>
                <div className="empowering">
                  <span>
                    Empowering Connections, Delivering Excellence: Unveiling the
                    Logistics Marvel
                  </span>
                </div>
                <div className="waii">
                  <Link
                    to="/solutions"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <button className="serr">Our Solutions</button>
                  </Link>

                  <Link
                    to="/contact"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <button className="conn">Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={f} className="" alt="slides" text="Third slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy">
                <div className="bus_name">
                  <span>AMT- Cameroon</span>
                </div>
                <div className="empowering">
                  <span>
                    Empowering Connections, Delivering Excellence: Unveiling the
                    Logistics Marvel
                  </span>
                </div>
                <div className="waii">
                  <Link
                    to="/solutions"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <button className="serr">Our Solutions</button>
                  </Link>

                  <Link
                    to="/contact"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <button className="conn">Contact Us</button>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hrader;
