# Correcting Your .env File

Here are two options to fix the build error. Please apply **one** of them to your `koydo-web/.env` file.

---

### Option 1 (Recommended to Pass the Build)

The `PARENT_CONSENT_FROM_EMAIL` setting is optional. The easiest way to fix the error is to simply delete the line from your `koydo-web/.env` file.

1.  Open `koydo-web/.env`.
2.  Delete the entire line that starts with `PARENT_CONSENT_FROM_EMAIL=...`
3.  Save the file.

---

### Option 2 (If You Need This Email Feature)

If you need this feature, make sure the line in your `koydo-web/.env` file has the exact format below, using literal `<` and `>` characters (not `&lt;` or `&gt;`).

**Also, double-check that your Supabase URL has the correct `https://` prefix and `.co` suffix.**

```env
# Ensure your URL looks like this (with your real project ID)
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co

# Use this exact format for the email
PARENT_CONSENT_FROM_EMAIL=Koydo <robert@waltos.net>
```
