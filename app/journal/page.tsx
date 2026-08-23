import Link from "next/link";

export default function JournalPage() {
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
          <Link href="/courses">Courses</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/library">Library</Link>
        </nav>
      </header>

      <section className="journey-hero">
        <p className="small-label">YOUR JOURNAL</p>

        <h1>JOURNAL</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Take what you are learning
          <br />
          beyond the screen.
        </p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">AWAKE</p>

        <h2>
          Make space
          <br />
          to respond.
        </h2>

        <p>
          The Awake journey is designed to be read slowly and lived honestly.
          Use the journal alongside each day to write, reflect and respond to
          what God is showing you.
        </p>

        <div className="gold-line" />
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>Let the word of Christ dwell in you richly.</p>

          <small>COLOSSIANS 3:16 · WEB</small>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">YOUR JOURNAL</p>

        <h2>
          Write.
          <br />
          Reflect.
          <br />
          Respond.
        </h2>

        <p>
          Open the Awake journal and continue your journey beyond the website.
          You can read, download or print the resources from the Rooted
          collection.
        </p>

        <a
          href="https://drive.google.com/drive/folders/1LM0bK9IQYRKfasgwGC3jduHhlegqMd2O?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Open the Awake Journal
          <span>↗</span>
        </a>
      </section>

      <footer>
        <div className="footer-brand">MIDWEEK ROOTED</div>
        <div>A monthly Scripture journey</div>
      </footer>
    </main>
  );
}
