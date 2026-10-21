
import React, { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink =
      `mailto:hello@coffe.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <p className="contact-eyebrow">
          <span></span> WE WOULD LOVE TO HEAR FROM YOU
        </p>

        <h1>
          Let's start a
          <br />
          <em>conversation.</em>
        </h1>

        <p className="contact-hero-text">
          Questions, coffee recommendations, or simply
          a little hello. There's always a seat for you here.
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-details">
          <p className="contact-eyebrow">GET IN TOUCH</p>

          <h2>
            Good coffee.
            <br />
            <em>Good conversations.</em>
          </h2>

          <p className="contact-description">
            Whether you're planning a visit, exploring a
            collaboration, or just curious about our coffee,
            we'd be delighted to hear from you.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon">✉</div>
              <div>
                <h3>Email us</h3>
                <a href="mailto:hello@coffe.com">
                  hello@coffe.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">⌖</div>
              <div>
                <h3>Visit our café</h3>
                <p>Your neighbourhood, your coffee corner.</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">◷</div>
              <div>
                <h3>Opening hours</h3>
                <p>Monday – Sunday</p>
                <p>8:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="contact-quote">
            <span>—</span>
            <p>Every great friendship begins over coffee.</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          <p className="contact-eyebrow">DROP US A NOTE</p>
          <h2>Send a message.</h2>

          <p className="contact-form-intro">
            Fill in the details below and let's connect.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">What is it about?</label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option>General Inquiry</option>
                <option>Coffee & Menu</option>
                <option>Events & Reservations</option>
                <option>Business Collaboration</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              SEND YOUR MESSAGE <span>↗</span>
            </button>

            {submitted && (
              <p className="contact-success">
                Your email app should open with your message.
                Send the email to complete your inquiry.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="contact-banner">
        <p className="contact-eyebrow">UNTIL WE MEET</p>
        <h2>
          Your next favourite
          <br />
          <em>cup is waiting.</em>
        </h2>
        <p>Slow moments. Beautiful coffee.</p>
      </section>
    </main>
  );
}

export default Contact;
