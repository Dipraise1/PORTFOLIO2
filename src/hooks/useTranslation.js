import { useState, useEffect } from 'react';

const useTranslation = () => {
  const [language, setLanguage] = useState(() => {
    // First check if user has manually selected a language
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage) return savedLanguage;
    
    // Auto-detect user's browser language
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'en';
    const detectedLanguage = browserLanguage.split('-')[0]; // Get language code (e.g., 'en' from 'en-US')
    
    // Save the detected language
    localStorage.setItem('portfolio-language', detectedLanguage);
    return detectedLanguage;
  });

  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Google Translate API (free tier)
  const translateText = async (text, targetLang) => {
    if (targetLang === 'en') return text;
    
    try {
      const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
      const data = await response.json();
      return data[0][0][0] || text;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  // Translate all text content
  const translateContent = async (content, targetLang) => {
    setIsLoading(true);
    const translatedContent = {};
    
    for (const [key, value] of Object.entries(content)) {
      if (typeof value === 'string') {
        translatedContent[key] = await translateText(value, targetLang);
      } else if (Array.isArray(value)) {
        translatedContent[key] = await Promise.all(
          value.map(item => translateText(item, targetLang))
        );
      } else if (typeof value === 'object') {
        translatedContent[key] = await translateContent(value, targetLang);
      } else {
        translatedContent[key] = value;
      }
    }
    
    setIsLoading(false);
    return translatedContent;
  };

  // Original English content
  const originalContent = {
    nav: {
      about: 'About',
      projects: 'Projects',
      resume: 'Resume',
      game: 'Game',
      contact: 'Contact',
      github: 'GitHub',
      hireMe: 'Hire Me'
    },
    hero: {
      helloWorld: "Hello World! I'm",
      web3Developer: "Web3 Developer & Blockchain Expert",
      description: "Professional Web3 developer specializing in smart contracts, DeFi protocols, NFT marketplaces, AI agents, Telegram bots, automated trading systems, and mobile app development with Flutter and React Native. Available for blockchain development projects and Web3 consulting.",
      viewProjects: "View Projects",
      contactMe: "Contact Me"
    },
    projects: {
      githubProjects: "GitHub Projects",
      recentWorks: "Recent Works",
      description: "Exploring the frontiers of technology through innovative applications across blockchain, web development, and AI.",
      allProjects: "All Projects",
      blockchain: "Blockchain",
      defi: "DeFi",
      finance: "Finance",
      ai: "AI",
      web: "Web",
      viewMoreOnGitHub: "View More on GitHub",
      joinTelegramChannel: "Join Telegram Channel"
    },
    resume: {
      professionalBackground: "Professional Background",
      resumeExperience: "Resume & Experience",
      description: "Passionate Web3 developer with extensive experience in blockchain technologies and decentralized applications.",
      downloadResume: "Download Resume",
      generatingPdf: "Generating PDF...",
      contactInformation: "Contact Information",
      technicalSkills: "Technical Skills",
      keyAchievements: "Key Achievements",
      professionalExperience: "Professional Experience",
      educationLearning: "Education & Learning"
    },
    game: {
      miniGame: "Mini Game",
      quickReflexes: "Quick Reflexes",
      description: "Test your reflexes! Click on the target as many times as you can in 30 seconds.",
      score: "Score",
      time: "Time",
      startGame: "Start Game",
      reset: "Reset",
      clickStartToPlay: "Click Start to Play!",
      gameOver: "Game Over!",
      yourScore: "Your score:",
      playAgain: "Play Again",
      howToPlay: "How to Play:",
      instructions: [
        "Click on the colored target as quickly as you can",
        "Each click gives you 1 point",
        "You have 30 seconds to get as many points as possible",
        "The target will move to a new position after each click"
      ]
    },
    contact: {
      letsConnect: "Let's Connect",
      getInTouch: "Get In Touch",
      description: "Ready to build your Web3 project or mobile app? Need smart contract development, DeFi integration, AI agent services, or Flutter/React Native app development? I'd love to hear about your blockchain development and mobile app needs and explore how we can work together.",
      letsStartConversation: "Let's Start a Conversation",
      intro: "I'm always excited to hear about new Web3 projects, mobile app ideas, and blockchain development opportunities. Whether you need smart contract development, DeFi protocol integration, NFT marketplace creation, AI agent services, or Flutter/React Native mobile app development, I'm here to help bring your vision to life.",
      quickConnect: "Quick Connect",
      sendMessage: "Send a Message",
      formDescription: "I'd love to hear about your project or ideas!",
      fullName: "Full Name",
      emailAddress: "Email Address",
      projectDetails: "Project Details",
      projectPlaceholder: "Describe your project, timeline, budget, or any specific requirements you have in mind...",
      tellMeAboutVision: "Tell me about your vision and I'll help bring it to life",
      sendMessageButton: "Send Message",
      sendingMessage: "Sending Message...",
      typicallyRespond: "I typically respond within 24 hours",
      whatICanHelpWith: "What I Can Help With"
    },
    testimonials: {
      clientTestimonials: "Client Testimonials",
      whatClientsSay: "What Clients Say",
      description: "Don't just take my word for it. Here's what clients have to say about working with me on their Web3 and mobile development projects.",
      happyClients: "Happy Clients",
      projectsCompleted: "Projects Completed",
      successRate: "Success Rate",
      countriesServed: "Countries Served"
    },
    services: {
      smartContractDevelopment: "Smart Contract Development",
      defiProtocolIntegration: "DeFi Protocol Integration",
      nftMarketplaceDevelopment: "NFT Marketplace Development",
      web3ApplicationArchitecture: "Web3 Application Architecture",
      frontendDevelopment: "Frontend Development",
      backendServices: "Backend Services",
      aiAgentDevelopment: "AI Agent Development",
      telegramBotScripts: "Telegram Bot Scripts",
      automatedTradingBots: "Automated Trading Bots",
      aiPoweredAnalyticsTools: "AI-Powered Analytics Tools",
      flutterAppDevelopment: "Flutter App Development",
      reactNativeAppDevelopment: "React Native App Development",
      mobileAppDevelopment: "Mobile App Development"
    },
    footer: {
      madeWith: "Made with",
      byDivine: "by Divine",
      allRightsReserved: "All rights reserved"
    },
    visitorCounter: {
      liveStats: "Live Stats",
      pageViews: "Page Views",
      uniqueVisitors: "Unique Visitors",
      growthRate: "Growth Rate",
      countries: "Countries",
      realTimeTracking: "Real-time tracking"
    }
  };

  useEffect(() => {
    const loadTranslations = async () => {
      if (language === 'en') {
        setTranslations(originalContent);
        return;
      }

      try {
        const translated = await translateContent(originalContent, language);
        setTranslations(translated);
      } catch (error) {
        console.error('Translation failed:', error);
        setTranslations(originalContent);
      }
    };

    loadTranslations();
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { language, changeLanguage, t, isLoading, isAutoDetected: !localStorage.getItem('portfolio-language') };
};

export default useTranslation;
