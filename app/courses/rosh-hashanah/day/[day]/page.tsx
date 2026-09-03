import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import {
  devotionalPdf,
  roshHashanahDays,
} from "@/data/roshHashanah";

type PageProps = {
  params: Promise<{
    day: string;
  }>;
};

export function generateStaticParams() {
  return roshHashanahDays.map((item) => ({
    day: String(item.day),
  }));
}

export default async function RoshHashanahDayPage({
  params,
}: PageProps) {
  const { day } = await params;
  const dayNumber = Number(day);

  if (!Number.isInteger(dayNumber)) {
    notFound();
  }

  const currentDay = roshHashanahDays.find(
    (item) => item.day === dayNumber
  );

  if (!currentDay) {
    notFound();
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: access, error: accessError } = await supabase
    .from("course_access")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_slug", "rosh-hashanah")
    .maybeSingle();

  if (accessError || !access) {
    redirect("/courses/rosh-hashanah");
  }

  const previousDay =
    dayNumber > 1
      ? `/courses/rosh-hashanah/day/${dayNumber - 1}`
      : null;

  const nextDay =
    dayNumber < 5
      ? `/courses/rosh-hashanah/day/${dayNumber + 1}`
      : null;

  return (
    <main className="awake-page">
      <header className="topbar">
        <div className="brand">
          <span className="leaf">❧</span>
          <span>THE THRESHOLD</span>
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
      <section className="day-hero">
        <p className="small-label">
          THE THRESHOLD · DAY{" "}
          {String(currentDay.day).padStart(2, "0")}
        </p>

        <h1>{currentDay.theme}</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">{currentDay.title}</p>

        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "0.78rem",
            letterSpacing: "0.14em",
          }}
        >
          {currentDay.scripture}
        </p>
      </section>

      {/* SCRIPTURE */}
      <section className="day-scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>
            Read today&apos;s passage slowly:
            <br />
            {currentDay.scripture}
          </p>

          <small>{currentDay.scripture}</small>
        </div>
      </section>

      {/* AUDIO */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "4rem 1.5rem 1rem",
          textAlign: "center",
        }}
      >
        <p className="section-label">TODAY&apos;S AUDIO</p>

        <h2
          style={{
            lineHeight: "1.2",
            margin: "1rem 0 1.5rem",
          }}
        >
          Listen before
          <br />
          you rush ahead.
        </h2>

        <p
          style={{
            maxWidth: "580px",
            margin: "0 auto 2rem",
            lineHeight: "1.9",
          }}
        >
          Settle your heart, open your Bible and move through
          today&apos;s teaching slowly.
        </p>

        <a
          href={currentDay.audio}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Listen to Day {currentDay.day}
          <span>→</span>
        </a>
      </section>

      {/* TEACHING */}
      <section className="day-content">
        <div>
          <p className="section-label">TODAY&apos;S TEACHING</p>
        </div>

        <article>
          {currentDay.teaching.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </section>

      {/* TRUTH */}
      <section className="truth-card">
        <p className="section-label">TODAY&apos;S TRUTH</p>

        <h2>{currentDay.truth}</h2>
      </section>

      {/* REFLECT */}
      <section className="reflection-section">
        <div>
          <p className="section-label">REFLECT</p>

          <h2>{currentDay.reflection}</h2>
        </div>

        <div className="reflection-space">
          <p>Take a moment to answer honestly.</p>

          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />
        </div>
      </section>

      {/* PRAY */}
      <section className="prayer-section">
        <p className="section-label">PRAY</p>

        <h2>{currentDay.prayer}</h2>
      </section>

      {/* RESPOND */}
      <section className="respond-section">
        <p className="section-label">RESPOND</p>

        <h2>{currentDay.response}</h2>

        <div className="response-box">
          <span>Your response</span>
        </div>
      </section>

      {/* DEVOTIONAL */}
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "1rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <p className="section-label">YOUR WRITTEN COMPANION</p>

        <p
          style={{
            maxWidth: "560px",
            margin: "1rem auto 2rem",
            lineHeight: "1.9",
          }}
        >
          Continue studying and journaling in the complete Threshold
          devotional.
        </p>

        <a
          href={devotionalPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Open the Full Devotional →
        </a>
      </section>

      {/* NAVIGATION */}
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
          <Link href={previousDay} className="text-link">
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
          href="/courses/rosh-hashanah"
          className="primary-button"
        >
          Course Home
        </Link>

        {nextDay ? (
          <Link href={nextDay} className="primary-button">
            Next Day
            <span>→</span>
          </Link>
        ) : (
          <Link
            href="/courses/rosh-hashanah"
            className="primary-button"
          >
            Complete the Journey
            <span>→</span>
          </Link>
        )}
      </section>

      <footer>
        <div className="footer-brand">THE THRESHOLD</div>

        <div>Remember. Release. Return. Listen. Cross.</div>
      </footer>
    </main>
  );
}
