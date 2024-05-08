import React from "react";
import {Link} from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-200 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
          Plan Your Journey
          <br />
          <span className="text-blue-700">You have never seen before</span>
          </h2>
          <p className="md:w-4/5">
          Join our community of like-minded explorers and let us guide you on a transformative journey where travel meets culture and connection. Together, let's create memories that transcend boundaries and unite us in our shared love for adventure and discovery.
          </p>
          <Link to="/shop" className="mt-12 block">
            <button className="bg-blue-700 text-white font-semibold px-5 py-2 roundedhover:bg-black transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>

        <div>
            <img src="./exhibition.jpg" alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
