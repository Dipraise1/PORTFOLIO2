import { motion } from 'framer-motion';
import { Star, Quote, Building, Globe } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const testimonial = {
  id: 1,
  name: "Sarah Chen",
  role: "CEO",
  company: "DeFi Innovations",
  location: "San Francisco, CA",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  rating: 5,
  text: "Divine delivered an exceptional DeFi protocol that exceeded our expectations. His expertise in smart contracts and blockchain development is unmatched. The project was completed on time and within budget.",
  project: "DeFi Yield Optimization Protocol",
  duration: "3 months",
  value: "$2.5M TVL"
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const starVariant = {
  hidden: { opacity: 0, scale: 0, rotate: -30 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 15 } }
};

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding relative" id="testimonials">
      <div className="container-custom">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-4">
            <Quote size={18} className="text-[var(--color-primary)]" />
            <span className="text-sm font-medium">{t('testimonials.clientTestimonials')}</span>
          </div>

          <h2 className="section-heading mb-4 sm:mb-6">
            <span className="heading-gradient">{t('testimonials.whatClientsSay')}</span>
          </h2>

          <p className="text-[var(--color-text-secondary)] text-sm sm:text-base max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="card p-6 sm:p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
          >
            {/* Animated quote decoration */}
            <motion.div
              className="absolute top-6 right-6 text-[var(--color-primary)]/20"
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Quote size={48} />
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Client Info */}
              <div className="lg:col-span-1">
                <motion.div
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[var(--color-primary)]"
                    variants={fadeUp}
                    whileHover={{ scale: 1.08, borderColor: 'var(--color-accent)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <motion.h3 variants={fadeUp} className="text-xl font-bold text-[var(--color-text)] mb-1">
                    {testimonial.name}
                  </motion.h3>
                  <motion.p variants={fadeUp} className="text-[var(--color-primary)] font-semibold mb-1">
                    {testimonial.role}
                  </motion.p>
                  <motion.div variants={fadeUp} className="flex items-center gap-1 text-[var(--color-text-secondary)] mb-2">
                    <Building size={14} />
                    <span className="text-sm">{testimonial.company}</span>
                  </motion.div>
                  <motion.div variants={fadeUp} className="flex items-center gap-1 text-[var(--color-text-secondary)] mb-4">
                    <Globe size={14} />
                    <span className="text-sm">{testimonial.location}</span>
                  </motion.div>

                  {/* Staggered stars */}
                  <motion.div
                    className="flex items-center gap-1 mb-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div key={i} variants={starVariant}>
                        <Star size={16} className="text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Project Stats */}
                  <motion.div variants={fadeUp} className="space-y-2 text-sm w-full">
                    <div className="bg-[var(--color-secondary-darker)]/50 rounded-lg p-3">
                      <div className="text-[var(--color-text-secondary)]">{t('testimonials.project')}</div>
                      <div className="text-[var(--color-text)] font-semibold">{testimonial.project}</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-[var(--color-secondary-darker)]/50 rounded-lg p-2 flex-1">
                        <div className="text-[var(--color-text-secondary)] text-xs">{t('testimonials.duration')}</div>
                        <div className="text-[var(--color-text)] font-semibold text-sm">{testimonial.duration}</div>
                      </div>
                      <div className="bg-[var(--color-secondary-darker)]/50 rounded-lg p-2 flex-1">
                        <div className="text-[var(--color-text-secondary)] text-xs">{t('testimonials.result')}</div>
                        <div className="text-[var(--color-primary)] font-semibold text-sm">{testimonial.value}</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2 flex items-center">
                <motion.blockquote
                  className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed italic"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  &quot;{testimonial.text}&quot;
                </motion.blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
