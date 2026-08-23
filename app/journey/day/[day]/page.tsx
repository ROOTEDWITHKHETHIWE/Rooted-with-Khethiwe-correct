import Link from "next/link";
import { notFound } from "next/navigation";
import { awakeDays } from "../../../../data/awake";

type PageProps = {
  params: Promise<{
    day: string;
  }>;
};

export function generateStaticParams() {
  return awakeDays.map((item) => ({
    day: String(item.day),
  }));
}

export default async function AwakeDayPage({ params }: PageProps) {
  const { day } = await params;
  const dayNumber = Number(day);

  if (!Number.isInteger(dayNumber)) {
    notFound();
  }

  const currentDay = awakeDays.find(
    (item) => item.day === dayNumber
  );

  if (!currentDay) {
    notFound();
  }

  const previousDay =
    dayNumber > 1
      ? `/journey/day/${dayNumber - 1}`
      : null;

  const nextDay =
    dayNumber < 30
      ? `/journey/day/${dayNumber + 1}`
      : null;

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

      <section className="day-hero">
        <p className="small-label">
          AWAKE · DAY {String(currentDay.day).padStart(2, "0")}
        </p>

        <h1>{currentDay.title}</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          {currentDay.scripture}
        </p>
      </section>

      <section className="day-scripture">
        <div className="scripture-inner">

          <span className="quote-mark">“</span>

          <p>
            {currentDay.day === 1
              ? "Awake, O sleeper, and arise from the dead, and Christ will shine on you."
              : currentDay.scripture}
          </p>

          <small>
            {currentDay.scripture}
          </small>

        </div>
      </section>

      <section className="day-content">

        <div>
          <p className="section-label">
            TODAY&apos;S TEACHING
          </p>
        </div>

        <article>
          {currentDay.teaching.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </article>

      </section>

      <section className="truth-card">

        <p className="section-label">
          TODAY&apos;S TRUTH
        </p>

        <h2>
          {currentDay.truth}
        </h2>

      </section>

      <section className="reflection-section">

        <div>
          <p className="section-label">
            REFLECT
          </p>

          <h2>
            {currentDay.reflection}
          </h2>
        </div>

        <div className="reflection-space">

          <p>
            Take a moment to answer honestly.
          </p>

          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />

        </div>

      </section>

      <section className="prayer-section">

        <p className="section-label">
          PRAY
        </p>

        <h2>
          {currentDay.prayer}
        </h2>

      </section>

      <section className="respond-section">

        <p className="section-label">
          RESPOND
        </p>

        <h2>
          {currentDay.response}
        </h2>

        <div className="response-box">
          <span>
            Your response
          </span>
        </div>

      </section>

      {/* DAY NAVIGATION */}

      <section
        className="day-navigation"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >

        {previousDay ? (
          <Link
            href={previousDay}
            className="text-link"
          >
            ← Previous
          </Link>
        ) : (
          <span
            style={{
              opacity: 0.35,
              fontSize: "0.9rem",
            }}
          >
            Beginning
          </span>
        )}

        <Link
          href="/journey"
          className="primary-button"
        >
          All 30 Days
        </Link>

        {nextDay ? (
          <Link
            href={nextDay}
            className="primary-button"
          >
            Next Day
            <span>→</span>
          </Link>
        ) : (
          <Link
            href="/journey"
            className="primary-button"
          >
            Complete the journey
            <span>→</span>
          </Link>
        )}

      </section>

      <footer>

        <div className="footer-brand">
          MIDWEEK ROOTED
        </div>

        <div>
          A monthly Scripture journey
        </div>

      </footer>

    </main>
  );
}
