import { useEffect } from 'react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';

const CvPage = () => {
  const cvPath = '/cv.pdf';

  useEffect(() => {
    document.title = 'CV - Divine Rapheal';
  }, []);

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="border-b border-white/10 bg-[rgba(12,10,15,0.9)]">
        <div className="container-custom flex flex-wrap items-center justify-between gap-3 py-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-ibm text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary-lighter)]"
          >
            <ArrowLeft size={14} />
            Portfolio
          </a>

          <p className="font-display text-sm font-semibold text-[var(--color-text)]">
            Divine Rapheal CV
          </p>

          <div className="flex items-center gap-2">
            <a
              href={cvPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded border border-white/10 px-3 py-2 font-ibm text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary-lighter)] hover:text-[var(--color-primary-lighter)]"
            >
              <ExternalLink size={13} />
              Open
            </a>
            <a
              href={cvPath}
              download="Divine-Rapheal-CV.pdf"
              className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-darker)] px-3 py-2 font-ibm text-[10px] uppercase tracking-[0.14em] text-white"
            >
              <Download size={13} />
              Download
            </a>
          </div>
        </div>
      </div>

      <section className="container-custom py-4 sm:py-6">
        <div className="overflow-hidden rounded border border-white/10 bg-white">
          <iframe
            title="Divine Rapheal CV"
            src={`${cvPath}#toolbar=1&navpanes=0`}
            className="h-[calc(100vh-112px)] min-h-[620px] w-full"
          />
        </div>
      </section>
    </main>
  );
};

export default CvPage;
