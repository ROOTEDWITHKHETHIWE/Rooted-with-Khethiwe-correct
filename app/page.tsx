import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="logo">
          ROOTED<span>•</span>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/library">Library</Link>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">A monthly Scripture journey</p>

        <h1>Awake</h1>

        <p className="intro">
          30 days of awakening to the presence, voice and invitation of God.
        </p>

        <div className="details">
          <span>30 DAYS</span>
          <span>•</span>
          <span>FREE</span>
        </div>

        <Link href="/journey" className="button">
          Begin the journey
          <span>→</span>
        </Link>
      </section>

      <section className="scripture">
        <p>
          “Awake, O sleeper, and arise from the dead, and Christ will shine on
          you.”
        </p>

        <small>EPHESIANS 5:14</small>
      </section>

      <section className="welcome">
        <p className="eyebrow">WELCOME TO ROOTED</p>

        <h2>
          Scripture for the woman.
          <br />
          Formation for the home.
        </h2>

        <p>
          Rooted is a monthly rhythm of Scripture, reflection and practical
          formation for women who want to build their lives and homes around
          the Word of God.
        </p>
      </section>

      <footer>
        <strong>ROOTED</strong>
        <span>Monthly Scripture journeys</span>
      </footer>
    </main>
  );
}
