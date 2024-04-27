import React from 'react';

import './Flyer.css';

const FlyerPage: React.FC = () => {
  return (


    <div className="relative w-full h-40 md:h-60 lg:h-80 xl:h-96 overflow-hidden">
      <img
        src="../../../src/assets/preorder.svg"
        alt="Flyer"
        className="absolute top-0 left-0 w-full h-auto max-h-full object-contain animate-marquee"
      />
    </div>
  );
};

export default FlyerPage;
