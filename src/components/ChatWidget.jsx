import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

// Floating shortcut to the live-chat page. Hidden while the hero is on screen.
const ChatWidget = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('about');
    if (!hero) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <Link
      to="/live-chat"
      aria-label="Open live chat"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#5356e4] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <MessageCircle size={20} />
    </Link>
  );
};

export default ChatWidget;
