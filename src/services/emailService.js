import emailjs from "@emailjs/browser";

export const sendContactEmail = (form) => {
  return emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};
