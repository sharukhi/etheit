"use client";

import { useState, type FormEvent } from "react";
import contact from "@/data/contact.json";
import site from "@/data/site.json";
import { Button } from "./Button";

type Status = "idle" | "sending" | "sent" | "invalid" | "notConfigured" | "failed";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const f = contact.form;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ACCESS_KEY) return setStatus("notConfigured");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", `new message from ${formData.get("name")}`);

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        form.reset();
        return setStatus("sent");
      }
      setStatus(res.status === 400 || res.status === 422 ? "invalid" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="sent" role="status">
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
        <textarea name="message" rows={5} placeholder={f.task.placeholder} required />
      </label>

      {/* honeypot: web3forms drops submissions where this is checked */}
      <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="hp" />

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