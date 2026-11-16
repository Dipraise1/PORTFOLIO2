import { TESTIMONIALS } from '../data/site';

const Testimonials = () => {
  const [lead, ...others] = TESTIMONIALS;

  return (
    <section id="clients" className="section">
      <div className="container-custom">
        <h2 className="section-title">What clients say</h2>

        <figure className="mt-10 max-w-3xl">
          <blockquote
            className="font-display font-medium leading-snug text-[var(--text)]"
            style={{ fontSize: 'clamp(1.25rem, 2.6vw, 1.75rem)' }}
          >
            “{lead.text}”
          </blockquote>
          <figcaption className="mt-5 text-[13.5px] text-[var(--muted)]">
            <span className="text-[var(--text)]">{lead.name}</span>, {lead.role}. {lead.project}.
          </figcaption>
        </figure>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {others.map((t) => (
            <figure key={t.name} className="border-t border-[var(--line)] pt-5">
              <blockquote className="text-[13.5px] text-[var(--text-2)]">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-[13px] text-[var(--muted)]">
                <span className="text-[var(--text)]">{t.name}</span>, {t.role}
                <br />
                {t.project}. {t.location}.
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
