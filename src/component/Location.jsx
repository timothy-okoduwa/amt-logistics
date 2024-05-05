import React from 'react';
import m from '../image/map.png';
const Location = () => {
  return (
    <div className="location_holder">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="mage_hold">
              <img src={m} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-4">
            <div className="wiwue">
              <div>
                <div className="our_location">
                  <span>Our Location</span>
                </div>
                <div className="Douala">
                  <span>Douala, Cameroon</span>
                </div>
                <div className="takklo">
                  <span>
                    600, Ave. Charles de Gaulle – Bonanjo, Douala / <br />{' '}
                    Cameroon Tel (office): +237 679 52 11 63 <br /> Mobile: +237
                    679 52 36 90
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
