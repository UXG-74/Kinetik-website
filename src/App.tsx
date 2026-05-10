import './App.css'
import { assets } from './figmaAssets'
import { CyclingPhoneMockup } from './components/CyclingPhoneMockup'

const NAV = [
  { id: 'features', label: 'Features' },
  { id: 'training', label: 'Training' },
  { id: 'community', label: 'Community' },
  { id: 'pricing', label: 'Pricing' },
] as const

export default function App() {
  return (
    <div className="site">
      <header className="hdr">
        <div className="container hdr-inner">
          <a className="brand-mark" href="#hero">
            <p className="brand-logo">KINETIK</p>
            <p className="brand-tag">Measure what matters</p>
          </a>

          <nav className="nav-row" aria-label="Primary">
            {NAV.map(({ id, label }) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="hdr-actions">
            <a className="btn btn-outline btn-sign-in" href="#hero">
              Sign in
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-video" aria-hidden>
            <video autoPlay muted loop playsInline>
              <source src={assets.heroVideo} type="video/mp4" />
            </video>
          </div>

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                PERFORMANCE TRACKING REIMAGINED
              </p>
              <h1 className="hero-display cal">
                <span className="hero-line">Train </span>
                <span className="hero-line">
                  <span className="accent">smarter</span>.
                </span>
                <span className="hero-line">Win more.</span>
              </h1>
              <p className="hero-lede body-copy">
                AI-powered performance analytics that adapts to your training
                rhythm. Track every metric, crush every goal.
              </p>
              <div className="hero-cta">
                {/* Figma homepage 2108:823–824 — 200px pill column */}
                <div className="hero-cta-slot">
                  <a className="btn btn-fill btn-hero-primary" href="#pricing">
                    Start FREE trial
                  </a>
                </div>
                {/* Figma homepage 2108:826–827 — black outer rule + inner #02fb9b pill */}
                <div className="watch-demo-outer">
                  <a
                    className="btn btn-ghost-outline btn-hero-secondary watch-demo-inner"
                    href="#features"
                  >
                    {/*
                     * Figma 2108:828: one text line (“Watch demo ▶”), inline spans + space —
                     * not sibling flex items, so spacing matches the file’s trailing space glyph.
                     */}
                    <span className="watch-demo-copy">
                      <span className="watch-demo-label">Watch demo </span>
                      <span className="watch-demo-play" aria-hidden>
                        ▶
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="trust-row">
                <p className="trust-intro">
                  Trusted by 80,000+ athletes worldwide
                </p>
                <div className="trust-inline">
                  <span className="stars" aria-label="5 stars">
                    ★★★★★
                  </span>
                  <span className="trust-rating">4.9 rated by athletes</span>
                </div>
              </div>
            </div>

            <div className="hero-media">
              <CyclingPhoneMockup />
            </div>
          </div>
        </section>

        <section className="sheet sheet-dark" id="features">
          <div className="sheet-bg-img" aria-hidden>
            <img src={assets.featuresBg} alt="" />
          </div>
          <div className="sheet-vector" aria-hidden>
            <img src={assets.featuresVector} alt="" />
          </div>
          <div className="container section-inner">
            <p className="section-eyebrow">Features</p>
            <h2 className="section-title">
              Built for athletes who demand more.
            </h2>
            <div className="feature-grid">
              {[
                {
                  icon: '⚡',
                  title: 'Real-Time Performance',
                  body: 'Live pace, HR zones, power output — every metric streamed as you move.',
                },
                {
                  icon: '🧠',
                  title: 'AI Training Plans',
                  body: 'Adaptive plans that respond to your recovery, sleep, and performance data daily.',
                },
                {
                  icon: '📊',
                  title: 'Deep Analytics',
                  body: 'Post-workout breakdowns with splits, effort scores, and trend analysis over time.',
                },
                {
                  icon: '🏆',
                  title: 'Global Leaderboards',
                  body: 'Compete with athletes worldwide across distance, speed, and weekly volume goals.',
                },
              ].map((f) => (
                <article key={f.title} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p className="body-copy">{f.body}</p>
                  <a href="#hero">Learn more →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sheet sheet-muted" id="training">
          <div className="container section-inner training-split">
            <div>
              <p className="section-eyebrow">Training</p>
              <h2 className="section-title">What progress looks like.</h2>
              <p className="section-lede body-copy">
                AI that learns your rhythm and adapts as you grow.
              </p>

              <div className="training-grid-top">
                {[
                  { label: 'Faster than their first session', pct: 23, v: '23%' },
                  { label: 'Showing up every week', pct: 78, v: '78%' },
                  { label: 'Sessions logged this month', pct: 90, v: '2.4M' },
                ].map((s) => (
                  <div key={s.label} className="stat-line">
                    <span className="stat-line-label body-copy">{s.label}</span>
                    <strong>{s.v}</strong>
                    <div className="stat-bar">
                      <div
                        className="stat-bar-fill"
                        style={{ width: `${s.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stat-panels">
              <div className="stat-mini">
                <h4>94%</h4>
                <span className="body-copy">Hit goals in 90 days</span>
              </div>
              <div className="stat-mini">
                <h4>93%</h4>
                <span className="body-copy">Don’t quit</span>
              </div>
              <div className="stat-mini">
                <h4>4.9★</h4>
                <span className="body-copy">Rated by athletes</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sheet sheet-dark" id="community">
          <div className="container section-inner">
            <p className="section-eyebrow">Community</p>
            <h2 className="section-title">See where you rank.</h2>
            <p className="section-lede body-copy">
              AI-powered performance analytics that adapts to your training
              rhythm. Track every metric, crush every goal.
            </p>

            <div className="leader-card">
              <div className="leader-row leader-head">
                <span />
                <span>RANK</span>
                <span>ATHLETE</span>
                <span>WEEKLY KM</span>
                <span>WORKOUTS</span>
                <span>POINTS</span>
              </div>
              {[
                {
                  rank: '1',
                  name: 'Sarah K.',
                  place: 'London',
                  km: '142.8 km',
                  wo: '14',
                  pts: '14,220',
                },
                {
                  rank: '2',
                  name: 'Alex R.',
                  place: 'Dublin',
                  km: '128.4 km',
                  wo: '12',
                  pts: '12,840',
                  hi: true,
                },
                {
                  rank: '3',
                  name: 'Marcus T.',
                  place: 'Berlin',
                  km: '115.2 km',
                  wo: '11',
                  pts: '11,560',
                },
                {
                  rank: '4',
                  name: 'Jordan M.',
                  place: 'NYC',
                  km: '109.6 km',
                  wo: '10',
                  pts: '10,980',
                },
                {
                  rank: '5',
                  name: 'Priya S.',
                  place: 'Mumbai',
                  km: '98.4 km',
                  wo: '9',
                  pts: '9,840',
                },
              ].map((row) => (
                <div
                  key={row.rank}
                  className={`leader-row${row.hi ? ' leader-strong' : ''}`}
                >
                  <span className="avatar" aria-hidden />
                  <strong>{row.rank}</strong>
                  <div>
                    <div>{row.name}</div>
                    <div className="body-copy" style={{ opacity: 0.72 }}>
                      {row.place}
                    </div>
                  </div>
                  <span>{row.km}</span>
                  <span>{row.wo}</span>
                  <span>{row.pts}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sheet pricing-shell" id="pricing">
          <div className="sheet-bg-img" aria-hidden>
            <img
              src="https://www.figma.com/api/mcp/asset/d0d164fd-381c-4f6a-81cd-08d20293ef98"
              alt=""
            />
          </div>
          <div className="container section-inner">
            <div className="pricing-split">
              <div>
                <p className="section-eyebrow">Pricing</p>
                <h2 className="section-title">Your pace. Your plan.</h2>
                <p className="section-lede body-copy">
                  Select from best plan, ensuring a perfect match. Need more or
                  less? Customise your subscription for a seamless fit!
                </p>
                <a className="btn btn-fill" href="#hero">
                  Start for free
                </a>
                <p className="pricing-lede-note body-copy">
                  All plans include a <strong>30-day free trial</strong>. No
                  credit card required.{' '}
                  <a href="#hero">See full terms →</a>
                </p>
              </div>

              <div className="pricing-row">
                <article className="pricing-card">
                  <h3>Starter</h3>
                  <p className="pr-desc body-copy">
                    For athletes who are just getting started.
                  </p>
                  <div className="pr-price">Free</div>
                  <p className="pr-cycle">30-day trial</p>
                  <ul>
                    {[
                      'Basic workout tracking',
                      '3 metrics per session',
                      '7-day history',
                    ].map((t) => (
                      <li key={t}>
                        <span className="check-dot" aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a className="btn btn-ghost-outline" href="#hero">
                    Get Starter
                  </a>
                </article>

                <article className="pricing-card pricing-featured">
                  <span className="badge-pop">MOST POPULAR</span>
                  <h3>Pro</h3>
                  <p className="pr-desc body-copy">
                    For performance-driven athletes. Every metric.
                  </p>
                  <div className="pr-price">£9</div>
                  <p className="pr-cycle">per month</p>
                  <ul>
                    {[
                      'Track every workout',
                      'All metrics & sensors',
                      'Leaderboard data',
                      'Community challenges',
                    ].map((t) => (
                      <li key={t}>
                        <span className="check-dot" aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a className="btn btn-fill" href="#hero">
                    Get Pro
                  </a>
                </article>

                <article className="pricing-card">
                  <h3>Elite</h3>
                  <p className="pr-desc body-copy">
                    For athletes who leave nothing behind.
                  </p>
                  <div className="pr-price">£24</div>
                  <p className="pr-cycle">per month</p>
                  <ul>
                    {[
                      'Everything in Pro',
                      '1-on-1 AI coach sessions',
                      'Custom training plans',
                      'Biomechanics data',
                      'Early access',
                    ].map((t) => (
                      <li key={t}>
                        <span className="check-dot" aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a className="btn btn-ghost-outline" href="#hero">
                    Get Elite
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <p className="brand-logo" style={{ marginBottom: 8 }}>
              KINETIK
            </p>
            <p className="body-copy" style={{ color: 'var(--muted)' }}>
              Measure what matters
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a className="footer-link" href="#features">
              Features
            </a>
            <a className="footer-link" href="#pricing">
              Pricing
            </a>
            <a className="footer-link" href="#hero">
              Download
            </a>
            <a className="footer-link" href="#hero">
              Changelog
            </a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a className="footer-link" href="#hero">
              About
            </a>
            <a className="footer-link" href="#hero">
              Blog
            </a>
            <a className="footer-link" href="#hero">
              Careers
            </a>
            <a className="footer-link" href="#hero">
              Press
            </a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a className="footer-link" href="#hero">
              Help Center
            </a>
            <a className="footer-link" href="#community">
              Community
            </a>
            <a className="footer-link" href="#hero">
              Privacy
            </a>
            <a className="footer-link" href="#hero">
              Terms
            </a>
          </div>
        </div>
        <p className="container footer-meta body-copy">© 2026 KINETIK</p>
      </footer>
    </div>
  )
}
