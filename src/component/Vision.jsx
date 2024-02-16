import React from 'react';
import l from '../image/liv.svg';
const Vision = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-5">
              <div className="vipromax">
                <div className="vi">Our</div>
                <div className="vipro">Vision</div>
                <div className="vivi">
                  Provide high quality international logistics solutions that
                  are profitable and tailored to the needs of our clients, from
                  all industries. We rely on our know-how and on the
                  professionalism of our teams to develop a lasting partnership
                  based on transparency, exchange, respect and trust with our
                  clients.
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-5">
              <div className="clmate">
                <img src={l} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
