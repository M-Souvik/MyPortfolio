// components/ContactForm.js
"use client"
import { useState } from 'react';

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(({ ...formData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <>
        <motion.div className="w-full h-fit opacity-65 " animate={{ y: [0, -20, 0] }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}>
      <h1 className="text-white text-center text-6xl font-bold font-abel w-full ">
        WANT TO CONNECT WITH ME...?
      </h1>
      </motion.div>
    <div className="flex justify-center min-h-screen bg-transparent ">
        <div className="w-96">
        <form onSubmit={handleSubmit} className="w-full h-full mt-12">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mt-4">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mt-4">Message:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4">Submit</button>
          </div>
        </form>
        </div>
    </div>
    </>
  );
};

export default Connect;
