import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-4">
        <h4 className="uppercase text-2xl text-center mb-4">Testimonials</h4>
        <Carousel autoPlay infiniteLoop showArrows showStatus={false} showIndicators={false} showThumbs={false} className="w-full">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 overflow-hidden rounded-full mr-4">
                      <img className="object-cover w-full h-full" src={testimonial.imageUrl} alt={testimonial.name} />
                    </div>
                    <div>
                      <div className="font-bold text-xl mb-2">{testimonial.name}</div>
                      <p className="text-gray-700 text-base">{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
