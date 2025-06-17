import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111] text-white">
      <Header />
      <main className="pt-20 flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
