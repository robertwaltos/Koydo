"use client";

import { FormEvent, useState } from "react";

type Ticket = {
  id: string;
  subject: string;
  status: string;
  priority: string;
  created_at: string;
  updated_at?: string;
};

export default function SupportClient({ initialTickets }: { initialTickets: Ticket[] }) {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [status, setStatus] = useState("");

  const loadTickets = async () => {
    try {
      const response = await fetch("/api/support/tickets");
      const data = (await response.json()) as { tickets?: Ticket[]; error?: string };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to load support tickets.");
        return;
      }
      setTickets(data.tickets ?? []);
    } catch {
      setStatus("Unable to load support tickets.");
    }
  };

  const handleCreateTicket = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: form.get("subject"),
          description: form.get("description"),
          priority: form.get("priority"),
        }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus(data.error ?? "Unable to create support ticket.");
        return;
      }

      setStatus("Support ticket created.");
      event.currentTarget.reset();
      await loadTickets();
    } catch {
      setStatus("Unable to create support ticket.");
    }
  };

  return (
    <div className="space-y-6">
      {status ? (
        <div className="rounded-md border border-black/10 bg-zinc-50 px-4 py-3 text-sm dark:border-white/15 dark:bg-zinc-800">
          {status}
        </div>
      ) : null}

      <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Create Support Ticket</h2>
        <form onSubmit={handleCreateTicket} className="mt-4 grid gap-3">
          <input
            name="subject"
            placeholder="Short issue summary"
            className="rounded-md border border-black/15 px-3 py-2 text-sm"
            required
          />
          <textarea
            name="description"
            placeholder="Describe the issue"
            className="min-h-28 rounded-md border border-black/15 px-3 py-2 text-sm"
          />
          <select name="priority" className="w-48 rounded-md border border-black/15 px-3 py-2 text-sm">
            <option value="normal">Normal</option>
            <option value="low">Low</option>
            <option value="high">High</option>
          </select>
          <button type="submit" className="w-fit rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">
            Submit Ticket
          </button>
        </form>
      </section>

      <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Your Tickets</h2>
        <div className="mt-3 space-y-3">
          {tickets.map((ticket) => (
            <article key={ticket.id} className="rounded-md border border-black/10 p-3 dark:border-white/10">
              <p className="font-medium">{ticket.subject}</p>
              <p className="text-xs text-zinc-500">
                Status: {ticket.status} | Priority: {ticket.priority}
              </p>
              <p className="text-xs text-zinc-500">
                Created: {new Date(ticket.created_at).toLocaleString()}
              </p>
            </article>
          ))}
          {tickets.length === 0 ? <p className="text-sm text-zinc-500">No tickets created yet.</p> : null}
        </div>
      </section>
    </div>
  );
}
