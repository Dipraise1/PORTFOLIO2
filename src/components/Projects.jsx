import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Radio, Users, Layers, ArrowRight, Terminal, Database, Coffee, Book } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Solana NFT Marketplace',
      description:
        'A high-performance NFT marketplace built on Solana blockchain, featuring fast transactions and low gas fees. Supports collection creation, minting, and trading digital assets.',
      icon: <Layers className="w-10 h-10 text-[var(--color-primary)]" />,
      tech: ['Solana', 'Rust', 'React', 'Web3.js'],
      githubLink: 'https://github.com/divine/solana-nft-marketplace',
      liveLink: 'https://solana-nft.example.com',
      category: 'blockchain',
      stats: {
        txns: '50K+',
        volume: '$1.5M+',
        users: '10K+'
      }
    },
    {
      id: 2,
      title: 'DeFi Yield Aggregator',
      description:
        'An automated yield farming protocol that optimizes returns across multiple DeFi platforms. Implements smart contract integration with various lending protocols.',
      icon: <Database className="w-10 h-10 text-[var(--color-accent)]" />,
      tech: ['Solidity', 'Ethers.js', 'React', 'TheGraph'],
      githubLink: 'https://github.com/divine/defi-yield-aggregator',
      liveLink: 'https://yield-aggregator.example.com',
      category: 'blockchain',
      stats: {
        TVL: '$3.2M+',
        APY: '12-18%',
        protocols: '8'
      }
    },
    {
      id: 3,
      title: 'Decentralized Social Platform',
      description:
        'A decentralized social media platform using blockchain for content ownership and monetization. Features include content creation, tipping, and social networking.',
      icon: <Users className="w-10 h-10 text-[var(--color-primary-lighter)]" />,
      tech: ['IPFS', 'Smart Contracts', 'Next.js', 'TypeScript'],
      githubLink: 'https://github.com/divine/decentralized-social',
      liveLink: 'https://decentral-social.example.com',
      category: 'social',
      stats: {
        users: '8K+',
        posts: '45K+',
        engagement: '180K+'
      }
    },
    {
      id: 4,
      title: 'ML-Powered Trading Bot',
      description:
        'A cryptocurrency trading bot that uses machine learning algorithms to predict price movements and execute trades. Features backtesting capabilities and risk management.',
      icon: <Terminal className="w-10 h-10 text-green-500" />,
      tech: ['Python', 'TensorFlow', 'Pandas', 'RESTful APIs'],
      githubLink: 'https://github.com/divine/ml-trading-bot',
      liveLink: 'https://ml-bot.example.com',
      category: 'python',
      stats: {
        accuracy: '72%',
        profit: '15.3%',
        pairs: '12'
      }
    },
    {
      id: 5,
      title: 'Blockchain Data Analyzer',
      description:
        'A Python-based tool for analyzing blockchain data, transaction patterns, and wallet behaviors. Provides visual analytics and pattern recognition for market insights.',
      icon: <Book className="w-10 h-10 text-blue-500" />,
      tech: ['Python', 'Django', 'Matplotlib', 'Web3.py'],
      githubLink: 'https://github.com/divine/blockchain-analyzer',
      liveLink: 'https://blockchain-analyzer.example.com',
      category: 'python',
      stats: {
        chains: '5',
        reports: '20+',
        metrics: '35+'
      }
    },
    {
      id: 6,
      title: 'NFT Gaming Platform',
      description:
        'A C# game engine with blockchain integration for NFT-based gaming assets. Allows players to own, trade, and utilize blockchain assets within gaming environments.',
      icon: <Coffee className="w-10 h-10 text-purple-500" />,
      tech: ['C#', 'Unity', '.NET', 'Blockchain'],
      githubLink: 'https://github.com/divine/nft-gaming-platform',
      liveLink: 'https://nft-gaming.example.com',
      category: 'csharp',
      stats: {
        games: '3',
        assets: '1K+',
        players: '5K+'
      }
    },
    {
      id: 7,
      title: 'Supply Chain Tracking System',
      description:
        'A C# supply chain management system that uses blockchain for transparent tracking of goods from manufacturer to customer. Includes real-time monitoring and reporting.',
      icon: <Radio className="w-10 h-10 text-blue-400" />,
      tech: ['C#', 'ASP.NET', 'SQL Server', 'Ethereum'],
      githubLink: 'https://github.com/divine/blockchain-supply-chain',
      liveLink: 'https://chain-track.example.com',
      category: 'csharp',
      stats: {
        companies: '12',
        shipments: '5K+',
        efficiency: '+32%'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'python', label: 'Python' },
    { id: 'csharp', label: 'C#' },
    { id: 'social', label: 'Social' }
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
            <span className="text-sm font-medium">GitHub Projects</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="heading-gradient">Recent Works</span>
          </h2>
          
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Exploring the frontiers of technology through innovative applications across blockchain, Python, C#, and more.
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
                    <motion.a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -3, color: "var(--color-primary)" }}
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-3">
                  {project.title}
                </h3>

                <p className="text-[var(--color-text-secondary)] mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full 
                                 bg-[var(--color-secondary-darker)]/80 text-[var(--color-text-secondary)] 
                                 border border-[var(--color-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-[var(--color-border)]">
                  {Object.entries(project.stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-[var(--color-primary)] font-bold">{value}</div>
                      <div className="text-[var(--color-text-muted)] text-sm capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                <motion.a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 pt-4 border-t border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] flex items-center justify-between transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">View Project</span>
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.a 
            href="https://github.com/divine" 
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More on GitHub
            <Github size={18} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
