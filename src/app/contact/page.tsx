import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="section reveal" aria-labelledby="contact-title">
      <div className="section-headline">
        <p className="eyebrow">Hit The Crew</p>
        <h1 id="contact-title">Contact Us</h1>
        <p>Drop your info and message us about collabs, events, and fan feature requests.</p>
      </div>

      <form className="contact-form" aria-label="Contact us form">
        <div className="form-grid">
          <label className="form-field" htmlFor="name">
            Name
            <input id="name" name="name" type="text" autoComplete="name" required />
          </label>

          <label className="form-field" htmlFor="email">
            Email
            <input id="email" name="email" type="email" autoComplete="email" required />
          </label>

          <label className="form-field" htmlFor="phone">
            Phone Number
            <input id="phone" name="phone" type="tel" autoComplete="tel" required />
          </label>

          <label className="form-field form-field-full" htmlFor="message">
            Message
            <textarea id="message" name="message" rows={6} required />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>

      <section className="back-home reveal">
        <Link className="btn btn-ghost" href="/">
          Back To Home
        </Link>
      </section>
    </section>
  );
}