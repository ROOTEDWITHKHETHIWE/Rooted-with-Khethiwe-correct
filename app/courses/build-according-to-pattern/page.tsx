import Link from "next/link";

const days = [
  {
    number: "01",
    title: "The Pattern is Revealed",
    scripture: "Exodus 25:40",
  },
  {
    number: "02",
    title: "The Mountain Comes Before the Building",
    scripture: "Exodus 24:1",
  },
  {
    number: "03",
    title: "Obedience Over Creativity",
    scripture: "Exodus 39:43",
  },
  {
    number: "04",
    title: "Strange Fire — When Pattern is Ignored",
    scripture: "Leviticus 10:1–2",
  },
  {
    number: "05",
    title: "Becoming the Dwelling Place",
    scripture: "Hebrews 8:5 · 1 Corinthians 3:16",
  },
];

export default function BuildAccordingToPattern() {
  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand">
          <span className="leaf">❧</span>
          <span>ROOTED WITH KHETHIWE</span>
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

      {/* COURSE HERO */}
      <section className="journey-hero">
        <p className="small-label">ROOTED COURSE</p>

        <h1>
          BUILDING
          <br />
          ACCORDING
          <br />
          TO THE
          <br />
          PATTERN
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Learning to build from revelation,
          <br />
          obedience and the presence of God.
        </p>
      </section>

      {/* INTRODUCTION */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          <p className="section-label">THE INVITATION</p>

          <h2
            style={{
              marginBottom: "2rem",
              lineHeight: "1.2",
            }}
          >
            Before you build,
            <br />
            go up the mountain.
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: "1.9",
              textAlign: "justify",
            }}
          >
            God never asked Moses to build according to his own imagination.
            He showed him a pattern on the mountain and instructed him to build
            according to what he had seen.
          </p>

          <p
            style={{
              maxWidth: "650px",
              margin: "1.5rem auto 0",
              lineHeight: "1.9",
              textAlign: "justify",
            }}
          >
            In this five-day journey, we will explore what it means to receive
            revelation, ascend before building, obey what God has shown us,
            recognise the danger of building outside His pattern, and ultimately
            become a dwelling place for His presence.
          </p>
        </div>

        {/* KEY SCRIPTURE */}
        <div
          style={{
            padding: "3rem 2rem",
            marginBottom: "5rem",
            textAlign: "center",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <p className="section-label">KEY SCRIPTURE</p>

          <p
            style={{
              fontSize: "1.35rem",
              lineHeight: "1.8",
              fontStyle: "italic",
              maxWidth: "650px",
              margin: "1.5rem auto",
            }}
          >
            “And see to it that you make them according to the pattern which
            was shown you on the mountain.”
          </p>

          <p
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
            }}
          >
            EXODUS 25:40 · NKJV
          </p>
        </div>

        {/* WHAT YOU WILL EXPLORE */}
        <div style={{ marginBottom: "5rem" }}>
          <p className="section-label">WHAT YOU WILL EXPLORE</p>

          <h2
            style={{
              marginBottom: "2.5rem",
              lineHeight: "1.2",
            }}
          >
            Five days.
            <br />
            One journey.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {days.map((day) => (
              <Link
                key={day.number}
                href={`/courses/build-according-to-pattern/day/${parseInt(
                  day.number,
                  10
                )}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "1.5rem",
                  border: "1px solid rgba(0,0,0,0.12)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    minWidth: "48px",
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    opacity: 0.65,
                  }}
                >
                  {day.number}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      marginBottom: "0.4rem",
                    }}
                  >
                    {day.title}
                  </div>

                  <div
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.08em",
                      opacity: 0.65,
                    }}
                  >
                    {day.scripture}
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "1.2rem",
                    opacity: 0.7,
                  }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* HOW TO USE */}
        <div
          style={{
            marginBottom: "5rem",
            padding: "2.5rem",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <p className="section-label">HOW TO APPROACH THIS COURSE</p>

          <h2 style={{ marginBottom: "2rem" }}>
            Don't rush
            <br />
            through it.
          </h2>

          <div
            style={{
              textAlign: "justify",
              lineHeight: "1.9",
            }}
          >
            <p style={{ marginBottom: "1.5rem" }}>
              Give yourself space to sit with each day's teaching.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Read the Scripture. Work through the lesson. Reflect honestly.
              Pray through the questions. Use the workbook to capture what God
              is showing you.
            </p>

            <p>
              The goal is not simply to complete five lessons. The goal is to
              allow God to bring your life into alignment with His pattern.
            </p>
          </div>
        </div>

        {/* START COURSE */}
        <div
          style={{
            marginBottom: "5rem",
            padding: "4rem 2rem",
            textAlign: "center",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <p className="section-label">BEGIN THE JOURNEY</p>

          <h2
            style={{
              margin: "1.5rem auto",
              lineHeight: "1.2",
            }}
          >
            The pattern is revealed
            <br />
            on the mountain.
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto 2rem",
              lineHeight: "1.9",
              textAlign: "justify",
            }}
          >
            Before you build, take the first step. Begin with Day 1 and allow
            the Lord to show you what He has revealed, what you have been
            building, and where He may be calling you back into alignment.
          </p>

          <Link
            href="/courses/build-according-to-pattern/day/1"
            className="primary-button"
          >
            Begin Day 1
            <span>→</span>
          </Link>
        </div>

        {/* RESOURCES NOTE */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p className="section-label">COURSE RESOURCES</p>

          <p
            style={{
              maxWidth: "600px",
              margin: "1rem auto 0",
              lineHeight: "1.9",
            }}
          >
            Your workbook, slides and audio resources will be available inside
            each day's lesson.
          </p>
        </div>

        {/* BACK */}
        <div
          style={{
            paddingTop: "3rem",
            borderTop: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <Link href="/courses" className="text-link">
            ← Back to all courses
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-brand">ROOTED WITH KHETHIWE</div>

        <div>Building according to what God has revealed.</div>
      </footer>
    </main>
  );
}
