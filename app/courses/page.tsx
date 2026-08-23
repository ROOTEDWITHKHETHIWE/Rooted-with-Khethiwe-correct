import Link from "next/link";

const courses = [
  {
    title: "Build According to Pattern",
    description:
      "Learning to build according to what God has revealed and to remain faithful to His pattern.",
    type: "COURSE",
    status: "COMING SOON",
    href: "/courses/build-according-to-pattern",
  },
  {
    title: "Before the Assignment",
    description:
      "Preparing yourself before stepping into what God has entrusted to you.",
    type: "COURSE",
    status: "COMING SOON",
    href: "/courses/before-the-assignment",
  },
  {
    title: "From Revelation to Construction",
    description:
      "Moving from what God has revealed to what you are called to build.",
    type: "COURSE",
    status: "COMING SOON",
    href: "/courses/from-revelation-to-construction",
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
          <Link href="/journal">Journal</Link>
          <Link href="/library">Library</Link>
          <Link href="/courses">Courses</Link>
        </nav>
      </header>

      <section className="journey-hero">
        <p className="small-label">ROOTED LEARNING</p>

        <h1>COURSES</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Learn deeply.
          <br />
          Live rooted.
        </p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">THE ROOTED CLASSROOM</p>

        <h2>
          Go deeper
          <br />
          than the page.
        </h2>

        <p>
          Rooted courses are designed to help you slow down, study Scripture,
          ask honest questions and put what you are learning into practice.
        </p>

        <div className="gold-line" />
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Rooted and built up in Him and established in the faith.
          </p>

          <small>COLOSSIANS 2:7 · WEB</small>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">EXPLORE THE COURSES</p>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <p className="section-label">{course.type}</p>

              <h2>{course.title}</h2>

              <p>{course.description}</p>

              <div className="course-card-footer">
                <span>{course.status}</span>

                <Link href={course.href}>
                  Explore
                  <span>→</span>
                </Link>
              </div>
            </article>
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
