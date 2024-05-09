import React from 'react';
import a from '../image/afa.png';
import b from '../image/iso.png';
import c from '../image/trace.png';
const LocalCertSecond = () => {
  return (
    <div className="pleaseee2">
      <div className="loccc2">
        <span>Local Certifications</span>
      </div>
      <div className="container  captured">
        <div className="welpdkjh">
          <div className="mb-4">
            <div>
              <img src={a} alt="" />
            </div>
          </div>
          <div className="mb-4">
            <img src={a} alt="" />
          </div>
          <div className="mb-4">
            <img src={b} alt="" />
          </div>
          <div className="mb-4">
            <img src={a} alt="" />
          </div>
          <div className="mb-4">
            <img src={c} alt="" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button className="connn2">Contact us</button>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <button className="exxx2">
          Explore our Services{' '}
          <span>
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.11325 7.49189L15.7861 7.49189M15.7861 7.49189L15.7861 14.1648M15.7861 7.49189L7.20671 16.0713"
                stroke="#102845"
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

export default LocalCertSecond;
