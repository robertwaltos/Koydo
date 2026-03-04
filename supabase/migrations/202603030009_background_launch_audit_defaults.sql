-- Align evidence provider + randomized background compliance audit defaults.

insert into public.app_settings (key, value)
values
  ('compliance_evidence_storage_provider', '{"value":"google_vault_export"}'::jsonb),
  ('compliance_background_audit_max_days', '{"value":5}'::jsonb),
  ('compliance_background_audit_daily_probability', '{"value":0.35}'::jsonb)
on conflict (key) do update
set
  value = excluded.value,
  updated_at = now();
