import React, {useEffect} from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
   const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div id="contact" className="min-h-screen pt-20 px-4">

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
