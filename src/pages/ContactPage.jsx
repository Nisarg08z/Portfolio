import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import { Toaster } from "react-hot-toast";

const ContactPage = () => {
  return (
    <div id="contact" className="min-h-screen pt-20 px-4">
      <Toaster position="bottom-right" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Centered Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold px-8 py-3 rounded-lg mb-12">
          Contact
        </h2>

        {/* Centered Grid */}
        <div className="grid md:grid-cols-2 gap-10 w-full items-center justify-center">
          <div className="flex justify-center">
            <ContactInfo />
          </div>
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
