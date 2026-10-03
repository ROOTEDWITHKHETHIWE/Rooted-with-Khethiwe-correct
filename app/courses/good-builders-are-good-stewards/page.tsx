import Link from "next/link";
import { redirect } from "next/navigation";
import { goodBuildersDays } from "@/data/goodBuilders";
import { checkGoodBuildersAccess } from "@/app/lib/courseAccess";
import CourseAccessMessage from "./CourseAccessMessage";

export const dynamic = "force-dynamic";

export default async function GoodBuildersCoursePage() {
  const { user, access, error } = await checkGoodBuildersAccess();

  if (!user) {
    redirect("/login?next=%2Fcourses%2Fgood-builders-are-good-stewards");
  }

  if (error) {
    return <CourseAccessMessage unavailable />;
  }

  if (!access) {
    return <CourseAccessMessage />;
  }

  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand"><span className="leaf">❧</span><span>ROOTED WITH KHETHIWE</span><span className="leaf">❧</span></div>
        <nav><Link href="/">Home</Link><Link href="/journey">Journey</Link><Link href="/courses">Courses</Link><Link href="/journal">Journal</Link><Link href="/library">Library</Link></nav>
      </header>

      <section className="journey-hero">
        <p className="small-label">ROOTED COURSE</p>
        <h1>GOOD BUILDERS<br />ARE GOOD<br />STEWARDS</h1>
        <div className="ornament"><span>✦</span></div>
        <p className="subtitle">A five-day journey of faithfully stewarding<br />what God has placed in your hands.</p>
      </section>

      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <p className="section-label">THE INVITATION</p>
          <h2 style={{ marginBottom: "2rem", lineHeight: "1.2" }}>Do not wait for<br />the big thing.</h2>
          <div style={{ maxWidth: "650px", margin: "0 auto", lineHeight: "1.9", textAlign: "justify" }}>
            <p style={{ marginBottom: "1.5rem" }}>God is not asking you to manufacture a grand beginning. He is asking you to faithfully steward what He has already placed in your hands.</p>
            <p>In this five-day course, we anchor ourselves in the parable of the talents and learn how capacity, courage, community and obedience form a life that can be trusted with more.</p>
          </div>
        </div>

        <div style={{ padding: "3rem 2rem", marginBottom: "5rem", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.15)", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
          <p className="section-label">ANCHOR SCRIPTURE</p>
          <p style={{ fontSize: "1.35rem", lineHeight: "1.8", fontStyle: "italic", maxWidth: "650px", margin: "1.5rem auto" }}>“For it is like a man going into another country, who called his own servants and entrusted his goods to them.”</p>
          <p style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}>MATTHEW 25:14–30 · WEB</p>
        </div>

        <section style={{ marginBottom: "5rem" }}>
          <p className="section-label">WHAT YOU WILL EXPLORE</p>
          <h2 style={{ marginBottom: "2.5rem", lineHeight: "1.2" }}>Five days.<br />One faithful yes.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {goodBuildersDays.map((day) => <Link key={day.number} href={`/courses/good-builders-are-good-stewards/day/${day.number}`} style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem", border: "1px solid rgba(0,0,0,0.12)" }}>
              <span style={{ minWidth: "48px", fontSize: "0.8rem", letterSpacing: "0.12em", opacity: 0.65 }}>0{day.number}</span>
              <span style={{ flex: 1 }}><span style={{ display: "block", fontSize: "1.05rem", fontWeight: 600, marginBottom: "0.4rem" }}>{day.title}</span><span style={{ fontSize: "0.75rem", letterSpacing: "0.08em", opacity: 0.65 }}>{day.scripture}</span></span>
              <span style={{ fontSize: "1.2rem", opacity: 0.7 }}>→</span>
            </Link>)}
          </div>
        </section>

        <section style={{ marginBottom: "5rem", padding: "2.5rem", borderTop: "1px solid rgba(0,0,0,0.15)", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
          <p className="section-label">HOW TO APPROACH THIS COURSE</p>
          <h2 style={{ margin: "1.5rem 0 2rem" }}>Build slowly.<br />Obey honestly.</h2>
          <div style={{ textAlign: "justify", lineHeight: "1.9" }}><p style={{ marginBottom: "1.5rem" }}>Read the Scripture, take your time with the teaching and answer the reflection prompts in your Good Builders Are Good Stewards workbook.</p><p>Do not aim to rush through five lessons. Aim to become a faithful builder who can be trusted with more.</p></div>
        </section>

        <section style={{ marginBottom: "5rem", padding: "4rem 2rem", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.15)", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
          <p className="section-label">BEGIN THE JOURNEY</p>
          <h2 style={{ margin: "1.5rem auto" }}>What is in<br />your hands?</h2>
          <Link href="/courses/good-builders-are-good-stewards/day/1" className="primary-button">Begin Day 1<span>→</span></Link>
        </section>

        <section style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">COURSE RESOURCES</p>
          <p style={{ maxWidth: "600px", margin: "1rem auto 0", lineHeight: "1.9" }}>Use your devotional workbook alongside each lesson. Daily teaching slides will be added to the course resources soon.</p>
        </section>

        <section style={{ marginBottom: "2rem", padding: "2.5rem", borderTop: "1px solid rgba(0,0,0,0.15)", borderBottom: "1px solid rgba(0,0,0,0.15)" }}>
          <p className="section-label">REVIEWS</p>
          <h2 style={{ margin: "1.2rem 0" }}>Your testimony<br />has a place here.</h2>
          <p style={{ lineHeight: "1.9", textAlign: "justify" }}>As this course is stewarded in the lives of builders, testimonies and reflections will live here.</p>
        </section>
        <Link href="/courses" className="text-link">← Back to all courses</Link>
      </section>
      <footer><div className="footer-brand">ROOTED WITH KHETHIWE</div><div>Good builders are good stewards.</div></footer>
    </main>
  );
}
