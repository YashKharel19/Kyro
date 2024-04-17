import React from 'react';

interface StepCardProps {
  stepNumber: string;
  stepTitle: string;
  children: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, stepTitle, children}) => {
  return (
    <div className="w-full h-80 md:w-1/3 p-6">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md">
        <div className="p-4">
          <span className="text-xl font-bold mr-2" style={{color: '#523129'}}>{stepNumber}</span>
          <h3 className="text-lg font-bold mb-4" style={{color: '#523129'}}>{stepTitle}</h3>
          <div className="text-base text-gray-700 font-medium">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Category: React.FC = () => {
  return (
    <section style={{backgroundColor:'#E5C7A8'}}>
      <div className="container mx-auto px-4 py-12">
        <h2 className="sm:w-2/5 text-gray-900 font-medium uppercase title-font text-2xl mb-2 sm:mb-0 text-center">Kyro Dog Chew Production Process</h2>
        
        <div className="flex flex-wrap justify-center items-start mb-12">
          <StepCard stepNumber="01." stepTitle="Milk is sourced at high altitudes" children="In the Himalayan region, yaks and cows graze at altitudes exceeding 15,000 feet, feeding on plentiful herbs and medicinal plants. Drinking pure Himalayan water imbues their milk with medicinal properties. Fresh milk is then gathered by local farmers, initiating the initial step in creating Kyro Chews.">
          </StepCard>

          <StepCard stepNumber="02." stepTitle="The milk is boiled" children="Subjecting milk to a temperature of 90 degrees Celsius effectively eliminates microbes and harmful bacteria. Following this, the fat is extracted and separated from the milk using centrifugation. The resulting skimmed milk is utilized to craft delectable Kyro Chew treats for dogs.">
          </StepCard>

          <StepCard stepNumber="03." stepTitle="Forming cheese" children="To produce fresh cheese, the segregated milk undergoes heating after incorporating a small amount of lime juice and Himalayan salt. This initiates the coagulation process, resulting in the formation of semi-solid cheese by the conclusion of this phase.">
          </StepCard>
        </div>

        <div className="flex flex-wrap justify-center items-start mb-12">
          <StepCard stepNumber="04." stepTitle="Removing Moisture" children="To create fresh cheese, the milk that has been separated is warmed with a small portion of lime juice and Himalayan salt. This process induces coagulation, ultimately yielding semi-solid cheese by the end of this step.">
          </StepCard>

          <StepCard stepNumber="05." stepTitle="Smoke drying to form Lekali Dog Chew" children="The dried blocks are sliced to form elongated bars of firm Kyro Chews and undergo smoke drying for a duration of 28 days. This process serves as a method for applying a natural preservative coating to the Kyro Chews.">
          </StepCard>

          <StepCard stepNumber="06." stepTitle="Sorting and Quality Test" children="The desiccated blocks are sliced to craft lengthy bars of sturdy Kyro Chews and undergo smoke drying for a period of 28 days. This procedure serves as a means of applying a natural preservative layer to the Kyro Chews.">
          </StepCard>
        </div>
      </div>
    </section>
  );
};

export default Category;
