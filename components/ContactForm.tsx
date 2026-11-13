"use client";

import { useState, type FormEvent } from "react";
import contact from "@/data/contact.json";
import site from "@/data/site.json";
import Mascot from "./Mascot";
import { Button } from "./Button";

type Status = "idle" | "sending" | "sent" | "invalid" | "notConfigured" | "failed";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const f = contact.form;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) return setStatus("sent");
      if (res.status === 422) return setStatus("invalid");
      if (res.status === 503) return setStatus("notConfigured");
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="sent" role="status">
        <Mascot mood="calm" size={110} title="happy mascot" />
        <h2 className="h-lg">{contact.success.title}</h2>
        <p>{contact.success.body}</p>
      </div>
    );
  }

  const errorText =
    status === "invalid"
      ? contact.errors.invalid
      : status === "notConfigured"
      ? contact.errors.notConfigured
      : status === "failed"
      ? contact.errors.failed
      : "";

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>{f.name.label}</span>
        <input name="name" type="text" autoComplete="name" placeholder={f.name.placeholder} required />
      </label>
      <label className="field">
        <span>{f.email.label}</span>
        <input name="email" type="email" autoComplete="email" placeholder={f.email.placeholder} required />
      </label>
      <label className="field">
        <span>{f.task.label}</span>
        <textarea name="task" rows={5} placeholder={f.task.placeholder} required />
      </label>                                                                                                                                                      
      {/* honeypot: real people never see or fill this */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hp" />

      {errorText && (
        <p className="form__error" role="alert">
          {errorText}{" "}
          {(status === "notConfigured" || status === "failed") && (
            <a href={`mailto:${site.email}`}>{site.email}</a>
          )}
        </p>
      )}

      <Button type="submit" arrow disabled={status === "sending"}>
        {status === "sending" ? f.sending : f.submit}
      </Button>
    </form>
  );
}
