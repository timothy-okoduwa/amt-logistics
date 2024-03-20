import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import f1 from '../image/nwes1.svg';

const NewsHead = () => {
  return (
    <div className="push_up">
      <Carousel fade>
        <Carousel.Item className="weoeoeo2" interval={3000}>
          <img src={f1} className="" alt="slides" text="First slide" />

          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy3">
                <div className="candara">
                  <span>Lastest news and updates</span>
                </div>
                <div className="empowering3">
                  <span>Lastest news and updates</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default NewsHead;
