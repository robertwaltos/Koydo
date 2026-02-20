"use client";

import { FormEvent, useMemo, useState } from "react";

type SupportTicket = {
  id: string;
  user_id: string;
  subject: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  priority: "low" | "normal" | "high" | "urgent";
  created_at: string;
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

async function postJson(url: string, payload: unknown) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await response.json().catch(() => ({}))) as Record<string, unknown>;
  if (!response.ok) {
    throw new Error(typeof data.error === "string" ? data.error : "Request failed.");
  }
  return data;
}

export default function OperationsConsole({
  initialTickets,
}: {
  initialTickets: SupportTicket[];
}) {
  const [status, setStatus] = useState("");
  const [tickets, setTickets] = useState(initialTickets);
  const [approvalStatus, setApprovalStatus] = useState("");

  const activeTicketCount = useMemo(
    () => tickets.filter((ticket) => ticket.status === "open" || ticket.status === "in_progress").length,
    [tickets]
  );

  const handleCreateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/users/create", {
        email: form.get("email"),
        password: form.get("password"),
        displayName: form.get("displayName") || undefined,
        isAdmin: form.get("isAdmin") === "on",
        isParent: form.get("isParent") === "on",
      });
      setStatus(`User created: ${String(result.userId)}`);
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create user.");
    }
  };

  const handleUpdateRoles = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "UPDATE_ROLES") {
      setStatus("Role update blocked. Type UPDATE_ROLES to confirm.");
      return;
    }
    try {
      await postJson("/api/admin/users/update-roles", {
        userId: form.get("userId"),
        isAdmin: form.get("setIsAdmin") === "on",
        isParent: form.get("setIsParent") === "on",
        confirmText,
      });
      setStatus("User roles updated.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to update roles.");
    }
  };

  const handleResetPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/users/reset-password", {
        email: form.get("email"),
      });
      setStatus(`Reset link generated: ${String(result.actionLink)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to generate reset link.");
    }
  };

  const handleDeleteUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "DELETE_USER") {
      setStatus("Deletion blocked. Type DELETE_USER to confirm.");
      return;
    }
    try {
      await postJson("/api/admin/users/delete", {
        userId: form.get("userId"),
        hardDelete: form.get("hardDelete") === "on",
        confirmText,
        approvalRequestId: form.get("approvalRequestId"),
      });
      setStatus("User deletion request completed.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to delete user.");
    }
  };

  const handleResetProgress = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "RESET_PROGRESS") {
      setStatus("Reset blocked. Type RESET_PROGRESS to confirm.");
      return;
    }
    try {
      await postJson("/api/admin/users/reset-progress", {
        userId: form.get("userId"),
        scope: form.get("scope"),
        confirmText,
      });
      setStatus("Learner progress reset completed.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to reset progress.");
    }
  };

  const handleRefund = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "PROCESS_REFUND") {
      setStatus("Refund blocked. Type PROCESS_REFUND to confirm.");
      return;
    }
    try {
      const amount = Number(form.get("amountCents"));
      const result = await postJson("/api/admin/billing/refund", {
        paymentIntentId: form.get("paymentIntentId"),
        amountCents: Number.isFinite(amount) && amount > 0 ? amount : undefined,
        reason: form.get("reason"),
        confirmText,
        approvalRequestId: form.get("approvalRequestId"),
      });
      setStatus(`Refund created: ${String(result.refundId)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create refund.");
    }
  };

  const handlePromoCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const percentOff = Number(form.get("percentOff"));
      const result = await postJson("/api/admin/billing/promo-code", {
        code: form.get("code"),
        percentOff: Number.isFinite(percentOff) && percentOff > 0 ? percentOff : undefined,
        duration: form.get("duration"),
      });
      setStatus(`Promo code created: ${String(result.code)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create promo code.");
    }
  };

  const handleSalesEvent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/billing/sales-event", {
        name: form.get("name"),
        code: form.get("code"),
        discountPercent: Number(form.get("discountPercent")),
        endsAtIso: form.get("endsAtIso"),
      });
      setStatus(`Sales event created with code: ${String(result.code)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create sales event.");
    }
  };

  const handleSetPrice = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const confirmText = String(form.get("confirmText") ?? "");
    if (confirmText !== "SET_PRICE") {
      setStatus("Price update blocked. Type SET_PRICE to confirm.");
      return;
    }
    try {
      const result = await postJson("/api/admin/billing/set-price", {
        productId: form.get("productId"),
        monthlyPriceUsd: Number(form.get("monthlyPriceUsd")),
        nickname: form.get("nickname") || undefined,
        makeDefault: form.get("makeDefault") === "on",
        confirmText,
        approvalRequestId: form.get("approvalRequestId"),
      });
      setStatus(`New Stripe price created: ${String(result.priceId)}`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to create price.");
    }
  };

  const handleResolveTicket = async (ticketId: string, statusValue: "in_progress" | "resolved" | "closed") => {
    try {
      await postJson(`/api/admin/support/tickets/${ticketId}/resolve`, {
        status: statusValue,
      });
      setTickets((previous) =>
        previous.map((ticket) =>
          ticket.id === ticketId ? { ...ticket, status: statusValue } : ticket
        )
      );
      setStatus(`Ticket ${ticketId} updated to ${statusValue}.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Failed to update ticket.");
    }
  };

  const handleCreateApprovalRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const result = await postJson("/api/admin/approvals", {
        actionType: form.get("actionType"),
        reason: form.get("reason"),
      });
      setApprovalStatus(`Approval created: ${String((result.approval as { id?: string })?.id ?? "unknown")}`);
      event.currentTarget.reset();
    } catch (error) {
      setApprovalStatus(error instanceof Error ? error.message : "Failed to create approval request.");
    }
  };

  const handleUpdateApprovalStatus = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const approvalId = String(form.get("approvalId") ?? "");
    try {
      await postJson(`/api/admin/approvals/${approvalId}`, {
        status: form.get("status"),
        note: form.get("note"),
      });
      setApprovalStatus(`Approval ${approvalId} updated.`);
      event.currentTarget.reset();
    } catch (error) {
      setApprovalStatus(error instanceof Error ? error.message : "Failed to update approval.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-md border border-indigo-300 bg-indigo-50 px-4 py-3 text-sm text-indigo-900 dark:bg-indigo-900/30 dark:text-indigo-200">
        Active support tickets: {activeTicketCount}
      </div>
      {status ? (
        <div className="rounded-md border border-black/10 bg-zinc-50 px-4 py-3 text-sm dark:border-white/15 dark:bg-zinc-800">
          {status}
        </div>
      ) : null}

      <Section title="Create Account">
        <form onSubmit={handleCreateUser} className="grid gap-3 md:grid-cols-2">
          <input name="email" type="email" placeholder="email@example.com" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <input name="password" type="password" placeholder="Temporary password" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <input name="displayName" placeholder="Display name (optional)" className="rounded-md border border-black/15 px-3 py-2 text-sm md:col-span-2" />
          <label className="flex items-center gap-2 text-sm">
            <input name="isAdmin" type="checkbox" />
            Grant admin access
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="isParent" type="checkbox" />
            Grant parent role
          </label>
          <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white">Create User</button>
        </form>
      </Section>

      <Section title="Approvals">
        {approvalStatus ? <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-300">{approvalStatus}</p> : null}
        <form onSubmit={handleCreateApprovalRequest} className="mb-4 grid gap-3 md:grid-cols-2">
          <select name="actionType" className="rounded-md border border-black/15 px-3 py-2 text-sm">
            <option value="user_delete">User delete</option>
            <option value="billing_refund">Billing refund</option>
            <option value="billing_set_price">Set billing price</option>
          </select>
          <input
            name="reason"
            placeholder="Why this action is needed"
            className="rounded-md border border-black/15 px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="w-fit rounded-md border border-black/15 px-4 py-2 text-sm">
            Create Approval Request
          </button>
        </form>

        <form onSubmit={handleUpdateApprovalStatus} className="grid gap-3 md:grid-cols-3">
          <input name="approvalId" placeholder="Approval UUID" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <select name="status" className="rounded-md border border-black/15 px-3 py-2 text-sm">
            <option value="approved">Approve</option>
            <option value="rejected">Reject</option>
          </select>
          <input name="note" placeholder="Optional note" className="rounded-md border border-black/15 px-3 py-2 text-sm" />
          <button type="submit" className="w-fit rounded-md border border-black/15 px-4 py-2 text-sm">
            Update Approval Status
          </button>
        </form>
      </Section>

      <Section title="Role Management">
        <form onSubmit={handleUpdateRoles} className="grid gap-3 md:grid-cols-2">
          <input name="userId" placeholder="User UUID" className="rounded-md border border-black/15 px-3 py-2 text-sm md:col-span-2" required />
          <label className="flex items-center gap-2 text-sm">
            <input name="setIsAdmin" type="checkbox" />
            Set admin role
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input name="setIsParent" type="checkbox" />
            Set parent role
          </label>
          <input
            name="confirmText"
            placeholder="Type UPDATE_ROLES"
            className="rounded-md border border-black/15 px-3 py-2 text-sm md:col-span-2"
            required
          />
          <button type="submit" className="w-fit rounded-md border border-black/15 px-4 py-2 text-sm">
            Apply Role Updates
          </button>
        </form>
      </Section>

      <Section title="Account Recovery">
        <form onSubmit={handleResetPassword} className="flex flex-wrap gap-3">
          <input name="email" type="email" placeholder="User email" className="min-w-80 rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <button type="submit" className="rounded-md border border-black/15 px-4 py-2 text-sm">Generate Password Reset Link</button>
        </form>
      </Section>

      <Section title="Account Reset / Deletion">
        <form onSubmit={handleResetProgress} className="mb-4 flex flex-wrap gap-3">
          <input name="userId" placeholder="User UUID" className="min-w-80 rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <select name="scope" className="rounded-md border border-black/15 px-3 py-2 text-sm">
            <option value="all">All learning data</option>
            <option value="progress">Only progress</option>
            <option value="mastery">Only mastery</option>
          </select>
          <input
            name="confirmText"
            placeholder="Type RESET_PROGRESS"
            className="rounded-md border border-black/15 px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="rounded-md border border-black/15 px-4 py-2 text-sm">Reset Learning Data</button>
        </form>
        <form onSubmit={handleDeleteUser} className="flex flex-wrap gap-3">
          <input name="userId" placeholder="User UUID" className="min-w-80 rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <label className="flex items-center gap-2 text-sm">
            <input name="hardDelete" type="checkbox" />
            Hard delete
          </label>
          <input
            name="confirmText"
            placeholder="Type DELETE_USER"
            className="rounded-md border border-black/15 px-3 py-2 text-sm"
            required
          />
          <input
            name="approvalRequestId"
            placeholder="Approved request UUID"
            className="rounded-md border border-black/15 px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="rounded-md bg-red-600 px-4 py-2 text-sm text-white">Delete User</button>
        </form>
      </Section>

      <Section title="Refunds">
        <form onSubmit={handleRefund} className="grid gap-3 md:grid-cols-3">
          <input name="paymentIntentId" placeholder="pi_..." className="rounded-md border border-black/15 px-3 py-2 text-sm md:col-span-2" required />
          <input name="amountCents" type="number" min={0} placeholder="Amount cents (optional)" className="rounded-md border border-black/15 px-3 py-2 text-sm" />
          <select name="reason" className="rounded-md border border-black/15 px-3 py-2 text-sm">
            <option value="requested_by_customer">Requested by customer</option>
            <option value="duplicate">Duplicate</option>
            <option value="fraudulent">Fraudulent</option>
          </select>
          <input
            name="confirmText"
            placeholder="Type PROCESS_REFUND"
            className="rounded-md border border-black/15 px-3 py-2 text-sm md:col-span-2"
            required
          />
          <input
            name="approvalRequestId"
            placeholder="Approved request UUID"
            className="rounded-md border border-black/15 px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="rounded-md border border-black/15 px-4 py-2 text-sm">Process Refund</button>
        </form>
      </Section>

      <Section title="Promotions and Sales">
        <form onSubmit={handlePromoCode} className="mb-4 grid gap-3 md:grid-cols-3">
          <input name="code" placeholder="PROMO2026" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <input name="percentOff" type="number" min={1} max={100} placeholder="Percent off" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <select name="duration" className="rounded-md border border-black/15 px-3 py-2 text-sm">
            <option value="once">Once</option>
            <option value="forever">Forever</option>
            <option value="repeating">Repeating</option>
          </select>
          <button type="submit" className="rounded-md border border-black/15 px-4 py-2 text-sm md:col-span-3">Create Promo Code</button>
        </form>

        <form onSubmit={handleSalesEvent} className="grid gap-3 md:grid-cols-4">
          <input name="name" placeholder="Back to School Sale" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <input name="code" placeholder="SCHOOL2026" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <input name="discountPercent" type="number" min={1} max={100} placeholder="Discount %" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <input name="endsAtIso" type="datetime-local" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <button type="submit" className="rounded-md border border-black/15 px-4 py-2 text-sm md:col-span-4">Create Sales Event</button>
        </form>
      </Section>

      <Section title="Pricing">
        <form onSubmit={handleSetPrice} className="grid gap-3 md:grid-cols-3">
          <input name="productId" placeholder="prod_..." className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <input name="monthlyPriceUsd" type="number" step="0.01" min={0.01} placeholder="Monthly USD" className="rounded-md border border-black/15 px-3 py-2 text-sm" required />
          <input name="nickname" placeholder="Plan nickname (optional)" className="rounded-md border border-black/15 px-3 py-2 text-sm" />
          <label className="flex items-center gap-2 text-sm md:col-span-2">
            <input name="makeDefault" type="checkbox" defaultChecked />
            Make this the default checkout price
          </label>
          <input
            name="confirmText"
            placeholder="Type SET_PRICE"
            className="rounded-md border border-black/15 px-3 py-2 text-sm md:col-span-2"
            required
          />
          <input
            name="approvalRequestId"
            placeholder="Approved request UUID"
            className="rounded-md border border-black/15 px-3 py-2 text-sm"
            required
          />
          <button type="submit" className="rounded-md border border-black/15 px-4 py-2 text-sm">Create Price</button>
        </form>
      </Section>

      <Section title="Support Queue">
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="rounded-md border border-black/10 p-3 dark:border-white/10">
              <p className="font-medium">{ticket.subject}</p>
              <p className="text-xs text-zinc-500">
                {ticket.id} | user: {ticket.user_id} | priority: {ticket.priority} | status: {ticket.status}
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => handleResolveTicket(ticket.id, "in_progress")}
                  className="rounded border border-black/15 px-2 py-1 text-xs"
                >
                  Mark In Progress
                </button>
                <button
                  type="button"
                  onClick={() => handleResolveTicket(ticket.id, "resolved")}
                  className="rounded border border-black/15 px-2 py-1 text-xs"
                >
                  Resolve
                </button>
                <button
                  type="button"
                  onClick={() => handleResolveTicket(ticket.id, "closed")}
                  className="rounded border border-black/15 px-2 py-1 text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          ))}
          {tickets.length === 0 ? <p className="text-sm text-zinc-500">No support tickets in queue.</p> : null}
        </div>
      </Section>
    </div>
  );
}
