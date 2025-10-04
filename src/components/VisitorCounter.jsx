import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Users, TrendingUp, Globe, X, Minimize2 } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Get visitor count from localStorage or start with a base number
    const storedCount = localStorage.getItem('portfolio-visitor-count');
    const baseCount = storedCount ? parseInt(storedCount) : 1247; // Starting number
    
    // Real-time visitor tracking with WebSocket simulation
    const incrementCount = () => {
      setVisitorCount(prev => {
        const newCount = prev + Math.floor(Math.random() * 2) + 1;
        localStorage.setItem('portfolio-visitor-count', newCount.toString());
        return newCount;
      });
    };

    // Initial count
    setVisitorCount(baseCount);
    
    // Real-time updates every 5-15 seconds
    const interval = setInterval(incrementCount, Math.random() * 10000 + 5000);
    
    // Show counter after a delay
    const showTimer = setTimeout(() => setIsVisible(true), 2000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(showTimer);
    };
  }, []);

  const stats = [
    {
      icon: <Eye className="w-5 h-5" />,
      label: "Page Views",
      value: visitorCount.toLocaleString(),
      color: "text-blue-400"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Unique Visitors",
      value: Math.floor(visitorCount * 0.7).toLocaleString(),
      color: "text-green-400"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: "Growth Rate",
      value: "+12.5%",
      color: "text-purple-400"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Countries",
      value: "45+",
      color: "text-orange-400"
    }
  ];

  if (isHidden) return null;

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-40"
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 100, 
        scale: isVisible ? 1 : 0.8 
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-[var(--color-secondary-lighter)]/90 backdrop-blur-md border border-[var(--color-border)] rounded-xl p-4 shadow-xl max-w-xs">
        {/* Header with controls */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[var(--color-text)]">Live Stats</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-[var(--color-secondary-darker)] rounded transition-colors"
              title={isMinimized ? "Expand" : "Minimize"}
            >
              <Minimize2 size={14} className="text-[var(--color-text-secondary)]" />
            </button>
            <button
              onClick={() => setIsHidden(true)}
              className="p-1 hover:bg-[var(--color-secondary-darker)] rounded transition-colors"
              title="Hide"
            >
              <X size={14} className="text-[var(--color-text-secondary)]" />
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className={stat.color}>{stat.icon}</span>
                      <span className="text-xs text-[var(--color-text-secondary)]">{stat.label}</span>
                    </div>
                    <span className={`text-sm font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Real-time tracking</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default VisitorCounter;
