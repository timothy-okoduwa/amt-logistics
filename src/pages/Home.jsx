import React from 'react';
import Hrader from '../component/Hrader';
import Mission from '../component/Mission';
import Services from '../component/Services';
import Location from '../component/Location';
import News from '../component/News';
import Testimonal from '../component/Testimonal';
import LocalCert from '../component/LocalCert';

const Home = () => {
  return (
    <div>
      <Hrader />
      <Mission />
      <Services />
      <Location />
      <News />
      <Testimonal />
      <LocalCert />
    </div>
  );
};

export default Home;
