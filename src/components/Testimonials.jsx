import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, User, Building, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO",
      company: "DeFi Innovations",
      location: "San Francisco, CA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Divine delivered an exceptional DeFi protocol that exceeded our expectations. His expertise in smart contracts and blockchain development is unmatched. The project was completed on time and within budget.",
      project: "DeFi Yield Optimization Protocol",
      duration: "3 months",
      value: "$2.5M TVL"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "NFT Marketplace Co.",
      location: "New York, NY",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Divine was a game-changer for our NFT marketplace. His React Native mobile app development skills and Web3 integration expertise helped us reach 50K+ users in just 6 months.",
      project: "Cross-Platform NFT Marketplace",
      duration: "6 months",
      value: "50K+ Users"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Product Manager",
      company: "AI Trading Solutions",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Divine's AI agent development transformed our trading operations. The automated trading bot he built increased our portfolio returns by 40% while reducing risk through intelligent market analysis.",
      project: "AI-Powered Trading Bot",
      duration: "4 months",
      value: "+40% Returns"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "Blockchain Ventures",
      location: "Seoul, South Korea",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The Telegram bot scripts Divine developed revolutionized our community management. His automation solutions saved us 20+ hours per week and improved user engagement by 300%.",
      project: "Telegram Bot Automation Suite",
      duration: "2 months",
      value: "300% Engagement"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Head of Development",
      company: "FinTech Solutions",
      location: "Toronto, Canada",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Divine's Flutter app development skills are outstanding. He created a beautiful, performant mobile app that our users love. The cross-platform solution saved us significant development costs.",
      project: "FinTech Mobile App",
      duration: "5 months",
      value: "4.8★ Rating"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-24 relative" id="testimonials">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-4">
            <Quote size={18} className="text-[var(--color-primary)]" />
            <span className="text-sm font-medium">{t('testimonials.clientTestimonials')}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="heading-gradient">{t('testimonials.whatClientsSay')}</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            {t('testimonials.description')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="card p-8 relative overflow-hidden"
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
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
                      src={current.avatar} 
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">{current.name}</h3>
                  <p className="text-[var(--color-primary)] font-semibold mb-1">{current.role}</p>
                  <div className="flex items-center gap-1 text-[var(--color-text-secondary)] mb-2">
                    <Building size={14} />
                    <span className="text-sm">{current.company}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--color-text-secondary)] mb-4">
                    <Globe size={14} />
                    <span className="text-sm">{current.location}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="space-y-2 text-sm">
                    <div className="bg-[var(--color-secondary-darker)]/50 rounded-lg p-3">
                      <div className="text-[var(--color-text-secondary)]">{t('testimonials.project')}</div>
                      <div className="text-[var(--color-text)] font-semibold">{current.project}</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-[var(--color-secondary-darker)]/50 rounded-lg p-2 flex-1">
                        <div className="text-[var(--color-text-secondary)] text-xs">{t('testimonials.duration')}</div>
                        <div className="text-[var(--color-text)] font-semibold text-sm">{current.duration}</div>
                      </div>
                      <div className="bg-[var(--color-secondary-darker)]/50 rounded-lg p-2 flex-1">
                        <div className="text-[var(--color-text-secondary)] text-xs">{t('testimonials.result')}</div>
                        <div className="text-[var(--color-primary)] font-semibold text-sm">{current.value}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <blockquote className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6 italic">
                  "{current.text}"
                </blockquote>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-lg bg-[var(--color-secondary-darker)] hover:bg-[var(--color-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-lg bg-[var(--color-secondary-darker)] hover:bg-[var(--color-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial 
                            ? 'bg-[var(--color-primary)]' 
                            : 'bg-[var(--color-text-secondary)]/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { label: t('testimonials.stats.happyClients'), value: "50+", icon: <User className="w-6 h-6" /> },
              { label: t('testimonials.stats.projectsCompleted'), value: "100+", icon: <Building className="w-6 h-6" /> },
              { label: t('testimonials.stats.successRate'), value: "98%", icon: <Star className="w-6 h-6" /> },
              { label: t('testimonials.stats.countriesServed'), value: "25+", icon: <Globe className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 rounded-lg bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-[var(--color-primary)] mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-[var(--color-text)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
