import React from 'react';
import a from '../image/Logo AMT 1.png';
import { Link } from 'react-router-dom';
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
              <div className="wijhjjhjk">
                <div>
                  <input
                    type="text"
                    className="reveled"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="subbz">
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
                  <Link
                    to="/about"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <span>About us</span>
                  </Link>
                </div>
                <div className="mb-3 linkkk">
                  <Link
                    to="/solutions"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <span> Our Solutions</span>
                  </Link>
                </div>
                <div className="mb-3 linkkk">
                  <Link
                    to="/contact"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-4">
              <div>
                <div className="mb-3 clash">
                  <span>Resources</span>
                </div>
                <div className="mb-3 linkkk">
                  <Link
                    to="/news"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <span>News</span>
                  </Link>
                </div>
                <div className="mb-3 linkkk">
                  <Link
                    to="/faqs"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <span>FAQ</span>
                  </Link>
                </div>
                <div className="mb-3 linkkk">
                  <Link
                    to="/compliance"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <span>Compliance & QHSSE</span>
                  </Link>
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
