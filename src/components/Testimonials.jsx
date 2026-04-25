import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'DeFi Innovations',
    location: 'San Francisco, CA · USA',
    initials: 'SC',
    rating: 5,
    text: 'Divine delivered an exceptional DeFi protocol that exceeded our expectations. His expertise in smart contracts and blockchain development is unmatched. The project was completed on time and within budget.',
    project: 'DeFi Yield Optimization Protocol',
    duration: '3 months',
    value: '$2.5M TVL',
    accent: 'rgba(99,102,241,0.3)',
  },
  {
    name: 'Marcus Williams',
    role: 'CTO',
    company: 'ChainBridge Labs',
    location: 'Toronto · Canada',
    initials: 'MW',
    rating: 5,
    text: 'We needed a cross-chain bridge that could handle high throughput securely. Divine architected and delivered a robust solution with thorough testing and clear documentation. Exactly the calibre of Web3 engineer we were looking for.',
    project: 'Cross-Chain Bridge Protocol',
    duration: '2 months',
    value: '99.8% uptime',
    accent: 'rgba(34,211,238,0.3)',
  },
  {
    name: 'Léa Dubois',
    role: 'Product Lead',
    company: 'Artbloc NFT',
    location: 'Paris · France',
    initials: 'LD',
    rating: 5,
    text: 'Divine built our NFT marketplace from the ground up — smart contracts, IPFS integration, and a clean React frontend. Communication was excellent throughout, and the final product launched ahead of schedule.',
    project: 'NFT Marketplace & Minting Platform',
    duration: '6 weeks',
    value: '1,200+ NFTs minted',
    accent: 'rgba(249,115,22,0.3)',
  },
  {
    name: 'Tyler Pret',
    role: 'CEO',
    company: 'Apeit Wallet',
    location: 'Cape Town · South Africa',
    initials: 'TP',
    rating: 5,
    text: "Divine was part of our core team at Apeit and helped shape the wallet product from early architecture to launch. His ability to move fast across both frontend and smart contract layers while keeping code quality high is rare. Would work with him again without hesitation.",
    project: 'Apeit Wallet — App & Contracts',
    duration: '1 year',
    value: '500+ users',
    accent: 'rgba(16,185,129,0.3)',
  },
  {
    name: 'Mr. Ajayi',
    role: 'Creative Director',
    company: 'Wealth Studios',
    location: 'Abuja · Nigeria',
    initials: 'MA',
    rating: 5,
    text: "We partnered with Divine to build out the Web3 infrastructure behind Wealth Studios — from token integration to our creator dashboard. He understood our local market context and delivered a polished product that stands up to global standards.",
    project: 'Creator Platform & Token Integration',
    duration: '8 weeks',
    value: '500+ creators onboarded',
    accent: 'rgba(245,158,11,0.3)',
  },
];

const Stars = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(count)].map((_, i) => (
      <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
    ))}
  </div>
);

const Initials = ({ text, accent }) => (
  <div
    className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm flex-shrink-0"
    style={{ background: accent.replace('0.3', '0.12'), border: `1px solid ${accent}`, color: '#f9fafb' }}
  >
    {text}
  </div>
);

const itemV = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Testimonials = () => {
  const { t } = useTranslation();
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="section-padding relative" id="testimonials">
      <div className="container-custom">

        {/* ─── Header ─── */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-ibm text-[var(--color-cyan)] text-[10px] tracking-[0.25em] uppercase mb-2 opacity-70">
            // {t('testimonials.clientTestimonials')}
          </p>
          <h2
            className="font-display font-bold heading-gradient leading-none"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
          >
            {t('testimonials.whatClientsSay')}
          </h2>
          <div className="mt-5 h-px" style={{ background: 'linear-gradient(to right, rgba(99,102,241,0.4), transparent)' }} />
        </motion.div>

        {/* ─── Featured testimonial ─── */}
        <motion.div
          className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Client info */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
            <Initials text={featured.initials} accent={featured.accent} />
            <div>
              <h3 className="font-display font-semibold text-[var(--color-text)] text-sm sm:text-base">
                {featured.name}
              </h3>
              <p className="font-ibm text-[var(--color-primary-lighter)] text-[11px] tracking-wide">
                {featured.role}, {featured.company}
              </p>
              <p className="font-ibm text-[var(--color-text-muted)] text-[10px] mt-0.5">
                {featured.location}
              </p>
              <div className="mt-2">
                <Stars count={featured.rating} />
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative">
            <div
              className="font-display font-bold leading-none select-none absolute -top-4 -left-2 opacity-[0.07]"
              style={{ fontSize: 'clamp(6rem, 12vw, 10rem)', color: 'var(--color-primary)' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote
              className="relative font-display text-[var(--color-text-secondary)] leading-relaxed mb-6"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
            >
              {featured.text}
            </blockquote>
            <div className="flex flex-wrap gap-3">
              {[
                { label: t('testimonials.project'),  value: featured.project,  color: undefined },
                { label: t('testimonials.duration'), value: featured.duration, color: undefined },
                { label: t('testimonials.result'),   value: featured.value,    color: 'var(--color-cyan)' },
              ].map(({ label, value, color }) => (
                <div key={label} className="px-3 py-2 rounded-lg"
                  style={{ background: 'rgba(22,27,34,0.9)', border: color ? '1px solid rgba(34,211,238,0.2)' : '1px solid rgba(55,65,81,0.35)' }}>
                  <p className="font-ibm text-[var(--color-text-muted)] text-[8px] uppercase tracking-widest mb-0.5">{label}</p>
                  <p className="font-ibm text-[11px]" style={{ color: color || 'var(--color-text-secondary)' }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── Rest of testimonials ─── */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {rest.map((r) => (
            <motion.div
              key={r.name}
              variants={itemV}
              className="flex flex-col gap-4 p-5 rounded-xl"
              style={{ background: 'rgba(22,27,34,0.6)', border: '1px solid rgba(55,65,81,0.3)' }}
            >
              {/* Header row */}
              <div className="flex items-start gap-3">
                <Initials text={r.initials} accent={r.accent} />
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-[var(--color-text)] text-sm leading-tight">{r.name}</p>
                  <p className="font-ibm text-[10px] tracking-wide truncate" style={{ color: r.accent.replace('0.3', '0.9') }}>
                    {r.role}, {r.company}
                  </p>
                  <p className="font-ibm text-[var(--color-text-muted)] text-[9px] mt-0.5">{r.location}</p>
                </div>
                <Stars count={r.rating} />
              </div>

              {/* Quote */}
              <p className="font-ibm text-[var(--color-text-muted)] text-[11px] leading-relaxed flex-1">
                "{r.text}"
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-2 pt-3" style={{ borderTop: '1px solid rgba(55,65,81,0.25)' }}>
                <span className="font-ibm text-[9px] px-2 py-0.5 rounded"
                  style={{ background: 'rgba(10,15,26,0.8)', border: '1px solid rgba(55,65,81,0.4)', color: 'var(--color-text-muted)' }}>
                  {r.project}
                </span>
                <span className="font-ibm text-[9px] px-2 py-0.5 rounded"
                  style={{ background: r.accent.replace('0.3', '0.08'), border: `1px solid ${r.accent}`, color: r.accent.replace('0.3', '0.9') }}>
                  {r.value}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
