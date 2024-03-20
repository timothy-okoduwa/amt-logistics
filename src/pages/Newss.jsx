import React from 'react';
import NewsHead from '../component/NewsHead';
import Newsj from '../component/Newsj';
const News = () => {
  return (
    <div>
      <NewsHead />
      <div className="mt-5">
        <Newsj />
      </div>
    </div>
  );
};

export default News;
