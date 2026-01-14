import React from 'react';
import { Database, LineChart, Activity, BarChart, Terminal, Coffee, Layers, Bot, Wallet } from 'lucide-react';

export const projects = [
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
