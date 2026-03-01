# Organization Backend API (Sprint Handoff)

## Core Routes

- `GET /api/organizations`
- `POST /api/organizations`
- `GET /api/organizations/{organizationId}/licenses`
- `PATCH /api/organizations/{organizationId}/licenses`
- `GET /api/organizations/{organizationId}/learners` (`?format=csv` supported)
- `PATCH /api/organizations/{organizationId}/learners`
- `GET /api/organizations/{organizationId}/audit`
- `GET /api/organizations/{organizationId}/provisioning`
- `POST /api/organizations/{organizationId}/provisioning`
- `PATCH /api/organizations/{organizationId}/provisioning`
- `GET /api/organizations/{organizationId}/provisioning/{tokenId}/qr?token=...&format=svg|png`
- `POST /api/organizations/claim-license`

## Invites

- `GET /api/organizations/{organizationId}/invites`
- `POST /api/organizations/{organizationId}/invites`
- `PATCH /api/organizations/{organizationId}/invites`
- `GET /api/organizations/invites/accept?token=...`
- `POST /api/organizations/invites/accept`

## Bulk Provisioning

- `GET /api/organizations/{organizationId}/sis/import`
- `GET /api/organizations/{organizationId}/sis/import?template=csv`
- `POST /api/organizations/{organizationId}/sis/import`
- `GET /api/organizations/{organizationId}/scim/users`
- `POST /api/organizations/{organizationId}/scim/users`
- `PATCH /api/organizations/{organizationId}/scim/users`

## Reporting

- `GET /api/organizations/{organizationId}/reports`
  - Supports `includeLearners=true` for learner-level metrics in response
- `GET /api/organizations/{organizationId}/reports/exports`
- `POST /api/organizations/{organizationId}/reports/exports`
- `GET /api/organizations/{organizationId}/reports/exports/{exportId}/download`
- `GET /api/organizations/{organizationId}/reports/jobs`
- `POST /api/organizations/{organizationId}/reports/jobs`
- `POST /api/organizations/reports/jobs/process`

## Billing + Gifting

- `POST /api/stripe/checkout/organization`
  - Supports `paymentMethod`: `card`, `ach`, `wire`, `po`
  - `wire` and `po` return invoicing instructions (no Stripe URL)
  - Supports idempotent retries via `Idempotency-Key` / `x-idempotency-key` header
- `POST /api/stripe/checkout/gift`
  - Supports idempotent retries via `Idempotency-Key` / `x-idempotency-key` header
- `POST /api/gifts/redeem`
- `GET /api/gifts`

## Organization Report Job Runner

- Env var: `ORGANIZATION_REPORT_RUNNER_SECRET`
- Header for processor endpoint: `x-org-report-runner-secret: <secret>`
- Script:
  - `npm run report-jobs:organization:process`

## Notes

- Organization/gifting/reporting routes depend on migrations:
  - `202602280019_organization_licensing_and_gifting.sql`
  - `202602280020_organization_ops_extensions.sql`
  - `202602280021_organization_audit_events.sql`
- Full repo build may fail due unrelated module catalog typing drift; org API subset validates with:
  - `npx next build --webpack --debug-build-paths "src/app/api/organizations/**/route.ts,src/app/api/stripe/**/route.ts,src/app/api/gifts/**/route.ts"`
