import React, { useState, useEffect, useRef } from 'react';

const AboutUs: React.FC = () => {
  const [paragraphHeight, setParagraphHeight] = useState<number | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      const height = paragraphRef.current.clientHeight;
      setParagraphHeight(height);
    }
  }, []);

  return (

    <div className="container mx-auto px-4 py-12">
      <h4 className="uppercase title-font text-2xl mb-8 text-center">About Us</h4>

      <div className="flex flex-wrap justify-center items-center mb-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="../../../src/assets/about/about.jpg"
            alt="About Us"
            className="mx-auto md:mx-0 max-w-full h-auto md:h-full"
            style={{ height: paragraphHeight }}
          />

        </div>
        <div className="w-full md:w-1/2 px-4">

          <p ref={paragraphRef} className="text-lg mb-6 leading-loose font-serif text-justify">
            At KYRO, our journey is rooted in passion and purpose. As Ojaswi Rijal and Yash Kharel, two hearts united in a shared dream, we've embarked on a mission to provide dogs with the highest quality natural chews. Graduates from Nepal, with a history of entrepreneurship, we found inspiration in our love for animals, particularly dogs. Through diligent research and a stroke of serendipity, we discovered that our homeland was a treasure trove of natural chew manufacturers. Thus, KYRO was born - a fusion of our names, a symbol of unity, and a promise of excellence. With each chew, we strive not only to satisfy canine cravings but also to enrich the bond between humans and their four-legged companions. Welcome to KYRO, where every chew is crafted with love, care, and a touch of Nepali heritage.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

