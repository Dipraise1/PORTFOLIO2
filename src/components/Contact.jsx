import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare, Sparkles } from 'lucide-react';

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
      
      // Here we would normally send the email with the form data
      // For demo purposes, we're just resetting the form
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
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
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--color-secondary-darker)]/50 border border-[var(--color-border)] rounded-lg p-3.5 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Enter your name..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-[var(--color-text)] mb-2 text-lg font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[var(--color-secondary-darker)]/50 border border-[var(--color-border)] rounded-lg p-3.5 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Enter your email..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-[var(--color-text)] mb-2 text-lg font-medium">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-[var(--color-secondary-darker)]/50 border border-[var(--color-border)] rounded-lg p-3.5 text-[var(--color-text)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all duration-300"
                  placeholder="What's on your mind?"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Custom Alert Component */}
            {showSuccess && (
              <motion.div 
                className="mt-6 bg-green-500/20 border border-green-500/50 text-green-200 px-4 py-3 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="flex items-center gap-2">
                  <Sparkles className="text-green-300" size={20} />
                  <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                </p>
              </motion.div>
            )}

            <motion.div 
              className="mt-8 text-center text-[var(--color-text-secondary)]"
              variants={itemVariants}
            >
              <p>Let&apos;s create something amazing together!</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <Mail className="text-[var(--color-primary)]" size={18} />
                <span>raphealdivine2@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;