import React from 'react';
import a from '../image/Logo AMT 1.png';
const Footer = () => {
  return (
    <div className="ghail">
      <div className="container">
        <div
          className="pt-5 pb-5"
          style={{ borderBottom: '1px solid #4EBCD733' }}
        >
          <div className="row">
            <div className="col-12 col-lg-6 mb-4">
              <div>
                <div className="joinn">Join our newsletter</div>
                <div className="newsletter">
                  We’ll send you a nice letter once per week. No spam.
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4 dumbbb">
              <div className="d-flex">
                <div>
                  <input
                    type="text"
                    className="reveled"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <button className="send_button">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-12 col-lg-3 mb-4">
              <div>
                <div className="mb-3 clash">
                  <span>Company</span>
                </div>
                <div className="mb-3 linkkk">
                  <span>About us</span>
                </div>
                <div className="mb-3 linkkk">
                  <span>Our Services</span>
                </div>
                <div className="mb-3 linkkk">
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-4">
              <div>
                <div className="mb-3 clash">
                  <span>Resources</span>
                </div>
                <div className="mb-3 linkkk">
                  <span>News</span>
                </div>
                <div className="mb-3 linkkk">
                  <span>FAQ</span>
                </div>
                <div className="mb-3 linkkk">
                  <span>Compliance & QHSSE</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-4">
              <div>
                <div className="mb-3 clash">
                  <span>Social</span>
                </div>
                <div className="mb-3 linkkk">
                  <span>Twitter </span>
                </div>
                <div className="mb-3 linkkk">
                  <span>LinkedIn</span>
                </div>
                <div className="mb-3 linkkk">
                  <span>Facebook</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-4">
              <div>
                <div>
                  <div className="mb-3 clash">
                    <span>Social</span>
                  </div>
                  <div className="mb-3 linkkk">
                    <span>Terms </span>
                  </div>
                  <div className="mb-3 linkkk">
                    <span>Privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="row">
            <div className="col-12 col-lg-6">
              <img src={a} alt="" />
            </div>
            <div className="col-12 col-lg-6 dumbbb">
              <div className="twentty">
                <span>© 2024 AMT Cameroon SA. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
