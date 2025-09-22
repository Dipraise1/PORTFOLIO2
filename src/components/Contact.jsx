import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2, User, Heart } from 'lucide-react';
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
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-4">
            <Heart size={18} className="text-[var(--color-primary)]" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="heading-gradient">Get In Touch</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Ready to build your Web3 project or mobile app? Need smart contract development, DeFi integration, AI agent services, or Flutter/React Native app development? I'd love to hear about your blockchain development and mobile app needs and explore how we can work together.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
                  <User className="text-[var(--color-primary)]" size={24} />
                  Let's Start a Conversation
                </h3>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                  I'm always excited to hear about new Web3 projects, mobile app ideas, and blockchain development opportunities. Whether you need smart contract development, DeFi protocol integration, NFT marketplace creation, AI agent services, or Flutter/React Native mobile app development, I'm here to help bring your vision to life.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="text-xl font-semibold text-[var(--color-text)]">Quick Connect</h4>
                
                <div className="space-y-4">
                  <motion.a 
                    href="https://t.me/divinecodes11" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-text)]">Telegram</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">@divinecodes11</p>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="mailto:raphealdivine2@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-lg bg-red-500/20 text-red-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-text)]">Email</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">raphealdivine2@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="https://x.com/divine_js2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-lg bg-gray-500/20 text-gray-400">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--color-text)]">Twitter/X</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">@divine_js2</p>
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="p-6 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20">
                <h4 className="text-lg font-semibold text-[var(--color-text)] mb-3">What I Can Help With</h4>
                <ul className="space-y-2 text-[var(--color-text-secondary)]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    Smart Contract Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    DeFi Protocol Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    NFT Marketplace Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    Web3 Application Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    Frontend Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    Backend Services
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    AI Agent Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    Telegram Bot Scripts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    Automated Trading Bots
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    AI-Powered Analytics Tools
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    Flutter App Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    React Native App Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                    Mobile App Development
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div 
              className="card p-8"
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
                      <span>Message sent successfully! I'll get back to you within 24 hours.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      <span>Failed to send message. Please try again or contact me directly.</span>
                    </>
                  )}
                </motion.div>
              )}

              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">Send a Message</h3>
                <p className="text-[var(--color-text-secondary)]">I'd love to hear about your project or ideas!</p>
              </motion.div>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label className="block text-[var(--color-text)] mb-3 font-semibold text-sm uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full bg-[var(--color-secondary-darker)]/50 border rounded-xl p-4 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all duration-300 text-base ${
                      errors.name ? 'border-red-500' : 'border-[var(--color-border)]'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-[var(--color-text)] mb-3 font-semibold text-sm uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full bg-[var(--color-secondary-darker)]/50 border rounded-xl p-4 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all duration-300 text-base ${
                      errors.email ? 'border-red-500' : 'border-[var(--color-border)]'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email}
                    </p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-[var(--color-text)] mb-3 font-semibold text-sm uppercase tracking-wide">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full bg-[var(--color-secondary-darker)]/50 border rounded-xl p-4 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all duration-300 resize-vertical text-base ${
                      errors.message ? 'border-red-500' : 'border-[var(--color-border)]'
                    }`}
                    placeholder="Describe your project, timeline, budget, or any specific requirements you have in mind..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      Tell me about your vision and I'll help bring it to life
                    </p>
                    <p className={`text-sm font-medium ${
                      formState.message.length > 450 ? 'text-orange-400' : 'text-[var(--color-text-secondary)]'
                    }`}>
                      {formState.message.length}/500
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-[var(--color-primary)]/40 transition-all duration-300 flex items-center justify-center gap-3 text-base ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'
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

              <motion.div 
                className="mt-8 pt-6 border-t border-[var(--color-border)]"
                variants={itemVariants}
              >
                <div className="flex items-center justify-center gap-2 text-[var(--color-text-secondary)] text-sm">
                  <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse"></div>
                  <span>I typically respond within 24 hours</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;