import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
        setIsValid(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <article className="contact active">
      {/* Header */}
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Map */}
      <section className="mapbox">
        <figure>
          <iframe
            title="Delhi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5400512527!2d77.0688975472658!3d28.52725273874944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1652615438865!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </figure>
      </section>

      {/* Contact form */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form
          ref={formRef}
          className="form"
          onSubmit={sendEmail}
          onChange={(e) => setIsValid(e.currentTarget.checkValidity())}
        >
          {/* REQUIRED FOR SUBJECT {{title}} */}
          <input type="hidden" name="title" value="Portfolio Contact Form" />

          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Full name"
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={!isValid || loading}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </article>
  );
}
