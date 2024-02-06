import React from 'react';
import a from '../image/afa.png';
import b from '../image/iso.png';
import c from '../image/trace.png';
const LocalCert = () => {
  return (
    <div className="pleaseee">
      <div className="loccc">
        <span>Local Certifications</span>
      </div>
      <div className=" container captured">
        <div className="row">
          <div className="col mb-4">
            <div>
              <img src={a} alt="" />
            </div>
          </div>
          <div className="col mb-4">
            <img src={a} alt="" />
          </div>
          <div className="col mb-4">
            <img src={b} alt="" />
          </div>
          <div className="col mb-4">
            <img src={a} alt="" />
          </div>
          <div className="col mb-4">
            <img src={c} alt="" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="connn">Contact us</button>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button className="exxx">
          Explore our Services{' '}
          <span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11187 1.49164L9.78475 1.49164M9.78475 1.49164L9.78475 8.16452M9.78475 1.49164L1.20534 10.0711"
                stroke="white"
                stroke-width="1.7975"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>{' '}
        </button>
      </div>
    </div>
  );
};

export default LocalCert;
