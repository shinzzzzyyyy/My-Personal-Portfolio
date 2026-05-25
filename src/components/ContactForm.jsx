import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    setSent(false);

    emailjs
      .sendForm(
        "service_e3o3w88",      // <- your EmailJS service ID
        "template_kkqd8ld",     // <- your EmailJS template ID
        form.current,
        "36i0yQwZybJarw4Sq"     // <- your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setErr("Failed to send! Please try again later.");
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail} autoComplete="off">
      <h3 className="contact-title">Send me a message</h3>
      <label>
        Your Email
        <input
          type="email"
          name="user_email"
          placeholder="your@email.com"
          required
          autoComplete="off"
        />
      </label>
      <label>
        Your Message
        <textarea
          name="message"
          placeholder="Type your message here..."
          required
          rows={6}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      {sent && <p className="success-msg">✅ Message sent! Check your email for confirmation.</p>}
      {err && <p className="error-msg">{err}</p>}
      <style>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25em;
          background: rgba(25,16,35,0.97);
          border-radius: 1.1em;
          box-shadow: 0 6px 32px #0003;
          padding: 2em 1.5em 1.5em 1.5em;
          max-width: 400px;
          margin: 0 auto;
        }
        .contact-title {
          color: #fd2d44;
          text-align: center;
          margin-bottom: 0.1em;
          letter-spacing: 0.025em;
        }
        .contact-form label {
          color: #fafafa;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          gap: 0.4em;
          font-size: 1.04em;
        }
        .contact-form input,
        .contact-form textarea {
          border-radius: 6px;
          border: 1px solid #fd2d4440;
          padding: 0.7em;
          font-size: 1em;
          background: #1a1323;
          color: #fff;
          transition: border 0.16s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border: 1.5px solid #fd2d44;
        }
        .contact-form textarea {
          min-height: 100px;
          resize: vertical;
        }
        .contact-form button {
          margin-top: 0.6em;
          background: #fd2d44;
          color: #fff;
          font-weight: 700;
          border: none;
          border-radius: 7px;
          padding: 0.85em;
          font-size: 1.08em;
          cursor: pointer;
          transition: background 0.16s;
        }
        .contact-form button[disabled] {
          opacity: 0.7;
        }
        .contact-form button:hover:not([disabled]) {
          background: #c02035;
        }
        .success-msg {
          color: #53ff8f;
          font-weight: bold;
          text-align: center;
        }
        .error-msg {
          color: #ff4444;
          font-weight: bold;
          text-align: center;
        }
        @media (max-width: 540px) {
          .contact-form {
            padding: 1.2em 0.5em 1.2em 0.5em;
          }
        }
      `}</style>
    </form>
  );
}