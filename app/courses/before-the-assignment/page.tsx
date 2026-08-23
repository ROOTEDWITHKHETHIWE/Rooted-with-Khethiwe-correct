import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";

const days = [
  {
    day: "DAY 1",
    title: "THE GOD WHO APPEARS",
    description:
      "God revealed Himself before He revealed the assignment. Before Moses was sent, he was invited to draw near.",
    href: "/courses/before-the-assignment/day/1",
  },
  {
    day: "DAY 2",
    title: "HOLY GROUND BEFORE HARD GROUND",
    description:
      "Before Joshua received the strategy for Jericho, he encountered the One who would lead him into battle.",
    href: "/courses/before-the-assignment/day/2",
  },
  {
    day: "DAY 3",
    title: "HEAVEN'S PATTERN FOR EARTHLY BATTLES",
    description:
      "Joshua's victory would not come from inventing his own strategy, but from faithfully following the pattern God had given him.",
    href: "/courses/before-the-assignment/day/3",
  },
  {
    day: "DAY 4",
    title: "THE ENCOUNTER PRODUCES AUTHORITY",
    description:
      "The encounter was never meant to remain an experience. Joshua had to carry what God had entrusted to him.",
    href: "/courses/before-the-assignment/day/4",
  },
  {
    day: "DAY 5",
    title: "FROM ENCOUNTER TO ASSIGNMENT",
    description:
      "Encounter. Consecration. Commission. There comes a moment when revelation becomes responsibility and God says, Now go.",
    href: "/courses/before-the-assignment/day/5",
  },
];

export default async function BeforeTheAssignmentPage() {
  const supabase = await createClient();

  // Check whether the visitor is logged in.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in → send them to the login page.
  if (!user) {
    redirect("/login");
  }

  // Check whether this user has access to Before the Assignment.
  const { data: access } = await supabase
    .from("course_access")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", "before-the-assignment")
    .maybeSingle();

  // Logged in but no access → show the locked page.
  if (!access) {
    return (
      <main className="awake-page">
        <header className="topbar">
          <div className="brand">
            <span className="leaf">❧</span>
            <span>BEFORE THE ASSIGNMENT</span>
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

          <h1>
            BEFORE
            <br />
            THE
            <br />
            ASSIGNMENT
          </h1>

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
              margin: "0 auto 2.5rem",
            }}
          >
            You are signed in to your Rooted account, but this account does
            not currently have access to Before the Assignment.
          </p>

          <p
            style={{
              lineHeight: "1.9",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
            }}
          >
            If you previously purchased this course, please make sure you are
            signed in with the email address connected to your access.
          </p>

          <Link href="/courses" className="primary-button">
            Back to Courses
            <span>→</span>
          </Link>
        </section>

        <footer>
          <div className="footer-brand">BEFORE THE ASSIGNMENT</div>

          <div>Encounter. Consecration. Commission.</div>
        </footer>
      </main>
    );
  }

  // User has access → show the actual course.
  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand">
          <span className="leaf">❧</span>
          <span>BEFORE THE ASSIGNMENT</span>
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
        <p className="small-label">A ROOTED 5-DAY JOURNEY</p>

        <h1>
          BEFORE
          <br />
          THE
          <br />
          ASSIGNMENT
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Preparing yourself
          <br />
          before stepping into
          <br />
          what God has entrusted to you.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
        }}
      >
        {/* INTRODUCTION */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          <p className="section-label">THE JOURNEY</p>

          <h2
            style={{
              lineHeight: "1.2",
              marginBottom: "2.5rem",
            }}
          >
            Before God
            <br />
            gives the assignment,
            <br />
            He prepares the person.
          </h2>

          <div
            style={{
              lineHeight: "1.9",
              textAlign: "justify",
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            <p style={{ marginBottom: "1.6rem" }}>
              There is a preparation that happens before the assignment.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              Before Moses stood before Pharaoh, he encountered God in the
              wilderness.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              Before Joshua walked around Jericho, he stood on holy ground.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              Before they were sent to do something for God, they first had to
              encounter the God who was sending them.
            </p>

            <p
              style={{
                textAlign: "center",
                fontSize: "1.25rem",
                fontWeight: 600,
                margin: "2.5rem 0",
              }}
            >
              The encounter came before the assignment.
            </p>
          </div>
        </section>

        {/* KEY SCRIPTURE */}
        <section
          style={{
            padding: "3rem 2rem",
            marginBottom: "5rem",
            textAlign: "center",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <p className="section-label">KEY THOUGHT</p>

          <p
            style={{
              fontSize: "1.35rem",
              lineHeight: "1.8",
              fontStyle: "italic",
              maxWidth: "620px",
              margin: "1.5rem auto",
            }}
          >
            “Before I ask You what I must do, teach me to simply be with You.”
          </p>

          <div className="ornament">
            <span>✦</span>
          </div>
        </section>

        {/* WHAT THIS JOURNEY IS ABOUT */}
        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">WHAT YOU WILL EXPLORE</p>

          <h2
            style={{
              lineHeight: "1.2",
              marginBottom: "2.5rem",
            }}
          >
            Encounter.
            <br />
            Consecration.
            <br />
            Commission.
          </h2>

          <div
            style={{
              lineHeight: "1.9",
              textAlign: "justify",
            }}
          >
            <p style={{ marginBottom: "1.6rem" }}>
              This five-day journey is about what happens before you step into
              what God has called you to carry.
            </p>

            <p style={{ marginBottom: "1.6rem" }}>
              We will look at the encounters of Moses and Joshua and consider
              what they teach us about preparation, surrender, obedience,
              authority and commissioning.
            </p>

            <p>
              The goal is not simply to discover what God wants you to do. It
              is to become the person who can faithfully carry what He has
              entrusted to you.
            </p>
          </div>
        </section>

        {/* JOURNEY PROGRESSION */}
        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">THE PROGRESSION</p>

          <div
            style={{
              textAlign: "center",
              lineHeight: "2",
              fontSize: "1.1rem",
            }}
          >
            <p>
              <strong>Encounter</strong>
            </p>

            <p>↓</p>

            <p>
              <strong>Consecration</strong>
            </p>

            <p>↓</p>

            <p>
              <strong>Revelation</strong>
            </p>

            <p>↓</p>

            <p>
              <strong>Obedience</strong>
            </p>

            <p>↓</p>

            <p>
              <strong>Commission</strong>
            </p>
          </div>
        </section>

        {/* DAYS */}
        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">YOUR FIVE DAYS</p>

          <h2
            style={{
              lineHeight: "1.2",
              marginBottom: "2.5rem",
            }}
          >
            Walk the
            <br />
            journey.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {days.map((day) => (
              <div
                key={day.day}
                style={{
                  border: "1px solid rgba(0,0,0,0.15)",
                  padding: "2.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    marginBottom: "1rem",
                  }}
                >
                  {day.day}
                </p>

                <h3
                  style={{
                    fontSize: "1.65rem",
                    lineHeight: "1.25",
                    marginBottom: "1.25rem",
                  }}
                >
                  {day.title}
                </h3>

                <p
                  style={{
                    lineHeight: "1.9",
                    textAlign: "justify",
                    marginBottom: "2rem",
                  }}
                >
                  {day.description}
                </p>

                <Link href={day.href} className="primary-button">
                  Begin {day.day.toLowerCase()}
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* IMPORTANT THOUGHT */}
        <section
          style={{
            padding: "3.5rem 2rem",
            marginBottom: "5rem",
            textAlign: "center",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <p className="section-label">REMEMBER</p>

          <p
            style={{
              fontSize: "1.35rem",
              lineHeight: "1.8",
              fontWeight: 600,
              maxWidth: "620px",
              margin: "1.5rem auto",
            }}
          >
            The assignment is not the beginning.
            <br />
            The encounter is.
          </p>

          <p
            style={{
              lineHeight: "1.9",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Do not rush past the preparation. Let God form you before He sends
            you.
          </p>
        </section>

        {/* CLOSING */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <p className="section-label">YOUR INVITATION</p>

          <h2
            style={{
              lineHeight: "1.25",
              margin: "1.5rem auto 2rem",
            }}
          >
            Before you ask,
            <br />
            “What is my assignment?”
            <br />
            ask,
            <br />
            “Who is sending me?”
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.9",
              textAlign: "justify",
            }}
          >
            Slow down. Pay attention. Draw near. Allow the encounter to prepare
            you for the responsibility that may be ahead.
          </p>
        </section>

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
          <Link href="/courses" className="primary-button">
            <span>←</span>
            All Courses
          </Link>

          <Link
            href="/courses/before-the-assignment/day/1"
            className="primary-button"
          >
            Begin Day 1
            <span>→</span>
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-brand">BEFORE THE ASSIGNMENT</div>

        <div>Encounter. Consecration. Commission.</div>
      </footer>
    </main>
  );
}
