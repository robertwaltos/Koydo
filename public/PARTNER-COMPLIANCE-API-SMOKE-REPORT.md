# Partner Compliance API Smoke Report

Generated: 2026-03-04T02:03:00.710Z
Base URL: http://127.0.0.1:4782
Smoke user: co***@example.com
Duration: 223652ms

## Summary

- Pass: 22
- Fail: 0
- Total: 22

## Trace

| Name | Method | URL | Expected | Actual | Result | Duration (ms) |
| --- | --- | --- | --- | ---: | --- | ---: |
| admin_partners_list | GET | /api/admin/partners | 200 | 200 | PASS | 557 |
| admin_partner_create_us | POST | /api/admin/partners | 200 | 200 | PASS | 626 |
| admin_partner_create_ir | POST | /api/admin/partners | 200 | 200 | PASS | 543 |
| admin_withholding_us | POST | /api/admin/partners/compliance/withholding | 200 | 200 | PASS | 712 |
| admin_withholding_ir | POST | /api/admin/partners/compliance/withholding | 200 | 200 | PASS | 647 |
| admin_commission_us | POST | /api/admin/partners/commissions | 200 | 200 | PASS | 766 |
| admin_commission_ir | POST | /api/admin/partners/commissions | 200 | 200 | PASS | 688 |
| admin_payout_batch_create | POST | /api/admin/partners/payouts | 200 | 200 | PASS | 807 |
| admin_payout_batch_get | GET | /api/admin/partners/payouts?batchId=91623545-005a-4533-981e-2719d07cffea | 200 | 200 | PASS | 409 |
| admin_compliance_monitor_run | POST | /api/admin/partners/compliance/monitor/run | 200 | 200 | PASS | 2075 |
| admin_regulatory_updates_run | POST | /api/admin/partners/compliance/regulatory-updates/run | 200 | 200 | PASS | 11587 |
| admin_compliance_weekly_run | POST | /api/admin/partners/compliance/weekly/run | 200 | 200 | PASS | 13089 |
| admin_filings_queue_get | GET | /api/admin/partners/compliance/filings?periodStart=2026-02-25&periodEnd=2026-03-05 | 200 | 200 | PASS | 471 |
| admin_payout_scheduler_dry_run | POST | /api/admin/partners/payouts/scheduler/run | 200 | 200 | PASS | 441 |
| partner_onboarding_get | GET | /api/partner/onboarding?partnerId=a2c62b50-d02e-49db-baa7-1f3840b12b88 | 200 | 200 | PASS | 424 |
| partner_onboarding_profile_update | POST | /api/partner/onboarding | 200 | 200 | PASS | 407 |
| partner_onboarding_tax_update | POST | /api/partner/onboarding | 200 | 200 | PASS | 472 |
| partner_onboarding_payout_account_create | POST | /api/partner/onboarding | 200 | 200 | PASS | 471 |
| partner_portal_overview_get | GET | /api/partner/portal/overview?partnerId=a2c62b50-d02e-49db-baa7-1f3840b12b88 | 200 | 200 | PASS | 530 |
| owner_efiling_submit_requires_step_up | POST | /api/admin/partners/compliance/efiling/submit | 428 | 428 | PASS | 336 |
| owner_payout_approve_requires_step_up | POST | /api/admin/partners/payouts/91623545-005a-4533-981e-2719d07cffea/approve | 428 | 428 | PASS | 317 |
| owner_payout_process_requires_step_up | POST | /api/admin/partners/payouts/91623545-005a-4533-981e-2719d07cffea/process | 428 | 428 | PASS | 309 |

## Failures

None.