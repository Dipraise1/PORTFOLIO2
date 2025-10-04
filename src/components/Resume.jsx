import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, User, Briefcase, GraduationCap, Award, Code, Globe, Cpu, Database, FileText, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Resume = () => {
  const { t } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    
    // Simulate PDF generation delay for better UX
    setTimeout(() => {
      // Create a downloadable link for the actual CV
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'Divine_Rapheal_Web3_Developer_CV.pdf';
      link.click();
      setIsGenerating(false);
    }, 1500);
  };

  const experience = [
    {
      title: "Senior Web3 Developer",
      company: "Freelance",
      period: "2022 - Present",
      location: "Remote",
      description: "Building decentralized applications, smart contracts, and blockchain solutions for various clients across DeFi, NFT, and Web3 ecosystems.",
      highlights: [
        "Developed 15+ smart contracts with over $2M+ in total value locked",
        "Built escrow DApps supporting Ethereum and Solana networks",
        "Created yield optimization strategies for DeFi protocols",
        "Implemented automated trading bots with machine learning"
      ]
    },
    {
      title: "Senior App Developer",
      company: "apeit.com",
      period: "2021 - 2022",
      location: "Remote",
      description: "Developed high-performance web and mobile applications using modern technologies and frameworks.",
      highlights: [
        "Built scalable web applications serving thousands of users",
        "Implemented responsive designs with React and React Native",
        "Optimized application performance reducing load times by 50%",
        "Collaborated with cross-functional teams on product development"
      ]
    }
  ];

  const skills = {
    "Blockchain": ["Solidity", "Ethereum", "Solana", "Web3.js", "Ethers.js", "Smart Contracts"],
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    "Backend": ["Node.js", "Python", "Rust", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "Docker", "AWS", "Vercel", "Hardhat", "Truffle"]
  };

  const education = [
    {
      degree: "Self-Taught Developer",
      institution: "Online Platforms & Bootcamps",
      period: "2020 - 2022",
      description: "Intensive self-directed learning in blockchain development, Web3 technologies, and modern web development practices."
    }
  ];

  const achievements = [
    "Built and deployed 20+ production-ready DApps",
    "Contributed to multiple open-source blockchain projects",
    "Successfully completed 50+ client projects",
    "Expertise in multiple blockchain networks (Ethereum, Solana, Polygon)"
  ];

  return (
    <section className="py-24 relative" id="resume">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-4">
            <FileText size={18} className="text-[var(--color-primary)]" />
            <span className="text-sm font-medium">{t('resume.professionalBackground')}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="heading-gradient">{t('resume.resumeExperience')}</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto mb-8">
            {t('resume.description')}
          </p>

          <motion.button
            onClick={handleDownload}
            disabled={isGenerating}
            className={`btn-primary flex items-center gap-2 mx-auto ${
              isGenerating ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            whileHover={!isGenerating ? { scale: 1.05 } : {}}
            whileTap={!isGenerating ? { scale: 0.95 } : {}}
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {t('resume.generatingPDF')}
              </>
            ) : (
              <>
                <Download size={18} />
                {t('resume.downloadResume')}
              </>
            )}
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info & Skills */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Info */}
            <motion.div 
              className="card p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--color-text)] mb-4">
                <User size={20} className="text-[var(--color-primary)]" />
                {t('resume.contactInformation')}
              </h3>
              <div className="space-y-3 text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[var(--color-primary)]" />
                  <a href="mailto:raphealdivine2@gmail.com" className="hover:text-[var(--color-primary)] transition-colors">
                    raphealdivine2@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[var(--color-primary)]" />
                  <a href="https://t.me/divinecodes11" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">
                    @divinecodes11
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[var(--color-primary)]" />
                  <span>Remote / Global</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-[var(--color-primary)]" />
                  <a href="https://deesporfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">
                    deesporfolio.vercel.app
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              className="card p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--color-text)] mb-4">
                <Code size={20} className="text-[var(--color-primary)]" />
                {t('resume.technicalSkills')}
              </h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, techs]) => (
                  <div key={category}>
                    <h4 className="text-[var(--color-text)] font-semibold mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs px-2 py-1 rounded bg-[var(--color-secondary-darker)]/80 text-[var(--color-text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              className="card p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--color-text)] mb-4">
                <Award size={20} className="text-[var(--color-primary)]" />
                {t('resume.keyAchievements')}
              </h3>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)] mt-1">•</span>
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <motion.div 
              className="card p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--color-text)] mb-6">
                <Briefcase size={20} className="text-[var(--color-primary)]" />
                {t('resume.professionalExperience')}
              </h3>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    {index !== experience.length - 1 && (
                      <div className="absolute left-0 top-8 bottom-0 w-px bg-[var(--color-border)]" />
                    )}
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[var(--color-primary)] mt-2" />
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h4 className="text-lg font-bold text-[var(--color-text)]">{job.title}</h4>
                          <span className="text-[var(--color-primary)]">@</span>
                          <span className="text-[var(--color-primary)] font-semibold">{job.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <p className="text-[var(--color-text-secondary)] mb-3">{job.description}</p>
                        <ul className="space-y-1">
                          {job.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                              <span className="text-[var(--color-primary)] mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              className="card p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="flex items-center gap-2 text-xl font-bold text-[var(--color-text)] mb-6">
                <GraduationCap size={20} className="text-[var(--color-primary)]" />
                {t('resume.educationLearning')}
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[var(--color-primary)] mt-2" />
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-[var(--color-text)] mb-1">{edu.degree}</h4>
                        <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-2">
                          <span className="text-[var(--color-primary)] font-semibold">{edu.institution}</span>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <p className="text-[var(--color-text-secondary)]">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 