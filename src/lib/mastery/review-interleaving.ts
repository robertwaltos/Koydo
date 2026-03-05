/**
 * Subject Interleaving — Reorders review queue items so consecutive items
 * come from different subjects. This is based on research showing that
 * interleaved practice improves long-term retention compared to blocked practice.
 *
 * Feature-gated via "review_interleaving" in the feature registry.
 */

type ReviewItem = {
  id: string;
  subject: string;
  [key: string]: unknown;
};

/**
 * Apply subject interleaving to a sorted review queue.
 * Items are reordered so no two consecutive items share the same subject,
 * while preserving relative priority within each subject.
 *
 * Falls back gracefully when impossible (e.g., all items same subject).
 */
export function interleaveBySubject<T extends ReviewItem>(items: T[]): T[] {
  if (items.length <= 1) return items;

  // Group by subject, preserving order within each group
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const list = groups.get(item.subject) ?? [];
    list.push(item);
    groups.set(item.subject, list);
  }

  // Round-robin interleave: pick from the largest group first, rotate
  const result: T[] = [];
  const queues = [...groups.values()].sort((a, b) => b.length - a.length);
  let lastSubject = "";

  while (result.length < items.length) {
    let placed = false;
    for (const queue of queues) {
      if (queue.length === 0) continue;
      if (queue[0].subject === lastSubject && queues.some((q) => q.length > 0 && q[0].subject !== lastSubject)) {
        continue; // Skip if same subject and alternatives exist
      }
      const item = queue.shift()!;
      result.push(item);
      lastSubject = item.subject;
      placed = true;
      break;
    }
    // If we couldn't avoid a repeat, just take the first available
    if (!placed) {
      for (const queue of queues) {
        if (queue.length > 0) {
          const item = queue.shift()!;
          result.push(item);
          lastSubject = item.subject;
          break;
        }
      }
    }
    // Re-sort queues by length for fair distribution
    queues.sort((a, b) => b.length - a.length);
  }

  return result;
}
