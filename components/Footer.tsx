import Link from "next/link";
import site from "@/data/site.json";
import { FacebookIcon, InstagramIcon, GithubIcon } from "@/components/Icons";

function getSocialIcon(label: string) {
  const norm = label.toLowerCase().trim();
  if (norm === "fb" || norm === "facebook") return <FacebookIcon size={20} />;
  if (norm === "insta" || norm === "instagram") return <InstagramIcon size={20} />;
  if (norm === "github" || norm === "gh") return <GithubIcon size={20} />;
  return null;
}

export default function Footer() {
  const socials = site.socials.filter((s) => s.href);
  const hasHome = site.nav.some((l) => l.href === "/");
  return (
    <footer className="footer">
      <div className="wrap footer__in">
        <div>
          <p className="footer__word">{site.name}</p>
          <p className="footer__blurb">{site.footer.blurb}</p>
          {socials.length > 0 && (
            <div className="footer__socials" aria-label="Social links">
              {socials.map((s) => {
                const icon = getSocialIcon(s.label);
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer__social"
                    aria-label={s.label}
                    title={s.label}
                  >
                    {icon || s.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
        <div className="footer__cols">
          <div>
            <h3 className="footer__h">explore</h3>
            <ul>
              {!hasHome && <li><Link href="/">home</Link></li>}
              {site.nav.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="footer__h">contact</h3>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`tel:${site.number}`}>{site.number}</a></li>
              {site.location && <li><a href={site.map_link} target="_blank">{site.location}</a></li>}
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} Etheit. All rights reserved.</span>
      </div>
    </footer>
  );
}
