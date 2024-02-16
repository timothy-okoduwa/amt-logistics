import React from 'react';
import ceo from '../image/ceo.png';
import coo from '../image/coo.png';
import cto from '../image/cto.png';
import mm from '../image/mm.png';
import bd from '../image/bd.png';
import hit from '../image/hit.png';
import sales from '../image/sales.png';
import fin from '../image/fin.png';
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
      <div className="container mt-4">
        <div className="row mt-5">
          <div className="col-12 col-lg-3 mb-5 d-flex justify-content-center">
            <div className="gracce">
              <div className="uju">
                <img src={ceo} alt="" />
              </div>
              <div className="neverless">
                <span>George Bold</span>
              </div>
              <div className="post">
                <span>CEO</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-5 d-flex justify-content-center">
            <div className="gracce">
              <div className="uju">
                <img src={coo} alt="" />
              </div>
              <div className="neverless">
                <span>Anita Waldia</span>
              </div>
              <div className="post">
                <span>COO</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-5 d-flex justify-content-center">
            <div className="gracce">
              <div className="uju">
                <img src={cto} alt="" />
              </div>
              <div className="neverless">
                <span>Henry Ashu</span>
              </div>
              <div className="post">
                <span> CTO</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-5 d-flex justify-content-center">
            <div className="gracce">
              <div className="uju">
                <img src={mm} alt="" />
              </div>
              <div className="neverless">
                <span>Queentin Godfred</span>
              </div>
              <div className="post">
                <span>Marketing Manager</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-5 d-flex justify-content-center">
            <div className="gracce">
              <div className="uju">
                <img src={bd} alt="" />
              </div>
              <div className="neverless">
                <span>Anita Mbogo</span>
              </div>
              <div className="post">
                <span>Business Developer</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-5 d-flex justify-content-center">
            <div className="gracce">
              <div className="uju">
                <img src={hit} alt="" />
              </div>
              <div className="neverless">
                <span>Jeofrey Ola</span>
              </div>
              <div className="post">
                <span>Head of IT</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-5 d-flex justify-content-center">
            <div className="gracce">
              <div className="uju">
                <img src={sales} alt="" />
              </div>
              <div className="neverless">
                <span>Princess Bih</span>
              </div>
              <div className="post">
                <span>Sales </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-5 d-flex justify-content-center">
            <div className="gracce">
              <div className="uju">
                <img src={fin} alt="" />
              </div>
              <div className="neverless">
                <span>George Bold</span>
              </div>
              <div className="post">
                <span>Finance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
