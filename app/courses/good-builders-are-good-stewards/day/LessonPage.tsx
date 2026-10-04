import Link from "next/link";
import type { GoodBuildersDay } from "@/data/goodBuilders";

export default function LessonPage({ day }: { day: GoodBuildersDay }) {
  const previous = day.number - 1;
  const next = day.number + 1;

  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand"><span className="leaf">❧</span><span>GOOD BUILDERS ARE GOOD STEWARDS</span><span className="leaf">❧</span></div>
        <nav><Link href="/">Home</Link><Link href="/journey">Journey</Link><Link href="/courses">Courses</Link><Link href="/journal">Journal</Link><Link href="/library">Library</Link></nav>
      </header>

      <section className="journey-hero">
        <p className="small-label">GOOD BUILDERS ARE GOOD STEWARDS</p>
        <h1>DAY {day.number}<br />{day.title.toUpperCase()}</h1>
        <div className="ornament"><span>✦</span></div>
        <p className="subtitle">{day.subtitle}</p>
      </section>

      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p className="section-label">SCRIPTURE THREAD</p>
          <p style={{ fontSize: "1.35rem", lineHeight: "1.8", fontStyle: "italic", maxWidth: "650px", margin: "1.5rem auto" }}>“{day.scriptureText}”</p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}>{day.scripture}</p>
        </div>

        {day.audioSrc && (
          <section style={{ marginBottom: "5rem", padding: "2.5rem", borderTop: "1px solid rgba(0,0,0,0.15)", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
            <p className="section-label">AUDIO TEACHING</p>
            <h2 style={{ marginBottom: "1rem", lineHeight: "1.2" }}>Listen to today&apos;s teaching.</h2>
            <p style={{ lineHeight: "1.8", marginBottom: "1.5rem" }}>Press play, settle in, and let this teaching walk with you through today&apos;s devotional.</p>
            <audio controls preload="metadata" style={{ width: "100%" }}>
              <source src={day.audioSrc} type="audio/mp4" />
              Your browser does not support the audio element.
            </audio>
          </section>
        )}

        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">TEACHING</p>
          <h2 style={{ marginBottom: "2.5rem", lineHeight: "1.2" }}>{day.teachingTitle}</h2>
          <div style={{ textAlign: "justify", lineHeight: "1.9" }}>
            {day.teaching.map((paragraph) => <p key={paragraph} style={{ marginBottom: "1.6rem" }}>{paragraph}</p>)}
          </div>
        </section>

        <section style={{ marginBottom: "5rem", padding: "2.5rem", borderTop: "1px solid rgba(0,0,0,0.15)", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
          <p className="section-label">BUILDER'S WINDOW</p>
          <p style={{ fontSize: "1.25rem", lineHeight: "1.7", fontWeight: 600, margin: "1.4rem 0 0" }}>{day.buildersWindow}</p>
        </section>

        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">REFLECT &amp; RESPOND</p>
          <h2 style={{ marginBottom: "2rem" }}>Sit with this<br />slowly.</h2>
          <div style={{ lineHeight: "1.9" }}>{day.reflection.map((question) => <p key={question} style={{ marginBottom: "1.5rem" }}>{question}</p>)}</div>
        </section>

        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">PRAYER</p>
          <p style={{ textAlign: "justify", lineHeight: "1.9" }}>{day.prayer}</p>
        </section>

        <section style={{ marginBottom: "5rem", padding: "3rem 2rem", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.15)", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
          <p className="section-label">DECLARATION</p>
          <p style={{ fontSize: "1.3rem", lineHeight: "1.8", fontWeight: 600, maxWidth: "650px", margin: "1.5rem auto 0" }}>{day.declaration}</p>
        </section>

        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">YOUR WORKBOOK</p>
          <p style={{ lineHeight: "1.9", textAlign: "justify" }}>Return to your approved Good Builders Are Good Stewards workbook for the full devotional, journaling space and today’s extended Scripture study. Teaching-slide resources will be added here soon.</p>
        </section>

        <div style={{ paddingTop: "3rem", borderTop: "1px solid rgba(0,0,0,0.15)", display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          {previous > 0 ? <Link href={`/courses/good-builders-are-good-stewards/day/${previous}`} className="text-link">← Day {previous}</Link> : <Link href="/courses/good-builders-are-good-stewards" className="text-link">← Course home</Link>}
          {next <= 5 ? <Link href={`/courses/good-builders-are-good-stewards/day/${next}`} className="primary-button">Continue to Day {next}<span>→</span></Link> : <Link href="/courses" className="primary-button">Explore more courses<span>→</span></Link>}
        </div>
      </section>
      <footer><div className="footer-brand">ROOTED WITH KHETHIWE</div><div>Good builders are good stewards.</div></footer>
    </main>
  );
}
