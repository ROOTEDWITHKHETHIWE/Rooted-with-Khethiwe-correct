```tsx
import Link from "next/link";

export default function LibraryPage() {
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
        </nav>
      </header>

      <section className="journey-hero">
        <p className="small-label">COMING SOON</p>

        <h1>LIBRARY</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          A growing collection of
          <br />
          Scripture journeys and resources.
        </p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">THE ROOTED LIBRARY</p>

        <h2>
          More is
          <br />
          coming.
        </h2>

        <p>
          The Rooted Library will become a home for Scripture journeys,
          devotionals, studies and resources created to help women grow
          deeper, live faithfully and walk attentively with God.
        </p>

        <div className="gold-line" />
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            The path of the righteous is like the light of dawn, that shines
            more and more until the perfect day.
          </p>

          <small>PROVERBS 4:18 · WEB</small>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">FOR NOW</p>

        <h2>
          Begin with
          <br />
          Awake.
        </h2>

        <p>
          While the library is being built, you can begin with our current
          thirty-day Scripture journey.
        </p>

        <Link href="/journey" className="primary-button">
          Explore Awake
          <span>→</span>
        </Link>
      </section>

      <footer>
        <div className="footer-brand">MIDWEEK ROOTED</div>

        <div>A monthly Scripture journey</div>
      </footer>
    </main>
  );
}
```
