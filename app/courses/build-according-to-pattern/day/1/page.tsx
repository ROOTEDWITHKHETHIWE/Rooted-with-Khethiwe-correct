import Link from "next/link";

export default function DayOnePage() {
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
        <p className="small-label">BUILD ACCORDING TO PATTERN</p>

        <h1>
          DAY 1
          <br />
          THE PATTERN
          <br />
          IS REVEALED
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Before there was a building,
          <br />
          there was a revelation.
        </p>
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            And see to it that you make them according to the pattern which was
            shown you on the mountain.
          </p>

          <small>EXODUS 25:40 · NKJV</small>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">DAY 1 · THE LESSON</p>

        <h2>
          Before there was
          <br />
          a tabernacle,
          <br />
          there was a mountain.
        </h2>

        <div
          className="lesson-content"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "justify",
            lineHeight: "1.9",
          }}
        >
          <p style={{ marginBottom: "1.8rem" }}>
            Before there was ever a tabernacle, there was a mountain. Before
            there was a structure, there was a revelation.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            God did not ask Moses to invent something impressive. He did not
            ask him to build according to what was popular, efficient, or
            creative. He instructed him to build according to what had been
            shown to him.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            This is often the opposite of how we operate. When we feel
            pressure, we move. When we see a need, we build. When we desire
            change, we act.
          </p>

          <p
            style={{
              margin: "2.5rem auto",
              textAlign: "center",
              lineHeight: "1.8",
            }}
          >
            But heaven's order is different.
            <br />
            <strong>God reveals. Then we build.</strong>
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            Many of us are carrying frustration because we have been trying to
            construct something that was never first revealed in the secret
            place. We have been building from pressure instead of revelation.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            Today, I want to encourage you to pause and ask yourself:
          </p>

          <blockquote
            style={{
              margin: "2.5rem auto",
              maxWidth: "650px",
              padding: "1.5rem 2rem",
              textAlign: "center",
              lineHeight: "1.7",
            }}
          >
            Am I building according to God's pattern, or am I building
            according to my own ideas?
          </blockquote>

          <p style={{ marginBottom: "1.8rem" }}>
            Because only what originates in God can truly carry His presence.
            The tabernacle was not just a structure. It was a dwelling place.
            And God is intentional about where He dwells.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            As you work through today's devotional and workbook, ask the Lord
            to show you any area of your life where He is calling you back into
            alignment.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            Perhaps it is your home, your marriage, your motherhood, your work,
            your ministry, or simply the rhythms of your daily life.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            Whatever it is, remember this:
          </p>

          <blockquote
            style={{
              margin: "2.5rem auto",
              maxWidth: "650px",
              padding: "1.5rem 2rem",
              textAlign: "center",
              lineHeight: "1.7",
            }}
          >
            If God has shown it, He will sustain it.
          </blockquote>
        </div>
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            I do not build from pressure — I build from revelation. I honour
            God's pattern, and my life will carry His presence.
          </p>

          <small>TODAY'S DECLARATION</small>
        </div>
      </section>

      <section className="journey-introduction">
        <p className="section-label">TODAY'S RESOURCES</p>

        <h2>
          Continue
          <br />
          your study.
        </h2>

        <p>
          Use the workbook and course slides alongside today's lesson as you
          reflect on what God is revealing to you.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "500px",
            margin: "2rem auto 0",
          }}
        >
          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Workbook
            <span>↗</span>
          </a>

          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Course Slides
            <span>↗</span>
          </a>

          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Audio
            <span>↗</span>
          </a>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">YOUR JOURNEY</p>

        <h2>
          Continue
          <br />
          building.
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="/courses/build-according-to-pattern">
            ← Course Overview
          </Link>

          <Link
            href="/courses/build-according-to-pattern/day/2"
            className="primary-button"
          >
            Day 2
            <span>→</span>
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
