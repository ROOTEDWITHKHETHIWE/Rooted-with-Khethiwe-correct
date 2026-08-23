import Link from "next/link";

export default function DayTwoPage() {
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

      {/* COURSE HEADER */}
      <section className="journey-hero">
        <p className="small-label">BUILD ACCORDING TO PATTERN</p>

        <h1>
          DAY 2
          <br />
          THE MOUNTAIN
          <br />
          COMES BEFORE
          <br />
          THE BUILDING
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Before God gave Moses a pattern,
          <br />
          He gave him an invitation.
        </p>
      </section>

      {/* SCRIPTURE */}
      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Then the Lord said to Moses, “Come up to the Lord… and worship from
            afar.”
          </p>

          <small>EXODUS 24:1 · NKJV</small>
        </div>
      </section>

      {/* LESSON */}
      <section className="journey-closing">
        <p className="section-label">DAY 2 · THE LESSON</p>

        <h2>
          The mountain
          <br />
          comes before
          <br />
          the building.
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
            Before God ever gave Moses a pattern, He gave him an invitation.
            “Come up.”
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            This is often where we miss God's order. We want answers. We want
            clarity. We want instructions. We want to know what comes next.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            But God first calls us into His presence. The mountain came before
            the blueprint. The encounter came before the assignment. The
            relationship came before the responsibility.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            God could have spoken the pattern from a distance, but instead He
            invited Moses closer.
          </p>

          <p
            style={{
              margin: "2.5rem auto",
              textAlign: "center",
              lineHeight: "1.8",
            }}
          >
            <strong>The pattern is revealed in proximity.</strong>
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            Many of us are in seasons where we are asking, “Lord, what should I
            do?”
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
            Lord, where are You inviting me to come closer?
          </blockquote>

          <p style={{ marginBottom: "1.8rem" }}>
            Sometimes we are frustrated because we feel delayed. But what if
            the delay is actually an invitation? What if God is not withholding
            direction? What if He is drawing you deeper into His presence
            before releasing the next instruction?
          </p>

          <p
            style={{
              margin: "2.5rem auto",
              textAlign: "center",
              lineHeight: "1.8",
            }}
          >
            <strong>The mountain is not wasted time.</strong>
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            It is the place where distractions fall away, priorities are
            reordered, hearts are refined, and heaven's perspective becomes
            clear.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            Before Moses ever built the tabernacle, he first learned to ascend.
            And before God entrusts us with what we are called to build, He
            often invites us into deeper intimacy with Him.
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            Today, resist the temptation to rush ahead.
          </p>

          <p
            style={{
              margin: "2.5rem auto",
              textAlign: "center",
              lineHeight: "1.8",
            }}
          >
            <strong>Let God set the pace.</strong>
          </p>

          <p style={{ marginBottom: "1.8rem" }}>
            Allow Him to prepare you before He prepares the assignment.
            Because what God builds through you must first be formed within
            you.
          </p>
        </div>
      </section>

      {/* DECLARATION */}
      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            I will not build before I ascend. I will not move before I am
            shown. I choose presence over pressure, and I build from encounter.
          </p>

          <small>TODAY'S DECLARATION</small>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="journey-introduction">
        <p className="section-label">TODAY'S RESOURCES</p>

        <h2>
          Continue
          <br />
          your study.
        </h2>

        <p>
          Today's workbook and devotional lesson are available inside the
          course. Take your time with the reflection questions and allow the
          Lord to show you where He may be inviting you higher in this season.
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

      {/* NAVIGATION */}
      <section className="journey-closing">
        <p className="section-label">YOUR JOURNEY</p>

        <h2>
          Keep
          <br />
          ascending.
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
          <Link href="/courses/build-according-to-pattern/day/1">
            ← Day 1
          </Link>

          <Link
            href="/courses/build-according-to-pattern/day/3"
            className="primary-button"
          >
            Day 3
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
