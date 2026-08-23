import Link from "next/link";

export default function LibraryPage() {
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

      <section className="journey-hero">
        <p className="small-label">THE ROOTED COLLECTION</p>

        <h1>LIBRARY</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Resources to help you
          <br />
          remain rooted in Christ.
        </p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">ROOTED RESOURCES</p>

        <h2>
          Read.
          <br />
          Learn.
          <br />
          Grow.
        </h2>

        <p>
          Welcome to the Rooted Library. This is a growing collection of
          Scripture resources, devotionals and practical tools created to help
          you slow down, encounter God and live what you are learning.
        </p>

        <div className="gold-line" />
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Let the word of Christ dwell in you richly.
          </p>

          <small>COLOSSIANS 3:16 · WEB</small>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">COMING TO THE LIBRARY</p>

        <h2>
          A place
          <br />
          to return to.
        </h2>

        <p>
          Explore devotionals, Scripture journeys, journals and other Rooted
          resources designed for your walk with God and your life at home.
        </p>

        <Link href="/journey" className="primary-button">
          Begin the Awake Journey
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
