export default function JourneyPage() {
  return (
    <main>
      <section className="journey-hero">
        <p className="eyebrow">THE CURRENT JOURNEY</p>

        <h1>Awake.</h1>

        <p className="journey-intro">
          A 30-day journey of returning to God, listening for His voice,
          and becoming attentive to what He is doing in this season.
        </p>

        <a href="#begin" className="journey-button">
          Begin the journey
        </a>
      </section>

      <section id="begin" className="journey-section">
        <div>
          <p className="eyebrow">30 DAYS</p>

          <h2>
            Awakening is not frantic movement.
          </h2>
        </div>

        <div>
          <p>
            Awake is an invitation to slow down, listen, and allow God to
            bring us back into alignment with Him.
          </p>

          <p>
            Each day offers Scripture, a truth to carry, and space to
            reflect on what God may be revealing.
          </p>
        </div>
      </section>

      <section className="journey-section journey-section-alt">
        <div>
          <p className="eyebrow">THE JOURNEY</p>

          <h2>Thirty days. One step at a time.</h2>
        </div>

        <div className="journey-days">
          <article>
            <span>01</span>
            <h3>Listen</h3>
            <p>
              Before we move, we learn to listen.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Return</h3>
            <p>
              We return to Scripture and allow God to realign us.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Become</h3>
            <p>
              Awakening changes not only what we see, but who we are becoming.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Walk</h3>
            <p>
              We respond to what God has shown us through obedient living.
            </p>
          </article>
        </div>
      </section>

      <section className="journey-closing">
        <p className="eyebrow">AWAKE</p>

        <h2>
          Listen.
          <br />
          Receive.
          <br />
          Respond.
        </h2>

        <p>
          You don't have to rush into the next thing.
          Start by becoming awake to God.
        </p>
      </section>
    </main>
  );
}
