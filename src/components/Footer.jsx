import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail, Heart, Code, ArrowUp, MessageCircle, ExternalLink } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const [year] = useState(new Date().getFullYear());

  const socialLinks = [
    { icon: Github, href: "https://github.com/Dipraise1", label: "GitHub", color: "hover:text-white" },
    { icon: Twitter, href: "https://x.com/divinecodes11?s=21", label: "Twitter", color: "hover:text-blue-400" },
    { icon: MessageCircle, href: "https://t.me/jokersrequired", label: "Telegram", color: "hover:text-blue-500" },
    { icon: Mail, href: "mailto:raphealdivine2@gmail.com", label: "Email", color: "hover:text-red-400" }
  ];

  const links = [
    {
      title: t('footer.resources'), items: [
        { name: t('footer.portfolio'), href: 'https://deesporfolio.vercel.app', external: true },
        { name: t('footer.projects'), href: '#projects', external: false },
        { name: t('footer.contact'), href: '#contact', external: false }
      ]
    },
    {
      title: t('footer.legal'), items: [
        { name: t('footer.privacyPolicy'), href: '#', external: false },
        { name: t('footer.termsOfService'), href: '#', external: false }
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative mt-20 pt-20 pb-10 border-t border-[var(--color-border)] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold heading-gradient mb-4 inline-block">PRAISE.ETH</h3>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-md">
                {t('footer.description')}
              </p>
            </motion.div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] text-[var(--color-text-muted)] ${color} transition-all duration-300 hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:shadow-[var(--color-primary)]/10`}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links section */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-12">
              {links.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                >
                  <h4 className="text-lg font-bold text-[var(--color-text)] mb-6 relative inline-block">
                    {category.title}
                    <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[var(--color-primary)] rounded-full"></span>
                  </h4>
                  <ul className="space-y-4">
                    {category.items.map(item => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="group flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300 w-fit"
                        >
                          <span className="relative">
                            {item.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-px bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
                          </span>
                          {item.external && <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent my-8 opacity-50"></div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          >
            <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <Code size={16} className="text-[var(--color-primary)]" />
              <span>{t('footer.madeWith')}</span>
              <Heart className="text-red-500 fill-red-500/20 animate-pulse" size={16} />
              <span>{t('footer.byDivine')}</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 bg-[var(--color-text-muted)] rounded-full opacity-50"></div>
            <p className="text-[var(--color-text-muted)] text-sm">
              &copy; {year} {t('footer.allRightsReserved')}
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="group p-3 rounded-full bg-[var(--color-secondary-lighter)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300 shadow-lg hover:shadow-[var(--color-primary)]/20"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;