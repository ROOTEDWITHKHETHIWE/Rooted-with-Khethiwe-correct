import Link from "next/link";

export default function Home() {
  return (
    <main
      className="awake-page"
      style={{
        background: "#f7fbff",
        color: "#24496d",
      }}
    >
      <header
        className="topbar"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #d3e3f0",
        }}
      >
        <div className="brand">
          <span className="leaf">❧</span>
          <span>MIDWEEK ROOTED</span>
          <span className="leaf">❧</span>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/library">Library</Link>
        </nav>
      </header>

      <section
        className="hero"
        style={{
          background:
            "linear-gradient(135deg, #fbfdff 0%, #e4f2fb 55%, #d1e7f7 100%)",
        }}
      >
        <div className="hero-wash wash-one" />
        <div className="hero-wash wash-two" />

        <div className="hero-content">
          <p className="small-label">A MONTHLY SCRIPTURE JOURNEY</p>

          <h1
            style={{
              color: "#315a82",
              fontStyle: "italic",
            }}
          >
            BECOMING
          </h1>

          <div className="ornament">
            <span>❧</span>
          </div>

          <p className="subtitle">
            A 30-Day Devotional Journey of Identity,
            <br />
            Formation, Entrustment &amp; Occupation
          </p>

          <p
            style={{
              fontStyle: "italic",
              color: "#6287aa",
              fontSize: "1.2rem",
              marginTop: "1rem",
            }}
          >
            Stepping Into Who God Has Called You to Be
          </p>

          <div className="floral-divider">
            <span>❀</span>
            <span>❧</span>
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
          Step into who
          <br />
          God has called you to be.
        </h2>

        <p>
          Becoming is not a challenge to reinvent yourself. It is an invitation
          to let God separate who He created you to be from the identities
          formed by pain, survival, performance, expectation and previous
          seasons.
        </p>

        <div
          className="gold-line"
          style={{ background: "#8baeca" }}
        />
      </section>

      <section
        className="scripture"
        style={{
          background: "#e3f1fa",
          color: "#24496d",
        }}
      >
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Do not be conformed to this world, but be transformed by the
            renewing of your mind.
          </p>

          <small>ROMANS 12:2 · WEB</small>
        </div>
      </section>

      <section className="journey-preview">
        <div>
          <p className="section-label">YOUR 30 DAYS</p>

          <h2>
            Same you.
            <br />
            More of Him.
          </h2>
        </div>

        <div className="journey-copy">
          <p>
            Read the Scripture. Receive the teaching. Reflect honestly. Pray.
            Respond.
          </p>

          <p>
            Awake made room for repair. Becoming asks what happens next: Who
            are you now, and will you live from the identity God is
            establishing in you?
          </p>

          <Link href="/journey" className="text-link">
            Enter the journey <span>→</span>
          </Link>
        </div>
      </section>

      <section
        className="welcome"
        style={{
          background: "#edf7fc",
        }}
      >
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

      <footer
        style={{
          background: "#24496d",
          color: "#ffffff",
        }}
      >
        <div className="footer-brand">MIDWEEK ROOTED</div>
        <div>A monthly Scripture journey</div>
      </footer>
    </main>
  );
}
