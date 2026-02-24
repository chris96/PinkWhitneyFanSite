interface VibeCard {
  title: string;
  detail: string;
}

const cards: VibeCard[] = [
  {
    title: "Beach To Bar",
    detail: "Poolside afternoons slide straight into neon nights."
  },
  {
    title: "Game-Day Loud",
    detail: "Pregame shots, packed living rooms, and playoff chaos."
  },
  {
    title: "Crew Energy",
    detail: "Built for shared playlists, group photos, and big moments."
  }
];

export default function VibeCards() {
  return (
    <section id="vibe-zone" className="vibe reveal" aria-labelledby="vibe-title">
      <div className="section-headline">
        <p className="eyebrow">Night Moves</p>
        <h2 id="vibe-title">Fort Lauderdale Chaos, Bottled</h2>
      </div>
      <div className="vibe-grid">
        {cards.map((card, index) => (
          <article key={card.title} className="vibe-card" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
            <h3>{card.title}</h3>
            <p>{card.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}