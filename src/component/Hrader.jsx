import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c from '../image/cargo.svg';
import e from '../image/engneer.svg';
const Hrader = () => {
  return (
    <div className="push_up">
      <Carousel fade>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={c} className="zoom-in" alt="slides" text="First slide" />

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
                  <button className="serr">Our Services</button>
                  <button className="conn">Contact Us</button>
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
                  <button className="serr">Our Services</button>
                  <button className="conn">Contact Us</button>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={c} className="zoom-in" alt="slides" text="Third slide" />
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
                  <button className="serr">Our Services</button>
                  <button className="conn">Contact Us</button>
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
