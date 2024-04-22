import React from 'react';

interface StepCardProps {
  imageUrl: string;
  stepTitle: string;
  children: string[];
}

const StepCard: React.FC<StepCardProps> = ({ imageUrl, stepTitle, children }) => {
  return (
    <div className="w-full md:w-1/3 p-6">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md">
        <div className="p-4 flex">
          <img src={imageUrl} alt="Step Image" className="w-1/2 p-4" />
          <div className="w-1/2 pl-4">
            <h3 className="text-lg font-bold mb-4" style={{ color: '#523129' }}>{stepTitle}</h3>
            <ul className="text-base text-gray-700 font-medium list-disc">
              {children.map((child, index) => (
                <li key={index}>{child}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Category: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#E5C7A8' }}>
      <div className="container mx-auto px-4 py-12">
        <h2 className="sm:w-2/5 text-gray-900 font-medium uppercase title-font text-2xl mb-2 sm:mb-0 text-center">Our Size Catlog</h2>

        <div className="flex flex-wrap justify-center items-start mb-12">
          <StepCard
            imageUrl="../../../src/assets/Sizes/2.png"
            stepTitle="SMALL CHEWS"
            children={[
              "WEIGHT (GM) : 30-40 GM",
              "LENGTH (CM) : 6-9 CM"
            ]}
          />
          <StepCard
            imageUrl="../../../src/assets/Sizes/4.png"
            stepTitle="MEDIUM CHEWS"
            children={[
              "WEIGHT (GM) : 70-80 GM",
              "LENGTH (CM) : 10-14 CM"
            ]}
          />
           <StepCard
            imageUrl="../../../src/assets/Sizes/3.png"
            stepTitle="LARGE CHEWS"
            children={[
              "WEIGHT (GM) : 100-110 GM",
              "LENGTH (CM) : 13-17 CM"
            ]}
          />
          <StepCard
            imageUrl="../../../src/assets/Sizes/1.png"
            stepTitle="EXTRA LARGE CHEWS"
            children={[
              "WEIGHT (GM) : 155-165 GM",
              "LENGTH (CM) : 15-18 CM"
            ]}
          />
          {/* Add other StepCard components similarly */}
        </div>
      </div>
    </section>
  );
};

export default Category;
