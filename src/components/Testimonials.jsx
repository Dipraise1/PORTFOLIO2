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

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding relative" id="testimonials">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-4">
            <Quote size={18} className="text-[var(--color-primary)]" />
            <span className="text-sm font-medium">{t('testimonials.clientTestimonials')}</span>
          </div>
          
          <h2 className="section-heading mb-4 sm:mb-6">
            <span className="heading-gradient">{t('testimonials.whatClientsSay')}</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="card p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote decoration */}
            <div className="absolute top-6 right-6 text-[var(--color-primary)]/20">
              <Quote size={48} />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Client Info */}
              <div className="lg:col-span-1">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <motion.div 
                    className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[var(--color-primary)]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">{testimonial.name}</h3>
                  <p className="text-[var(--color-primary)] font-semibold mb-1">{testimonial.role}</p>
                  <div className="flex items-center gap-1 text-[var(--color-text-secondary)] mb-2">
                    <Building size={14} />
                    <span className="text-sm">{testimonial.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--color-text-secondary)] mb-4">
                    <Globe size={14} />
                    <span className="text-sm">{testimonial.location}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="space-y-2 text-sm">
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
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <blockquote className="text-lg text-[var(--color-text-secondary)] leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
