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
                      <div className="text-gray-700 text-base mb-2 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2h1a1 1 0 110 2h-1v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9H1a1 1 0 010-2h1V5zm2 0h12v2H4V5z" clipRule="evenodd" />
                        </svg>
                        <p className="inline">{testimonial.content}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V5zM4 3a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="text-gray-600 text-sm">
                        - {testimonial.name}
                      </div>
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
