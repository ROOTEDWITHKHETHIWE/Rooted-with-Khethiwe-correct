import Link from "next/link";

export default function Home() {
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

      <section className="hero">
        <div className="hero-wash wash-one" />
        <div className="hero-wash wash-two" />

        <div className="hero-content">
          <p className="small-label">A MONTHLY SCRIPTURE JOURNEY</p>

          <h1>AWAKE</h1>

          <div className="ornament">
            <span>✦</span>
          </div>

          <p className="subtitle">
            A 30-Day Journey of Returning,
            <br />
            Remembering and Preparing with God
          </p>

          <div className="floral-divider">
            <span>❀</span>
            <span>✦</span>
            <span>❀</span>
          </div>

          <Link href="/journey" className="primary-button">
            Begin the journey
            <span>→</span>
          </Link>

          <p className="hero-note">30 DAYS · FREE</p>
        </div>

        <div className="botanical botanical-left">❋</div>
        <div className="botanical botanical-right">❋</div>
      </section>

      <section className="threshold">
        <p className="section-label">THE INVITATION</p>

        <h2>
          Become attentive
          <br />
          to God again.
        </h2>

        <p>
          Awake is a thirty-day journey for women who sense God calling them
          to pay attention again — to return, remember, repent, prepare and
          walk into the next season with an obedient heart.
        </p>

        <div className="gold-line" />
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Awake, O sleeper, and arise from the dead, and Christ will shine
            on you.
          </p>

          <small>EPHESIANS 5:14 · WEB</small>
        </div>
      </section>

      <section className="journey-preview">
        <div>
          <p className="section-label">YOUR 30 DAYS</p>

          <h2>
            Not simply
            <br />
            pages to finish.
          </h2>
        </div>

        <div className="journey-copy">
          <p>
            Read the Scripture. Receive the teaching. Reflect honestly. Pray.
            Respond.
          </p>

          <p>
            The goal is not to finish pages. The goal is to become responsive
            to God.
          </p>

          <Link href="/journey" className="text-link">
            Enter the journey <span>→</span>
          </Link>
        </div>
      </section>

      <section className="welcome">
        <div className="welcome-card">
          <p className="section-label">ROOTED WITH KHETHIWE</p>

          <h2>
            Scripture for the woman.
            <br />
            Formation for the home.
          </h2>

          <p>
            Each month, Rooted enters a different spiritual landscape. The
            colour, atmosphere and rhythm may change — but the invitation
            remains the same: return to God and become rooted in His Word.
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          MIDWEEK ROOTED
        </div>

        <div>
          A monthly Scripture journey
        </div>
      </footer>
    </main>
  );
}
