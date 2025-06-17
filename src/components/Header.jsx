import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["home", "skills", "project", "contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on mobile after click
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold">Nisarg</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 px-4 py-1 rounded-full hover:bg-white/10 hover:text-white transition-all capitalize"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Items */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 px-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 px-4 py-2 rounded hover:bg-white/10 text-left capitalize"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
