import Link from "next/link";

export default function BuildAccordingToPatternPage() {
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
          <Link href="/courses">Courses</Link>
        </nav>
      </header>

      <section className="journey-hero">
        <p className="small-label">ROOTED COURSE</p>

        <h1>
          BUILD
          <br />
          ACCORDING
          <br />
          TO PATTERN
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Before you build,
          <br />
          learn the pattern.
        </p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">THE COURSE</p>

        <h2>
          What if God
          <br />
          has already
          <br />
          shown you the pattern?
        </h2>

        <p>
          Build According to Pattern is a journey into learning how to build
          what God has entrusted to you according to His design, His wisdom
          and His Word.
        </p>

        <p>
          Before construction comes revelation. Before execution comes
          obedience. And before we build, we must learn to recognise the
          pattern God has given us.
        </p>

        <div className="gold-line" />
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            See that you make them according to the pattern shown you on the
            mountain.
          </p>

          <small>EXODUS 25:40 · WEB</small>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">WHAT YOU WILL EXPLORE</p>

        <h2>
          Revelation.
          <br />
          Pattern.
          <br />
          Construction.
        </h2>

        <p>
          This course will help you examine what God has revealed, discern the
          pattern He has established and consider what faithful construction
          looks like in your own assignment.
        </p>

        <div className="gold-line" />

        <div className="course-outline">
          <div className="course-outline-item">
            <span>01</span>
            <div>
              <h3>The Pattern</h3>
              <p>Learning to recognise what God has revealed.</p>
            </div>
          </div>

          <div className="course-outline-item">
            <span>02</span>
            <div>
              <h3>The Instruction</h3>
              <p>Understanding the importance of building according to His Word.</p>
            </div>
          </div>

          <div className="course-outline-item">
            <span>03</span>
            <div>
              <h3>The Construction</h3>
              <p>Moving from revelation into faithful action.</p>
            </div>
          </div>
        </div>

        <div className="course-action">
          <p className="section-label">ROOTED COURSE</p>

          <h2>Coming soon.</h2>

          <p>
            This course will soon become part of the Rooted learning
            experience.
          </p>

          <Link href="/courses" className="primary-button">
            Back to Courses
            <span>←</span>
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-brand">MIDWEEK ROOTED</div>

        <div>A monthly Scripture journey</div>
      </footer>
    </main>
  );
}
