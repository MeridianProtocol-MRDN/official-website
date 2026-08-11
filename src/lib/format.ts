// Small, genuinely reusable helpers — kept out of components so formatting
// logic isn't duplicated across pages.

/** 0xd402...715F2 style truncation for addresses shown in tight spaces. */
export function truncateAddress(address: string, head = 6, tail = 5): string {
  if (address.length <= head + tail + 3) return address;
  return `${address.slice(0, head)}...${address.slice(-tail)}`;
}

/** Adds thousands separators to a plain number string, e.g. "1000000000" -> "1,000,000,000" */
export function formatNumber(value: number | string): string {
  const num = typeof value === "string" ? Number(value.replace(/,/g, "")) : value;
  if (Number.isNaN(num)) return String(value);
  return num.toLocaleString("en-US");
}
