import { FileText } from 'lucide-react';
import { EXPERIENCE, SKILLS, EDUCATION } from '../data/site';

const Resume = () => (
  <section id="experience" className="section">
    <div className="container-custom">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="section-title">Experience</h2>
        <a href="/cv" className="btn-quiet self-start sm:self-auto">
          <FileText size={14} />
          View CV
        </a>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <ol className="space-y-10">
          {EXPERIENCE.map((job) => (
            <li key={job.company} className="border-t border-[var(--line)] pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-[var(--text)]">{job.title}</h3>
                <p className="text-[13px] text-[var(--muted)]">{job.period}</p>
              </div>
              <p className="text-[13.5px] text-[var(--accent-text)]">{job.company}</p>
              <p className="mt-3 max-w-[62ch] text-[13.5px] text-[var(--text-2)]">{job.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[13.5px] text-[var(--muted)] marker:text-[var(--accent)]">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="space-y-10">
          <div className="border-t border-[var(--line)] pt-5">
            <h3 className="font-display text-lg font-semibold text-[var(--text)]">Skills</h3>
            <dl className="mt-4 space-y-3">
              {Object.entries(SKILLS).map(([cat, list]) => (
                <div key={cat}>
                  <dt className="label">{cat}</dt>
                  <dd className="text-[13.5px] text-[var(--text-2)]">{list.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-[var(--line)] pt-5">
            <h3 className="font-display text-lg font-semibold text-[var(--text)]">Education</h3>
            <ul className="mt-4 space-y-4">
              {EDUCATION.map((e) => (
                <li key={e.degree}>
                  <p className="text-[14px] text-[var(--text)]">{e.degree}</p>
                  <p className="text-[13px] text-[var(--muted)]">
                    {e.institution}, {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
