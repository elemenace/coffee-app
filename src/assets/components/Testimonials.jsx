import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-light-pink-color" id="testimonials">
      <h2 className="text-center text-3xl font-bold text-brown-800 mb-10">
        Testimonials
      </h2>

      <div className="section-content">
        <div className="swiper-container relative overflow-hidden mx-12 mb-12">
          <div className="swiper-wrapper">
            <div className="swiper-slide p-8 flex flex-col justify-center items-center text-center">
              <img
                src="/user-1.jpg"
                alt="User"
                className="w-44 h-44 mb-12 rounded-full object-cover"
              />
              <h3 className="mb-4 text-xl">Sarah Johnson</h3>
              <i className="line-height-25px">
                "Loved the French roast. Perfectly balanced and rich. Will order
                again!"
              </i>
            </div>
            <div className="swiper-slide p-8 flex flex-col justify-center items-center text-center">
              <img
                src="/user-2.jpg"
                alt="User"
                className="w-44 h-44 mb-12 rounded-full object-cover"
              />
              <h3 className="mb-4 text-xl">James Wilson</h3>
              <i className="line-height-25px">
                "Great espresso blend! Smooth and bold flavor. Fast shipping
                too!"
              </i>
            </div>
            <div className="swiper-slide p-8 flex flex-col justify-center items-center text-center">
              <img
                src="/user-3.jpg"
                alt="User"
                className="w-44 h-44 mb-12 rounded-full object-cover"
              />
              <h3 className="mb-4 text-xl">Michael Brown</h3>
              <i className="line-height-25px">
                "Fantastic mocha flavor. Fresh and aromatic. Quick shipping!"
              </i>
            </div>
            <div className="swiper-slide p-8 flex flex-col justify-center items-center text-center">
              <img
                src="/user-4.jpg"
                alt="User"
                className="w-44 h-44 mb-12 rounded-full object-cover"
              />
              <h3 className="mb-4 text-xl">Emily Harris</h3>
              <i className="line-height-25px">
                "Excellent quality! Fresh beans and quick delivery. Highly
                recommend."
              </i>
            </div>
            <div className="swiper-slide p-8 flex flex-col justify-center items-center text-center">
              <img
                src="/user-5.jpg"
                alt="User"
                className="w-44 h-44 mb-12 rounded-full object-cover"
              />
              <h3 className="mb-4 text-xl">Anthony Thompson</h3>
              <i className="line-height-25px">
                "Best decaf I've tried! Smooth and flavorful. Arrived promptly."
              </i>
            </div>
          </div>

          {/* Pagination and Navigation Buttons */}
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
