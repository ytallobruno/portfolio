import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
    // @TODO
    console.log(formData);
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-slate-800 to-black py-20"
    >
      <h2 className="mb-10 text-center text-4xl font-bold text-blue-300">
        Contact Me
      </h2>
      <motion.form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-blue-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded bg-gray-200 px-3 py-2 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-blue-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded bg-gray-200 px-3 py-2 text-gray-700"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="mb-2 block text-blue-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded bg-gray-200 px-3 py-2 text-gray-700"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-500 py-2 px-4 text-white transition duration-300 hover:bg-blue-600"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
