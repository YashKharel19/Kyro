import React, { useState } from 'react';
import './Testimonial.css'; // Import CSS file for styling

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
    imageUrl: 'https://via.placeholder.com/150',
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
      <div className="testimonial">
        <div className="testimonial-content">
          <p>{testimonials[activeIndex].content}</p>
          <h3>{testimonials[activeIndex].name}</h3>
        </div>
        <div className="testimonial-image">
          <img src={testimonials[activeIndex].imageUrl} alt={testimonials[activeIndex].name} />
        </div>
      </div>
      <div className="controls">
        <button onClick={handlePrev}>&#10094;</button>
        <button onClick={handleNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default Testimonial;