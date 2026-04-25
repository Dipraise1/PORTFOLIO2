import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import useTranslation from '../hooks/useTranslation';

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SERVICES = [
  'services.smartContractDevelopment',
  'services.defiProtocolIntegration',
  'services.nftMarketplaceDevelopment',
  'services.aiAgentDevelopment',
  'services.telegramBotScripts',
  'services.mobileAppDevelopment',
];

const itemV = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const containerV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const CHANNELS = [
  {
    icon: <Phone size={16} />,
    label: 'Telegram',
    value: '@jokersrequired',
    href: 'https://t.me/jokersrequired',
    accentColor: 'rgba(34,173,217,0.6)',
  },
  {
    icon: <Mail size={16} />,
    label: 'Email',
    value: 'raphealdivine2@gmail.com',
    href: 'mailto:raphealdivine2@gmail.com',
    accentColor: 'rgba(249,115,22,0.5)',
  },
  {
    icon: <XIcon size={16} />,
    label: 'X (Twitter)',
    value: '@divinecodes11',
    href: 'https://x.com/divinecodes11?s=21',
    accentColor: 'rgba(255,255,255,0.3)',
  },
  {
    icon: <MessageSquare size={16} />,
    label: 'Live Chat',
    value: 'Chat now →',
    onClick: true,
    accentColor: 'rgba(16,185,129,0.5)',
  },
];

const Field = ({ label, error, children }) => (
  <div className="space-y-1.5">
    <label className="font-ibm text-[var(--color-text-muted)] text-[10px] uppercase tracking-widest block">
      {label}
    </label>
    {children}
    {error && (
      <p className="font-ibm text-red-400 text-[10px] flex items-center gap-1">
        <AlertCircle size={11} /> {error}
      </p>
    )}
  </div>
);

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // eslint-disable-next-line no-unused-vars
  const EMAILJS_SERVICE_ID = 'service_portfolio';
  // eslint-disable-next-line no-unused-vars
  const EMAILJS_TEMPLATE_ID = 'template_contact';
  // eslint-disable-next-line no-unused-vars
  const EMAILJS_PUBLIC_KEY = 'your_public_key';

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t('contact.validation.nameRequired');
    if (!form.email.trim()) e.email = t('contact.validation.emailRequired');
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = t('contact.validation.emailInvalid');
    if (!form.message.trim()) e.message = t('contact.validation.messageRequired');
    else if (form.message.trim().length < 10) e.message = t('contact.validation.messageMinLength');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await new Promise(r => setTimeout(r, 2000));
      setSubmitStatus('success');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const inputBase = {
    background: 'rgba(22,27,34,0.8)',
    border: '1px solid rgba(55,65,81,0.5)',
    color: 'var(--color-text)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      <div className="container-custom relative z-10">

        {/* ─── Header ─── */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-ibm text-[var(--color-cyan)] text-[10px] tracking-[0.25em] uppercase mb-2 opacity-70">
            // {t('contact.letsConnect')}
          </p>
          <h2
            className="font-display font-bold heading-gradient leading-none"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            {t('contact.getInTouch')}
          </h2>
          <div className="mt-5 h-px" style={{ background: 'linear-gradient(to right, rgba(99,102,241,0.4), transparent)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">

          {/* ─── Left: info ─── */}
          <motion.div
            variants={containerV} initial="hidden"
            whileInView="visible" viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p variants={itemV} className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-sm">
              {t('contact.description')}
            </motion.p>

            {/* Channels */}
            <motion.div variants={itemV} className="space-y-2">
              <p className="font-ibm text-[var(--color-text-muted)] text-[9px] uppercase tracking-[0.25em] mb-3">
                {t('contact.quickConnect')}
              </p>
              {CHANNELS.map((ch, i) =>
                ch.onClick ? (
                  <Link key={i} to="/live-chat"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all duration-200"
                    style={{ background: 'rgba(22,27,34,0.6)', border: '1px solid rgba(55,65,81,0.35)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = ch.accentColor}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(55,65,81,0.35)'}
                  >
                    <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">{ch.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-ibm text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] block">{ch.label}</span>
                      <span className="font-ibm text-[11px] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors">{ch.value}</span>
                    </div>
                  </Link>
                ) : (
                  <a key={i} href={ch.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all duration-200"
                    style={{ background: 'rgba(22,27,34,0.6)', border: '1px solid rgba(55,65,81,0.35)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = ch.accentColor}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(55,65,81,0.35)'}
                  >
                    <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors">{ch.icon}</span>
                    <div className="flex-1 min-w-0">
                      <span className="font-ibm text-[9px] uppercase tracking-widest text-[var(--color-text-muted)] block">{ch.label}</span>
                      <span className="font-ibm text-[11px] text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors truncate block">{ch.value}</span>
                    </div>
                  </a>
                )
              )}
            </motion.div>

            {/* Services */}
            <motion.div variants={itemV}>
              <p className="font-ibm text-[var(--color-text-muted)] text-[9px] uppercase tracking-[0.25em] mb-3">
                {t('contact.whatICanHelpWith')}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SERVICES.map((key, i) => (
                  <span
                    key={i}
                    className="font-ibm text-[9px] uppercase tracking-wider px-2 py-1 rounded cursor-default"
                    style={{
                      background: 'rgba(99,102,241,0.07)',
                      border: '1px solid rgba(99,102,241,0.18)',
                      color: 'var(--color-primary-lighter)',
                    }}
                  >
                    {t(key)}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right: form ─── */}
          <motion.div
            variants={containerV} initial="hidden"
            whileInView="visible" viewport={{ once: true }}
          >
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 px-4 py-3 rounded-lg flex items-center gap-2 font-ibm text-sm"
                style={submitStatus === 'success'
                  ? { background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', color: '#6ee7b7' }
                  : { background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', color: '#fca5a5' }
                }
              >
                {submitStatus === 'success'
                  ? <><CheckCircle size={15} /> {t('contact.successMessage')}</>
                  : <><AlertCircle size={15} /> {t('contact.errorMessage')}</>
                }
              </motion.div>
            )}

            <motion.form onSubmit={handleSubmit} className="space-y-5" variants={containerV}>
              <motion.div variants={itemV}>
                <Field label={t('contact.form.fullName')} error={errors.name}>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    className="w-full rounded-lg px-3.5 py-3 text-sm font-ibm"
                    style={{ ...inputBase, borderColor: errors.name ? 'rgba(239,68,68,0.5)' : undefined }}
                    onFocus={e => e.target.style.borderColor = errors.name ? 'rgba(239,68,68,0.5)' : 'rgba(99,102,241,0.5)'}
                    onBlur={e => e.target.style.borderColor = errors.name ? 'rgba(239,68,68,0.5)' : 'rgba(55,65,81,0.5)'}
                  />
                </Field>
              </motion.div>

              <motion.div variants={itemV}>
                <Field label={t('contact.form.emailAddress')} error={errors.email}>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    className="w-full rounded-lg px-3.5 py-3 text-sm font-ibm"
                    style={{ ...inputBase, borderColor: errors.email ? 'rgba(239,68,68,0.5)' : undefined }}
                    onFocus={e => e.target.style.borderColor = errors.email ? 'rgba(239,68,68,0.5)' : 'rgba(99,102,241,0.5)'}
                    onBlur={e => e.target.style.borderColor = errors.email ? 'rgba(239,68,68,0.5)' : 'rgba(55,65,81,0.5)'}
                  />
                </Field>
              </motion.div>

              <motion.div variants={itemV}>
                <Field label={t('contact.form.projectDetails')} error={errors.message}>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={5}
                    className="w-full rounded-lg px-3.5 py-3 text-sm font-ibm resize-vertical"
                    style={{ ...inputBase, borderColor: errors.message ? 'rgba(239,68,68,0.5)' : undefined }}
                    onFocus={e => e.target.style.borderColor = errors.message ? 'rgba(239,68,68,0.5)' : 'rgba(99,102,241,0.5)'}
                    onBlur={e => e.target.style.borderColor = errors.message ? 'rgba(239,68,68,0.5)' : 'rgba(55,65,81,0.5)'}
                  />
                  <p className={`font-ibm text-[9px] text-right mt-1 ${form.message.length > 450 ? 'text-orange-400' : 'text-[var(--color-text-muted)]'}`}>
                    {form.message.length}/500
                  </p>
                </Field>
              </motion.div>

              <motion.div variants={itemV} className="pt-1">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 py-3 relative overflow-hidden group"
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  {isSubmitting
                    ? <><Loader2 size={15} className="animate-spin" /> {t('contact.form.sending')}</>
                    : <><Send size={15} className="group-hover:translate-x-0.5 transition-transform" /> {t('contact.form.sendMessage')}</>
                  }
                </motion.button>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span className="font-ibm text-[var(--color-text-muted)] text-[10px]">{t('contact.typicallyRespond')}</span>
                </div>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
