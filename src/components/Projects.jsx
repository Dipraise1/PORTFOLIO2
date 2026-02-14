import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, ArrowRight, MessageCircle } from 'lucide-react';
import useTranslation from '../hooks/useTranslation';
import { projects } from '../data/projects.jsx';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());
  const { t } = useTranslation();

  const filteredProjects = useMemo(
    () => (activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  const filters = [
    { id: 'all', label: t('projects.allProjects') },
    { id: 'blockchain', label: t('projects.blockchain') },
    { id: 'defi', label: t('projects.defi') },
    { id: 'finance', label: t('projects.finance') },
    { id: 'ai', label: t('projects.ai') },
    { id: 'web', label: t('projects.web') }
  ];

  return (
    <section className="section-padding relative overflow-visible" id="projects">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10 overflow-visible">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] px-4 py-2 rounded-full bg-[var(--color-secondary-lighter)]/50 border border-[var(--color-border)] mb-6 backdrop-blur-md">
            <Code2 size={18} className="text-[var(--color-primary)]" />
            <span className="text-sm font-medium">{t('projects.githubProjects')}</span>
          </div>

          <h2 className="section-heading mb-4 sm:mb-6">
            <span className="heading-gradient">{t('projects.recentWorks')}</span>
          </h2>

          <p className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('projects.description')}
          </p>
          <p className="text-[var(--color-text-muted)] text-sm mt-2" aria-hidden="true">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === filter.id
                  ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/25'
                  : 'bg-[var(--color-secondary-lighter)]/50 text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-primary)]/50 hover:text-[var(--color-text)]'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group h-full"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`
                  card h-full p-1 relative overflow-hidden transition-all duration-500
                  ${hoveredId === project.id ? 'transform -translate-y-2' : ''}
                `}>
                  {/* Gradient Border Effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]
                    opacity-0 transition-opacity duration-500
                    ${hoveredId === project.id ? 'opacity-100' : ''}
                  `} />

                  {/* Card Content */}
                  <div className="relative h-full bg-[var(--color-secondary-lighter)] rounded-xl p-4 sm:p-6 flex flex-col z-10">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`
                        p-3 rounded-xl transition-all duration-500 overflow-hidden flex items-center justify-center
                        ${hoveredId === project.id ? 'bg-[var(--color-primary)]/10 scale-110' : 'bg-[var(--color-secondary-darker)]/50'}
                        ${project.image ? 'w-16 h-16' : ''}
                      `}>
                        {project.image && !imageErrors.has(project.id) ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-10 h-10 object-contain"
                            onError={() => setImageErrors((s) => new Set(s).add(project.id))}
                          />
                        ) : (
                          project.icon
                        )}
                      </div>

                      <div className="flex gap-2">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-secondary-darker)] transition-all"
                            title="View Code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-secondary-darker)] transition-all"
                            title="Visit Site"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium px-2.5 py-1 rounded-md bg-[var(--color-secondary-darker)]/80 text-[var(--color-text-muted)] border border-[var(--color-border)]/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats & Action */}
                    <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                      <div className="text-xs text-[var(--color-text-muted)]">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </div>

                      <a
                        href={project.githubLink || project.liveLink || '#'}
                        target="_blank"
                        rel="noreferrer"
                        className={`
                          text-sm font-medium flex items-center gap-1 transition-all duration-300
                          ${hoveredId === project.id ? 'text-[var(--color-primary)] translate-x-0' : 'text-[var(--color-text-secondary)] -translate-x-1'}
                        `}
                      >
                        Details <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 sm:mt-20 text-center flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <a
            href="https://github.com/Dipraise1"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary group flex items-center gap-2"
          >
            <span>{t('projects.viewMoreOnGitHub')}</span>
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>

          <a
            href="https://t.me/jokersrequired"
            target="_blank"
            rel="noreferrer"
            className="btn duration-300 bg-[#229ED9]/10 text-[#229ED9] border border-[#229ED9]/20 hover:bg-[#229ED9]/20 hover:shadow-lg hover:shadow-[#229ED9]/20 flex items-center gap-2"
          >
            <span>{t('projects.joinTelegramChannel')}</span>
            <MessageCircle className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
