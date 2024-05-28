import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import f1 from '../image/faq1.svg';
import f3 from '../image/faq3.svg';
import f2 from '../image/faq2.svg';
import f4 from '../image/faq4.svg';

const FaqHead = () => {
  return (
    <div className="push_up">
      <Carousel fade>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={f1} className="" alt="slides" text="First slide" />

          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="candara">
                  <span>FAQ</span>
                </div>
                <div className="empowering2">
                  <span>Frequently Asked questions</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={f2} className="" alt="slides" text="Second slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="candara">
                  <span>FAQ</span>
                </div>
                <div className="empowering2">
                  <span>Frequently Asked questions</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={f3} className="" alt="slides" text="Third slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="candara">
                  <span>FAQ</span>
                </div>
                <div className="empowering2">
                  <span>Frequently Asked questions</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={f4} className="" alt="slides" text="Third slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="candara">
                  <span>FAQ</span>
                </div>
                <div className="empowering2">
                  <span>Frequently Asked questions</span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default FaqHead;
