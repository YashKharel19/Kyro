import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <div id="tb_cms_testimonial" className="bg-gray-100">
      <div id="tb-testimonial-cms">
        <div className="TB-Commen-Heading">
          <h3 className="text-3xl font-bold mb-4">Testimonial</h3>
        </div>
        <div className="container mx-auto">
          <div className="tb-testimonial-flex owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div className="owl-stage">
                <div className="owl-item">
                  <div className="tb-testimonial-section bg-white rounded-lg p-6 shadow-md">
                    <div className="tb-testimonial-text">
                      <p className="text-gray-800">
                        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                      </p>
                    </div>
                    <div className="tb-testimonial-img-content flex items-center mt-4">
                      <div className="tb-testimonial-img mr-4">
                        <img src="img/tb/tb-testimonial-img-01.jpg" className="w-16 h-16 rounded-full" alt="tb-testimonial-img" />
                      </div>
                      <div className="tb-testimonial-text1">
                        <h2 className="text-xl font-semibold">Daly Harry</h2>
                        <h3 className="text-gray-600">Web Designer</h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat the same structure for other testimonials */}
              </div>
            </div>
            {/* Owl Carousel navigation */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
