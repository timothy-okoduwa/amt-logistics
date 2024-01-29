import React from 'react';
import { GoClock } from 'react-icons/go';
import { MdMailOutline } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

const TopName = () => {
  return (
    <div className="announcment">
      <div className="holddd">
        <div className="accoumant_words">
          {' '}
          <span>
            <GoClock className="wiko" />
          </span>{' '}
          Mon- Fri, 8:00 am- 5:00pm{' '}
        </div>
        <div className="accoumant_words">
          {' '}
          <span>
            <MdMailOutline className="wiko" />
          </span>{' '}
          AMT @ SUPPORT.COM
        </div>
        <div className="accoumant_words">
          {' '}
          <span>
            <FiPhone className="wiko" />
          </span>{' '}
          +237677889909090
        </div>
      </div>
    </div>
  );
};

export default TopName;
