import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, ArrowUp, MessageCircle, ExternalLink } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const XIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  const [year] = useState(new Date().getFullYear());

  const socials = [
    { icon: <Github size={16} />,      href: 'https://github.com/Dipraise1',                              label: 'GitHub' },
    { icon: <XIcon />,                 href: 'https://x.com/divinecodes11?s=21',                          label: 'X' },
    { icon: <TikTokIcon />,            href: 'https://www.tiktok.com/@divin3.eth?_r=1&_t=ZS-95Sk7mHgmzE', label: 'TikTok' },
    { icon: <MessageCircle size={16}/>,href: 'https://t.me/jokersrequired',                               label: 'Telegram' },
    { icon: <Mail size={16} />,        href: 'mailto:raphealdivine2@gmail.com',                           label: 'Email' },
  ];

  const navLinks = [
    { name: t('footer.portfolio'), href: 'https://divinebuilds.online', external: true },
    { name: t('footer.projects'),  href: '#projects' },
    { name: t('footer.contact'),   href: '#contact' },
    { name: t('footer.privacyPolicy'), href: '#' },
    { name: t('footer.termsOfService'), href: '#' },
  ];

  return (
    <footer
      className="relative mt-8 sm:mt-16 pt-8 sm:pt-12 pb-6 sm:pb-8 overflow-hidden"
      style={{ borderTop: '1px solid rgba(55,65,81,0.3)' }}
    >
      <div className="container-custom relative z-10">

        {/* ─── Main row ─── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xs"
          >
            <h3
              className="font-display font-bold heading-gradient mb-2 inline-block"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)' }}
            >
              PRAISE.ETH
            </h3>
            <p className="font-ibm text-[var(--color-text-muted)] text-[11px] leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-1 mt-4">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary-lighter)] hover:bg-[rgba(99,102,241,0.07)] transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-x-8 gap-y-2"
          >
            {navLinks.map(({ name, href, external }) => (
              <a
                key={name}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="font-ibm text-[var(--color-text-muted)] text-[11px] hover:text-[var(--color-primary-lighter)] transition-colors flex items-center gap-1"
              >
                {name}
                {external && <ExternalLink size={10} className="opacity-50" />}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5"
          style={{ borderTop: '1px solid rgba(55,65,81,0.2)' }}
        >
          <p className="font-ibm text-[var(--color-text-muted)] text-[10px] tracking-wide">
            © {year} Divine Rapheal · {t('footer.allRightsReserved')}
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary-lighter)] hover:bg-[rgba(99,102,241,0.07)] transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
