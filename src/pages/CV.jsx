import { useEffect } from 'react';

const CV = () => {
  useEffect(() => { document.title = 'CV — Divine Rapheal'; }, []);

  return (
    <div className="cv-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Mono:wght@300;400;500&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #fff; }

        .cv-page {
          font-family: 'Inter', sans-serif;
          color: #111;
          background: #fff;
          min-height: 100vh;
          padding: 0;
        }

        .cv-wrap {
          max-width: 820px;
          margin: 0 auto;
          padding: 48px 40px;
        }

        /* Print button */
        .print-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          background: #6366f1;
          padding: 10px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 100;
          gap: 12px;
        }
        .print-bar span {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.08em;
        }
        .print-btn {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          padding: 6px 16px;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .print-btn:hover { background: rgba(255,255,255,0.25); }
        .back-btn {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }
        .back-btn:hover { color: #fff; }

        /* Layout */
        .cv-wrap { padding-top: 88px; }

        /* Header */
        .cv-header {
          border-bottom: 2px solid #111;
          padding-bottom: 20px;
          margin-bottom: 28px;
        }
        .cv-name {
          font-family: 'Syne', sans-serif;
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 4px;
        }
        .cv-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: #6366f1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .cv-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 20px;
        }
        .cv-contact a, .cv-contact span {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: #555;
          text-decoration: none;
        }
        .cv-contact a:hover { color: #6366f1; }
        .cv-contact .sep { color: #ccc; }

        /* Sections */
        .cv-section { margin-bottom: 28px; }
        .cv-section-title {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #6366f1;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 6px;
          margin-bottom: 16px;
        }

        /* Summary */
        .cv-summary {
          font-size: 13.5px;
          line-height: 1.7;
          color: #333;
          max-width: 700px;
        }

        /* Experience */
        .exp-item { margin-bottom: 20px; }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 3px;
          flex-wrap: wrap;
        }
        .exp-title {
          font-size: 14px;
          font-weight: 600;
          color: #111;
        }
        .exp-company {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: #6366f1;
          margin-bottom: 2px;
        }
        .exp-meta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          color: #888;
          text-align: right;
          white-space: nowrap;
        }
        .exp-desc {
          font-size: 12.5px;
          color: #444;
          line-height: 1.6;
          margin-bottom: 8px;
        }
        .exp-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .exp-list li {
          font-size: 12px;
          color: #555;
          line-height: 1.5;
          padding-left: 14px;
          position: relative;
        }
        .exp-list li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: #6366f1;
          font-weight: 500;
        }

        /* Projects grid */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .project-card {
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 12px 14px;
        }
        .project-name {
          font-size: 12.5px;
          font-weight: 600;
          color: #111;
          margin-bottom: 3px;
        }
        .project-desc {
          font-size: 11px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 6px;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .project-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px;
          color: #6366f1;
          background: #eef2ff;
          border-radius: 3px;
          padding: 2px 6px;
          letter-spacing: 0.05em;
        }
        .project-link {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          color: #888;
          text-decoration: none;
          margin-top: 5px;
          display: inline-block;
        }
        .project-link:hover { color: #6366f1; }

        /* Skills */
        .skills-grid {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 8px 16px;
          align-items: start;
        }
        .skill-cat {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          color: #888;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding-top: 3px;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .skill-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          color: #444;
          background: #f3f4f6;
          border-radius: 3px;
          padding: 2px 7px;
        }

        /* Education */
        .edu-item { margin-bottom: 12px; }
        .edu-degree {
          font-size: 13px;
          font-weight: 600;
          color: #111;
        }
        .edu-inst {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: #6366f1;
        }
        .edu-period {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          color: #888;
        }
        .edu-desc {
          font-size: 12px;
          color: #555;
          margin-top: 2px;
          line-height: 1.5;
        }

        /* Achievements */
        .ach-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px 20px;
        }
        .ach-list li {
          font-size: 12px;
          color: #444;
          padding-left: 14px;
          position: relative;
          line-height: 1.5;
        }
        .ach-list li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: #6366f1;
        }

        /* Print styles */
        @media print {
          .print-bar { display: none !important; }
          .cv-wrap { padding-top: 40px; }
          .cv-page { background: #fff; }
          a { color: inherit; }
          .project-card { break-inside: avoid; }
          .exp-item { break-inside: avoid; }
        }

        @media (max-width: 600px) {
          .cv-wrap { padding: 80px 20px 40px; }
          .projects-grid { grid-template-columns: 1fr; }
          .ach-list { grid-template-columns: 1fr; }
          .skills-grid { grid-template-columns: 80px 1fr; }
          .exp-meta { text-align: left; }
        }
      `}</style>

      {/* Print bar */}
      <div className="print-bar">
        <a href="/" className="back-btn">← Back to portfolio</a>
        <span>DIVINE RAPHEAL — CURRICULUM VITAE</span>
        <button className="print-btn" onClick={() => window.print()}>
          ⬇ Save as PDF
        </button>
      </div>

      <div className="cv-wrap">

        {/* ── Header ── */}
        <header className="cv-header">
          <div className="cv-name">Divine Rapheal</div>
          <div className="cv-title">Web3 Developer · Blockchain Engineer · Full-Stack Builder</div>
          <div className="cv-contact">
            <a href="mailto:raphealdivine2@gmail.com">raphealdivine2@gmail.com</a>
            <span className="sep">·</span>
            <a href="https://github.com/Dipraise1" target="_blank" rel="noreferrer">github.com/Dipraise1</a>
            <span className="sep">·</span>
            <a href="https://t.me/jokersrequired" target="_blank" rel="noreferrer">t.me/jokersrequired</a>
            <span className="sep">·</span>
            <a href="https://divinebuilds.online" target="_blank" rel="noreferrer">divinebuilds.online</a>
            <span className="sep">·</span>
            <a href="https://x.com/divinecodes11" target="_blank" rel="noreferrer">@divinecodes11</a>
          </div>
        </header>

        {/* ── Summary ── */}
        <section className="cv-section">
          <div className="cv-section-title">Professional Summary</div>
          <p className="cv-summary">
            Self-driven Web3 engineer with 4+ years of hands-on experience shipping production-grade
            decentralized applications across DeFi, NFT, AI, and mobile. Fluent in Solidity, Rust,
            TypeScript, and Python. Built and deployed 20+ projects — from a multi-chain USDC remittance
            wallet (Sawa) to a decentralized vector database on Bittensor (Engram), automated trading bots
            with Jito MEV protection, and real-time on-chain analytics platforms. Comfortable leading
            full-stack architecture, writing battle-tested smart contracts, and shipping polished user
            interfaces.
          </p>
        </section>

        {/* ── Experience ── */}
        <section className="cv-section">
          <div className="cv-section-title">Experience</div>

          <div className="exp-item">
            <div className="exp-header">
              <div>
                <div className="exp-title">Founder &amp; Lead Developer</div>
                <div className="exp-company">Sawa Wallet</div>
              </div>
              <div className="exp-meta">2024 – Present · Remote</div>
            </div>
            <p className="exp-desc">
              Building Sawa Wallet — send USDC with just a phone number, no wallet address required.
              Non-custodial, multi-chain (Solana, Polygon, Base), designed for remittances across 50+ countries.
            </p>
            <ul className="exp-list">
              <li>Architected multi-chain USDC settlement layer across Solana, Polygon, and Base</li>
              <li>Built phone-number-to-wallet resolution system removing address complexity for end users</li>
              <li>Developed cross-platform mobile app with Expo, TypeScript, and React Native</li>
              <li>Designed non-custodial key management flow ensuring user funds remain self-sovereign</li>
              <li>Deployed production backend with real-time transaction status and push notifications</li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <div>
                <div className="exp-title">Senior Web3 Developer</div>
                <div className="exp-company">Freelance — Independent Consultant</div>
              </div>
              <div className="exp-meta">2022 – Present · Remote</div>
            </div>
            <p className="exp-desc">
              End-to-end development of decentralized applications, smart contracts, trading bots, and
              blockchain infrastructure for clients across DeFi, NFT, AI, and fintech sectors globally.
            </p>
            <ul className="exp-list">
              <li>Built Engram — decentralized vector database on Bittensor with HMAC challenge-response proofs and TAO incentive layer for miners</li>
              <li>Developed Multichain Trading Bot in Rust/TypeScript (Axum backend, Grammy Telegram interface) with Jito bundle support, auto TP/SL, GoPlus safety checks, and DexScreener price feeds across Solana, Ethereum, and BSC</li>
              <li>Shipped CabalSpy — real-time on-chain token tracking platform with Turnkey wallet auth and live EVM chain monitoring (Next.js + TypeScript)</li>
              <li>Created PumpFun Deployer Bot with Jito MEV protection for frontrun-resistant token launches on Solana</li>
              <li>Delivered OTTO+ Rewards — gamified Solana token account cleanup dApp with achievements, real-time stats, and SOL reward distribution</li>
              <li>Built The Basement yield aggregator on Meteora with auto-compounding across liquidity pools</li>
              <li>Deployed production Crypto Escrow DApp supporting both Ethereum and Solana with multi-party security (TypeScript 48.9%, Rust 27.3%, Solidity 15.1%)</li>
              <li>15+ smart contracts audited and deployed with $2M+ combined TVL across DeFi protocols</li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <div>
                <div className="exp-title">Senior App Developer</div>
                <div className="exp-company">Apeit.com (Apeit Wallet)</div>
              </div>
              <div className="exp-meta">2021 – 2022 · Remote</div>
            </div>
            <p className="exp-desc">
              Core developer on the Apeit Wallet product — contributed across mobile frontend, backend APIs,
              and blockchain integration from early architecture through to production launch.
            </p>
            <ul className="exp-list">
              <li>Developed key wallet features across React Native mobile and React web clients</li>
              <li>Integrated blockchain transaction layers and wallet connection flows</li>
              <li>Built scalable backend services handling real-time transaction data for 500+ users</li>
              <li>Optimized app performance reducing load times by 50% through code splitting and caching</li>
              <li>Collaborated cross-functionally on product roadmap, design, and QA processes</li>
            </ul>
          </div>
        </section>

        {/* ── Notable Projects ── */}
        <section className="cv-section">
          <div className="cv-section-title">Notable Projects</div>
          <div className="projects-grid">
            {[
              {
                name: 'Sawa Wallet',
                desc: 'Multi-chain USDC remittance wallet. Send crypto with a phone number — no addresses. Solana, Polygon, Base.',
                tags: ['Expo', 'React Native', 'TypeScript', 'Multi-chain', 'USDC'],
                link: 'https://sawawallet.org',
              },
              {
                name: 'Engram',
                desc: 'Decentralized vector DB on Bittensor. Content-addressed semantic memory for AI with TAO incentive layer.',
                tags: ['Python', 'Bittensor', 'AI', 'Vector DB', 'IPFS'],
                link: 'https://theengram.space',
              },
              {
                name: 'Multichain Trading Bot',
                desc: 'Rust/Axum bot with Telegram UI, Jito bundles, auto TP/SL, GoPlus checks, and multi-chain support.',
                tags: ['Rust', 'TypeScript', 'Solana', 'EVM', 'Jito'],
                link: 'https://t.me/multichaintradingbot',
              },
              {
                name: 'Crypto Escrow DApp',
                desc: 'Decentralized escrow supporting Ethereum and Solana. Multi-party security, wallet integration.',
                tags: ['Solidity', 'Rust', 'TypeScript', 'Next.js'],
                link: 'https://escrowdapp-cyan.vercel.app',
              },
              {
                name: 'CabalSpy',
                desc: 'Real-time token tracking platform with Turnkey wallet auth and live EVM on-chain monitoring.',
                tags: ['Next.js', 'TypeScript', 'Turnkey', 'Real-time'],
                link: null,
              },
              {
                name: 'FX AI Agent',
                desc: 'ML-powered forex trading agent. Real-time market analysis, signal generation, WebSocket feeds.',
                tags: ['Python', 'TensorFlow', 'ML', 'WebSocket'],
                link: null,
              },
            ].map((p) => (
              <div key={p.name} className="project-card">
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="project-link">{p.link.replace('https://', '')}</a>}
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="cv-section">
          <div className="cv-section-title">Technical Skills</div>
          <div className="skills-grid">
            {[
              ['Blockchain',  ['Solidity', 'Rust', 'Ethereum', 'Solana', 'Polygon', 'Base', 'BSC', 'Web3.js', 'Ethers.js', 'Anchor', 'Metaplex', 'Jito']],
              ['Frontend',   ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite']],
              ['Mobile',     ['React Native', 'Expo', 'Flutter']],
              ['Backend',    ['Node.js', 'Rust/Axum', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']],
              ['AI / ML',    ['TensorFlow', 'Bittensor', 'Vector DBs', 'LLM Integration', 'AI Agents']],
              ['Tools',      ['Git', 'Docker', 'AWS', 'Vercel', 'Hardhat', 'Truffle', 'Foundry', 'IPFS']],
              ['Protocols',  ['DeFi', 'NFT Standards', 'ERC-20/721/1155', 'SPL Tokens', 'Cross-chain Bridges', 'MEV']],
            ].map(([cat, tags]) => (
              <div key={cat} style={{ display: 'contents' }}>
                <div className="skill-cat">{cat}</div>
                <div className="skill-tags">
                  {tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ── */}
        <section className="cv-section">
          <div className="cv-section-title">Education</div>
          {[
            {
              degree: 'BSc Software Engineering',
              inst: 'Miva Open University',
              period: '2025 – Present',
              desc: 'Software Engineering with focus on modern development practices, distributed systems, and scalable architecture.',
            },
            {
              degree: 'BSc Computer Science',
              inst: 'University of Abuja',
              period: '2024 – Present',
              desc: 'Computer Science foundations — computational theory, algorithms, data structures, and system design.',
            },
            {
              degree: 'Self-Taught Developer',
              inst: 'Online Platforms & Bootcamps (Udemy, freeCodeCamp, BuildSpace)',
              period: '2020 – 2022',
              desc: 'Intensive self-directed learning in blockchain development, Solidity, React, and Web3 tooling.',
            },
          ].map((e) => (
            <div key={e.degree} className="edu-item">
              <div className="edu-degree">{e.degree}</div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 2 }}>
                <span className="edu-inst">{e.inst}</span>
                <span className="edu-period">· {e.period}</span>
              </div>
              <div className="edu-desc">{e.desc}</div>
            </div>
          ))}
        </section>

        {/* ── Achievements ── */}
        <section className="cv-section">
          <div className="cv-section-title">Key Achievements</div>
          <ul className="ach-list">
            <li>20+ production-grade DApps built and deployed</li>
            <li>15+ smart contracts with $2M+ combined TVL</li>
            <li>Founder of Sawa Wallet — serving 50+ countries</li>
            <li>Engram: decentralized AI memory on Bittensor mainnet</li>
            <li>50+ client projects delivered across 6 countries</li>
            <li>Multi-chain expertise: Solana, Ethereum, Polygon, Base, BSC</li>
            <li>Open-source contributor across blockchain tooling repos</li>
            <li>Production bots processing live trading volume on Solana &amp; EVM</li>
          </ul>
        </section>

        {/* Footer */}
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 16, marginTop: 8 }}>
          <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#aaa', textAlign: 'center', letterSpacing: '0.08em' }}>
            divinebuilds.online · raphealdivine2@gmail.com · github.com/Dipraise1
          </p>
        </div>

      </div>
    </div>
  );
};

export default CV;
