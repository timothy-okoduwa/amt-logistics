import React from 'react';
import g from '../image/Group23.png';
import h from '../image/Group 28.png';
import i from '../image/Group 29.png';
import m from '../image/map.png';
const Continue = () => {
  return (
    <div className="nahewe">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="juuu">
                <img src={g} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="juuu">
                <img src={h} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="juuu">
                <img src={i} alt="" />
              </div>
            </div>
          </div>

          <div className="itwo">
            <div className="row">
              <div className="col-12 col-lg-6 mb-4 bg-danger">
                <div>
                  <div className="gettt">Get in touch</div>
                  <div className="frerir">
                    Our friendly team would love to hear from you.
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-6 mb-5">
                    <div>
                      <div className="labelll">First Name</div>
                      <input type="text"  placeholder="First name" className='pleasework' />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mb-5">
                    <div>
                      <div className="labelll">Last Name</div>
                      <input type="text" placeholder="Last Name" className='pleasework'/>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="labelll">Phone number</div>
                  <input type="text" placeholder="Phone number" className='pleasework'/>
                </div>
                <div className="mb-4">
                  <div className="labelll">Email</div>
                  <input type="text"  placeholder="Email" className='pleasework'/>
                </div>
                <div className="mb-4">
                  <div className="labelll">subject</div>
                  <input type="text" className='pleasework' placeholder="Subject" />
                </div>
                <div className="mb-4">
                  <div className="labelll">Message</div>
                  <textarea className="textts" />
                </div>
                <div>
                  <button className="senmess">Send message</button>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <div className="mage_hold">
                  <img src={m} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Continue;
