import React from 'react';

const Testimonial = () => {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">John Doe</div>
        <p className="text-gray-700 text-base">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit ut tellus ultrices porta."
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#testimonial</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#happy</span>
      </div>
    </div>
  );
};

export default Testimonial;