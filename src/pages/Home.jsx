import React from 'react';
import HomeAnimation from '../components/HomeAnimation';

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 lg:px-20">
      
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold">Your Name</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Hello! I’m a passionate developer with a love for clean code and interactive design.
            I specialize in building responsive web apps with React and Tailwind CSS.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <div className="w-10 h-10 bg-white/10 border border-white/20 rounded hover:scale-110 transition" />
            <div className="w-10 h-10 bg-white/10 border border-white/20 rounded hover:scale-110 transition" />
            <div className="w-10 h-10 bg-white/10 border border-white/20 rounded hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* Right Animation */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
        <HomeAnimation />
      </div>
    </section>
  );
};

export default Home;
