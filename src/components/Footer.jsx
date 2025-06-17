import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
        {/* Copyright */}
        <div className="bg-[#1e1e1e] px-6 py-2 rounded-full text-center text-sm shadow-inner">
          © {new Date().getFullYear()} Nisarg Fultariya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
