"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/app/lib/supabase/client";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "Your account has been created. Please check your email to confirm your account."
    );

    setLoading(false);
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

      <section className="journey-hero">
        <p className="small-label">ROOTED ACCOUNT</p>

        <h1>
          COME
          <br />
          IN
        </h1>

        <div className="ornament">
          <span>✦</span>
        </div>

        <p className="subtitle">
          Create your Rooted account
          <br />
          and begin your journey.
        </p>
      </section>

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
          <p className="section-label">CREATE YOUR ACCOUNT</p>

          <h2
            style={{
              lineHeight: "1.2",
              marginBottom: "1.5rem",
            }}
          >
            Make room
            <br />
            to grow.
          </h2>

          <p style={{ lineHeight: "1.9" }}>
            Create your Rooted account to access courses, journeys and
            resources connected to your account.
          </p>
        </div>

        <form
          onSubmit={handleSignup}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* NAME */}
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                marginBottom: "0.6rem",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
              }}
            >
              NAME
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              autoComplete="name"
              placeholder="Your name"
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
              minLength={6}
              autoComplete="new-password"
              placeholder="Create a password"
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
                lineHeight: "1.7",
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
            {loading ? "Creating account..." : "Create account"}

            {!loading && <span>→</span>}
          </button>
        </form>

        {/* LOGIN */}
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
            Already have a Rooted account?
          </p>

          <Link href="/login" className="text-link">
            Sign in →
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
