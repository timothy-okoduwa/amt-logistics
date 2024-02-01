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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
