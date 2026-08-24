import Link from "next/link";

const teachingSeries = [
  {
    title: "A Church in Your Home",
    description:
      "A teaching series for women who desire to cultivate a home where the presence of God is honoured and His Word is lived.",
    materials: [
      {
        label: "Teaching Material",
        href: "https://drive.google.com/file/d/1gAMyBwQKA9p2Rl0b4smRqhb4vKG6MzPo/view?usp=drive_link",
      },
      {
        label: "Listen to the Audio",
        href: "https://drive.google.com/file/d/1H-yfHB7VAgM-NcmHVx0jaDvQ0OSC6LR4/view?usp=drive_link",
      },
    ],
  },
  {
    title: "Crushed at the Head",
    description:
      "A Rooted teaching series exploring spiritual resistance, identity and the victory that belongs to the woman who remains rooted in God.",
    materials: [
      {
        label: "Teaching Material",
        href: "https://drive.google.com/file/d/1mbJVh6KXbDa1exbWkSvQD_FSYwSG4BhA/view?usp=drive_link",
      },
      {
        label: "Listen to the Audio",
        href: "https://drive.google.com/file/d/1YMVGEkpEEm8H4HPflTEVpFET6uIoKq0t/view?usp=drive_link",
      },
      {
        label: "Open Workbook",
        href: "https://drive.google.com/file/d/12d7fEYYDI1buaKq6HKCr3BNVO0JzJ0UN/view?usp=drive_link",
      },
    ],
  },
  {
    title: "When the System No Longer Works",
    description:
      "A teaching for recognising when familiar ways of doing things can no longer carry what God is asking of us.",
    materials: [
      {
        label: "Teaching Material",
        href: "https://drive.google.com/file/d/1oUFIyENLA-RkfOVwsjNSusiqNWzoVG1U/view?usp=drive_link",
      },
      {
        label: "Open Workbook",
        href: "https://drive.google.com/file/d/1S2my7j4eOq4xrCqHmfVnbJgt3ObNnpNA/view?usp=drive_link",
      },
    ],
  },
  {
    title: "Preparing for Winter",
    description:
      "A teaching about preparation, discernment and learning to steward the seasons God gives us.",
    materials: [
      {
        label: "Teaching Material",
        href: "https://drive.google.com/file/d/1d110rWd0I1orzHxHXicsWWckLCLRaC3A/view?usp=drive_link",
      },
      {
        label: "Listen to the Audio",
        href: "https://drive.google.com/file/d/1OfHI1KBbpbdapmWTpg58vAkHzoUxEIbX/view?usp=drive_link",
      },
      {
        label: "Open Workbook",
        href: "https://drive.google.com/file/d/19LH-VjzOCUw2cQJL6TjhqR3qNM1f1W7G/view?usp=drive_link",
      },
    ],
  },
  {
    title: "The Protectors of the Promise",
    description:
      "A Rooted teaching about stewardship, responsibility and protecting what God has entrusted to us.",
    materials: [
      {
        label: "Teaching Material",
        href: "https://drive.google.com/file/d/1WE_6V4zodnKioO9qMkmVPCd3011ntZXg/view?usp=drive_link",
      },
      {
        label: "Listen to the Audio",
        href: "https://drive.google.com/file/d/1Z3gVeNI5Gm6YezjM7RGf5q3YomIRVUCO/view?usp=drive_link",
      },
      {
        label: "Open Workbook",
        href: "https://drive.google.com/file/d/1ajCOe657AruZxashVmmeOR5zMlyIKdxO/view?usp=drive_link",
      },
    ],
  },
  {
    title: "Build Your Gibeon and Your Jerusalem",
    description:
      "A teaching about building with intention, establishing what matters and creating spaces that can carry God's purposes.",
    materials: [
      {
        label: "Teaching Material",
        href: "https://drive.google.com/file/d/16CzQdSa7xwcGDY_3niCejutGX4HfBq6q/view?usp=drive_link",
      },
      {
        label: "Listen to Audio 01",
        href: "https://drive.google.com/file/d/1jLr2N656rqX4O28g7zV5oUX0n7zN_DUj/view?usp=drive_link",
      },
      {
        label: "Listen to Audio 02",
        href: "https://drive.google.com/file/d/1rxzfaF3BdfC27vvgHm6AFtPIF3xeMp_m/view?usp=drive_link",
      },
    ],
  },
];

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
          <Link href="/courses">Courses</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/library">Library</Link>
        </nav>
      </header>

      <section className="journey-hero">
        <p className="small-label">THE ROOTED COLLECTION</p>

        <h1>LIBRARY</h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Resources to help you
          <br />
          remain rooted in Christ.
        </p>

        <div className="floral-divider">
          <span>❀</span>
          <span>✦</span>
          <span>❀</span>
        </div>

        <p className="hero-note">TEACHINGS · DEVOTIONALS · RESOURCES</p>
      </section>

      <section className="journey-introduction">
        <p className="section-label">ROOTED RESOURCES</p>

        <h2>
          Read.
          <br />
          Listen.
          <br />
          Learn.
        </h2>

        <p>
          Welcome to the Rooted Library. This is a growing collection of
          teachings, audio messages, workbooks and other resources created to
          help you slow down, encounter God and live what you are learning.
        </p>

        <div className="gold-line" />
      </section>

      <section className="scripture">
        <div className="scripture-inner">
          <span className="quote-mark">“</span>

          <p>Let the word of Christ dwell in you richly.</p>

          <small>COLOSSIANS 3:16 · WEB</small>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "1rem 1.5rem 5rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p className="section-label">TEACHING SERIES</p>

          <h2
            style={{
              lineHeight: "1.2",
              marginBottom: "1rem",
            }}
          >
            Come and learn.
          </h2>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Explore teachings from the Rooted collection. Where available,
            each teaching includes audio, supporting material and a workbook.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {teachingSeries.map((series) => (
            <article
              key={series.title}
              style={{
                border: "1px solid rgba(0,0,0,0.15)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                className="section-label"
                style={{
                  marginBottom: "0.75rem",
                }}
              >
                ROOTED TEACHING
              </p>

              <h3
                style={{
                  lineHeight: "1.3",
                  marginBottom: "1rem",
                }}
              >
                {series.title}
              </h3>

              <p
                style={{
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                {series.description}
              </p>

              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {series.materials.map((material) => (
                  <a
                    key={material.href}
                    href={material.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      border: "1px solid rgba(0,0,0,0.15)",
                      padding: "0.9rem 1rem",
                      textDecoration: "none",
                      textAlign: "center",
                      fontSize: "0.85rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {material.label} →
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-stages">
        <p className="section-label">MORE TO COME</p>

        <h2>A growing collection.</h2>

        <div className="journey-days">
          <article>
            <span>01</span>
            <h3>Books & Journals</h3>
            <p>
              Published Rooted books, journals and resources created to be
              returned to again and again.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Devotionals</h3>
            <p>
              Scripture-based devotional resources for women, families and
              little ones.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Journeys</h3>
            <p>
              Completed Rooted journeys that remain available to revisit in
              every season.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Guides & Workbooks</h3>
            <p>
              Practical resources designed to help you move from revelation
              into reflection and action.
            </p>
          </article>
        </div>
      </section>

      <section className="journey-closing">
        <p className="section-label">CURRENT JOURNEY</p>

        <h2>
          There is always
          <br />
          somewhere to begin.
        </h2>

        <p>
          If you're new to Rooted, begin with our current Scripture journey
          and take it one day at a time.
        </p>

        <Link href="/journey" className="primary-button">
          Explore the Journey
          <span>→</span>
        </Link>
      </section>

      <footer>
        <div className="footer-brand">MIDWEEK ROOTED</div>

        <div>A growing collection of Rooted resources</div>
      </footer>
    </main>
  );
}
