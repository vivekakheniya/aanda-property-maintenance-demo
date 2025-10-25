import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 text-center mb-12">
          Get in touch today to discuss your property maintenance needs.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-gray-800">
              <MapPin size={20} className="text-orange-500" />
              <span>16 Goodmead Road, Orpington, BR6 0HX</span>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <Phone size={20} className="text-orange-500" />
              <a
                href="tel:07432702991"
                className="hover:text-orange-500 transition"
              >
                07432 702991
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <Mail size={20} className="text-orange-500" />
              <a
                href="mailto:yogesh2033@yahoo.co.in"
                className="hover:text-orange-500 transition"
              >
                yogesh2033@yahoo.co.in
              </a>
            </div>
            {/* Optional: Map */}
            <div className="mt-6 w-full h-64">
              <iframe
                title="Business Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.1484016615836!2d0.10038197611950644!3d51.38195051986067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ac85b0990947%3A0x8c302b4cd7b1b8f8!2s16%20Goodmead%20Rd%2C%20Orpington%20BR6%200HX%2C%20UK!5e0!3m2!1sen!2sin!4v1761404096161!5m2!1sen!2sin" 
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
