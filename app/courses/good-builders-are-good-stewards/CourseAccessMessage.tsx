import Link from "next/link";

type Props = { unavailable?: boolean };

export default function CourseAccessMessage({ unavailable }: Props) {
  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand"><span className="leaf">❧</span><span>ROOTED WITH KHETHIWE</span><span className="leaf">❧</span></div>
        <nav><Link href="/">Home</Link><Link href="/journey">Journey</Link><Link href="/courses">Courses</Link><Link href="/journal">Journal</Link><Link href="/library">Library</Link></nav>
      </header>
      <section className="journey-hero">
        <p className="small-label">A FIVE-DAY ROOTED COURSE</p>
        <h1>GOOD BUILDERS<br />ARE GOOD<br />STEWARDS</h1>
        <div className="ornament"><span>✦</span></div>
        <p className="subtitle">{unavailable ? "We could not confirm your course access." : "This course is reserved for women with access."}</p>
      </section>
      <section style={{ maxWidth: "650px", margin: "0 auto", padding: "5rem 1.5rem", textAlign: "center" }}>
        <p className="section-label">COURSE ACCESS</p>
        <h2 style={{ lineHeight: "1.2", margin: "1.2rem 0 2rem" }}>{unavailable ? <>Something needs<br />our attention.</> : <>Your course is not<br />unlocked yet.</>}</h2>
        <p style={{ lineHeight: "1.9", maxWidth: "560px", margin: "0 auto 1.5rem" }}>{unavailable ? "We could not confirm access right now. Please try again shortly." : "You are signed in to your Rooted account, but this account does not currently have access to Good Builders Are Good Stewards."}</p>
        {!unavailable && <p style={{ lineHeight: "1.9", maxWidth: "560px", margin: "0 auto 2.5rem" }}>If you have already purchased this course, please sign in with the email address connected to your access.</p>}
        <Link href="/courses" className="primary-button">Back to Courses<span>→</span></Link>
      </section>
      <footer><div className="footer-brand">ROOTED WITH KHETHIWE</div><div>Good builders are good stewards.</div></footer>
    </main>
  );
}
