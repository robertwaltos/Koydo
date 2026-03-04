import { permanentRedirect } from "next/navigation";

type TermsAliasPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function toQueryString(params: Record<string, string | string[] | undefined>) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (!value) continue;
    if (Array.isArray(value)) {
      for (const entry of value) {
        query.append(key, entry);
      }
      continue;
    }
    query.set(key, value);
  }
  return query.toString();
}

export default async function TermsAliasPage({ searchParams }: TermsAliasPageProps) {
  const params = (await searchParams) ?? {};
  const queryString = toQueryString(params);
  const destination = queryString ? `/legal/terms?${queryString}` : "/legal/terms";
  permanentRedirect(destination);
}
