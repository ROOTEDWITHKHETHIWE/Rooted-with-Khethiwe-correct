import Link from "next/link";

export default function JournalPage() {
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
        className="journey-hero"
        style={{
          background:
            "linear-gradient(135deg, #fbfdff 0%, #e4f2fb 60%, #d5e9f7 100%)",
          color: "#294f76",
        }}
      >
        <p className="small-label">ROOTED JOURNAL</p>

        <h1>JOURNAL</h1>

        <div className="ornament">
          <span>❧</span>
        </div>

        <p className="subtitle">
          Scripture, reflection and
          <br />
          journeys to return to.
        </p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">COMPLETED JOURNEY</p>

        <h2>
          Still finishing
          <br />
          Awake?
        </h2>

        <p>
          Awake has moved into the Journal archive so every woman can return
          to the days she has not yet completed, at her own pace.
        </p>

        <Link
          href="/journal/awake"
          className="primary-button"
          style={{
            background: "#24496d",
            color: "#ffffff",
            marginTop: "1.5rem",
          }}
        >
          Continue the Awake Journey
          <span>→</span>
        </Link>

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
          Take what God is revealing beyond the screen. Read slowly, write
          honestly and return to the moments that continue speaking to you.
        </p>

        <a
          href="https://drive.google.com/drive/folders/1LM0bK9IQYRKfasgwGC3jduHhlegqMd2O?utm_source=chatgpt.com"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Open the Journal Resources
          <span>↗</span>
        </a>
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
