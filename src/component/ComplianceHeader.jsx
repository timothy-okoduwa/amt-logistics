import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import c from '../image/qhe.webp';
import e from '../image/engneer.svg';
const ComplianceHeader = () => {
  return (
    <div className="push_up">
      <Carousel fade>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={c} className="" alt="slides" text="First slide" />

          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="candara">
                  <span>Compliance & QHSSE</span>
                </div>
                <div className="empowering2">
                  <span>Latest news and updates for you</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={c} className="" alt="slides" text="Second slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="candara">
                  <span>Compliance & QHSSE</span>
                </div>
                <div className="empowering2">
                  <span>Latest news and updates for you</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={c} className="" alt="slides" text="Third slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="candara">
                  <span>Compliance & QHSSE</span>
                </div>
                <div className="empowering2">
                  <span>Latest news and updates for you</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default ComplianceHeader;
