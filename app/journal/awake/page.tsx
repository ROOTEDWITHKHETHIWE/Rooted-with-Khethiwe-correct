import Link from "next/link";
import { awakeDays } from "../../../data/awake";

export default function AwakeArchivePage() {
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
        <p className="small-label">COMPLETED JOURNEY · AUGUST/SEPTEMBER 2026</p>

        <h1>AWAKE</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          A 30-Day Journey of Returning,
          <br />
          Remembering and Preparing with God
        </p>

        <p className="hero-note">JOURNEY ARCHIVE</p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">THE ARCHIVE</p>

        <h2>
          Return when
          <br />
          you need to.
        </h2>

        <p>
          Awake made room for repair. This completed thirty-day journey remains
          here for every woman God is calling to return, remember, repent,
          prepare and become attentive again.
        </p>

        <div className="gold-line" />
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "1rem 1.5rem 5rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="section-label">THE AWAKE JOURNEY</p>

          <h2 style={{ lineHeight: "1.2", marginBottom: "1rem" }}>
            Choose your day.
          </h2>

          <p
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            You do not have to rush. Return to any reflection whenever you
            need to remember what God has been saying.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1rem",
          }}
        >
          {awakeDays.map((item) => (
            <Link
              key={item.day}
              href={`/journal/awake/day/${item.day}`}
              style={{
                display: "block",
                border: "1px solid rgba(0,0,0,0.15)",
                padding: "1.5rem 1rem",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  marginBottom: "0.5rem",
                }}
              >
                DAY
              </span>

              <strong
                style={{
                  display: "block",
                  fontSize: "1.5rem",
                  lineHeight: "1",
                }}
              >
                {String(item.day).padStart(2, "0")}
              </strong>
            </Link>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand">MIDWEEK ROOTED</div>
        <div>A monthly Scripture journey</div>
      </footer>
    </main>
  );
}
