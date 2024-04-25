import React, { useState } from 'react';

interface TestimonialItem {
  id: number;
  name: string;
  content: string;
  imageUrl: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit ut tellus ultrices porta.',
    imageUrl: 'https://via.placeholder.com/150/b04f2e',
  },
  {
    id: 2,
    name: 'Jane Smith',
    content: 'Sed euismod dictum mi a commodo. Nunc auctor dolor eget ante fermentum, in hendrerit turpis bibendum.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more testimonials as needed
];

const Testimonial: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-container">
      <div className="relative">
        <div className="testimonial-card overflow-hidden rounded-lg shadow-lg">
          <div className="testimonial-content p-6">
            <p className="text-gray-700 text-lg sm:text-xl">{testimonials[activeIndex].content}</p>
            <h3 className="font-bold text-xl sm:text-2xl mt-4">{testimonials[activeIndex].name}</h3>
          </div>
          <div className="testimonial-image absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <img src={testimonials[activeIndex].imageUrl} alt={testimonials[activeIndex].name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white" />
          </div>
        </div>
        <div className="controls absolute top-1/2 left-0 transform -translate-y-1/2">
          <button onClick={handlePrev} className="text-2xl sm:text-3xl mr-4">&#10094;</button>
          <button onClick={handleNext} className="text-2xl sm:text-3xl">&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
