
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {/* Image on the left */}
      <div className="w-full md:w-1/2">
        <img
         src=""
          alt="About Us"
          className="mx-auto md:mx-0 max-w-full h-auto md:h-full"
        />
      </div>
      {/* Content on the right */}
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-4">
          Your content goes here. Describe your company, mission, values, etc.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default AboutUs;
