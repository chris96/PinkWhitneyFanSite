import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Fan-made tribute site for Pink Whitney.</p>
      <p className="legal">21+ only. Please drink responsibly.</p>
      <Link href="/gallery">Open full gallery</Link>
    </footer>
  );
}