import Link from "next/link";

const availableCourse = {
  title: "Build According to Pattern",
  description:
    "Learning to build according to what God has revealed and to remain faithful to His pattern.",
  meta: "5-DAY COURSE",
};

const upcomingCourses = [
  {
    title: "Before the Assignment",
    description:
      "Preparing yourself before stepping into what God has entrusted to you.",
  },
  {
    title: "From Revelation to Construction",
    description:
      "Moving from what God has revealed to what you are called to build.",
  },
];

export default function CoursesPage() {
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

      {/* HERO */}
      <section className="journey-hero">
        <p className="small-label">ROOTED LEARNING</p>

        <h1>
          COURSES
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Learn deeply.
          <br />
          Live rooted.
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
          <p className="section-label">THE ROOTED CLASSROOM</p>

          <h2
            style={{
              marginBottom: "2rem",
              lineHeight: "1.2",
            }}
          >
            Go deeper
            <br />
            than the page.
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: "1.9",
              textAlign: "justify",
            }}
          >
            Rooted courses are designed to help you slow down, study
            Scripture, ask honest questions and put what you are learning into
            practice.
          </p>
        </div>

        {/* SCRIPTURE */}
        <div
          style={{
            padding: "3rem 2rem",
            marginBottom: "5rem",
            textAlign: "center",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "2rem",
              marginBottom: "1rem",
            }}
          >
            “
          </span>

          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              fontStyle: "italic",
              maxWidth: "600px",
              margin: "0 auto 1.5rem",
            }}
          >
            Rooted and built up in Him and established in the faith.
          </p>

          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
            }}
          >
            COLOSSIANS 2:7 · WEB
          </p>
        </div>

        {/* AVAILABLE COURSE */}
        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">AVAILABLE NOW</p>

          <h2
            style={{
              marginBottom: "2rem",
              lineHeight: "1.2",
            }}
          >
            Start learning.
          </h2>

          <div
            style={{
              border: "1px solid rgba(0,0,0,0.15)",
              padding: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                marginBottom: "1rem",
              }}
            >
              {availableCourse.meta}
            </p>

            <h3
              style={{
                fontSize: "2rem",
                lineHeight: "1.2",
                marginBottom: "1.25rem",
              }}
            >
              {availableCourse.title}
            </h3>

            <p
              style={{
                lineHeight: "1.9",
                maxWidth: "600px",
                marginBottom: "2rem",
                textAlign: "justify",
              }}
            >
              {availableCourse.description}
            </p>

            <Link
              href="/courses/build-according-to-pattern"
              className="primary-button"
            >
              Explore the course
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* UPCOMING COURSES */}
        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">COMING SOON</p>

          <h2
            style={{
              marginBottom: "2rem",
              lineHeight: "1.2",
            }}
          >
            More courses
            <br />
            are coming.
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {upcomingCourses.map((course) => (
              <div
                key={course.title}
                style={{
                  padding: "2rem",
                  border: "1px solid rgba(0,0,0,0.1)",
                  opacity: 0.78,
                }}
              >
                <p
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    marginBottom: "0.8rem",
                  }}
                >
                  COMING SOON
                </p>

                <h3
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.3",
                    marginBottom: "1rem",
                  }}
                >
                  {course.title}
                </h3>

                <p
                  style={{
                    lineHeight: "1.8",
                    margin: 0,
                    textAlign: "justify",
                  }}
                >
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section
          style={{
            padding: "4rem 2rem",
            textAlign: "center",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            borderBottom: "1px solid rgba(0,0,0,0.15)",
            marginBottom: "4rem",
          }}
        >
          <p className="section-label">THE INVITATION</p>

          <h2
            style={{
              lineHeight: "1.25",
              margin: "1.5rem auto",
            }}
          >
            Don't just
            <br />
            consume.
            <br />
            Be formed.
          </h2>

          <p
            style={{
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: "1.9",
            }}
          >
            These courses are not simply information to collect. They are
            invitations to slow down, encounter God in His Word and allow what
            you learn to become part of how you live.
          </p>
        </section>

        <div style={{ textAlign: "center" }}>
          <Link href="/" className="text-link">
            ← Back home
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
