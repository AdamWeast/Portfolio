function Contact() {
  return (
    <div className="page-container contact-page">
      <h1 className="page-title">Contact Me</h1>
      <p className="contact-intro">
        Feel free to reach out with any questions or opportunities. I will get
        back to you as soon as I can.
      </p>

      {/* ===== CONTACT FORM ===== */}
      <form className="contact-form">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Your Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Your Message</label>
        <textarea
          rows="6"
          placeholder="Write your message here..."
          required
        ></textarea>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
