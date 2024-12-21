import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // You can handle form submission (e.g., sending data to backend) here.
  };

  return (
    <div className="bg-[#3b141c] text-white min-h-screen flex items-center justify-center p-8 py-20">
      <div className="max-w-lg w-full bg-[#6f2b3f] p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
          Contact Us at CoffeShop
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xl text-yellow-200" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 bg-[#4e1d2b] border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-xl text-yellow-200" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mt-2 bg-[#4e1d2b] border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-xl text-yellow-200" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 mt-2 bg-[#4e1d2b] border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-yellow-400 text-[#3b141c] font-semibold rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {isSubmitted && (
          <div className="mt-6 text-center text-yellow-300">
            <p>
              Thank you for reaching out to us! We will get back to you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
