
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Radio, Users, Layers } from 'lucide-react';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Decentralized Exchange',
      description:
        'A fully decentralized exchange built on Ethereum, allowing users to trade cryptocurrencies securely and without intermediaries.',
      icon: <Layers className="w-10 h-10 text-[#FFB86C]" />,
      tech: ['Solidity', 'React', 'Web3.js', 'MetaMask'],
      githubLink: '#',
      liveLink: '#',
      stats: {
        users: '10K+',
        volume: '$2M+',
        chains: '3'
      }
    },
    {
      id: 2,
      title: 'NFT Marketplace',
      description:
        'A platform for buying, selling, and trading non-fungible tokens (NFTs), leveraging blockchain technology to ensure authenticity and ownership.',
      icon: <Radio className="w-10 h-10 text-[#FF79C6]" />,
      tech: ['ERC-721', 'IPFS', 'Next.js', 'Hardhat'],
      githubLink: '#',
      liveLink: '#',
      stats: {
        collections: '500+',
        artists: '2K+',
        sales: '5K+'
      }
    },
    {
      id: 3,
      title: 'Decentralized Social Network',
      description:
        'A social media application built on a decentralized network, enabling users to connect, share content, and interact without central control.',
      icon: <Users className="w-10 h-10 text-[#8BE9FD]" />,
      tech: ['Ceramic', 'Lens Protocol', 'GraphQL', 'TypeScript'],
      githubLink: '#',
      liveLink: '#',
      stats: {
        users: '5K+',
        posts: '50K+',
        engagement: '200K+'
      }
    },
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
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A0F0A]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#E6C9A8] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#B89F8A] text-lg max-w-2xl mx-auto">
            Exploring the frontiers of Web3 technology through innovative decentralized applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-[#2D1810] to-[#3D261C] 
                            rounded-xl p-6 shadow-xl border border-[#4D362C]
                            transform transition-all duration-300 
                            hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 flex space-x-3">
                  <a href={project.githubLink} 
                     className="text-[#B89F8A] hover:text-[#E6C9A8] transition-colors duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.liveLink} 
                     className="text-[#B89F8A] hover:text-[#E6C9A8] transition-colors duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <div className="mb-6">{project.icon}</div>

                <h3 className="text-2xl font-bold text-[#E6C9A8] mb-3">
                  {project.title}
                </h3>

                <p className="text-[#B89F8A] mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full 
                                 bg-[#2D1810] text-[#B89F8A] 
                                 border border-[#4D362C]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[#4D362C]">
                  {Object.entries(project.stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-[#E6C9A8] font-bold">{value}</div>
                      <div className="text-[#B89F8A] text-sm capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
