import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import a from '../image/a.png';
import b from '../image/b.png';
import c from '../image/c.png';
import d from '../image/d.png';
import e from '../image/e.png';
const Testimonal = () => {
  const testimonials = [
    {
      text: 'Generally satisfy with our services',
      name: 'Addax Petroleum Cameroon Company S.A',
      role: 'Project Manager',
      image: a,
    },
    {
      text: 'Satisfy with our services, though complaining about the fact that they have to call us most of the time to have the feedback of their files’ evolution',
      name: 'CFAO Technologies',
      role: 'Project Manager',
      image: b,
    },
    {
      text: 'Generally satisfy  with our services  with the delivery timing of 8 days average (when all the docs are OK)',
      name: 'Nestle Cameroun',
      role: 'Project Manager',
      image: c,
    },
    {
      text: 'Generally satisfy with the delivery of their complex files and others, though not really ok with our communication effectiveness.',
      name: 'PERENCO',
      role: 'Project Manager',
      image: d,
    },
    {
      text: 'Some improvement in quality of services. encourage the team to keep it up and do even better.',
      name: 'Smit Lamnalco',
      role: 'Project Manager',
      image: e,
    },
  ];

  return (
    <div className="testi">
      <div className="Testimonal">
        <span>Testimonal</span>
      </div>
      <div className="cennnn">
        <div className="wikoooe">
          {' '}
          <Carousel>
            {testimonials.map((testimonial, index) => (
              <div className="placess">
                <div className="greed">
                  <span>{testimonial.text}</span>
                </div>
                <div className="flex-up-stae">
                  <div className="minuss">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <div className="regr">
                    <div className="came">{testimonial.name}</div>

                    <div>
                      <svg
                        width="120"
                        height="20"
                        viewBox="0 0 120 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99994 14.3916L13.4583 16.4833C14.0916 16.8666 14.8666 16.3 14.6999 15.5833L13.7833 11.65L16.8416 8.99997C17.3999 8.51663 17.0999 7.59997 16.3666 7.54163L12.3416 7.19997L10.7666 3.4833C10.4833 2.8083 9.51661 2.8083 9.23327 3.4833L7.65827 7.19163L3.63327 7.5333C2.89994 7.59163 2.59994 8.5083 3.15827 8.99163L6.21661 11.6416L5.29994 15.575C5.13327 16.2916 5.90827 16.8583 6.54161 16.475L9.99994 14.3916Z"
                          fill="#F1B246"
                        />
                        <path
                          d="M34.9999 14.3916L38.4583 16.4833C39.0916 16.8666 39.8666 16.3 39.6999 15.5833L38.7833 11.65L41.8416 8.99997C42.3999 8.51663 42.0999 7.59997 41.3666 7.54163L37.3416 7.19997L35.7666 3.4833C35.4833 2.8083 34.5166 2.8083 34.2333 3.4833L32.6583 7.19163L28.6333 7.5333C27.8999 7.59163 27.5999 8.5083 28.1583 8.99163L31.2166 11.6416L30.2999 15.575C30.1333 16.2916 30.9083 16.8583 31.5416 16.475L34.9999 14.3916Z"
                          fill="#F1B246"
                        />
                        <path
                          d="M59.9999 14.3916L63.4583 16.4833C64.0916 16.8666 64.8666 16.3 64.6999 15.5833L63.7833 11.65L66.8416 8.99997C67.3999 8.51663 67.0999 7.59997 66.3666 7.54163L62.3416 7.19997L60.7666 3.4833C60.4833 2.8083 59.5166 2.8083 59.2333 3.4833L57.6583 7.19163L53.6333 7.5333C52.8999 7.59163 52.5999 8.5083 53.1583 8.99163L56.2166 11.6416L55.2999 15.575C55.1333 16.2916 55.9083 16.8583 56.5416 16.475L59.9999 14.3916Z"
                          fill="#F1B246"
                        />
                        <path
                          d="M84.9999 14.3916L88.4583 16.4833C89.0916 16.8666 89.8666 16.3 89.6999 15.5833L88.7833 11.65L91.8416 8.99997C92.3999 8.51663 92.0999 7.59997 91.3666 7.54163L87.3416 7.19997L85.7666 3.4833C85.4833 2.8083 84.5166 2.8083 84.2333 3.4833L82.6583 7.19163L78.6333 7.5333C77.8999 7.59163 77.5999 8.5083 78.1583 8.99163L81.2166 11.6416L80.2999 15.575C80.1333 16.2916 80.9083 16.8583 81.5416 16.475L84.9999 14.3916Z"
                          fill="#F1B246"
                        />
                        <path
                          d="M110 14.3916L113.458 16.4833C114.092 16.8666 114.867 16.3 114.7 15.5833L113.783 11.65L116.842 8.99997C117.4 8.51663 117.1 7.59997 116.367 7.54163L112.342 7.19997L110.767 3.4833C110.483 2.8083 109.517 2.8083 109.233 3.4833L107.658 7.19163L103.633 7.5333C102.9 7.59163 102.6 8.5083 103.158 8.99163L106.217 11.6416L105.3 15.575C105.133 16.2916 105.908 16.8583 106.542 16.475L110 14.3916Z"
                          fill="#F1B246"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
