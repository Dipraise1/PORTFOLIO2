import React from 'react';
import { Database, LineChart, Activity, BarChart, Terminal, Coffee, Layers, Bot, Wallet } from 'lucide-react';

export const projects = [
  {
    id: 11,
    title: 'Sawa Wallet',
    description:
      'Send crypto with just a phone number. Money for people, not addresses—built with Expo and TypeScript. Multi-chain USDC (Solana, Polygon, Base), non-custodial, designed for real relationships and remittances.',
    icon: <Wallet className="w-10 h-10 text-[var(--color-primary)]" />,
    image: 'https://sawawallet.com/logo.png',
    tech: ['Expo', 'TypeScript', 'React Native', 'Web3', 'Multi-chain'],
    githubLink: '',
    liveLink: 'https://sawawallet.org',
    category: 'blockchain',
    stats: {
      features: 'Phone-number sends, USDC, Africa & beyond'
    }
  },
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
  },
  {
    id: 10,
    title: 'Multichain Trading Bot',
    description:
      'Production-ready multi-chain memecoin sniper bot built with Rust and TypeScript. Rust/Axum backend with Grammy Telegram interface; multi-chain (Solana, Ethereum, BSC), wallet management, auto TP/SL, GoPlus safety checks, DexScreener prices, portfolio analytics, gas optimization, and alerts.',
    icon: <Bot className="w-10 h-10 text-teal-500" />,
    tech: ['Rust', 'TypeScript', 'Axum', 'Grammy', 'Solana', 'EVM'],
    githubLink: '',
    liveLink: 'https://t.me/multichaintradingbot',
    category: 'blockchain',
    stats: {
      features: 'Multi-chain, DexScreener, Jupiter, 1inch, GoPlus'
    }
  },
  {
    id: 12,
    title: 'Gumy',
    description:
      'Meme project and interactive experience. Built with Next.js and deployed on Vercel.',
    icon: <Coffee className="w-10 h-10 text-purple-500" />,
    tech: ['Next.js', 'React', 'Vercel'],
    githubLink: 'https://github.com/Dipraise1/gumy',
    liveLink: 'https://gumy.vercel.app',
    category: 'web',
    stats: {
      features: 'Meme, Next.js, Vercel'
    }
  },
  {
    id: 13,
    title: 'OTTO+ Rewards',
    description:
      'Next.js dApp for cleaning up dead token accounts on Solana and earning SOL rewards. Gamified cleanup with progress animations, real-time stats, achievements, and modern glassmorphism UI with sound effects.',
    icon: <Activity className="w-10 h-10 text-[var(--color-primary-lighter)]" />,
    tech: ['Next.js 14', 'TypeScript', 'Solana', 'SPL Token', 'shadcn/ui', 'Tailwind'],
    githubLink: 'https://github.com/Dipraise1/otto-burn-rewards',
    liveLink: '',
    category: 'blockchain',
    stats: {
      features: 'Token cleanup, SOL rewards, Gamified, Achievements'
    }
  },
  {
    id: 14,
    title: 'NFT Mint Page',
    description:
      'NFT minting engine with Metaplex UMI for standard SPL NFTs. Physical redemption form with database storage, real-time SOL/USD pricing, toast notifications, and Solscan transaction links.',
    icon: <Layers className="w-10 h-10 text-yellow-500" />,
    tech: ['React', 'Metaplex UMI', 'Solana', 'SPL NFT'],
    githubLink: '',
    liveLink: 'https://nftmintpage.vercel.app',
    category: 'blockchain',
    stats: {
      features: 'Minting, Physical redemption, Solscan, Toasts'
    }
  }
];
