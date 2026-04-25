import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, MessageCircle } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';
import { projects } from '../data/projects.jsx';

const CATEGORY_COLORS = {
  blockchain: { bg: 'rgba(99,102,241,0.1)',  text: '#a5b4fc', border: 'rgba(99,102,241,0.25)' },
  defi:       { bg: 'rgba(16,185,129,0.1)',  text: '#6ee7b7', border: 'rgba(16,185,129,0.25)' },
  ai:         { bg: 'rgba(34,211,238,0.1)',  text: '#67e8f9', border: 'rgba(34,211,238,0.25)' },
  finance:    { bg: 'rgba(245,158,11,0.1)',  text: '#fcd34d', border: 'rgba(245,158,11,0.25)' },
  web:        { bg: 'rgba(249,115,22,0.1)',  text: '#fdba74', border: 'rgba(249,115,22,0.25)' },
};

const FILTER_LABELS = {
  all:        'All',
  blockchain: 'Blockchain',
  defi:       'DeFi',
  ai:         'AI',
  finance:    'Finance',
  web:        'Web',
};

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const col = CATEGORY_COLORS[project.category] || CATEGORY_COLORS.blockchain;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
      className="relative group flex flex-col h-full cursor-default rounded-xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(22,27,34,0.95)' : 'rgba(22,27,34,0.6)',
        border: `1px solid ${hovered ? col.border : 'rgba(55,65,81,0.35)'}`,
        transition: 'border-color 0.2s, background 0.2s',
      }}
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(to right, ${col.text}, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div className="flex flex-col flex-1 p-4">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <span className="font-ibm text-[var(--color-text-muted)] text-[10px] select-none">{num}</span>
          <span
            className="font-ibm text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded"
            style={{ background: col.bg, color: col.text, border: `1px solid ${col.border}` }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-sm text-[var(--color-text)] group-hover:text-white transition-colors mb-2 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-ibm text-[var(--color-text-muted)] text-[10px] sm:text-[11px] leading-relaxed line-clamp-3 flex-1 mb-3">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-ibm text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded"
              style={{ background: 'rgba(10,15,26,0.8)', border: '1px solid rgba(55,65,81,0.4)', color: 'var(--color-text-muted)' }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="font-ibm text-[8px] text-[var(--color-text-muted)] opacity-40 self-center">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Footer: links */}
        <div className="flex items-center gap-1 mt-auto pt-3" style={{ borderTop: '1px solid rgba(55,65,81,0.25)' }}>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-1.5 rounded text-[var(--color-text-muted)] hover:text-[var(--color-primary-lighter)] hover:bg-[rgba(99,102,241,0.08)] transition-all"
            >
              <Github size={13} />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Live"
              className="p-1.5 rounded text-[var(--color-text-muted)] hover:text-[var(--color-cyan)] hover:bg-[rgba(34,211,238,0.08)] transition-all"
            >
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useTranslation();

  const filtered = useMemo(
    () => (activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  const filters = Object.keys(FILTER_LABELS);

  return (
    <section className="section-padding relative" id="projects">
      <div className="container-custom">

        {/* ─── Header ─── */}
        <motion.div
          className="mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="font-ibm text-[var(--color-cyan)] text-[10px] tracking-[0.25em] uppercase mb-2 opacity-70">
                // {t('projects.githubProjects')}
              </p>
              <h2
                className="font-display font-bold heading-gradient leading-none"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
              >
                {t('projects.recentWorks')}
              </h2>
            </div>
            <span className="font-ibm text-[var(--color-text-muted)] text-[11px] tracking-wide sm:pb-1">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </span>
          </div>

          {/* Divider */}
          <div className="mt-5 h-px" style={{ background: 'linear-gradient(to right, rgba(99,102,241,0.4), transparent)' }} />

          {/* Filters */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {filters.map((id) => {
              const active = activeFilter === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  className="font-ibm text-[10px] uppercase tracking-widest px-3 py-1.5 rounded transition-all duration-200"
                  style={{
                    background: active ? 'rgba(99,102,241,0.15)' : 'transparent',
                    border: `1px solid ${active ? 'rgba(99,102,241,0.4)' : 'rgba(55,65,81,0.4)'}`,
                    color: active ? 'var(--color-primary-lighter)' : 'var(--color-text-muted)',
                  }}
                >
                  {FILTER_LABELS[id]}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Project grid ─── */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ─── Footer CTAs ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 sm:mt-14 flex flex-wrap gap-3"
        >
          <a
            href="https://github.com/Dipraise1"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary group inline-flex items-center gap-2"
          >
            <Github size={15} />
            <span>{t('projects.viewMoreOnGitHub')}</span>
            <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://t.me/jokersrequired"
            target="_blank"
            rel="noreferrer"
            className="btn inline-flex items-center gap-2"
            style={{ background: 'rgba(34,173,217,0.08)', border: '1px solid rgba(34,173,217,0.2)', color: '#67d4f5' }}
          >
            <MessageCircle size={15} />
            <span>{t('projects.joinTelegramChannel')}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
