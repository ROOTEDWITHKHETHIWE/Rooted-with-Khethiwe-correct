import Link from "next/link";

export default function Day01Page() {
  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand">
          <span className="leaf">❧</span>
          <span>MIDWEEK ROOTED</span>
          <span className="leaf">❧</span>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/library">Library</Link>
        </nav>
      </header>

      <section className="day-hero">
        <p className="small-label">AWAKE · DAY 01</p>

        <h1>
          The Sound That
          <br />
          Interrupts Sleep
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Ephesians 5:14 · World English Bible
        </p>
      </section>

      <section className="day-scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Awake, O sleeper, and arise from the dead, and Christ will shine
            on you.
          </p>

          <small>EPHESIANS 5:14 · WEB</small>
        </div>
      </section>

      <section className="day-content">
        <div className="day-content-label">
          <p className="section-label">TODAY'S TEACHING</p>
        </div>

        <article>
          <p>
            God’s call to awaken is mercy. He interrupts spiritual sleep
            because there is more life available than the life we have
            accepted.
          </p>

          <p>
            Awakening is not manufactured emotion; it is recovered
            responsiveness to Christ.
          </p>
        </article>
      </section>

      <section className="truth-card">
        <p className="section-label">TODAY'S TRUTH</p>

        <h2>
          God’s call to awaken
          <br />
          is mercy.
        </h2>
      </section>

      <section className="reflection-section">
        <div>
          <p className="section-label">REFLECT</p>

          <h2>
            Where have I become
            <br />
            spiritually unresponsive
            <br />
            or overly familiar?
          </h2>
        </div>

        <div className="reflection-space">
          <p>
            Take a moment to answer honestly. You do not need to make your
            response sound spiritual.
          </p>

          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />
        </div>
      </section>

      <section className="prayer-section">
        <p className="section-label">PRAY</p>

        <h2>Father, bring this truth from the page into my life.</h2>

        <p>
          Correct what must change, strengthen what must remain and give me
          grace to obey You today.
        </p>

        <p className="amen">Amen.</p>
      </section>

      <section className="respond-section">
        <p className="section-label">RESPOND</p>

        <h2>“Lord, what are You awakening in me?”</h2>

        <p>
          Write without editing.
        </p>

        <div className="response-box">
          <span>Your response</span>
        </div>
      </section>

      <section className="day-navigation">
        <Link href="/journey" className="text-link">
          ← Back to the journey
        </Link>

        <Link href="/journey/day-02" className="primary-button">
          Continue to Day 02
          <span>→</span>
        </Link>
      </section>

      <footer>
        <div className="footer-brand">MIDWEEK ROOTED</div>

        <div>A monthly Scripture journey</div>
      </footer>
    </main>
  );
}
