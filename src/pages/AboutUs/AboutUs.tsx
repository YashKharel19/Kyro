
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
        At KYRO, our journey is rooted in passion and purpose. As Ojaswi Rijal and Yash Kharel, two hearts united in a shared dream, we've embarked on a mission to provide dogs with the highest quality natural chews. Graduates from Nepal, with a history of entrepreneurship, we found inspiration in our love for animals, particularly dogs. Through diligent research and a stroke of serendipity, we discovered that our homeland was a treasure trove of natural chew manufacturers. Thus, KYRO was born - a fusion of our names, a symbol of unity, and a promise of excellence. With each chew, we strive not only to satisfy canine cravings but also to enrich the bond between humans and their four-legged companions. Welcome to KYRO, where every chew is crafted with love, care, and a touch of Nepali heritage.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
};

export default AboutUs;
