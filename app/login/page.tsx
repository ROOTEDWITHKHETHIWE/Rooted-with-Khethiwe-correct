"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/app/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    window.location.href = "/courses/before-the-assignment";
  }

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

      {/* HERO */}
      <section className="journey-hero">
        <p className="small-label">ROOTED ACCOUNT</p>

        <h1>
          WELCOME
          <br />
          BACK
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Sign in to continue
          <br />
          your Rooted journey.
        </p>
      </section>

      {/* LOGIN */}
      <section
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          padding: "5rem 1.5rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <p className="section-label">SIGN IN</p>

          <h2
            style={{
              lineHeight: "1.2",
              marginBottom: "1.5rem",
            }}
          >
            Come back
            <br />
            to what matters.
          </h2>

          <p style={{ lineHeight: "1.9" }}>
            Sign in to access the Rooted courses and resources available to
            your account.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "0.6rem",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
              }}
            >
              EMAIL
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "1rem",
                border: "1px solid rgba(0,0,0,0.2)",
                background: "transparent",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "0.6rem",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
              }}
            >
              PASSWORD
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              placeholder="Your password"
              style={{
                width: "100%",
                padding: "1rem",
                border: "1px solid rgba(0,0,0,0.2)",
                background: "transparent",
                fontSize: "1rem",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* MESSAGE */}
          {message && (
            <p
              style={{
                lineHeight: "1.6",
                fontSize: "0.9rem",
                margin: 0,
              }}
            >
              {message}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="primary-button"
            style={{
              border: "none",
              cursor: loading ? "wait" : "pointer",
              width: "100%",
              justifyContent: "center",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Signing in..." : "Sign in"}

            {!loading && <span>→</span>}
          </button>
        </form>

        {/* SIGN UP */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              marginBottom: "1rem",
              lineHeight: "1.8",
            }}
          >
            Don&apos;t have a Rooted account yet?
          </p>

          <Link href="/signup" className="text-link">
            Create an account →
          </Link>
        </div>
      </section>

      <footer>
        <div className="footer-brand">MIDWEEK ROOTED</div>

        <div>Encounter. Consecration. Commission.</div>
      </footer>
    </main>
  );
}
