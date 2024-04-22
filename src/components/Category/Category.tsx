import React from 'react';

interface StepCardProps {
  imageUrl: string;
  stepTitle: string;
  children: string[];
}

const StepCard: React.FC<StepCardProps> = ({ imageUrl, stepTitle, children }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 p-4 flex justify-center">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md text-center">
        <img src={imageUrl} alt="Step Image" className="h-40 w-auto object-contain p-4" />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2" style={{ color: '#523129' }}>{stepTitle}</h3>
          <ul className="text-base text-gray-700 font-medium list-none">
            {children.map((child, index) => (
              <li key={index} className="mb-2">{child}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Category: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#F3E3D3' }}>
      <div className="container mx-auto px-4 py-12">
        <h4 className="text-gray-900 font-medium uppercase title-font text-2xl mb-8 text-center">Our Size Catalog</h4>

        <div className="flex flex-wrap justify-center items-center mb-12">
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
        </div>
      </div>
    </section>
  );
};

export default Category;
