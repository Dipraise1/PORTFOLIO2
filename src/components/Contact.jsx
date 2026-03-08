import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare, CheckCircle, AlertCircle, Loader2, User, Heart, Sparkles } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import emailjs from '@emailjs/browser';
import useTranslation from '../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  // EmailJS configuration
  // eslint-disable-next-line no-unused-vars
  const EMAILJS_SERVICE_ID = 'service_portfolio';
  // eslint-disable-next-line no-unused-vars
  const EMAILJS_TEMPLATE_ID = 'template_contact';
  // eslint-disable-next-line no-unused-vars
  const EMAILJS_PUBLIC_KEY = 'your_public_key';

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = t('contact.validation.nameRequired');
    }

    if (!formState.email.trim()) {
      newErrors.email = t('contact.validation.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = t('contact.validation.emailInvalid');
    }

    if (!formState.message.trim()) {
      newErrors.message = t('contact.validation.messageRequired');
    } else if (formState.message.trim().length < 10) {
      newErrors.message = t('contact.validation.messageMinLength');
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
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setErrors({});

      setTimeout(() => setSubmitStatus(null), 5000);

    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
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

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

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
    <section className="section-padding relative overflow-hidden" id="contact">

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-6 backdrop-blur-md">
            <Heart size={18} className="text-[var(--color-primary)] fill-[var(--color-primary)]/20" />
            <span className="text-sm font-medium">{t('contact.letsConnect')}</span>
          </div>

          <h2 className="section-heading mb-4 sm:mb-6">
            <span className="heading-gradient">{t('contact.getInTouch')}</span>
          </h2>

          <p className="text-[var(--color-text-secondary)] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Contact Info */}
            <motion.div
              className="space-y-6 sm:space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="relative">
                <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                  <User className="text-[var(--color-primary)]" size={22} />
                  {t('contact.startConversation')}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed relative z-10">
                  {t('contact.conversationText')}
                </p>
                {/* Decorative line */}
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-primary)] to-transparent opacity-30 rounded-full" />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <h4 className="text-xl font-semibold text-[var(--color-text)] flex items-center gap-2">
                  <Sparkles size={20} className="text-[var(--color-accent)]" />
                  {t('contact.quickConnect')}
                </h4>

                <motion.div
                  className="grid gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  {[
                    {
                      icon: <Phone size={24} />,
                      label: "Telegram",
                      value: "@jokersrequired",
                      href: "https://t.me/jokersrequired",
                      color: "text-blue-400",
                      bg: "bg-blue-500/10",
                      border: "border-blue-500/20"
                    },
                    {
                      icon: <Mail size={24} />,
                      label: "Email",
                      value: "raphealdivine2@gmail.com",
                      href: "mailto:raphealdivine2@gmail.com",
                      color: "text-red-400",
                      bg: "bg-red-500/10",
                      border: "border-red-500/20"
                    },
                    {
                      icon: <MessageSquare size={24} />,
                      label: "Twitter/X",
                      value: "@divinecodes11",
                      href: "https://x.com/divinecodes11?s=21",
                      color: "text-white",
                      bg: "bg-gray-500/10",
                      border: "border-gray-500/20"
                    },
                    {
                      icon: <MessageSquare size={24} />,
                      label: "Live Chat",
                      value: "Chat now",
                      href: "#",
                      onClick: true,
                      color: "text-green-400",
                      bg: "bg-green-500/10",
                      border: "border-green-500/20"
                    }
                  ].map((item, index) => (
                    item.onClick ? (
                      <motion.div key={index} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}>
                        <Link
                          to="/live-chat"
                          className={`flex items-center gap-4 p-4 rounded-xl border ${item.border} bg-[var(--color-secondary-lighter)]/30 backdrop-blur-sm transition-all duration-300 group hover:bg-[var(--color-secondary-lighter)] hover:scale-[1.02] w-full text-left`}
                        >
                          <div className={`p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                            {item.icon}
                          </div>
                          <div>
                            <p className="font-semibold text-[var(--color-text)] text-sm sm:text-base">{item.label}</p>
                            <p className="text-sm text-[var(--color-text-secondary)]">{item.value}</p>
                          </div>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                            <Send size={16} className={`rotate-45 ${item.color}`} />
                          </div>
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
                        className={`flex items-center gap-4 p-4 rounded-xl border ${item.border} bg-[var(--color-secondary-lighter)]/30 backdrop-blur-sm transition-all duration-300 group hover:bg-[var(--color-secondary-lighter)] hover:scale-[1.02]`}
                        whileHover={{ x: 4 }}
                      >
                        <div className={`p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-[var(--color-text)] text-sm sm:text-base">{item.label}</p>
                          <p className="text-sm text-[var(--color-text-secondary)]">{item.value}</p>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                          <Send size={16} className={`rotate-45 ${item.color}`} />
                        </div>
                      </motion.a>
                    )
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold text-[var(--color-text)] mb-6">{t('contact.whatICanHelpWith')}</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'services.smartContractDevelopment',
                    'services.defiProtocolIntegration',
                    'services.nftMarketplaceDevelopment',
                    'services.aiAgentDevelopment',
                    'services.telegramBotScripts',
                    'services.mobileAppDevelopment'
                  ].map((serviceKey, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary-lighter)] border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20 transition-colors cursor-default"
                    >
                      {t(serviceKey)}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <div className="card p-5 sm:p-8 md:p-10 backdrop-blur-md border-[var(--color-primary)]/20 h-full">
                {/* Success/Error Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-8 p-4 rounded-xl flex items-center gap-3 ${submitStatus === 'success'
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                      }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        <span className="font-medium">{t('contact.successMessage')}</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={20} />
                        <span className="font-medium">{t('contact.errorMessage')}</span>
                      </>
                    )}
                  </motion.div>
                )}

                <motion.div variants={itemVariants} className="mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">{t('contact.sendMessage')}</h3>
                  <p className="text-[var(--color-text-secondary)]">{t('contact.messageDescription')}</p>
                </motion.div>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants} className="relative group">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formState.name ? '-top-2.5 text-xs bg-[var(--color-secondary-lighter)] px-2 text-[var(--color-primary)]' : 'top-4 text-[var(--color-text-muted)]'
                      }`}>
                      {t('contact.form.fullName')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className={`w-full bg-[var(--color-secondary-darker)]/30 border rounded-xl p-4 text-[var(--color-text)] outline-none transition-all duration-300 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/40'
                        }`}
                    />
                    {errors.name && (
                      <p className="mt-2 text-red-400 text-sm flex items-center gap-1 pl-1">
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formState.email ? '-top-2.5 text-xs bg-[var(--color-secondary-lighter)] px-2 text-[var(--color-primary)]' : 'top-4 text-[var(--color-text-muted)]'
                      }`}>
                      {t('contact.form.emailAddress')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className={`w-full bg-[var(--color-secondary-darker)]/30 border rounded-xl p-4 text-[var(--color-text)] outline-none transition-all duration-300 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/40'
                        }`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-red-400 text-sm flex items-center gap-1 pl-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group">
                    <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formState.message ? '-top-2.5 text-xs bg-[var(--color-secondary-lighter)] px-2 text-[var(--color-primary)]' : 'top-4 text-[var(--color-text-muted)]'
                      }`}>
                      {t('contact.form.projectDetails')}
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full bg-[var(--color-secondary-darker)]/30 border rounded-xl p-4 text-[var(--color-text)] outline-none transition-all duration-300 resize-vertical ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/40'
                        }`}
                    />
                    {errors.message && (
                      <p className="mt-2 text-red-400 text-sm flex items-center gap-1 pl-1">
                        <AlertCircle size={14} />
                        {errors.message}
                      </p>
                    )}
                    <div className="mt-2 flex justify-end">
                      <p className={`text-xs font-medium ${formState.message.length > 450 ? 'text-orange-400' : 'text-[var(--color-text-muted)]'
                        }`}>
                        {formState.message.length}/500
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg relative overflow-hidden group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01]'
                        }`}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          {t('contact.form.sending')}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          {t('contact.form.sendMessage')}
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>

                <motion.div
                  className="mt-8 pt-6 border-t border-[var(--color-border)]"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-center gap-2 text-[var(--color-text-secondary)] text-sm font-medium">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                    </div>
                    <span>{t('contact.typicallyRespond')}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;