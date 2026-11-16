/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Mail, Phone, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { XIcon, TelegramIcon } from './icons';
import { SITE, SERVICES } from '../data/site';

const EMAILJS_SERVICE_ID = 'service_jtg4wjv';
const EMAILJS_TEMPLATE_ID = 'template_g8n4w3i';
const EMAILJS_PUBLIC_KEY = 'GFD8YNq6OArj-6DFc';
const MAX = 2000;

const CHANNELS = [
  { icon: <Phone size={16} />, label: 'WhatsApp', value: SITE.whatsapp, href: SITE.whatsappHref },
  { icon: <TelegramIcon size={16} />, label: 'Telegram', value: SITE.telegram, href: SITE.telegramHref },
  { icon: <Mail size={16} />, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: <XIcon size={15} />, label: 'X', value: SITE.x, href: SITE.xHref },
];

const Field = ({ id, label, error, children }) => (
  <div>
    <label htmlFor={id} className="label mb-1.5 block">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[12.5px] text-red-400">
        <AlertCircle size={13} aria-hidden="true" /> {error}
      </p>
    )}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Enter your name.';
    if (!form.email.trim()) e.email = 'Enter your email address.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'That email address does not look right.';
    if (form.message.trim().length < 10) e.message = 'Add a few details about the project (10 characters or more).';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setStatus(null);
    try {
      // Loaded on demand so the email client is not part of the first page load.
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    className: 'field',
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="section-title">Start a project</h2>
        <p className="section-lede">
          Tell me what you are building, the deadline and the budget range. I reply within 24
          hours.
        </p>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <ul className="border-t border-[var(--line)]">
              {CHANNELS.map((ch) => (
                <li key={ch.label} className="border-b border-[var(--line-soft)]">
                  <a
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-3.5"
                  >
                    <span className="text-[var(--muted)] transition-colors group-hover:text-[var(--accent-text)]">
                      {ch.icon}
                    </span>
                    <span className="w-20 shrink-0 text-[13px] text-[var(--muted)]">{ch.label}</span>
                    <span className="min-w-0 truncate text-[14px] text-[var(--text)] group-hover:underline group-hover:underline-offset-4">
                      {ch.value}
                    </span>
                  </a>
                </li>
              ))}
              <li className="border-b border-[var(--line-soft)]">
                <Link to="/live-chat" className="group flex items-center gap-4 py-3.5">
                  <span className="text-[var(--muted)] transition-colors group-hover:text-[var(--accent-text)]">
                    <MessageSquare size={16} />
                  </span>
                  <span className="w-20 shrink-0 text-[13px] text-[var(--muted)]">Live chat</span>
                  <span className="text-[14px] text-[var(--text)] group-hover:underline group-hover:underline-offset-4">
                    Open the chat page
                  </span>
                </Link>
              </li>
            </ul>

            <h3 className="mt-10 font-display text-lg font-semibold text-[var(--text)]">What I take on</h3>
            <p className="mt-2 max-w-[52ch] text-[13.5px] text-[var(--text-2)]">{SERVICES.join(', ')}.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <Field id="contact-name" label="Your name" error={errors.name}>
              <input type="text" autoComplete="name" {...fieldProps('name')} />
            </Field>
            <Field id="contact-email" label="Email address" error={errors.email}>
              <input type="email" autoComplete="email" {...fieldProps('email')} />
            </Field>
            <Field id="contact-message" label="Project details" error={errors.message}>
              <textarea rows={6} maxLength={MAX} {...fieldProps('message')} className="field resize-y" />
            </Field>

            <button type="submit" disabled={sending} className="btn-primary w-full !py-3 disabled:opacity-60">
              {sending ? (
                <>
                  <Loader2 size={15} className="animate-spin" /> Sending
                </>
              ) : (
                <>
                  <Send size={15} /> Send message
                </>
              )}
            </button>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="flex items-center gap-2 text-[13.5px] text-emerald-300">
                  <CheckCircle size={15} aria-hidden="true" /> Message sent. I will reply by email.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-start gap-2 text-[13.5px] text-red-300">
                  <AlertCircle size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    The message did not send. Try again, or email{' '}
                    <a className="link" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>
                    .
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
