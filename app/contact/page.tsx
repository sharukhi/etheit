import type { Metadata } from "next";
import contact from "@/data/contact.json";
import site from "@/data/site.json";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "contact" };

export default function Contact() {
  return (
    <div className="wrap page">
      <header className="page__head">
        <h1 className="h-xl">{contact.title}</h1>
        <p className="lead">{contact.lead}</p>
      </header>
      <div className="contact">
        <Card hazard>
          <ContactForm />
        </Card>
        <aside className="contact__side">
          <h2 className="h-md">{contact.helpsTitle}</h2>
          <ul className="ticks">
            {contact.helps.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="contact__direct">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            {site.location}
          </p>
        </aside>
      </div>
    </div>
  );
}
