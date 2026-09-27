import Link from "next/link";
import { notFound } from "next/navigation";

const becomingDays = [
  ["YOU CANNOT TAKE HER WITH YOU", "Genesis 35:9–15 · Genesis 35:10 (WEB)", "A new season may require you to stop answering to a name God has already changed."],
  ["WHEN SURVIVAL BECAME A NAME", "Genesis 32:24–30 · Genesis 32:28 (WEB)", "What protected you in one season must not become your permanent identity."],
  ["THE ROLES THAT NAMED YOU", "Luke 10:38–42 · Luke 10:42 (WEB)", "You are more than the functions you perform for other people."],
  ["THE IDENTITY OF DISAPPOINTMENT", "1 Samuel 1:6–18 · 1 Samuel 1:18 (WEB)", "Pain may describe an experience, but it does not have authority to name you."],
  ["STOP INTRODUCING YOURSELF BY THE RUINS", "Nehemiah 2:11–18 · Nehemiah 2:17 (WEB)", "Acknowledging what broke is different from building your identity around it."],
  ["COMPARISON CANNOT NAME YOU", "John 21:20–22 · John 21:22 (WEB)", "Jesus' call on another woman cannot become the measuring stick for yours."],
  ["LEAVE THE OLD GARMENTS BEHIND", "Zechariah 3:1–5 · Zechariah 3:4 (WEB)", "God does not merely remove shame; He gives clean garments for what comes next."],
  ["KNOWN BEFORE YOU PERFORMED", "Psalm 139:1–18 · Psalm 139:16 (WEB)", "Your life was known by God before it was impressive to anyone else."],
  ["NAMED BY GOD", "Isaiah 43:1–4 · Isaiah 43:1 (WEB)", "God's claim over you is deeper than the labels accumulated through life."],
  ["YOU BELONG BEFORE YOU BUILD", "Ephesians 2:11–22 · Ephesians 2:19 (WEB)", "You do not earn belonging through usefulness; you build from belonging."],
  ["CHOSEN IS NOT THE SAME AS VISIBLE", "1 Samuel 16:1–13 · 1 Samuel 16:7 (WEB)", "God's choosing often precedes human recognition."],
  ["YOUR IDENTITY IS NOT YOUR ASSIGNMENT", "Luke 10:17–20 · Luke 10:20 (WEB)", "Your assignment can change without your worth changing."],
  ["SECURE IN THE FATHER'S LOVE", "Luke 15:11–24 · Luke 15:20 (WEB)", "Security grows where identity is received from the Father rather than achieved."],
  ["REMEMBER WHO YOU ARE", "Judges 6:11–16 · Judges 6:12 (WEB)", "Gideon had to hear heaven's description while still feeling like the least."],
  ["THE SECRET PLACE WAS PREPARATION", "1 Samuel 3:1–10 · 1 Samuel 3:10 (WEB)", "The secret place was not punishment. It was preparation."],
  ["HIDDEN DOES NOT MEAN FORGOTTEN", "1 Samuel 16:11–23 · 1 Samuel 16:13 (WEB)", "David's field was forming a king before anyone called him one."],
  ["WHAT THE WILDERNESS PRODUCED", "Deuteronomy 8:2–6 · Deuteronomy 8:2 (WEB)", "God uses hidden terrain to reveal what is in us and teach dependence."],
  ["THE OIL CAME BEFORE THE ROOM", "Esther 2:8–17 · Esther 2:17 (WEB)", "Esther's preparation preceded access; preparation and visibility are not the same."],
  ["YOU ARE NOT STILL WAITING TO BECOME READY", "Exodus 3:1–12 · Exodus 3:10 (WEB)", "Moses felt inadequate at the moment God said go."],
  ["FORMATION HAS PRODUCED CAPACITY", "2 Timothy 1:6–7 · 2 Timothy 1:6 (WEB)", "The gift must be stirred; formation creates capacity that must eventually be exercised."],
  ["HIDDEN AND HIDING ARE NOT THE SAME", "1 Kings 19:9–16 · 1 Kings 19:15 (WEB)", "There is a difference between being hidden by God and hiding when He says move."],
  ["FAITHFUL WITH LITTLE", "Matthew 25:14–23 · Matthew 25:21 (WEB)", "Faithfulness with little prepares the heart for greater trust."],
  ["WHEN GOD ENTRUSTS MORE", "Matthew 25:20–23 · Matthew 25:23 (WEB)", "More is not merely reward; it is responsibility."],
  ["A PRISONER CANNOT GOVERN EGYPT", "Genesis 41:37–44 · Genesis 41:41 (WEB)", "Joseph could not govern Egypt from a prisoner's internal architecture."],
  ["TAKE YOUR PLACE", "Esther 4:10–16 · Esther 4:14 (WEB)", "There are moments when obedience requires stepping into the room."],
  ["AUTHORITY WITHOUT PERFORMANCE", "Luke 9:1–6 · Luke 9:1 (WEB)", "Kingdom authority flows from being sent, not from proving yourself."],
  ["ENLARGE THE TENT", "Isaiah 54:1–3 · Isaiah 54:2 (WEB)", "Enlargement requires preparation for what has not yet arrived."],
  ["CARRY IT WITHOUT LOSING THE SECRET PLACE", "John 15:1–11 · John 15:5 (WEB)", "Greater responsibility must never replace dependence on Christ."],
  ["OCCUPY WITHOUT APOLOGY", "Joshua 1:1–9 · Joshua 1:9 (WEB)", "Courage is not self-promotion; sometimes it is simply agreeing with God's command to move."],
  ["BECOME", "Philippians 3:12–14 · Philippians 3:13–14 (WEB)", "Becoming is a lifelong agreement with God's work in you, not a performance of a new persona."],
];

type PageProps = {
  params: Promise<{ day: string }>;
};

export function generateStaticParams() {
  return becomingDays.map((_, index) => ({
    day: String(index + 1),
  }));
}

export default async function BecomingDayPage({ params }: PageProps) {
  const { day } = await params;
  const dayNumber = Number(day);

  if (!Number.isInteger(dayNumber) || dayNumber < 1 || dayNumber > 30) {
    notFound();
  }

  const [title, scripture, truth] = becomingDays[dayNumber - 1];

  const previousDay =
    dayNumber > 1 ? `/journey/day/${dayNumber - 1}` : null;

  const nextDay =
    dayNumber < 30 ? `/journey/day/${dayNumber + 1}` : null;

  return (
    <main
      className="awake-page"
      style={{ background: "#f7fbff", color: "#24496d" }}
    >
      <header
        className="topbar"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #d3e3f0",
        }}
      >
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

      <section
        className="day-hero"
        style={{
          background:
            "linear-gradient(135deg, #fbfdff 0%, #e4f2fb 60%, #d5e9f7 100%)",
          color: "#294f76",
        }}
      >
        <p className="small-label">
          BECOMING · DAY {String(dayNumber).padStart(2, "0")}
        </p>

        <h1 style={{ color: "#315a82", fontStyle: "italic" }}>
          {title}
        </h1>

        <div className="ornament">
          <span>❧</span>
        </div>

        <p className="subtitle">{scripture}</p>
      </section>

      <section
        className="day-scripture"
        style={{ background: "#e3f1fa", color: "#24496d" }}
      >
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>{truth}</p>

          <small>{scripture}</small>
        </div>
      </section>

      <section className="day-content">
        <div>
          <p className="section-label">TODAY&apos;S TEACHING</p>
        </div>

        <article>
          <p>
            Becoming is not an invitation to manufacture a more impressive
            version of yourself. It is an invitation to agree with God about
            who He is forming you to be.
          </p>

          <p>
            Read today&apos;s Scripture slowly. Notice what it reveals about
            God&apos;s character, the person He calls, and the difference
            between where that person has been and what God is now entrusting.
          </p>

          <p>
            You do not have to deny your history to move forward. But you do
            not have to keep answering to every name, fear, role or agreement
            that belonged to an earlier season either.
          </p>
        </article>
      </section>

      <section
        className="truth-card"
        style={{ background: "#dcecf7", color: "#24496d" }}
      >
        <p className="section-label">TODAY&apos;S TRUTH</p>
        <h2>{truth}</h2>
      </section>

      <section className="reflection-section">
        <div>
          <p className="section-label">REFLECT</p>

          <h2>
            Where has this truth challenged the way you see yourself? What
            would it look like to agree with God today?
          </h2>
        </div>

        <div className="reflection-space">
          <p>Take a moment to answer honestly.</p>
          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />
          <div className="writing-line" />
        </div>
      </section>

      <section
        className="prayer-section"
        style={{ background: "#ffffff" }}
      >
        <p className="section-label">PRAY</p>

        <h2>
          Father, thank You that my identity is safest in You. Show me where
          old names have spoken louder than Your truth. Teach me to release
          what belongs to a former season and to receive what You are saying
          about me now. Help me become without striving, move without
          performing, and remain close to You as You lead me forward. In
          Jesus&apos; name, amen.
        </h2>
      </section>

      <section
        className="respond-section"
        style={{ background: "#eef7fc" }}
      >
        <p className="section-label">JOURNAL</p>

        <h2>
          Write honestly: “The woman I have been believed __________. The
          woman God is forming is learning __________.”
        </h2>

        <div className="response-box">
          <span>Your response</span>
        </div>
      </section>

      <section
        className="day-navigation"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          background: "#e7f3fb",
        }}
      >
        {previousDay ? (
          <Link href={previousDay} className="text-link">
            ← Previous
          </Link>
        ) : (
          <span style={{ opacity: 0.45, fontSize: "0.9rem" }}>
            Beginning
          </span>
        )}

        <Link href="/journey" className="primary-button">
          All 30 Days
        </Link>

        {nextDay ? (
          <Link href={nextDay} className="primary-button">
            Next Day <span>→</span>
          </Link>
        ) : (
          <Link href="/journal" className="primary-button">
            Complete the journey <span>→</span>
          </Link>
        )}
      </section>

      <footer style={{ background: "#24496d", color: "#ffffff" }}>
        <div className="footer-brand">MIDWEEK ROOTED</div>
        <div>A monthly Scripture journey</div>
      </footer>
    </main>
  );
}
