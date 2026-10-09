import { ArrowRight, ArrowUpRight, Github, Mail, MessageCircle, Sparkles } from 'lucide-react';

const socials = [
  { href: 'https://github.com/Dipraise1', label: 'GitHub', icon: <Github size={17} /> },
  { href: 'https://t.me/jokersrequired', label: 'Telegram', icon: <MessageCircle size={17} /> },
  { href: 'mailto:raphealdivine2@gmail.com', label: 'Email', icon: <Mail size={17} /> },
];

const work = [
  { name: 'Sawa Wallet', note: 'Phone-first money for Africa', href: 'https://sawawallet.org', tone: '#f5b971' },
  { name: 'Engram', note: 'Decentralized memory for AI', href: 'https://theengram.space', tone: '#80d8c2' },
  { name: 'Nexxra', note: 'Digital products for bold teams', href: 'https://nexxradigitals.com', tone: '#a9b8ff' },
];

const Hero = () => (
  <section id="about" className="friendly-hero">
    <div className="friendly-orb friendly-orb-one" aria-hidden="true" />
    <div className="friendly-orb friendly-orb-two" aria-hidden="true" />
    <div className="container-custom relative z-10">
      <div className="friendly-hero-grid">
        <div className="friendly-intro">
          <div className="availability-pill"><span className="availability-dot" /> Available for thoughtful projects</div>
          <p className="friendly-kicker"><Sparkles size={15} /> Hey, I&apos;m Divine</p>
          <h1>I turn ambitious ideas into products people enjoy using.</h1>
          <p className="friendly-lead">I&apos;m a product engineer in Abuja building friendly, dependable experiences across fintech, Web3, AI, and the everyday web. I care about the people using the product just as much as the code behind it.</p>
          <div className="friendly-actions">
            <a href="#projects" className="friendly-primary">See what I&apos;ve built <ArrowRight size={17} /></a>
            <a href="#contact" className="friendly-secondary">Let&apos;s work together</a>
          </div>
          <div className="friendly-socials">
            <span>Find me online</span>
            {socials.map(item => <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={item.label}>{item.icon}</a>)}
          </div>
        </div>
        <div className="portrait-column">
          <div className="portrait-card">
            <img src="/pfp.jpg" alt="Divine Rapheal, product engineer and founder" />
            <div className="portrait-caption"><div><strong>Divine Rapheal</strong><span>Product engineer · Builder</span></div><span className="portrait-location">Abuja, NG</span></div>
          </div>
          <div className="hello-note">I like clear ideas, kind teams, and shipping the useful version first. 👋</div>
        </div>
      </div>
      <div className="featured-strip">
        <div className="featured-label"><span>Selected work</span><strong>Things I&apos;m proud of</strong></div>
        {work.map(item => <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="featured-item"><span className="featured-dot" style={{ background: item.tone }} /><span><strong>{item.name}</strong><small>{item.note}</small></span><ArrowUpRight size={16} /></a>)}
      </div>
    </div>
  </section>
);

export default Hero;
