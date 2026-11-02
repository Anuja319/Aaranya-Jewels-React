import React, { useState } from "react";
import axios from "axios";

function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // State for loading and response messages
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponseMsg("");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
      );

      if (response.status === 201) {
        setResponseMsg("Your message has been submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      setResponseMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Contact Header */}
      <section className="container-fluid bg-light py-5">
        <div className="container text-center">
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
            ✨ Get In Touch
          </span>

          <h1 className="display-4 fw-bold mt-3">
            Contact <span className="text-warning">Us</span>
          </h1>

          <p className="lead text-secondary mt-3">
            Have questions about our jewellery? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container py-5">
        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4">Let's Connect!</h2>

            <p className="text-secondary">
              Whether you are looking for traditional jewellery, bridal
              collections or modern designs, our team is here to help you.
            </p>

            <div className="mt-4">
              <h5 className="fw-bold">📍 Our Location</h5>
              <p className="text-secondary">Pune, Maharashtra, India</p>

              <h5 className="fw-bold mt-4">📧 Email Us</h5>
              <p className="text-secondary">aaranyajewels@example.com</p>

              <h5 className="fw-bold mt-4">📞 Call Us</h5>
              <p className="text-secondary">+91 9876543210</p>

              <h5 className="fw-bold mt-4">🕒 Working Hours</h5>
              <p className="text-secondary">Monday - Saturday: 10 AM - 8 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow p-4">
              <h3 className="fw-bold mb-4">Send Us a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name</label>

                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Subject</label>

                    <select
                      className="form-select"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="Product Enquiry">Product Enquiry</option>
                      <option value="Order Enquiry">Order Enquiry</option>
                      <option value="Price Enquiry">Price Enquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">
                      Your Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg rounded-pill px-5 w-100"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>

              {/* Response Message */}
              {responseMsg && (
                <div className="alert alert-info mt-3">{responseMsg}</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
