import React from 'react';
import Header from './components/Header';

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] text-white min-h-screen">
      <Header />
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default Layout;
