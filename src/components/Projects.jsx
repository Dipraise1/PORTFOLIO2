import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Layers, ArrowRight, Terminal, Database, Coffee, Bot, Wallet, MessageCircle, BarChart, Activity, LineChart } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: 'Crypto Escrow DApp',
      description:
        'A decentralized escrow service supporting both Ethereum and Solana blockchains with a modern web interface. Features secure smart contract escrow, multi-party transaction security, and wallet integration.',
      icon: <Database className="w-10 h-10 text-[var(--color-primary)]" />,
      tech: ['TypeScript', 'Rust', 'Solidity', 'Next.js'],
      githubLink: 'https://github.com/Dipraise1/escrowdapp',
      liveLink: 'https://escrowdapp-cyan.vercel.app',
      category: 'blockchain',
      stats: {
        languages: 'TypeScript 48.9%, Rust 27.3%, Solidity 15.1%, JavaScript 7.7%'
      }
    },
    {
      id: 2,
      title: 'FX AI Agent',
      description:
        'A machine learning-powered trading agent that analyzes market data, generates trading signals, and performs real-time market analysis with secure API authentication and reliable WebSocket connections.',
      icon: <LineChart className="w-10 h-10 text-[var(--color-accent)]" />,
      tech: ['Python', 'TensorFlow', 'WebSocket', 'Machine Learning'],
      githubLink: 'https://github.com/Dipraise1/fx-ai-agent',
      liveLink: '',
      category: 'ai',
      stats: {
        languages: 'Python 98.4%, Shell 1.4%, Dockerfile 0.2%'
      }
    },
    {
      id: 3,
      title: 'Profit Loss Analyzer',
      description:
        'A high-performance financial analysis tool built with Rust that helps traders and investors analyze profit/loss scenarios, portfolio performance, and risk exposure with real-time market data integration.',
      icon: <Activity className="w-10 h-10 text-[var(--color-primary-lighter)]" />,
      tech: ['Rust', 'JavaScript', 'CSS', 'Financial APIs'],
      githubLink: 'https://github.com/Dipraise1/profitlossanalyzer',
      liveLink: '',
      category: 'finance',
      stats: {
        languages: 'Rust 62.5%, CSS 17.2%, JavaScript 12.1%, HTML 6.5%'
      }
    },
    {
      id: 4,
      title: 'The Basement',
      description:
        'A yield aggregator for Meteora that automatically optimizes returns by allocating funds across different liquidity pools. Features auto-compounding, yield optimization, and smart position management.',
      icon: <BarChart className="w-10 h-10 text-green-500" />,
      tech: ['Solidity', 'React', 'TypeScript', 'Web3'],
      githubLink: 'https://github.com/Dipraise1/thebasement',
      liveLink: '',
      category: 'defi',
      stats: {
        features: 'Yield Optimization, Auto-compounding, Pool Analytics'
      }
    },
    {
      id: 5,
      title: 'Keeper Solidity',
      description:
        'A blockchain-based keeper system built with Solidity for automated smart contract maintenance and execution. Ensures critical contract functions run reliably without manual intervention.',
      icon: <Terminal className="w-10 h-10 text-blue-500" />,
      tech: ['JavaScript', 'Solidity', 'Ethers.js', 'Web3'],
      githubLink: 'https://github.com/Dipraise1/keepersolidity',
      liveLink: '',
      category: 'blockchain',
      stats: {
        status: 'Active Development'
      }
    },
    {
      id: 6,
      title: 'Meme Generator',
      description:
        'An interactive meme creation platform that allows users to create, customize, and share memes. Features image upload, text customization, and export functionality.',
      icon: <Coffee className="w-10 h-10 text-purple-500" />,
      tech: ['React', 'JavaScript', 'Canvas API', 'CSS'],
      githubLink: 'https://github.com/Dipraise1/memegen',
      liveLink: '',
      category: 'web',
      stats: {
        features: 'Image Upload, Text Editing, Export'
      }
    },
    {
      id: 7,
      title: 'Smile NFT Mint Page',
      description:
        'A modern NFT minting page interface for the Smile collection. Features wallet connection, minting functionality, and collection details display with an intuitive user experience.',
      icon: <Layers className="w-10 h-10 text-yellow-500" />,
      tech: ['JavaScript', 'CSS', 'Web3.js', 'React'],
      githubLink: 'https://github.com/Dipraise1/smilemintpage',
      liveLink: '',
      category: 'blockchain',
      stats: {
        languages: 'JavaScript 83.4%, CSS 16.6%'
      }
    },
    {
      id: 8,
      title: 'Volume Bot Solana',
      description:
        'An automated trading bot for the Solana blockchain that monitors and responds to volume changes in real-time. Helps traders capitalize on market movements efficiently.',
      icon: <Bot className="w-10 h-10 text-teal-500" />,
      tech: ['JavaScript', 'Solana/Web3.js', 'Node.js', 'APIs'],
      githubLink: 'https://github.com/Dipraise1/volumebotsolana',
      liveLink: '',
      category: 'blockchain',
      stats: {
        features: 'Volume Tracking, Automated Trading, Market Analysis'
      }
    },
    {
      id: 9,
      title: 'Wallet Messenger Galaxy',
      description:
        'A secure messaging platform that uses blockchain wallet authentication for identity verification. Enables encrypted communications between crypto wallet addresses.',
      icon: <Wallet className="w-10 h-10 text-indigo-500" />,
      tech: ['TypeScript', 'Blockchain', 'Encryption', 'Web3'],
      githubLink: 'https://github.com/Dipraise1/wallet-messenger-galaxy',
      liveLink: '',
      category: 'blockchain',
      stats: {
        features: 'Wallet Authentication, Encrypted Messages, Cross-Chain Support'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: t('allProjects') },
    { id: 'blockchain', label: t('blockchain') },
    { id: 'defi', label: t('defi') },
    { id: 'finance', label: t('finance') },
    { id: 'ai', label: t('ai') },
    { id: 'web', label: t('web') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="py-24" 
      id="projects"
    >
      <div className="container-custom">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-4">
            <Code2 size={18} className="text-[var(--color-primary)]" />
            <span className="text-sm font-medium">{t('githubProjects')}</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="heading-gradient">{t('recentWorks')}</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            {t('projectsDescription')}
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-secondary-lighter)]/70 text-[var(--color-text-secondary)] hover:bg-[var(--color-secondary-lighter)] hover:text-[var(--color-text)]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="relative group h-full"
              layout
              transition={{ duration: 0.5, type: "spring" }}
            >
              <div className="card h-full p-6 backdrop-blur-sm transition-all duration-300 
                            hover:translate-y-[-5px] hover:shadow-2xl hover:shadow-[var(--color-primary)]/5
                            flex flex-col"
              >
                {/* Top section with icons */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-[var(--color-secondary-darker)]/50">
                    {project.icon}
                  </div>
                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -3, color: "var(--color-primary)" }}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.liveLink && (
                      <motion.a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3, color: "var(--color-primary)" }}
                        className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-[var(--color-text-secondary)] mb-6 line-clamp-4 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary-darker)]/80 text-[var(--color-text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="border-t border-[var(--color-border)] pt-4 mt-auto">
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="flex items-center mt-2">
                        <span className="capitalize">{key}:</span>
                        <span className="ml-2 font-semibold text-[var(--color-text)]">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Overlay for link */}
                <motion.div 
                  className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-primary)] font-medium inline-flex items-center text-sm hover:underline"
                  >
                    View Project <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add GitHub profile link and Telegram Channel */}
        <div className="mt-16 text-center flex flex-wrap justify-center gap-4">
          <motion.a 
            href="https://github.com/Dipraise1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-secondary-lighter)] text-[var(--color-text)] hover:bg-[var(--color-secondary)] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">{t('viewMoreOnGitHub')}</span>
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a 
            href="https://t.me/jokersrequired"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-text)] hover:bg-[var(--color-accent)]/20 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">{t('joinTelegramChannel')}</span>
            <MessageCircle className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
