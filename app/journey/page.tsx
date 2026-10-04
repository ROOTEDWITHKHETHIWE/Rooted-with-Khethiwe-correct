import Link from "next/link";

const journeyDays = [
  "You Cannot Take Her With You",
  "When Survival Became a Name",
  "The Roles That Named You",
  "The Identity of Disappointment",
  "Stop Introducing Yourself by the Ruins",
  "Comparison Cannot Name You",
  "Leave the Old Garments Behind",
  "Known Before You Performed",
  "Named by God",
  "You Belong Before You Build",
  "Chosen Is Not the Same as Visible",
  "Your Identity Is Not Your Assignment",
  "Secure in the Father’s Love",
  "Remember Who You Are",
  "The Secret Place Was Preparation",
  "Hidden Does Not Mean Forgotten",
  "What the Wilderness Produced",
  "The Oil Came Before the Room",
  "You Are Not Still Waiting to Become Ready",
  "Formation Has Produced Capacity",
  "There Is a Difference Between Hidden and Hiding",
  "Faithful With Little",
  "When God Entrusts More",
  "A Prisoner Cannot Govern Egypt",
  "Take Your Place",
  "Authority Without Performance",
  "Enlarge the Tent",
  "Carry It Without Losing the Secret Place",
  "Occupy Without Apology",
  "Become",
];

export default function JourneyPage() {
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
            "linear-gradient(135deg, #fafdff 0%, #e3f1fb 55%, #d5e9f7 100%)",
          color: "#294f76",
        }}
      >
        <p className="small-label">THE CURRENT JOURNEY</p>

        <h1
          style={{
            fontStyle: "italic",
            color: "#315a82",
          }}
        >
          BECOMING
        </h1>

        <div className="ornament">
          <span>❧</span>
        </div>

        <p className="subtitle">
          A 30-Day Devotional Journey of Identity,
          <br />
          Formation, Entrustment &amp; Occupation
        </p>

        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.25rem",
            marginTop: "1.5rem",
            color: "#6287aa",
          }}
        >
          Stepping Into Who God Has Called You to Be
        </p>

        <div className="floral-divider">
          <span>❀</span>
          <span>❧</span>
          <span>❀</span>
        </div>

        <p className="hero-note">30 DAYS · FREE</p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">THE INVITATION</p>

        <h2>
          Step into who
          <br />
          God has called you to be.
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
          background: "#dfeef8",
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

      <section className="journey-overview">
        <div>
          <p className="section-label">YOUR 30 DAYS</p>

          <h2>
            Not becoming
            <br />
            someone else.
            <br />
            Becoming rooted.
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
        </div>
      </section>

      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "2.5rem", borderTop: "1px solid #c9deed", borderBottom: "1px solid #c9deed" }}>
          <p className="section-label">YOUR DIGITAL DEVOTIONAL</p>
          <h2 style={{ color: "#315a82", margin: "1.2rem 0" }}>Take Becoming with you.</h2>
          <p style={{ maxWidth: "570px", margin: "0 auto 1.5rem", lineHeight: "1.9" }}>Download the complete 30-day Becoming devotional to read, reflect and return to throughout this journey.</p>
          <a href="/resources/becoming/becoming-digital-edition.pdf" download className="primary-button">Download the full devotional<span>↓</span></a>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "1rem 1.5rem 5rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="section-label">THE BECOMING JOURNEY</p>

          <h2 style={{ lineHeight: "1.2", marginBottom: "1rem" }}>
            Choose your day.
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Move slowly through this journey. Some days will ask you to
            release. Others will ask you to remember. Each one is an invitation
            to become more rooted in who God created you to be.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "1rem",
          }}
        >
          {journeyDays.map((title, index) => {
            const day = index + 1;

            return (
              <Link
                key={day}
                href={`/journey/day/${day}`}
                style={{
                  display: "block",
                  background: "#ffffff",
                  border: "1px solid #c9deed",
                  padding: "1.35rem",
                  textDecoration: "none",
                  color: "#24496d",
                  minHeight: "150px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    marginBottom: "0.75rem",
                    color: "#7194b4",
                  }}
                >
                  DAY {String(day).padStart(2, "0")}
                </span>

                <strong
                  style={{
                    display: "block",
                    fontSize: "1.25rem",
                    lineHeight: "1.1",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {title}
                </strong>
              </Link>
            );
          })}
        </div>
      </section>

      <section
        className="journey-stages"
        style={{
          background: "#e7f3fb",
        }}
      >
        <p className="section-label">THE RHYTHM</p>

        <h2>
          Know. Unlearn.
          <br />
          Renew. Live.
        </h2>

        <div className="journey-days">
          <article>
            <span>01</span>
            <h3>Know</h3>
            <p>
              Receive the truth of who God says you are before you try to build.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Unlearn</h3>
            <p>
              Release old names, survival agreements and identities that no
              longer belong to you.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Renew</h3>
            <p>
              Allow Scripture and the secret place to renew the way you see
              yourself.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Live</h3>
            <p>
              Take your place with humility, authority and faithfulness.
            </p>
          </article>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">BEGIN HERE</p>

        <h2>
          Same you.
          <br />
          More of Him.
        </h2>

        <p>
          Start with today. Open your Bible. Tell God the truth. Let Him show
          you who you are becoming.
        </p>

        <Link href="/journey/day/1" className="primary-button">
          Begin Day 01
          <span>→</span>
        </Link>
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
