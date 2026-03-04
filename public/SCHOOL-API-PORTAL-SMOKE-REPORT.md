# School API Portal Smoke Report

Generated: 2026-03-04T04:15:18.015Z
Base URL: https://koydo.vercel.app
Smoke user: codex.partner.smoke@example.com
School partner: 48477fd6-8290-4f71-9c1c-11ec3f0b2892
Organization: f062ae5d-6407-435d-b12d-a43b82328dd5

## Summary

- Pass: 5
- Fail: 0
- Total: 5

## Trace

| Step | Status | Result | Preview |
| --- | ---: | --- | --- |
| portal_get_school_api | 200 | PASS | {"access":{"id":"984bcf04-e966-4cee-9664-315a0e404f4d","partner_id":"48477fd6-8290-4f71-9c1c-11ec3f0b2892","user_id":"9c9d91ed-4066-454d-9f1f-b935128f3cdf","role":"owner","status":"active"},"partner":{"id":"48477fd6-8290-4f71-9c1c-11ec3f0b2892","displayName":"School API Smoke Partner","legalName":"School API Smoke Partner LLC","partnerType":"school","accountClass":"SCHOOL","countryCode":"US","onboardingStatus":"active","complianceStatus":"approved","payoutStatus":"eligible"},"linkedOrganization"... |
| portal_post_create_key | 200 | PASS | {"success":true,"key":{"id":"76197ef0-ce8f-4e72-9b3b-08bb9101dd12","label":"Smoke Key 2026-03-04T04:15:16.136Z","value":"koydo_sk_T6hQcTmnsJZNhlPSwt5i1rdka6_gNmTf","keyPrefix":"koydo_sk_T6hQcTm","keyPreview":"koydo_sk_T6hQcTm..._gNmTf","scopes":["license_summary","classroom_policy"],"status":"active","expiresAt":null,"createdAt":"2026-03-04T04:15:15.669456+00:00"}} |
| school_export_with_active_key | 200 | PASS | {"ok":true,"regulatoryMode":"standard","partnerId":"48477fd6-8290-4f71-9c1c-11ec3f0b2892","organization":{"id":"f062ae5d-6407-435d-b12d-a43b82328dd5","name":"School API Smoke Academy","type":"school"},"datasets":["license_summary","classroom_policy"],"exportedAt":"2026-03-04T04:15:16.204Z","data":{"license_summary":{"seatSummary":{"purchasedSeats":30,"assignedSeats":0,"reservedSeats":0,"availableSeats":30},"purchases":[{"id":"de12663d-22f5-4870-b778-5e8aaf935338","seats_purchased":30,"seats_assi... |
| portal_post_revoke_key | 200 | PASS | {"success":true,"key":{"id":"76197ef0-ce8f-4e72-9b3b-08bb9101dd12","label":"Smoke Key 2026-03-04T04:15:16.136Z","status":"revoked","revokedAt":"2026-03-04T04:15:16.699+00:00"}} |
| school_export_after_revoke | 401 | PASS | {"error":"School API key is not active."} |
