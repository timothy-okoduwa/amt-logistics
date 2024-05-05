import React from 'react';
import k from '../image/kard1.png';
import m from '../image/Ellipse.png';
import { Link } from 'react-router-dom';
const Newsj = () => {
  return (
    <div className="news_holder">
      {/* <div className="news_and_update">
        <span>Latest News & Update</span>
      </div> */}

      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12  col-lg-4 mb-5">
              <Link
                to="/news-details"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="kard">
                  <div className="kard_image">
                    <img src={k} alt="" />
                  </div>
                  <div className="title_icon mt-3">
                    <div className="title_bissh">
                      <span>Our colleagues from Pemba, Mozambique.</span>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="#0A0A0A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="lil_talk mt-3">
                    <span>
                      Our colleagues from Pemba Mozambique moved to new offices
                      and they have been working there.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-12  col-lg-4 mb-5">
              <div className="kard">
                <div className="kard_image">
                  <img src={k} alt="" />
                </div>
                <div className="title_icon mt-3">
                  <div className="title_bissh">
                    <span>Our colleagues from Pemba, Mozambique.</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="#0A0A0A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="lil_talk mt-3">
                  <span>
                    Our colleagues from Pemba Mozambique moved to new offices
                    and they have been working there.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12  col-lg-4 mb-5">
              <div className="kard">
                <div className="kard_image">
                  <img src={k} alt="" />
                </div>
                <div className="title_icon mt-3">
                  <div className="title_bissh">
                    <span>Our colleagues from Pemba, Mozambique.</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="#0A0A0A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="lil_talk mt-3">
                  <span>
                    Our colleagues from Pemba Mozambique moved to new offices
                    and they have been working there.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12  col-lg-4 mb-5">
              <div className="kard">
                <div className="kard_image">
                  <img src={k} alt="" />
                </div>
                <div className="title_icon mt-3">
                  <div className="title_bissh">
                    <span>Our colleagues from Pemba, Mozambique.</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="#0A0A0A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="lil_talk mt-3">
                  <span>
                    Our colleagues from Pemba Mozambique moved to new offices
                    and they have been working there.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12  col-lg-4 mb-5">
              <div className="kard">
                <div className="kard_image">
                  <img src={k} alt="" />
                </div>
                <div className="title_icon mt-3">
                  <div className="title_bissh">
                    <span>Our colleagues from Pemba, Mozambique.</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="#0A0A0A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="lil_talk mt-3">
                  <span>
                    Our colleagues from Pemba Mozambique moved to new offices
                    and they have been working there.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12  col-lg-4 mb-5">
              <div className="kard">
                <div className="kard_image">
                  <img src={k} alt="" />
                </div>
                <div className="title_icon mt-3">
                  <div className="title_bissh">
                    <span>Our colleagues from Pemba, Mozambique.</span>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="#0A0A0A"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="lil_talk mt-3">
                  <span>
                    Our colleagues from Pemba Mozambique moved to new offices
                    and they have been working there.
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

export default Newsj;
