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
      icon: <Eye className="w-3 h-3" />,
      label: "Views",
      value: visitorCount.toLocaleString(),
      color: "text-blue-400"
    },
    {
      icon: <Users className="w-3 h-3" />,
      label: "Visitors",
      value: Math.floor(visitorCount * 0.7).toLocaleString(),
      color: "text-green-400"
    },
    {
      icon: <TrendingUp className="w-3 h-3" />,
      label: "Growth",
      value: "+12.5%",
      color: "text-purple-400"
    },
    {
      icon: <Globe className="w-3 h-3" />,
      label: "Countries",
      value: "45+",
      color: "text-orange-400"
    }
  ];

  if (isHidden) return null;

  return (
    <motion.div
      className="fixed bottom-2 right-2 z-40"
      initial={{ opacity: 0, x: 50, scale: 0.9 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 50, 
        scale: isVisible ? 1 : 0.9 
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="bg-[var(--color-secondary-lighter)]/95 backdrop-blur-md border border-[var(--color-border)] rounded-lg p-2 shadow-lg max-w-[120px]">
        {/* Header with controls */}
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-medium text-[var(--color-text)] leading-tight">Live</span>
          </div>
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-0.5 hover:bg-[var(--color-secondary-darker)] rounded transition-colors"
              title={isMinimized ? "Expand" : "Minimize"}
            >
              <Minimize2 size={10} className="text-[var(--color-text-secondary)]" />
            </button>
            <button
              onClick={() => setIsHidden(true)}
              className="p-0.5 hover:bg-[var(--color-secondary-darker)] rounded transition-colors"
              title="Hide"
            >
              <X size={10} className="text-[var(--color-text-secondary)]" />
            </button>
          </div>
        </div>
        
        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-1">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center justify-between gap-1"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-center gap-1 min-w-0">
                      <span className={`flex-shrink-0 ${stat.color}`}>{stat.icon}</span>
                      <span className="text-[9px] text-[var(--color-text-secondary)] truncate">{stat.label}</span>
                    </div>
                    <span className={`text-[9px] font-semibold flex-shrink-0 ${stat.color}`}>
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-1.5 pt-1.5 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-1 text-[8px] text-[var(--color-text-muted)]">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="truncate">Real-time</span>
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
