import React from 'react';
import HomeAnimation from '../components/HomeAnimation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 lg:px-20 min-h-[calc(100vh-80px)]"
    >
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold">Nisarg Fultariya</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
            Hello! I’m a passionate developer with a love for clean code and interactive design.
            I specialize in building responsive web apps with React and Tailwind CSS.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Right Animation */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
        <HomeAnimation />
      </div>
    </section>
  );
};

export default Home;
