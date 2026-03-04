-- Expand payout approval controls for strict dual-control.

alter table public.partner_payout_approvals
  drop constraint if exists partner_payout_approvals_scope_check;

alter table public.partner_payout_approvals
  add constraint partner_payout_approvals_scope_check
  check (approval_scope in ('final_release', 'co_sign', 'emergency_hold'));

alter table public.partner_payout_approvals
  drop constraint if exists partner_payout_approvals_factor_type_check;

alter table public.partner_payout_approvals
  add constraint partner_payout_approvals_factor_type_check
  check (owner_factor_type in ('totp', 'yubikey_otp', 'admin_attested'));
