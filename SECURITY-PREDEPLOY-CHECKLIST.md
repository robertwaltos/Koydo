# Security Pre-Deploy Checklist

## Built-in command (this repo)

Run:

```bash
npm run security:predeploy
```

This runs:

1. `npm run lint`
2. `npm run security:audit:prod` (`npm audit --omit=dev --audit-level=high`)
3. `npm run preflight:prod-env`

## Recommended additional scanners

Add at least one tool from each category before production release:

1. SAST:
   - Semgrep (`p/owasp-top-ten`, `p/typescript` rulesets)
   - https://semgrep.dev/docs/semgrep-ci/getting-started
2. Dependency + image vulnerabilities:
   - npm audit (already wired)
   - OSV-Scanner (source + lockfile scanning)
   - https://google.github.io/osv-scanner/
   - Trivy (filesystem/container image)
   - https://trivy.dev/latest/docs/
3. Secret scanning:
   - detect-secrets
   - https://github.com/Yelp/detect-secrets
4. DAST:
   - OWASP ZAP baseline scan on staging URL
   - https://www.zaproxy.org/docs/docker/baseline-scan/

## External audit resources (independent review)

For launch-critical payment/unlock logic, run at least one independent AppSec assessment:

1. CREST-accredited assessor directory (vendor selection baseline):
   - https://www.crest-approved.org/member_companies/index.html
2. NCC Group application security testing:
   - https://www.nccgroup.com/us/our-services/application-security-testing/
3. Bishop Fox application security assessments:
   - https://bishopfox.com/services/application-security-assessment
4. Continuous external testing options:
   - Cobalt pentest-as-a-service: https://www.cobalt.io/pentest-as-a-service
   - Synack crowdsourced security testing: https://www.synack.com/crowdsourced-security-testing/
5. Coordinated vulnerability disclosure / bug bounty:
   - HackerOne: https://www.hackerone.com/product/bug-bounty-platform
   - Bugcrowd: https://www.bugcrowd.com/products/bug-bounty/

## Release gate recommendation

Minimum gate for payment/unlock deploys:

1. `npm run security:predeploy` passes.
2. Semgrep and secret scan pass with zero High/Critical findings.
3. At least one external assessment completed against staging.
4. Webhook replay + payment underpayment abuse test cases explicitly signed off.
