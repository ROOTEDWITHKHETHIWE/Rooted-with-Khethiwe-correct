import Link from "next/link";

export default function DayThreePage() {
  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand">
          <span className="leaf">❧</span>
          <span>ACCORDING TO THE PATTERN</span>
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

      {/* DAY HEADER */}
      <section className="journey-hero">
        <p className="small-label">BUILDING ACCORDING TO PATTERN</p>

        <h1>
          DAY 3
          <br />
          OBEDIENCE
          <br />
          OVER
          <br />
          CREATIVITY
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Revelation does not need
          <br />
          your improvement.
        </p>
      </section>

      {/* MAIN LESSON */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
        }}
      >
        {/* KEY SCRIPTURE */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
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
            “So Moses looked over all the work, and indeed they had done it; as
            the Lord had commanded, just so they had done it.”
          </p>

          <p
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              marginTop: "1.5rem",
            }}
          >
            EXODUS 39:43 · NKJV
          </p>
        </div>

        {/* TEACHING */}
        <div style={{ marginBottom: "5rem" }}>
          <p className="section-label">TEACHING</p>

          <h2
            style={{
              marginBottom: "2.5rem",
              lineHeight: "1.2",
            }}
          >
            It is one thing
            <br />
            to receive a pattern.
            <br />
            It is another
            <br />
            to follow it.
          </h2>

          <div
            style={{
              textAlign: "justify",
              lineHeight: "1.9",
            }}
          >
            <p style={{ marginBottom: "1.6rem" }}>
              It is one thing to receive a pattern. It is another thing to
              follow it exactly.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              God gave Moses detailed instructions for the tabernacle — not
              suggestions, not inspiration, not a general idea.
            </p>

            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: 600,
                margin: "2rem 0",
              }}
            >
              Instructions.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              And when the work was completed, Scripture emphasises something
              very specific:
            </p>

            <p
              style={{
                textAlign: "center",
                fontSize: "1.15rem",
                fontWeight: 600,
                lineHeight: "1.8",
                margin: "2rem auto",
                maxWidth: "620px",
              }}
            >
              “They did it as the Lord had commanded.”
            </p>

            <p style={{ marginBottom: "0.7rem" }}>
              Not close.
              <br />
              Not similar.
              <br />
              Not improved.
            </p>

            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                fontWeight: 600,
                margin: "2rem 0",
              }}
            >
              As commanded.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              This confronts something in us.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              Because we don’t struggle with receiving from God… we often
              struggle with submitting to what He said.
            </p>

            <p style={{ marginBottom: "0.7rem" }}>
              We like to add:
            </p>

            <ul
              style={{
                marginBottom: "1.8rem",
                paddingLeft: "1.5rem",
                lineHeight: "2",
              }}
            >
              <li>our preferences</li>
              <li>our personality</li>
              <li>our ideas</li>
              <li>our enhancements</li>
            </ul>

            <p>
              But God was not looking for Moses’ creativity — He was looking
              for his obedience.
            </p>
          </div>
        </div>

        {/* DEEP REVELATION */}
        <div
          style={{
            marginBottom: "5rem",
            padding: "2.5rem",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <p className="section-label">DEEP REVELATION</p>

          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.7",
              fontWeight: 600,
              marginBottom: "2rem",
            }}
          >
            Revelation does not need your improvement — it requires your
            submission.
          </p>

          <div
            style={{
              textAlign: "justify",
              lineHeight: "1.9",
            }}
          >
            <p style={{ marginBottom: "1.6rem" }}>
              Moses could have adjusted the design. He could have made it more
              efficient, more modern, more appealing.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              But heaven does not respond to what is impressive, it responds to
              what is aligned.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              Because the tabernacle was not built to impress people. It was
              built to host God.
            </p>

            <p>
              And God’s presence does not rest on what we prefer — it rests on
              what He has ordained.
            </p>
          </div>
        </div>

        {/* KEY INSIGHT */}
        <div style={{ marginBottom: "5rem" }}>
          <p className="section-label">KEY INSIGHT</p>

          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.7",
              fontWeight: 600,
              maxWidth: "650px",
            }}
          >
            God is not impressed by our ideas. He is pleased by our obedience.
          </p>

          <div
            style={{
              textAlign: "justify",
              lineHeight: "1.9",
              marginTop: "1.5rem",
            }}
          >
            <p style={{ marginBottom: "1.6rem" }}>
              Creativity is not wrong — but when it replaces obedience, it
              becomes self-expression over surrender.
            </p>

            <p>
              And anything built from self will always lack the weight of glory.
            </p>
          </div>
        </div>

        {/* REFLECTION */}
        <div style={{ marginBottom: "5rem" }}>
          <p className="section-label">REFLECTION</p>

          <h2 style={{ marginBottom: "2rem" }}>
            Be honest
            <br />
            here.
          </h2>

          <div style={{ lineHeight: "1.9" }}>
            <p style={{ marginBottom: "1.5rem" }}>
              Do I trust God’s pattern enough to follow it fully?
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Where am I tempted to “adjust” what God has said?
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Have I been prioritising originality over obedience?
            </p>

            <p>
              What has God clearly instructed me that I have delayed or
              altered?
            </p>
          </div>
        </div>

        {/* JOURNALING */}
        <div style={{ marginBottom: "5rem" }}>
          <p className="section-label">JOURNALING SPACE</p>

          <h2 style={{ marginBottom: "2rem" }}>
            Lay down
            <br />
            your own way.
          </h2>

          <div style={{ lineHeight: "1.9" }}>
            <p style={{ marginBottom: "1.5rem" }}>
              Lord, where have I been trying to improve what You’ve already
              spoken?
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              What instructions have You given me that I have not fully obeyed?
            </p>

            <p>
              What would full obedience look like in this season?
            </p>
          </div>
        </div>

        {/* PRAYER */}
        <div style={{ marginBottom: "5rem" }}>
          <p className="section-label">PRAYER</p>

          <div
            style={{
              textAlign: "justify",
              lineHeight: "1.9",
            }}
          >
            <p style={{ marginBottom: "1.5rem" }}>Lord,</p>

            <p style={{ marginBottom: "1.5rem" }}>
              help me to lay down my need to add, change, or improve what You
              have spoken.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Silence every voice in me that resists simple obedience, pride,
              comparison, fear, and self-will.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Give me a heart that honours Your instructions above my
              preferences. Teach me that obedience is not limitation, it is
              alignment.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              Let me be faithful with what You have revealed. Let my life
              reflect precision, not approximation.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              May everything I build be exactly as You have commanded, so that
              it may carry Your presence and Your glory.
            </p>

            <p>
              In Jesus’ name,
              <br />
              Amen.
            </p>
          </div>
        </div>

        {/* DECLARATION */}
        <div
          style={{
            marginBottom: "5rem",
            padding: "3rem 2rem",
            textAlign: "center",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <p className="section-label">DECLARATION</p>

          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              fontWeight: 600,
              maxWidth: "650px",
              margin: "1.5rem auto 0",
            }}
          >
            I will not build from my ideas.
            <br />
            I will build from what God has shown me.
            <br />
            I choose obedience over creativity,
            <br />
            alignment over preference,
            <br />
            and His glory over my own.
          </p>
        </div>

        {/* RESOURCES */}
        <div style={{ marginBottom: "5rem" }}>
          <p className="section-label">TODAY’S RESOURCES</p>

          <h2 style={{ marginBottom: "1.5rem" }}>
            Continue
            <br />
            your study.
          </h2>

          <p
            style={{
              textAlign: "justify",
              lineHeight: "1.9",
              marginBottom: "2rem",
            }}
          >
            Your workbook, course slides and audio will be available here as
            you work through the course.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* WORKBOOK */}
            <a
              href="https://drive.google.com/file/d/1cNHsKmYQkAVCDKRS-XrumVJA35tHai7Q/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Workbook
              <span>↗</span>
            </a>

            {/* TEACHING MATERIAL */}
            <a
              href="https://drive.google.com/file/d/1F4yQe2gnsflzvOgh-p1OLfoLyjVmSDZU/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Course Slides
              <span>↗</span>
            </a>

            {/* DAY 3 AUDIO */}
            <a
              href="https://drive.google.com/file/d/1pK_cY2u_YvfRbljCXNJSv3op7Wg4At7X/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Day 3 Audio
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div
          style={{
            paddingTop: "3rem",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/courses/build-according-to-pattern/day/2"
            className="primary-button"
          >
            <span>←</span>
            Day 2
          </Link>

          <Link
            href="/courses/build-according-to-pattern/day/4"
            className="primary-button"
          >
            Day 4
            <span>→</span>
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-brand">ACCORDING TO THE PATTERN</div>

        <div>Building according to what God has revealed.</div>
      </footer>
    </main>
  );
}
