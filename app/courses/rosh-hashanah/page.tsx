import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";

const journeyDays = [
  {
    day: "DAY ONE",
    title: "Awaken",
    description:
      "Begin the journey by becoming attentive to the sound of God again. Slow down, listen and allow Him to awaken what has become quiet within you.",
    audio:
      "https://drive.google.com/file/d/1LoB2pgWXy-oIjkK2ATgF1rL91R0qd25U/view?usp=drive_link",
    available: true,
  },
  {
    day: "DAY TWO",
    title: "Remember",
    description:
      "Return to what God has spoken, remember His faithfulness and allow remembrance to restore perspective.",
    audio: "",
    available: false,
  },
  {
    day: "DAY THREE",
    title: "Return",
    description:
      "Allow God to search the heart. Return through repentance, surrender and renewed obedience.",
    audio: "",
    available: false,
  },
  {
    day: "DAY FOUR",
    title: "Prepare",
    description:
      "Make room for what lies ahead. Release what cannot cross with you and prepare to walk forward with God.",
    audio: "",
    available: false,
  },
  {
    day: "DAY FIVE",
    title: "Cross the Threshold",
    description:
      "Stand at the threshold prayerfully and enter the next season awake, surrendered and attentive to God.",
    audio: "",
    available: false,
  },
];

const introductionAudio =
  "https://drive.google.com/file/d/1F2rmTJ56BWT0XRIDE5N9IIeFo0q0ZCFt/view?usp=drive_link";

const devotionalPdf =
  "https://drive.google.com/file/d/1E9AN21fgHKL-MudModhbz7B_MMqZtiqu/view?usp=drive_link";

export default async function RoshHashanahPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not signed in → send to the existing Rooted login.
  if (!user) {
    redirect("/login");
  }

  // Check whether this Rooted account owns Rosh Hashanah.
  const { data: access, error: accessError } = await supabase
    .from("course_access")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", "rosh-hashanah")
    .maybeSingle();

  // If Supabase itself returns an error, do not expose the paid content.
  if (accessError) {
    return (
      <main className="awake-page">
        <header className="topbar">
          <div className="brand">
            <span className="leaf">❧</span>
            <span>ROSH HASHANAH</span>
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

          <h1>ROSH HASHANAH</h1>

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
            We could not confirm your access to this journey right now. Please
            try again shortly.
          </p>

          <Link href="/courses" className="primary-button">
            Back to Courses
            <span>→</span>
          </Link>
        </section>

        <footer>
          <div className="footer-brand">ROSH HASHANAH</div>
          <div>Awake. Remember. Prepare.</div>
        </footer>
      </main>
    );
  }

  // Signed in, but this account has not purchased/unlocked Rosh Hashanah.
  if (!access) {
    return (
      <main className="awake-page">
        <header className="topbar">
          <div className="brand">
            <span className="leaf">❧</span>
            <span>ROSH HASHANAH</span>
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

          <h1>ROSH HASHANAH</h1>

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
            You are signed in to your Rooted account, but this account does
            not currently have access to the Rosh Hashanah Journey.
          </p>

          <p
            style={{
              lineHeight: "1.9",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
            }}
          >
            If you have already paid for this devotional, please make sure you
            are signed in with the email address you used when requesting
            access.
          </p>

          <Link href="/courses" className="primary-button">
            Back to Courses
            <span>→</span>
          </Link>
        </section>

        <footer>
          <div className="footer-brand">ROSH HASHANAH</div>
          <div>Awake. Remember. Prepare.</div>
        </footer>
      </main>
    );
  }

  // Access confirmed → paid content can now render.
  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand">
          <span className="leaf">❧</span>
          <span>ROSH HASHANAH</span>
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
        <p className="small-label">A FIVE-DAY JOURNEY</p>

        <h1>ROSH HASHANAH</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          When the trumpet sounds,
          <br />
          may your heart be awake.
        </p>

        <div className="floral-divider">
          <span>❀</span>
          <span>✦</span>
          <span>❀</span>
        </div>

        <p className="hero-note">
          5 DAYS · SCRIPTURE · AUDIO · REFLECTION
        </p>
      </section>

      {/* INTRODUCTION */}
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
          Awake.
          <br />
          Remember.
          <br />
          Prepare.
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.9",
          }}
        >
          This five-day journey is an invitation to slow down and become
          attentive to God as we approach Rosh Hashanah. Through Scripture,
          teaching, prayer and reflection, we will consider the biblical
          significance of the trumpet, remembrance, repentance and
          preparation.
        </p>
      </section>

      {/* SCRIPTURE */}
      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Speak to the children of Israel, saying, In the seventh month, on
            the first day of the month, you shall have a solemn rest, a
            memorial of blowing of trumpets, a holy convocation.
          </p>

          <small>LEVITICUS 23:24 · WEB</small>
        </div>
      </section>

      {/* START HERE */}
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
            Before the journey begins.
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.9",
            }}
          >
            Begin with the introductory teaching, then keep the full
            devotional close throughout the five days. The devotional is your
            written companion for Scripture, reflection and prayer.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* INTRODUCTION AUDIO */}
          <article
            style={{
              border: "1px solid rgba(0,0,0,0.15)",
              padding: "2rem",
            }}
          >
            <p className="section-label">AUDIO TEACHING</p>

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
              Begin here with a gentle introduction to Rosh Hashanah and the
              invitation to become spiritually awake.
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

          {/* FULL DEVOTIONAL */}
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
              Open your complete devotional and return to it each day as you
              move through the journey.
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

      {/* JOURNEY */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "1rem 1.5rem 5rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p className="section-label">THE FIVE-DAY JOURNEY</p>

          <h2
            style={{
              lineHeight: "1.2",
              margin: "1rem 0",
            }}
          >
            Take one day
            <br />
            at a time.
          </h2>

          <p
            style={{
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: "1.9",
            }}
          >
            There is no need to rush ahead. Give each day room to do its work.
            Listen, read, reflect, pray and respond before moving forward.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {journeyDays.map((item) => (
            <article
              key={item.day}
              style={{
                border: "1px solid rgba(0,0,0,0.15)",
                padding: "2.5rem",
                opacity: item.available ? 1 : 0.68,
              }}
            >
              <p
                className="section-label"
                style={{
                  marginBottom: "0.8rem",
                }}
              >
                {item.day}
              </p>

              <h3
                style={{
                  fontSize: "2rem",
                  lineHeight: "1.2",
                  marginBottom: "1rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  lineHeight: "1.9",
                  marginBottom: item.available ? "1.8rem" : 0,
                }}
              >
                {item.description}
              </p>

              {item.available ? (
                <a
                  href={item.audio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  Listen to Day 1
                  <span>→</span>
                </a>
              ) : (
                <p
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    marginTop: "1.5rem",
                  }}
                >
                  AUDIO COMING NEXT
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* RHYTHM */}
      <section className="journey-stages">
        <p className="section-label">THE RHYTHM</p>

        <h2>Listen for the trumpet.</h2>

        <div className="journey-days">
          <article>
            <span>01</span>
            <h3>Awaken</h3>
            <p>Become attentive again to the voice and movement of God.</p>
          </article>

          <article>
            <span>02</span>
            <h3>Remember</h3>
            <p>
              Remember what God has spoken and how faithfully He has carried
              you.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Return</h3>
            <p>
              Allow remembrance to lead you into repentance and renewed
              obedience.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Prepare</h3>
            <p>
              Make room in your heart for what God is calling you into next.
            </p>
          </article>
        </div>
      </section>

      {/* CLOSING */}
      <section className="journey-closing">
        <p className="section-label">BEGIN THE JOURNEY</p>

        <h2>
          Hear the sound.
          <br />
          Become attentive.
        </h2>

        <p>
          You do not need to understand everything before you begin. Start
          with the introduction, open your devotional and allow God to meet
          you one day at a time.
        </p>

        <a
          href={introductionAudio}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Begin with the Introduction
          <span>→</span>
        </a>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/courses" className="text-link">
            ← Back to courses
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-brand">ROSH HASHANAH</div>
        <div>Awake. Remember. Prepare.</div>
      </footer>
    </main>
  );
}
