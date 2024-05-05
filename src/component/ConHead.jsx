import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import f1 from '../image/map.svg';
// import f3 from '../image/career.svg';
// import f2 from '../image/career.svg';
// import f4 from '../image/career.svg';

const ConHead = () => {
  return (
    <div className="push_up">
      <Carousel fade>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={f1} className="" alt="slides" text="First slide" />

          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="candara">
                  <span>Contact Us</span>
                </div>
                <div className="empowering2">
                  <span>Latest news and updates for you</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ConHead;
