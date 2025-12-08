import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

// Contact Form Component:
// Handles user input, validation, and writes messages to Firestore.
function Contact() {
  // Local form state (controlled inputs)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Status message for user feedback (success, error, validation)
  const [status, setStatus] = useState("");

  // Loading flag to disable form while sending
  const [loading, setLoading] = useState(false);

  // Generic input change handler:
  // Updates whichever field is being typed in.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler:
  // Validates input, saves the message to Firestore, and gives user feedback.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation guard
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: Timestamp.now(),
      });

      // Success feedback and reset form
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Error sending message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container contact-page">
      <h1 className="page-title">Contact Me</h1>
      <p className="contact-intro">
        Feel free to reach out with any questions or opportunities. I will get
        back to you as soon as I can.
      </p>

      {/* ===== CONTACT FORM ===== */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Your Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Your Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Write your message here..."
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
