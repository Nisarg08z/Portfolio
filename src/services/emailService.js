import emailjs from "@emailjs/browser";

export const sendContactEmail = (form) => {
  return emailjs.sendForm(
    "your_service_id",     // Replace this
    "your_template_id",    // Replace this
    form,
    "your_public_key"      // Replace this
  );
};
