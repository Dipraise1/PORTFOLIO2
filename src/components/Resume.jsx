import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2 } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const itemV = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const containerV = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const Resume = () => {
  const { t } = useTranslation();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/cv.pdf';
      link.download = 'Divine_Rapheal_Web3_Developer_CV.pdf';
      link.click();
      setIsGenerating(false);
    }, 1200);
  };

  const experience = [
    {
      title: 'Founder & Lead Developer',
      company: 'Sawa Wallet',
      period: 'Present',
      location: 'Remote',
      description: 'Building Sawa Wallet — send crypto with just a phone number. Multi-chain USDC (Solana, Polygon, Base), non-custodial, designed for remittances.',
      highlights: [
        'Phone-number sends instead of wallet addresses',
        'Multi-chain USDC on Solana, Polygon, and Base',
        'Built with Expo, TypeScript, and React Native',
        'Africa & beyond — transfers across 50+ countries',
      ],
    },
    {
      title: 'Senior Web3 Developer',
      company: 'Freelance',
      period: '2022 – Present',
      location: 'Remote',
      description: 'Building decentralized applications, smart contracts, and blockchain solutions for clients across DeFi, NFT, and Web3 ecosystems.',
      highlights: [
        '15+ smart contracts with $2M+ total value locked',
        'Escrow DApps supporting Ethereum and Solana',
        'Yield optimization strategies for DeFi protocols',
        'Automated trading bots with machine learning',
      ],
    },
    {
      title: 'Senior App Developer',
      company: 'apeit.com',
      period: '2021 – 2022',
      location: 'Remote',
      description: 'Developed high-performance web and mobile applications using modern technologies and frameworks.',
      highlights: [
        'Scalable web applications serving thousands of users',
        'Responsive designs with React and React Native',
        'Optimized performance reducing load times by 50%',
        'Cross-functional collaboration on product development',
      ],
    },
  ];

  const skills = {
    Blockchain: ['Solidity', 'Ethereum', 'Solana', 'Web3.js', 'Ethers.js', 'Smart Contracts'],
    Frontend:   ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    Backend:    ['Node.js', 'Python', 'Rust', 'PostgreSQL', 'MongoDB'],
    Tools:      ['Git', 'Docker', 'AWS', 'Vercel', 'Hardhat', 'Truffle'],
  };

  const education = [
    {
      degree: 'BSc Software Engineering',
      institution: 'Miva Open University',
      period: '2025 – Present',
      description: 'Software Engineering with focus on modern development practices, architecture, and scalable systems.',
    },
    {
      degree: 'BSc Computer Science',
      institution: 'University of Abuja',
      period: '2024 – Present',
      description: 'Computer Science foundations — computational theory, algorithms, and system architecture.',
    },
    {
      degree: 'Self-Taught Developer',
      institution: 'Online Platforms & Bootcamps',
      period: '2020 – 2022',
      description: 'Intensive self-directed learning in blockchain development and Web3 technologies.',
    },
  ];

  const achievements = [
    'Built and deployed 20+ production-ready DApps',
    'Contributed to multiple open-source blockchain projects',
    'Successfully completed 50+ client projects',
    'Expertise across Ethereum, Solana, and Polygon',
  ];

  return (
    <section className="section-padding relative" id="resume">
      <div className="container-custom">

        {/* ─── Header ─── */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-ibm text-[var(--color-cyan)] text-[10px] tracking-[0.25em] uppercase mb-2 opacity-70">
                // {t('resume.professionalBackground')}
              </p>
              <h2
                className="font-display font-bold heading-gradient leading-none"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
              >
                {t('resume.resumeExperience')}
              </h2>
            </div>
            <motion.button
              onClick={handleDownload}
              disabled={isGenerating}
              className="btn-primary flex items-center gap-2 self-start sm:self-auto flex-shrink-0"
              whileHover={!isGenerating ? { scale: 1.04 } : {}}
              whileTap={!isGenerating ? { scale: 0.96 } : {}}
            >
              {isGenerating ? (
                <><Loader2 size={14} className="animate-spin" /> {t('resume.generatingPDF')}</>
              ) : (
                <><Download size={14} /> {t('resume.downloadResume')}</>
              )}
            </motion.button>
          </div>
          <div className="mt-5 h-px" style={{ background: 'linear-gradient(to right, rgba(99,102,241,0.4), transparent)' }} />
        </motion.div>

        {/* ─── Body ─── */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">

          {/* Left: Experience */}
          <motion.div
            variants={containerV} initial="hidden"
            whileInView="visible" viewport={{ once: true }}
          >
            <p className="font-ibm text-[var(--color-text-muted)] text-[9px] uppercase tracking-[0.25em] mb-6">
              {t('resume.professionalExperience')}
            </p>
            <div className="space-y-8">
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  variants={itemV}
                  className="relative pl-5"
                  style={{ borderLeft: '1px solid rgba(55,65,81,0.4)' }}
                >
                  <div
                    className="absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full"
                    style={{ background: 'var(--color-primary)', boxShadow: '0 0 8px rgba(99,102,241,0.5)' }}
                  />
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-display font-semibold text-sm sm:text-[15px] text-[var(--color-text)] leading-tight">
                        {job.title}
                      </h3>
                      <span className="font-ibm text-[var(--color-primary-lighter)] text-[11px] tracking-wide">
                        {job.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 font-ibm text-[var(--color-text-muted)] text-[9px] uppercase tracking-wider flex-shrink-0">
                      <span>{job.period}</span>
                      <span className="opacity-40">·</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed mb-2.5">
                    {job.description}
                  </p>
                  <ul className="space-y-1">
                    {job.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2 font-ibm text-[var(--color-text-muted)] text-[10px] leading-relaxed">
                        <span className="text-[var(--color-cyan)] flex-shrink-0 mt-px">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Skills + Education + Achievements */}
          <motion.div
            className="space-y-10"
            variants={containerV} initial="hidden"
            whileInView="visible" viewport={{ once: true }}
          >
            {/* Skills */}
            <motion.div variants={itemV}>
              <p className="font-ibm text-[var(--color-text-muted)] text-[9px] uppercase tracking-[0.25em] mb-5">
                {t('resume.technicalSkills')}
              </p>
              <div className="space-y-3">
                {Object.entries(skills).map(([cat, techs]) => (
                  <div key={cat} className="flex items-start gap-4">
                    <span className="font-ibm text-[var(--color-text-muted)] text-[9px] uppercase tracking-wider w-[68px] flex-shrink-0 mt-1 opacity-70">
                      {cat}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className="font-ibm text-[9px] px-1.5 py-0.5 rounded"
                          style={{
                            background: 'rgba(22,27,34,0.9)',
                            border: '1px solid rgba(55,65,81,0.4)',
                            color: 'var(--color-text-muted)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemV}>
              <p className="font-ibm text-[var(--color-text-muted)] text-[9px] uppercase tracking-[0.25em] mb-5">
                {t('resume.educationLearning')}
              </p>
              <div className="space-y-5">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-4"
                    style={{ borderLeft: '1px solid rgba(55,65,81,0.4)' }}
                  >
                    <div
                      className="absolute -left-[4px] top-[5px] w-2 h-2 rounded-full opacity-70"
                      style={{ background: 'var(--color-primary)' }}
                    />
                    <h4 className="font-display font-semibold text-sm text-[var(--color-text)] leading-tight mb-0.5">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="font-ibm text-[var(--color-primary-lighter)] text-[10px]">{edu.institution}</span>
                      <span className="text-[var(--color-text-muted)] text-[9px] opacity-40">·</span>
                      <span className="font-ibm text-[var(--color-text-muted)] text-[9px]">{edu.period}</span>
                    </div>
                    <p className="font-ibm text-[var(--color-text-muted)] text-[10px] leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemV}>
              <p className="font-ibm text-[var(--color-text-muted)] text-[9px] uppercase tracking-[0.25em] mb-4">
                {t('resume.keyAchievements')}
              </p>
              <ul className="space-y-2">
                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 font-ibm text-[var(--color-text-secondary)] text-[11px] leading-relaxed">
                    <span className="text-[var(--color-cyan)] flex-shrink-0 mt-px">›</span>
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
