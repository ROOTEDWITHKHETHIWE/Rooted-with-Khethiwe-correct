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
        style={{
          position: "relative",
          minHeight: "780px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "6rem 1.5rem",
          backgroundImage:
            "url('/becoming-background.PNG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(248,252,255,0.83) 0%, rgba(248,252,255,0.64) 42%, rgba(235,246,253,0.30) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "760px",
            textAlign: "center",
            color: "#294f76",
          }}
        >
          <p
            className="small-label"
            style={{
              letterSpacing: "0.18em",
              marginBottom: "1.5rem",
            }}
          >
            THE CURRENT JOURNEY
          </p>

          <div
            style={{
              width: "56px",
              height: "1px",
              background: "#779cbd",
              margin: "0 auto 2rem",
            }}
          />

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(4.6rem, 12vw, 9rem)",
              fontStyle: "italic",
              fontWeight: 500,
              lineHeight: 0.85,
              letterSpacing: "-0.06em",
              margin: 0,
              color: "#315a82",
              textShadow: "0 2px 18px rgba(255,255,255,0.7)",
            }}
          >
            Becoming
          </h1>

          <p
            style={{
              margin: "2rem auto 0.7rem",
              maxWidth: "620px",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1rem, 2.8vw, 1.3rem)",
              lineHeight: 1.7,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            A 30-Day Devotional Journey of Identity,
            <br />
            Formation, Entrustment &amp; Occupation
          </p>

          <p
            style={{
              margin: "1.6rem 0 2.2rem",
              color: "#557fa8",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(1.4rem, 4vw, 2.15rem)",
            }}
          >
            Stepping Into Who God Has Called You to Be
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.8rem",
              color: "#7b9dbc",
              marginBottom: "2.1rem",
            }}
          >
            <span>❀</span>
            <span>❧</span>
            <span>❀</span>
          </div>

          <Link
            href="/journey"
            className="primary-button"
            style={{
              background: "#315a82",
              color: "#ffffff",
              border: "none",
              boxShadow: "0 12px 24px rgba(49,90,130,0.2)",
            }}
          >
            Begin the journey
            <span>→</span>
          </Link>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.73rem",
              letterSpacing: "0.16em",
              color: "#557fa8",
            }}
          >
            30 DAYS · FREE
          </p>
        </div>
      </section>

      <section className="threshold">
        <p className="section-label">THE INVITATION</p>

        <h2>
          The woman God called
          <br />
          you to be is already within you.
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
          background: "#e2f1fa",
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
