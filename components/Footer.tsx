import Link from "next/link";
import site from "@/data/site.json";

export default function Footer() {
  const socials = site.socials.filter((s) => s.href);
  return (
    <footer className="footer">
      <div className="wrap footer__in">
        <div>
          <p className="footer__word">{site.name}</p>
          <p className="footer__blurb">{site.footer.blurb}</p>
        </div>
        <div className="footer__cols">
          <div>
            <h3 className="footer__h">pages</h3>
            <ul>
              <li><Link href="/">home</Link></li>
              {site.nav.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="footer__h">say hi</h3>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li>{site.location}</li>
              {socials.map((s) => (
                <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{site.footer.note}</span>
      </div>
    </footer>
  );
}
