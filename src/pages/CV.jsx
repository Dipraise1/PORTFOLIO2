import { useEffect } from 'react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';

const cvPath = '/cv.pdf';

const CvPage = () => {
  useEffect(() => {
    document.title = 'CV | Divine Rapheal';
  }, []);

  return (
    <main className="min-h-screen">
      <div className="border-b border-[var(--line-soft)]">
        <div className="container-custom flex flex-wrap items-center justify-between gap-3 py-3">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <ArrowLeft size={15} />
            Portfolio
          </a>

          <h1 className="font-display text-[15px] font-semibold text-[var(--text)]">Divine Rapheal, CV</h1>

          <div className="flex items-center gap-2">
            <a href={cvPath} target="_blank" rel="noreferrer" className="btn-quiet !px-3 !py-2">
              <ExternalLink size={14} />
              Open
            </a>
            <a href={cvPath} download="Divine-Rapheal-CV.pdf" className="btn-primary !px-3 !py-2">
              <Download size={14} />
              Download
            </a>
          </div>
        </div>
      </div>

      <section className="container-custom py-4 sm:py-6">
        <p className="mb-4 max-w-[70ch] text-[13.5px] text-[var(--muted)]">
          Web3 and full-stack developer. Founder of Sawa Wallet and Nexxra Digitals. The full CV is
          below as a PDF.
        </p>
        <div className="overflow-hidden rounded-md bg-white">
          <iframe
            title="Divine Rapheal CV (PDF)"
            src={`${cvPath}#toolbar=1&navpanes=0`}
            className="h-[calc(100vh-150px)] min-h-[620px] w-full"
          />
        </div>
      </section>
    </main>
  );
};

export default CvPage;
