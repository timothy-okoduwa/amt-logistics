import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c from '../image/cargo.svg';
import e from '../image/engneer.svg';
const AboutHeader = () => {
  return (
    <div className="push_up">
      <Carousel fade>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={e} className="" alt="slides" text="First slide" />

          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="bus_name">
                  <span>About us</span>
                </div>
                <div className="empowering">
                  <span>AMT Cameroun SA</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={e} className="" alt="slides" text="Second slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="bus_name">
                  <span>About us</span>
                </div>
                <div className="empowering">
                  <span>AMT Cameroun SA</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={e} className="" alt="slides" text="Third slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="bus_name">
                  <span>About us</span>
                </div>
                <div className="empowering">
                  <span>AMT Cameroun SA</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AboutHeader;
