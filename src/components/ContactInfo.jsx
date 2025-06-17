import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactInfo = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
    <p className="mb-6 text-gray-300">
      I'm currently looking for new opportunities, my inbox is always open.
      Whether you have a question or just want to say hi, I'll try my best to get back to you!
    </p>
    <h2 className="block mb-4 text-lg hover:text-gray-300">
      nisarg693z@gmail.com
    </h2>
    <div className="flex gap-4 text-2xl">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FaGithub /></a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FaLinkedin /></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FaTwitter /></a>
    </div>
  </div>
);

export default ContactInfo;
