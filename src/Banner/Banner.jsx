import React from 'react';

const Banner = () => {
  return (
    <section className="bg-blue-600 text-white py-20 px-5 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Collaborate Seamlessly with Your Team
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Boost productivity and streamline communication with our powerful team collaboration tools.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Banner;