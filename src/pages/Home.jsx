import React from 'react';
import HomeAnimation from '../components/HomeAnimation';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { AiOutlineX } from "react-icons/ai";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 lg:px-20 min-h-[calc(100vh-80px)]"
    >
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold">Nisarg Fultariya</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
            Hi! I’m a creative and technically driven developer with a strong foundation in full-stack web development and a deep curiosity for AI and intelligent systems. I specialize in building dynamic, scalable applications using the MERN stack and enjoy leveraging OpenAI and other LLM-based tools to create smart, automated solutions.

            Beyond frameworks and APIs, I love solving problems with clean logic and efficient code. Whether it’s building real-time applications, integrating AI workflows, or automating complex tasks, I approach each challenge with a blend of curiosity, structure, and creativity.

            I’m always exploring new technologies, pushing limits, and building things that not only work—but think.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="https://github.com/nisarg08z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nisarg-fultariya-5ba908277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/Nisarg918865791"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-2xl"
            >
              <AiOutlineX />
            </a>
            <a
              href="https://youtube.com/@const_nisarg?si=s2YHSpasGz3wVTrO"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Right Animation */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
        <HomeAnimation />
      </div>
    </div>
  );
};

export default Home;
