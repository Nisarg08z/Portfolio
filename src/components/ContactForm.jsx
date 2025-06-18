import React, { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { sendContactEmail } from "../services/emailService";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const canSend = () => {
    const last = localStorage.getItem("lastContactTime");
    if (!last) return true;
    return Date.now() - parseInt(last) > 60 * 1000; // 60s
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { from_email, subject, message } = form.current;

    if (!from_email.value || !subject.value || !message.value) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!canSend()) {
      toast.error("⏱ Please wait 1 minute before sending again.");
      return;
    }

    setLoading(true);
    try {
      await sendContactEmail(form.current);
      localStorage.setItem("lastContactTime", Date.now().toString());
      toast.success("✅ Message sent successfully!");
      form.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="p-6 shadow-md space-y-4 bg-[#1a1a1a] rounded-xl"
    >
      <input type="hidden" name="name" value="***** PORTFOLIO *****" />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none transition"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none transition"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        required
        className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-gray-500 focus:outline-none transition"
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition"
      >
        {loading && <Loader2 className="animate-spin" size={20} />}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
