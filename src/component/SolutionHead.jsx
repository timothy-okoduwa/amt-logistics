import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import e from '../image/oursol.webp';
const SolutionHeader = () => {
  return (
    <div className="push_up">
      <Carousel fade>
        <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={e} className="" alt="slides" text="First slide" />

          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="bus_name2">
                  <span>Our Solutions</span>
                </div>
                <div className="empowering2">
                  <span>
                    AMT CAMEROUN SA is a leading provider of tailor-made
                    logistics services, offering a comprehensive range of
                    services. With over 10 years' experience
                  </span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item className="weoeoeo" interval={3000}>
          <img src={e} className="" alt="slides" text="Second slide" />
          <Carousel.Caption className="avavav">
            <div className="container">
              <div className="boggy2">
                <div className="bus_name2">
                  <span>Our Solutions</span>
                </div>
                <div className="empowering2">
                  <span>
                    AMT CAMEROUN SA is a leading provider of tailor-made
                    logistics services, offering a comprehensive range of
                    services. With over 10 years' experience
                  </span>
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
                <div className="bus_name2">
                  <span>Our Solutions</span>
                </div>
                <div className="empowering2">
                  <span>
                    AMT CAMEROUN SA is a leading provider of tailor-made
                    logistics services, offering a comprehensive range of
                    services. With over 10 years' experience
                  </span>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default SolutionHeader;
