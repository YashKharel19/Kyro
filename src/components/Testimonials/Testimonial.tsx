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
    name: 'Nancy',
    content: 'My dog has a sensitive stomach, but these natural chew bars have never caused any ssues. Plus, they keep him entertained for hours! I love how long lasting these chews are.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jennifer',
    content: 'These chew bars have become a staple in our household. Our dogs can’t get enough, and we love that they’re made with wholesome ingredients.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Nick',
    content: 'I’m impressed by the variety of sizes available. It’s so convenient to order all my dogs’ chew bars from one place.” Thank you KYRO.',
    imageUrl: 'https://via.placeholder.com/150',
  },

];

const Testimonial: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">

      <h4 className="uppercase title-font text-2xl mb-8 text-center">Testimonials</h4>
      <Carousel autoPlay infiniteLoop showArrows showStatus={false} showIndicators={false} showThumbs={false} className="w-full">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 overflow-hidden rounded-full flex-shrink-0 mr-4">
                    <img className="object-cover w-full h-full rounded-full" src={testimonial.imageUrl} alt={testimonial.name} />
                  </div>
                  <div>
                    <div className="text-gray-700 text-base mb-2 relative">
                      <img src="../../../src/assets/testimonials/left.svg" className="inline-block h-2 w-2 absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2" />
                      <p className="inline">{testimonial.content}</p>
                      <img src="../../../src/assets/testimonials/right.svg" className="inline-block h-2 w-2 absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2" />

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
  );
};

export default Testimonial;
