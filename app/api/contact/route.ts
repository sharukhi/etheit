import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // honeypot: bots fill it, people can't see it
  if (clean(body.company, 50)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const task = clean(body.task, 4000);
  const budget = clean(body.budget, 60);

  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || task.length < 10) {
    return NextResponse.json({ error: "invalid" }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  if (!key || !to) return NextResponse.json({ error: "not_configured" }, { status: 503 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "etheit <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `new project: ${name}`,
      text: `name: ${name}\nemail: ${email}\nbudget: ${budget || "-"}\n\n${task}`,
    }),
  });

  if (!res.ok) return NextResponse.json({ error: "send_failed" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
