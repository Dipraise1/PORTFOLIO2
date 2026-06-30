import { Database, LineChart, Activity, BarChart, Terminal, Coffee, Layers, Bot, Wallet, Brain, Search, Rocket, Video, ShieldCheck, Mail, TrendingDown, Globe, Coins, ShoppingBag, Zap, Plane } from 'lucide-react';

export const projects = [
  {
    id: 20,
    title: 'Online Class',
    description:
      'A live-video lecture platform for universities. Lecturers run live classes with screen-share and host moderation, take automatic attendance (CSV export), and start polls/quizzes mid-class; students join only via invite links. Built on Next.js, LiveKit, and Prisma/Postgres.',
    icon: <Video className="w-10 h-10 text-[var(--color-primary)]" />,
    tech: ['Next.js', 'LiveKit', 'Prisma', 'Postgres', 'TypeScript'],
    githubLink: 'https://github.com/Dipraise1/online-class',
    liveLink: 'https://online-class-eosin.vercel.app',
    category: 'web',
    stats: {
      features: 'Live video, screen-share, attendance, live quizzes, invite-link access'
    }
  },
  {
    id: 21,
    title: 'HotCams',
    description:
      'A polished, animated streaming-site front-end built with Vite and React. Smooth motion, a responsive layout, and a fast modern landing experience.',
    icon: <Video className="w-10 h-10 text-pink-500" />,
    tech: ['Vite', 'React', 'Tailwind CSS', 'JavaScript'],
    githubLink: 'https://github.com/Dipraise1/hotcams',
    liveLink: 'https://hotcams-theta.vercel.app',
    category: 'web',
    stats: {
      features: 'Animated UI, responsive, fast Vite build'
    }
  },
  {
    id: 22,
    title: 'Solgigs — Log Your Proofs',
    description:
      'A Web3 gig and proof-of-work platform with multi-chain payments. Freelancers log verifiable proofs of completed work and get paid on-chain across Solana and Ethereum, with a Supabase backend.',
    icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
    tech: ['Next.js', 'Supabase', 'Solana', 'Ethereum', 'Web3'],
    githubLink: 'https://github.com/Dipraise1/loogyourproofs',
    liveLink: 'https://loogyourproofs.vercel.app',
    category: 'blockchain',
    stats: {
      features: 'On-chain payments, proof logging, multi-chain'
    }
  },
  {
    id: 23,
    title: 'Webmail App',
    description:
      'A full webmail client built with Next.js and Prisma — compose, send, and manage email with a database-backed inbox and a clean, modern interface.',
    icon: <Mail className="w-10 h-10 text-blue-400" />,
    tech: ['Next.js', 'Prisma', 'TypeScript', 'Postgres'],
    githubLink: 'https://github.com/Dipraise1/webmailler',
    liveLink: '',
    category: 'web',
    stats: {
      features: 'Inbox, compose & send, database-backed'
    }
  },
  {
    id: 24,
    title: 'StopLoss Degen API',
    description:
      'A containerized trading API for automated stop-loss execution on degen positions. A Python service shipped with Docker and configurable risk parameters.',
    icon: <TrendingDown className="w-10 h-10 text-red-500" />,
    tech: ['Python', 'Docker', 'REST API', 'Trading'],
    githubLink: 'https://github.com/Dipraise1/stoplossdegen-api-design-',
    liveLink: '',
    category: 'finance',
    stats: {
      features: 'Automated stop-loss, Dockerized API'
    }
  },
  {
    id: 25,
    title: 'Nexxra Digital',
    description:
      'The marketing site for Nexxra — a web development company based in Abuja, Nigeria. A modern, responsive, conversion-focused landing page built with TypeScript.',
    icon: <Globe className="w-10 h-10 text-[var(--color-accent)]" />,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/Dipraise1/nexxra',
    liveLink: 'https://nexxra.vercel.app',
    category: 'web',
    stats: {
      features: 'Agency site, responsive, SEO-focused'
    }
  },
  {
    id: 26,
    title: 'SOL Coin Flip',
    description:
      'A premium Solana coin-flip game — connect a wallet, place a bet and flip on-chain, with a provably-fair flow and a sleek, animated UI.',
    icon: <Coins className="w-10 h-10 text-yellow-400" />,
    tech: ['TypeScript', 'Solana', 'Web3', 'Next.js'],
    githubLink: 'https://github.com/Dipraise1/coinfliptemplate',
    liveLink: 'https://coinfliptemplate.vercel.app',
    category: 'blockchain',
    stats: {
      features: 'On-chain bets, wallet connect, animated UI'
    }
  },
  {
    id: 27,
    title: 'Marketplace Admin',
    description:
      'An admin dashboard for an online marketplace — manage listings, orders and users through a clean, data-dense interface.',
    icon: <ShoppingBag className="w-10 h-10 text-[var(--color-primary)]" />,
    tech: ['JavaScript', 'React', 'Dashboard'],
    githubLink: 'https://github.com/Dipraise1/marketplace',
    liveLink: 'https://marketplace-drab-psi.vercel.app',
    category: 'web',
    stats: {
      features: 'Listings, orders, user management'
    }
  },
  {
    id: 28,
    title: 'Warpcore',
    description:
      'Tooling that lets developers use parallelism on Solana — a Rust project focused on high-throughput, concurrent execution patterns for Solana programs.',
    icon: <Zap className="w-10 h-10 text-purple-400" />,
    tech: ['Rust', 'Solana', 'Parallelism'],
    githubLink: 'https://github.com/Dipraise1/warpcore',
    liveLink: '',
    category: 'blockchain',
    stats: {
      features: 'Parallel execution, high throughput, Rust'
    }
  },
  {
    id: 29,
    title: 'Boarderless — The Visa Machine',
    description:
      'A travel and visa platform that streamlines visa discovery and applications, built with TypeScript and deployed on Vercel.',
    icon: <Plane className="w-10 h-10 text-sky-400" />,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: '',
    liveLink: 'https://boarderless.vercel.app',
    category: 'web',
    stats: {
      features: 'Visa discovery & applications'
    }
  },
  {
    id: 11,
    title: 'Sawa Wallet',
    description:
      'Send crypto with just a phone number. Money for people, not addresses—built with Expo and TypeScript. Multi-chain USDC (Solana, Polygon, Base), non-custodial, designed for real relationships and remittances.',
    icon: <Wallet className="w-10 h-10 text-[var(--color-primary)]" />,
    image: 'https://sawawallet.org/sawa.png',
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
    id: 15,
    title: 'Engram',
    description:
      'Decentralized vector database on Bittensor — content-addressed semantic memory for AI. Every embedding gets a deterministic CID, replicated across competing miners who earn TAO for provably storing and serving vectors. HMAC challenge-response proofs ensure data integrity.',
    icon: <Brain className="w-10 h-10 text-[var(--color-primary)]" />,
    tech: ['Python', 'Bittensor', 'AI', 'Vector DB', 'Machine Learning', 'IPFS'],
    githubLink: 'https://github.com/Dipraise1/-Engram-',
    liveLink: 'https://theengram.space',
    category: 'ai',
    stats: {
      features: 'Content-addressed, Decentralized, Incentivized miners, TAO rewards'
    }
  },
  {
    id: 16,
    title: 'CabalSpy',
    description:
      'Real-time token tracking and trading platform built with TypeScript and Next.js. Integrates Turnkey for secure wallet management, enabling live monitoring of on-chain token movements and trading activity across EVM chains.',
    icon: <Search className="w-10 h-10 text-teal-400" />,
    tech: ['TypeScript', 'Next.js', 'Turnkey', 'Web3', 'Real-time'],
    githubLink: 'https://github.com/Dipraise1/cabalspy',
    liveLink: '',
    category: 'blockchain',
    stats: {
      features: 'Token tracking, Wallet auth, Real-time, Turnkey integration'
    }
  },
  {
    id: 17,
    title: 'PumpFun Deployer Bot',
    description:
      'Production-grade Solana token deployer bot with Jito bundle support. Automates token creation and launch on Pump.fun with MEV protection via Jito bundler, ensuring fast and frontrun-resistant transactions.',
    icon: <Rocket className="w-10 h-10 text-orange-400" />,
    tech: ['TypeScript', 'Solana', 'Jito', 'Pump.fun', 'MEV'],
    githubLink: 'https://github.com/Dipraise1/pumpfundeplyerbot',
    liveLink: '',
    category: 'blockchain',
    stats: {
      features: 'Jito bundler, MEV protection, Auto-deploy, Pump.fun'
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
