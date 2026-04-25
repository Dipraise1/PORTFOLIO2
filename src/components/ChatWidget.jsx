import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const ChatWidget = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('about');
    if (!hero) { setVisible(true); return; }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <Link
      to="/live-chat"
      aria-label="Open live chat"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center rounded-full"
      style={{
        width: 50,
        height: 50,
        background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
        border: '1px solid rgba(99,102,241,0.5)',
        boxShadow: '0 4px 24px rgba(99,102,241,0.35)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 6px 32px rgba(99,102,241,0.5)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(99,102,241,0.35)'; }}
    >
      <MessageCircle size={20} color="#fff" />
    </Link>
  );
};

export default ChatWidget;
