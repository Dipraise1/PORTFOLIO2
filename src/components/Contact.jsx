import React, { useState } from 'react';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending email
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form
      setFormState({ name: '', email: '', message: '' });
      
      // Email content that would be sent
      const emailContent = {
        to: 'raphealdivine2@gmail.com',
        subject: `New Contact Form Submission from ${formState.name}`,
        body: `
          Name: ${formState.name}
          Email: ${formState.email}
          Message: ${formState.message}
        `
      };
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-brown-dark to-brown-medium p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-brown-medium/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-4xl font-bold text-brown-lightest mb-8 text-center">
            Let's Connect! 🎮
          </h2>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://t.me/divinecodes11" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transform hover:scale-110 transition-transform duration-300">
              <Phone size={20} /> Telegram
            </a>
            <a href="https://x.com/divine_js2" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transform hover:scale-110 transition-transform duration-300">
              <MessageSquare size={20} /> Twitter/X
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <label className="block text-brown-lightest mb-2 text-lg">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-brown-light/20 border-2 border-brown-light/30 rounded-lg p-3 text-brown-lightest focus:ring-2 focus:ring-brown-lighter outline-none transition-all duration-300"
                placeholder="Enter your name..."
              />
            </div>

            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <label className="block text-brown-lightest mb-2 text-lg">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-brown-light/20 border-2 border-brown-light/30 rounded-lg p-3 text-brown-lightest focus:ring-2 focus:ring-brown-lighter outline-none transition-all duration-300"
                placeholder="Enter your email..."
              />
            </div>

            <div className="transform hover:scale-[1.01] transition-transform duration-300">
              <label className="block text-brown-lightest mb-2 text-lg">
                Your Message
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-brown-light/20 border-2 border-brown-light/30 rounded-lg p-3 text-brown-lightest focus:ring-2 focus:ring-brown-lighter outline-none transition-all duration-300"
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-brown-lighter hover:bg-brown-lightest text-brown-dark font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-brown-dark"></div>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Custom Alert Component */}
          {showSuccess && (
            <div className="mt-4 bg-green-500/20 border border-green-500 text-green-100 px-4 py-3 rounded relative animate-fade-in">
              <p className="flex items-center gap-2">
                <span className="text-xl">✨</span>
                Message sent successfully! We'll get back to you soon. 🎮
              </p>
            </div>
          )}

          <div className="mt-8 text-center text-brown-lightest opacity-80">
            <p>Get ready for an amazing collaboration! 🚀</p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <Mail className="animate-bounce" size={20} />
              <span>raphealdivine2@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;