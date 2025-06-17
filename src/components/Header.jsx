import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] z-50 shadow-md px-6 py-4 flex justify-end gap-4">
      {['home', 'skills', 'project', 'contact'].map((item) => (
        <button
          key={item}
          className="text-white px-4 py-1 rounded hover:bg-gray-700 capitalize transition-all duration-300"
        >
          {item}
        </button>
      ))}
    </header>
  );
};

export default Header;
