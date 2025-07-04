import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare, Sparkles, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errors, setErrors] = useState({});
  
  // EmailJS configuration (you'll need to set these up in EmailJS)
  const EMAILJS_SERVICE_ID = 'service_portfolio'; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = 'template_contact'; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your public key
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // For now, we'll use a fallback method since EmailJS needs configuration
      // You can replace this with actual EmailJS call once configured
      
      // Simulate API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // This is the actual EmailJS call (uncomment when configured):
      /*
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_email: 'raphealdivine2@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      */
      
      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setErrors({});
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 relative" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20 blur-3xl"
            style={{
              width: `${300 + Math.random() * 400}px`,
              height: `${300 + Math.random() * 400}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 
                ? `radial-gradient(circle at center, var(--color-primary)/30, transparent 70%)`
                : `radial-gradient(circle at center, var(--color-accent)/20, transparent 70%)`,
            }}
            animate={{
              x: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
              y: [Math.random() * 30, Math.random() * -30, Math.random() * 30],
            }}
            transition={{
              repeat: Infinity,
              duration: 20 + Math.random() * 10,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-4">
            <Mail size={18} className="text-[var(--color-primary)]" />
            <span className="text-sm font-medium">Contact Me</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="heading-gradient">Let&apos;s Connect</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="card p-8 md:p-10 backdrop-blur-md"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Success/Error Messages */}
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle size={20} />
                    <span>Failed to send message. Please try again or contact me directly.</span>
                  </>
                )}
              </motion.div>
            )}

            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
              variants={itemVariants}
            >
              <motion.a 
                href="https://t.me/divinecodes11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} /> Telegram
              </motion.a>
              <motion.a 
                href="https://x.com/divine_js2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#111] to-[#333] text-white px-5 py-2.5 rounded-lg shadow-lg shadow-gray-800/20 hover:shadow-gray-800/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare size={18} /> Twitter/X
              </motion.a>
              <motion.a 
                href="mailto:raphealdivine2@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-darker)] text-white px-5 py-2.5 rounded-lg shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-[var(--color-primary)]/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} /> Email Me
              </motion.a>
            </motion.div>

            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <label className="block text-[var(--color-text)] mb-2 text-lg font-medium">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={`w-full bg-[var(--color-secondary-darker)]/50 border rounded-lg p-3.5 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all duration-300 ${
                    errors.name ? 'border-red-500' : 'border-[var(--color-border)]'
                  }`}
                  placeholder="Enter your name..."
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-[var(--color-text)] mb-2 text-lg font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full bg-[var(--color-secondary-darker)]/50 border rounded-lg p-3.5 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-500' : 'border-[var(--color-border)]'
                  }`}
                  placeholder="Enter your email..."
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-[var(--color-text)] mb-2 text-lg font-medium">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-[var(--color-secondary-darker)]/50 border rounded-lg p-3.5 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all duration-300 resize-vertical ${
                    errors.message ? 'border-red-500' : 'border-[var(--color-border)]'
                  }`}
                  placeholder="What's on your mind? Tell me about your project, ideas, or just say hello!"
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
                <p className="mt-1 text-[var(--color-text-secondary)] text-sm">
                  {formState.message.length}/500 characters
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary py-3.5 text-lg flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>

            {/* Contact Info */}
            <motion.div 
              className="mt-8 pt-8 border-t border-[var(--color-border)] text-center"
              variants={itemVariants}
            >
              <p className="text-[var(--color-text-secondary)] mb-4">
                Prefer direct contact? You can also reach me at:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a 
                  href="mailto:raphealdivine2@gmail.com"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-lighter)] transition-colors"
                >
                  raphealdivine2@gmail.com
                </a>
                <span className="text-[var(--color-text-secondary)]">•</span>
                <a 
                  href="https://t.me/divinecodes11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:text-[var(--color-primary-lighter)] transition-colors"
                >
                  @divinecodes11
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;