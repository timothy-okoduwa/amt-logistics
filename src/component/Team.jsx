import React from 'react';

import fin from '../image/workers.png';
const Team = () => {
  return (
    <div>
      <div>
        <div style={{ marginTop: '80px' }}>
          <div className="ursiy">
            <span>Meet our team</span>
          </div>
          <div className="weare">
            We’re a cross-disciplinary team that loves to create great
            experiences for our customers.
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-5">
        <div className="wello">
          {' '}
          <img src={fin} alt="" />{' '}
        </div>
      </div>
    </div>
  );
};

export default Team;
