-- Seed/align Koydo University manifest for provisioning consoles and runtime.

insert into public.app_manifests (
  app_id,
  display_name,
  theme_config,
  enabled_subjects,
  min_age,
  max_age,
  is_active,
  supported_locales,
  default_locale,
  region,
  default_currency,
  pricing_tier
)
values (
  'koydo_university',
  'Koydo University',
  '{
    "--background":"#f8fafc",
    "--foreground":"#0f172a",
    "--surface":"#ffffff",
    "--surface-muted":"#f1f5f9",
    "--surface-strong":"#e2e8f0",
    "--border":"#dbe3ee",
    "--accent":"#1d3557",
    "--accent-subtle":"#e8eef7",
    "--success":"#2f6f56",
    "--warn":"#a67c52",
    "--danger":"#b42318",
    "--radius-card":"12px",
    "--radius-pill":"999px",
    "--font-display-sans":"''Geist'', ''Inter'', ''Segoe UI'', ''Roboto'', sans-serif",
    "--font-body-sans":"''Geist'', ''Inter'', ''Segoe UI'', ''Roboto'', sans-serif",
    "--font-reading-serif":"''Merriweather'', ''Crimson Text'', Georgia, serif",
    "--color-primary":"#1d3557"
  }'::jsonb,
  '{Exam Prep,Finance,Accounting,Coding}'::text[],
  18,
  99,
  true,
  '{en}'::text[],
  'en',
  'us',
  'USD',
  'premium_19.99'
)
on conflict (app_id) do update
set
  display_name = excluded.display_name,
  theme_config = excluded.theme_config,
  enabled_subjects = excluded.enabled_subjects,
  min_age = excluded.min_age,
  max_age = excluded.max_age,
  is_active = excluded.is_active,
  supported_locales = excluded.supported_locales,
  default_locale = excluded.default_locale,
  region = excluded.region,
  default_currency = excluded.default_currency,
  pricing_tier = excluded.pricing_tier;
