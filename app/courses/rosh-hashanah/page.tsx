import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import {
  devotionalPdf,
  introductionAudio,
  roshHashanahDays,
} from "@/data/roshHashanah";

export default async function RoshHashanahPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not signed in → send to Rooted login.
  if (!user) {
    redirect("/login");
  }

  // Check whether this account has access to Rosh Hashanah.
  const { data: access, error: accessError } = await supabase
    .from("course_access")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", "rosh-hashanah")
    .maybeSingle();

  // Supabase error → do not expose paid content.
  if (accessError) {
    return (
      <main className="awake-page">
        <header className="topbar">
          <div className="brand">
            <span className="leaf">❧</span>
            <span>THE THRESHOLD</span>
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
          <p className="small-label">ROOTED COURSE</p>

          <h1>THE THRESHOLD</h1>

          <div className="ornament">
            <span>✦</span>
          </div>

          <p className="subtitle">
            We couldn&apos;t confirm
            <br />
            your course access.
          </p>
        </section>

        <section
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            padding: "5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <p className="section-label">COURSE ACCESS</p>

          <h2
            style={{
              lineHeight: "1.2",
              marginBottom: "2rem",
            }}
          >
            Something needs
            <br />
            our attention.
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
            }}
          >
            We could not confirm your access to this journey right now.
            Please try again shortly.
          </p>

          <Link href="/courses" className="primary-button">
            Back to Courses
            <span>→</span>
          </Link>
        </section>

        <footer>
          <div className="footer-brand">THE THRESHOLD</div>
          <div>Remember. Release. Return. Listen. Cross.</div>
        </footer>
      </main>
    );
  }

  // Signed in, but this account does not own the course.
  if (!access) {
    return (
      <main className="awake-page">
        <header className="topbar">
          <div className="brand">
            <span className="leaf">❧</span>
            <span>THE THRESHOLD</span>
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
          <p className="small-label">A FIVE-DAY JOURNEY</p>

          <h1>THE THRESHOLD</h1>

          <div className="ornament">
            <span>✦</span>
          </div>

          <p className="subtitle">
            This journey is reserved
            <br />
            for women with access.
          </p>
        </section>

        <section
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            padding: "5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <p className="section-label">COURSE ACCESS</p>

          <h2
            style={{
              lineHeight: "1.2",
              marginBottom: "2rem",
            }}
          >
            Your journey
            <br />
            is not unlocked yet.
          </h2>

          <p
            style={{
              lineHeight: "1.9",
              maxWidth: "560px",
              margin: "0 auto 2rem",
            }}
          >
            You are signed in to your Rooted account, but this account
            does not currently have access to The Threshold.
          </p>

          <p
            style={{
              lineHeight: "1.9",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
            }}
          >
            If you have already paid for this devotional, please make
            sure you are signed in with the email address associated
            with your access.
          </p>

          <Link href="/courses" className="primary-button">
            Back to Courses
            <span>→</span>
          </Link>
        </section>

        <footer>
          <div className="footer-brand">THE THRESHOLD</div>
          <div>Remember. Release. Return. Listen. Cross.</div>
        </footer>
      </main>
    );
  }

  // Access confirmed → render paid course home.
  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand">
          <span className="leaf">❧</span>
          <span>THE THRESHOLD</span>
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

      {/* HERO */}
      <section className="journey-hero">
        <p className="small-label">
          A FIVE-DAY ROSH HASHANAH JOURNEY
        </p>

        <h1>THE THRESHOLD</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Remembrance.
          <br />
          Release.
          <br />
          Becoming.
        </p>

        <div className="floral-divider">
          <span>❀</span>
          <span>✦</span>
          <span>❀</span>
        </div>

        <p className="hero-note">
          REMEMBER · RELEASE · RETURN · LISTEN · CROSS
        </p>
      </section>

      {/* INVITATION */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "5rem 1.5rem 3rem",
          textAlign: "center",
        }}
      >
        <p className="section-label">THE INVITATION</p>

        <h2
          style={{
            lineHeight: "1.2",
            margin: "1.5rem 0 2rem",
          }}
        >
          Stand at
          <br />
          the threshold.
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.9",
          }}
        >
          The Threshold is a place between what has ended and what
          has not yet fully begun. Move through these five days slowly:
          remember, release, return, listen and cross.
        </p>
      </section>

      {/* SCRIPTURE */}
      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Speak to the children of Israel, saying, In the seventh
            month, on the first day of the month, you shall have a
            solemn rest, a memorial of blowing of trumpets, a holy
            convocation.
          </p>

          <small>LEVITICUS 23:24 · WEB</small>
        </div>
      </section>

      {/* START HERE */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p className="section-label">START HERE</p>

          <h2
            style={{
              lineHeight: "1.2",
              margin: "1rem 0",
            }}
          >
            Before you begin
            <br />
            the five days.
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.9",
            }}
          >
            Begin with the introductory teaching and keep the complete
            devotional nearby as your written companion throughout
            the journey.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <article
            style={{
              border: "1px solid rgba(0,0,0,0.15)",
              padding: "2rem",
            }}
          >
            <p className="section-label">INTRODUCTION AUDIO</p>

            <h3
              style={{
                fontSize: "1.7rem",
                lineHeight: "1.25",
                margin: "1rem 0",
              }}
            >
              When the Trumpet Sounds
            </h3>

            <p
              style={{
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Begin with the introductory teaching before entering
              Day One.
            </p>

            <a
              href={introductionAudio}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Listen to Introduction
              <span>→</span>
            </a>
          </article>

          <article
            style={{
              border: "1px solid rgba(0,0,0,0.15)",
              padding: "2rem",
            }}
          >
            <p className="section-label">YOUR COMPANION</p>

            <h3
              style={{
                fontSize: "1.7rem",
                lineHeight: "1.25",
                margin: "1rem 0",
              }}
            >
              The Full Devotional
            </h3>

            <p
              style={{
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Read, study, journal and return to the complete
              devotional throughout the five-day journey.
            </p>

            <a
              href={devotionalPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Open the Devotional
              <span>→</span>
            </a>
          </article>
        </div>
      </section>

      {/* FIVE DAYS */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "1rem 1.5rem 6rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          <p className="section-label">THE FIVE-DAY JOURNEY</p>

          <h2
            style={{
              lineHeight: "1.2",
              margin: "1rem 0",
            }}
          >
            One threshold.
            <br />
            Five movements.
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.9",
            }}
          >
            Do not rush ahead. Let each day do its work before
            moving into the next.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {roshHashanahDays.map((item) => (
            <article
              key={item.day}
              style={{
                border: "1px solid rgba(0,0,0,0.15)",
                padding: "2.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    flex: "1 1 420px",
                  }}
                >
                  <p
                    className="section-label"
                    style={{
                      marginBottom: "0.8rem",
                    }}
                  >
                    DAY {String(item.day).padStart(2, "0")}
                  </p>

                  <h3
                    style={{
                      fontSize: "0.9rem",
                      letterSpacing: "0.16em",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {item.theme}
                  </h3>

                  <h2
                    style={{
                      lineHeight: "1.2",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{
                      lineHeight: "1.8",
                      marginBottom: "1.8rem",
                    }}
                  >
                    {item.scripture}
                  </p>

                  <Link
                    href={`/courses/rosh-hashanah/day/${item.day}`}
                    className="primary-button"
                  >
                    Enter Day {item.day}
                    <span>→</span>
                  </Link>
                </div>

                <div
                  style={{
                    fontSize: "4rem",
                    lineHeight: "1",
                    opacity: 0.12,
                    fontWeight: 600,
                  }}
                >
                  {String(item.day).padStart(2, "0")}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RHYTHM */}
      <section className="journey-stages">
        <p className="section-label">THE RHYTHM</p>

        <h2>Move with intention.</h2>

        <div className="journey-days">
          <article>
            <span>01</span>
            <h3>Remember</h3>
            <p>
              Gather the evidence of God&apos;s faithfulness without
              returning to live in the past.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Release</h3>
            <p>
              Put down what does not have permission to cross with
              you.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Return</h3>
            <p>
              Let the call forward first bring your whole heart back
              to God.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Listen</h3>
            <p>
              Quiet the noise and listen for the next faithful thing.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>Cross</h3>
            <p>
              When God has made the next step clear, move with
              courage.
            </p>
          </article>
        </div>
      </section>

      {/* CLOSING */}
      <section className="journey-closing">
        <p className="section-label">BEGIN THE JOURNEY</p>

        <h2>
          Remember.
          <br />
          Release.
          <br />
          Return.
        </h2>

        <p>
          You do not need to have the next season fully understood
          before you enter this journey. Begin with what God has
          already placed in front of you.
        </p>

        <Link
          href="/courses/rosh-hashanah/day/1"
          className="primary-button"
        >
          Enter Day One
          <span>→</span>
        </Link>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/courses" className="text-link">
            ← Back to courses
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-brand">THE THRESHOLD</div>
        <div>Remember. Release. Return. Listen. Cross.</div>
      </footer>
    </main>
  );
}
