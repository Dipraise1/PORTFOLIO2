import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const testimonial = {
  name: 'Sarah Chen',
  role: 'CEO',
  company: 'DeFi Innovations',
  location: 'San Francisco, CA',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  rating: 5,
  text: 'Divine delivered an exceptional DeFi protocol that exceeded our expectations. His expertise in smart contracts and blockchain development is unmatched. The project was completed on time and within budget.',
  project: 'DeFi Yield Optimization Protocol',
  duration: '3 months',
  value: '$2.5M TVL',
};

const Testimonials = () => {
  const { t } = useTranslation();

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

        {/* ─── Testimonial ─── */}
        <motion.div
          className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Client info */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-5 lg:gap-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0"
              style={{ border: '1.5px solid rgba(99,102,241,0.4)' }}
            />
            <div>
              <h3 className="font-display font-semibold text-[var(--color-text)] text-sm sm:text-base">
                {testimonial.name}
              </h3>
              <p className="font-ibm text-[var(--color-primary-lighter)] text-[11px] tracking-wide">
                {testimonial.role}, {testimonial.company}
              </p>
              <p className="font-ibm text-[var(--color-text-muted)] text-[10px] mt-0.5">
                {testimonial.location}
              </p>
              <div className="flex items-center gap-0.5 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="relative">
            {/* Large decorative quote mark */}
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
              {testimonial.text}
            </blockquote>

            {/* Project meta */}
            <div className="flex flex-wrap gap-3">
              <div
                className="px-3 py-2 rounded-lg"
                style={{ background: 'rgba(22,27,34,0.9)', border: '1px solid rgba(55,65,81,0.35)' }}
              >
                <p className="font-ibm text-[var(--color-text-muted)] text-[8px] uppercase tracking-widest mb-0.5">
                  {t('testimonials.project')}
                </p>
                <p className="font-ibm text-[var(--color-text-secondary)] text-[11px]">{testimonial.project}</p>
              </div>
              <div
                className="px-3 py-2 rounded-lg"
                style={{ background: 'rgba(22,27,34,0.9)', border: '1px solid rgba(55,65,81,0.35)' }}
              >
                <p className="font-ibm text-[var(--color-text-muted)] text-[8px] uppercase tracking-widest mb-0.5">
                  {t('testimonials.duration')}
                </p>
                <p className="font-ibm text-[var(--color-text-secondary)] text-[11px]">{testimonial.duration}</p>
              </div>
              <div
                className="px-3 py-2 rounded-lg"
                style={{ background: 'rgba(22,27,34,0.9)', border: '1px solid rgba(34,211,238,0.2)' }}
              >
                <p className="font-ibm text-[var(--color-text-muted)] text-[8px] uppercase tracking-widest mb-0.5">
                  {t('testimonials.result')}
                </p>
                <p className="font-ibm text-[var(--color-cyan)] text-[11px] font-medium">{testimonial.value}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
