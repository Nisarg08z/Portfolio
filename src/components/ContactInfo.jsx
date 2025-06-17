import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";

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
      <a href="https://github.com/nisarg08z" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/nisarg-fultariya-5ba908277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FaLinkedin /></a>
      <a href="https://x.com/Nisarg918865791" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><AiOutlineX /></a>
      <a href="https://youtube.com/@const_nisarg?si=s2YHSpasGz3wVTrO" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition"><FaYoutube  /></a>
    </div>
  </div>
);

export default ContactInfo;
