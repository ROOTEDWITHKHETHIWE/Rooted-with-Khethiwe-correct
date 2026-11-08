import Link from "next/link";
import "./courses-index.css";

export default function CoursesPage() {
  return (
    <main className="est-site">
      <header className="est-header">
        <Link className="est-brand" href="/">ROOTED <span>with Khethiwe</span></Link>
        <nav aria-label="Main navigation">
          <Link href="/journey">Journey</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/library">Library</Link>
          <Link href="/reflection">Gifts &amp; skills</Link>
          <Link className="est-account" href="/login">My account</Link>
        </nav>
      </header>
      <section className="est-pagehero">
        <p className="est-label">LEARN WITH ROOTED</p>
        <h1>Wisdom for<br />the life before you.</h1>
        <p>Thoughtful teaching with room to listen, reflect and respond.</p>
      </section>
      <section className="est-section est-green">
        <p className="est-label">NEW · 2–6 NOVEMBER 2026</p>
        <h2>Established, Still Becoming</h2>
        <p>A five-day course for the person who is carrying something new and still feels unready. Includes teaching, a workbook and daily slides.</p>
        <a className="est-button est-light" href="https://www.rootedwithkhethiwe.space/courses/established">View course and register →</a>
      </section>
      <section className="est-section">
        <p className="est-label">FREE LIVE TEACHING · 24–26 NOVEMBER 2026</p>
        <h2>Meet Me at the Well</h2>
        <p>Three evenings in Scripture on character, courtship, and the marriage promise. Open to everyone, with no sign-in required.</p>
        <a className="est-button" href="https://www.rootedwithkhethiwe.space/courses/meet-me-at-the-well">Explore the three days →</a>
      </section>
      <section className="est-section">
        <p className="est-label">MORE COURSES</p>
        <div className="est-days">
          <Link className="est-card" href="/courses/school-of-the-prophets">
            <h2>School of the Prophets</h2>
            <span>Enter the five lessons →</span>
          </Link>
          <Link className="est-card" href="/courses/good-builders-are-good-stewards">
            <h2>Good Builders Are Good Stewards</h2>
            <span>Explore course →</span>
          </Link>
          <Link className="est-card" href="/courses/build-according-to-pattern">
            <h2>Build According to Pattern</h2>
            <span>Explore course →</span>
          </Link>
          <Link className="est-card" href="/courses/before-the-assignment">
            <h2>Before the Assignment</h2>
            <span>Explore course →</span>
          </Link>
          <Link className="est-card" href="/courses/rosh-hashanah">
            <h2>Rosh Hashanah</h2>
            <span>Explore course →</span>
          </Link>
        </div>
      </section>
      <footer className="est-footer">
        <Link className="est-brand" href="/">ROOTED <span>with Khethiwe</span></Link>
        <p>Learning to live in what God is building.</p>
        <a href="mailto:rootedwithkhethiwe@gmail.com">Get in touch</a>
      </footer>
    </main>
  );
}
