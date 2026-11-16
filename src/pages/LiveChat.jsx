import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SITE } from '../data/site';

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
    document.title = 'Live chat | Divine Rapheal';

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

  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b border-[var(--line-soft)]">
        <div className="container-custom flex h-[60px] items-center gap-4">
          <button
            onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/'))}
            className="inline-flex items-center gap-2 text-[13px] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <span className="font-display text-[15px] font-semibold text-[var(--text)]">Live chat</span>
        </div>
      </div>

      <main className="container-custom flex flex-1 flex-col justify-center py-16">
        <h1
          className="max-w-[14ch] font-display font-semibold leading-[1.05] text-[var(--text)]"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
        >
          Chat with me
        </h1>
        <p className="mt-5 max-w-[56ch] text-[14.5px] text-[var(--text-2)]">
          The chat window opens in the corner of this page. Tell me what you are building and I
          will reply as soon as I am at my desk.
        </p>
        <p className="mt-6 max-w-[56ch] text-[13.5px] text-[var(--muted)]">
          If the chat does not load, message me on{' '}
          <a className="link" href={SITE.telegramHref} target="_blank" rel="noreferrer">
            Telegram
          </a>
          ,{' '}
          <a className="link" href={SITE.whatsappHref} target="_blank" rel="noreferrer">
            WhatsApp
          </a>{' '}
          or{' '}
          <a className="link" href={`mailto:${SITE.email}`}>
            email
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default LiveChat;
