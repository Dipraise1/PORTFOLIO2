import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Clock, Zap, Shield } from 'lucide-react';

const SMARTSUPP_KEY = '71271caf1b799423e65ce7df212e80214378c777';
const SCRIPT_ID = 'smartsupp-loader';

let ssReady = false;

const showChat = () => {
  if (typeof window.smartsupp === 'function') {
    window.smartsupp('chat:show');
    window.smartsupp('chat:open');
  }
};

const hideChat = () => {
  try {
    if (typeof window.smartsupp === 'function') {
      window.smartsupp('chat:close');
      window.smartsupp('chat:hide');
    }
  } catch { /* ignore */ }
};

const LiveChat = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (ssReady) {
      // Script already loaded from a previous visit — just show & open
      showChat();
    } else {
      // First visit — initialise Smartsupp with widget hidden, then show it once loaded
      if (!window._smartsupp?.key) {
        window._smartsupp = { key: SMARTSUPP_KEY, position: 'right', hideWidget: true };
        const queue = [];
        const smartsupp = function (...args) { queue.push(args); };
        smartsupp._ = queue;
        window.smartsupp = smartsupp;
      }

      const s = document.getElementsByTagName('script')[0];
      const c = document.createElement('script');
      c.id = SCRIPT_ID;
      c.type = 'text/javascript';
      c.charset = 'utf-8';
      c.async = true;
      c.src = 'https://www.smartsuppchat.com/loader.js?';
      c.onload = () => {
        ssReady = true;
        showChat();
      };
      s.parentNode.insertBefore(c, s);
    }

    // On unmount just hide — keep the DOM elements intact for next visit
    return () => { hideChat(); };
  }, []);

  const features = [
    { icon: <Zap size={20} />, title: 'Instant Replies', desc: 'Get answers in real-time during business hours.' },
    { icon: <Clock size={20} />, title: 'Quick Response', desc: 'Typical response time under 1 hour.' },
    { icon: <Shield size={20} />, title: 'Private & Secure', desc: 'Your conversations are confidential.' },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] flex flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-50 backdrop-blur-md border-b border-[var(--color-border)] bg-[var(--color-secondary-darker)]/80">
        <div className="container-custom flex items-center gap-4 py-4">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ x: -3 }}
            className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Back
          </motion.button>
          <div className="h-5 w-px bg-[var(--color-border)]" />
          <span className="text-sm font-semibold text-[var(--color-text)]">Live Chat</span>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Online
          </span>
        </div>
      </div>

      {/* Hero area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl w-full space-y-10"
        >
          {/* Icon + heading */}
          <div className="space-y-5">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 250, damping: 20 }}
              className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center shadow-2xl shadow-[var(--color-primary)]/30"
            >
              <MessageCircle size={38} className="text-white" />
            </motion.div>

            <h1 className="text-3xl sm:text-5xl font-bold">
              <span className="heading-gradient">Chat with me</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              Have a project in mind or a quick question? The chat window is open — just type below.
            </p>
          </div>

          {/* Feature cards */}
          <motion.div
            className="grid sm:grid-cols-3 gap-4"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="card p-5 text-left space-y-2 hover:border-[var(--color-primary)]/40 transition-colors"
              >
                <div className="text-[var(--color-primary)]">{f.icon}</div>
                <p className="font-semibold text-[var(--color-text)] text-sm">{f.title}</p>
                <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Helper note */}
          <p className="text-[var(--color-text-muted)] text-xs">
            The chat box is in the bottom-right corner. If it doesn&apos;t open automatically,{' '}
            <button
              onClick={() => {
                if (typeof window.smartsupp === 'function') {
                  window.smartsupp('chat:show');
                  window.smartsupp('chat:open');
                }
              }}
              className="text-[var(--color-primary)] underline underline-offset-2 hover:text-[var(--color-primary-lighter)] transition-colors"
            >
              click here
            </button>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveChat;
