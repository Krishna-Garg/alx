import { useMemo, useState } from 'react';

const launches = [
  {
    name: 'VectorMint',
    category: 'Dev Tools',
    summary: 'Zero-setup semantic search API for indie SaaS teams.',
    trend: 'Underrated',
  },
  {
    name: 'PulseDraft AI',
    category: 'Productivity',
    summary: 'Voice-to-product-brief workspace that ships structured roadmaps.',
    trend: 'New Launch',
  },
  {
    name: 'OrbitRender',
    category: 'Creative AI',
    summary: 'Fast AI scene generation for ad teams and social campaigns.',
    trend: 'Untouched Gem',
  },
  {
    name: 'FrameLedger',
    category: 'Analytics',
    summary: 'Attribution-first AI dashboard for micro ad budgets.',
    trend: 'New Launch',
  },
];

const feedback = [
  {
    quote:
      'NovaReach took our hidden AI beta from 200 users to 16k in 9 weeks through creator-native social campaigns.',
    author: 'Lina Park',
    role: 'Growth Lead, ArcNeuron',
  },
  {
    quote:
      'Their positioning turned our technical product into a story people shared. We closed 3 enterprise pilots right after launch.',
    author: 'Emre Kaya',
    role: 'Founder, Synthex Labs',
  },
];

const faqs = [
  {
    q: 'How do you discover underrated AI launches?',
    a: 'We monitor builder communities, launch channels, pre-product-hunt communities, and founder networks daily, then curate signals manually.',
  },
  {
    q: 'Can you run social media marketing for AI startups post-listing?',
    a: 'Yes. NovaReach provides positioning, organic growth strategy, short-form content systems, and paid social acceleration for tech teams.',
  },
  {
    q: 'What is the fastest way to contact your agency?',
    a: 'Use the contact form below or the live chat CTA. We typically respond within 24 hours on business days.',
  },
];

function App() {
  const [form, setForm] = useState({ name: '', email: '', subject: '' });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Inquiry from ${form.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nSubject / Message:\n${form.subject}`,
    );
    return `mailto:novareach.agency@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <div className="page-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top">
          Nova<span>Reach</span>
        </a>
        <nav>
          <a href="#launches">AI Launches</a>
          <a href="#credentials">Credentials</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="chat-btn" href="https://wa.me/10000000000" target="_blank" rel="noreferrer">
          Chat with us
        </a>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">For AI founders & tech growth teams</p>
          <h1>Discover underrated AI launches. Amplify them with agency-grade social growth.</h1>
          <p className="hero-copy">
            We curate untouched AI products and connect them with market-ready storytelling. NovaReach helps tech
            companies transform launches into lasting demand.
          </p>
          <div className="hero-cta">
            <a href="#launches" className="btn primary">
              Explore Launches
            </a>
            <a href="#contact" className="btn ghost">
              Book Strategy Call
            </a>
          </div>
          <div className="hero-orb" aria-hidden="true" />
        </section>

        <section className="section" id="launches">
          <div className="section-head">
            <h2>New / Untouched AI Launches</h2>
            <p>Fresh products with strong potential but low mainstream saturation.</p>
          </div>
          <div className="card-grid">
            {launches.map((item) => (
              <article key={item.name} className="launch-card">
                <span className="pill">{item.trend}</span>
                <h3>{item.name}</h3>
                <p className="cat">{item.category}</p>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section credentials" id="credentials">
          <div>
            <h2>Agency Credentials</h2>
            <p>
              NovaReach is a social media marketing agency specialized in tech products. From founder-led narratives to
              full-stack campaign execution, we design growth loops that convert attention into pipeline.
            </p>
          </div>
          <ul>
            <li>120+ tech campaigns shipped</li>
            <li>Avg. 3.4x lift in launch visibility</li>
            <li>Cross-platform growth systems (X, LinkedIn, Shorts)</li>
          </ul>
        </section>

        <section className="section" id="feedback">
          <div className="section-head">
            <h2>Founder Feedback</h2>
          </div>
          <div className="feedback-grid">
            {feedback.map((item) => (
              <blockquote key={item.author}>
                “{item.quote}”
                <footer>
                  {item.author} · <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="section" id="faqs">
          <div className="section-head">
            <h2>FAQs</h2>
          </div>
          <div className="faq-wrap">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-head">
            <h2>Contact NovaReach</h2>
            <p>Tell us about your AI launch, and we will suggest a growth path.</p>
          </div>
          <form className="contact-form" action={mailto} method="post">
            <label>
              Name
              <input
                required
                name="name"
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              />
            </label>
            <label>
              Subject
              <textarea
                required
                name="subject"
                rows="5"
                value={form.subject}
                onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
              />
            </label>
            <button className="btn primary" type="submit">
              Send to Agency Gmail
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <h3>NovaReach Agency</h3>
          <p>Social media marketing for AI and tech companies ready for broader market reach.</p>
        </div>
        <div>
          <h4>Sitemap</h4>
          <a href="#launches">AI Launches</a>
          <a href="#credentials">Credentials</a>
          <a href="#feedback">Feedback</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
