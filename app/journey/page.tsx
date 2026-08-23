import Link from "next/link";

const days = Array.from({ length: 30 }, (_, index) => index + 1);

export default function JourneyPage() {
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
        <p className="small-label">THE CURRENT JOURNEY</p>

        <h1>AWAKE</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          A 30-Day Journey of Returning,
          <br />
          Remembering and Preparing with God
        </p>

        <div className="floral-divider">
          <span>❀</span>
          <span>✦</span>
          <span>❀</span>
        </div>

        <p className="hero-note">30 DAYS · FREE</p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">THE INVITATION</p>

        <h2>
          Become attentive
          <br />
          to God again.
        </h2>

        <p>
          Awake is a thirty-day journey for women who sense God calling them
          to pay attention again — to return, remember, repent, prepare and
          walk into the next season with an obedient heart.
        </p>

        <div className="gold-line" />
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Awake, O sleeper, and arise from the dead, and Christ will shine
            on you.
          </p>

          <small>EPHESIANS 5:14 · WEB</small>
        </div>
      </section>

      <section className="journey-overview">
        <div>
          <p className="section-label">YOUR 30 DAYS</p>

          <h2>
            One day.
            <br />
            One Scripture.
            <br />
            One response.
          </h2>
        </div>

        <div className="journey-copy">
          <p>
            Each day invites you to read the Scripture, receive the teaching,
            reflect honestly, pray and respond.
          </p>

          <p>
            This is not a challenge to complete as quickly as possible. It is
            an invitation to become increasingly responsive to God.
          </p>
        </div>
      </section>

      {/* 30-DAY JOURNEY NAVIGATION */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "1rem 1.5rem 5rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          <p className="section-label">THE AWAKE JOURNEY</p>

          <h2
            style={{
              lineHeight: "1.2",
              marginBottom: "1rem",
            }}
          >
            Choose your day.
          </h2>

          <p
            style={{
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Move through the journey at your own pace. Select any day below
            to enter directly into that day's reflection.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "1rem",
          }}
        >
          {days.map((day) => (
            <Link
              key={day}
              href={`/journey/day/${day}`}
              style={{
                display: "block",
                border: "1px solid rgba(0,0,0,0.15)",
                padding: "1.5rem 1rem",
                textAlign: "center",
                textDecoration: "none",
                transition: "transform 0.2s ease",
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
                {String(day).padStart(2, "0")}
              </strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="journey-stages">
        <p className="section-label">THE RHYTHM</p>

        <h2>Move slowly. Pay attention.</h2>

        <div className="journey-days">
          <article>
            <span>01</span>
            <h3>Listen</h3>
            <p>
              Before we move, we learn to listen for the voice of God.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Return</h3>
            <p>
              We return to Scripture and allow God to bring us back to what
              matters.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Prepare</h3>
            <p>
              We make room for obedience and prepare our hearts for what God
              is doing.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Respond</h3>
            <p>
              We respond to what God reveals, allowing revelation to become
              obedience.
            </p>
          </article>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">BEGIN HERE</p>

        <h2>
          You don't have
          <br />
          to rush.
        </h2>

        <p>
          Start with today. Open your Bible. Become attentive. Let God show
          you what needs to be seen.
        </p>

        <Link href="/journey/day/1" className="primary-button">
          Begin Day 01
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
