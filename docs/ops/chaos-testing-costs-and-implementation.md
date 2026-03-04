# Chaos Testing: Cost and Implementation Model

Date prepared: 2026-03-03

## Direct answer
- This is primarily **external infrastructure against the app**, not logic embedded in the production app runtime.
- Keep chaos/load tooling in CI/CD and pre-production production-like environments, with controlled production drills only when mature.

## Recommended architecture
1. Fault injection layer:
   - AWS Fault Injection Service (FIS) or Azure Chaos Studio.
2. Load generation layer:
   - Locust, JMeter, or k6 OSS runners.
3. Queue throughput layer:
   - Queue-native perf tooling (for example RabbitMQ PerfTest or Kafka perf tooling) plus application SLO telemetry.
4. Evidence and reporting layer:
   - Export run summaries, pass/fail checks, and incident drill outcomes into the compliance evidence vault flow.

## Cost model
### Provider-managed chaos injection
- AWS FIS public pricing includes **$0.10 per action-minute**.
- Azure Chaos Studio uses **pay-as-you-go billing per action-minute**.

### Load tooling
- Locust and k6 OSS are open source; licensing is not the primary cost driver.
- Main cost drivers are runner compute, network egress, monitoring retention, and environment footprint.

## Baseline budget example (planning-grade)
- Monthly experiments: 8
- Average duration: 30 minutes
- Average injected actions per experiment: 5
- Action-minutes: `8 * 30 * 5 = 1200`
- Fault injection cost example (AWS FIS): `1200 * $0.10 = ~$120/month`
- Add runner + observability cloud cost:
  - Light footprint: ~$150-$400/month
  - Medium footprint: ~$400-$1200/month
  - Heavy/regression stress footprint: ~$1200+/month

Inference note: runner/observability ranges above are modeled estimates and depend on your environment size, telemetry retention, and test frequency.

## Implementation phases
1. Phase 1 (2-3 weeks):
   - Build queue/load test harnesses in staging.
   - Define SLO thresholds and auto-fail gates.
2. Phase 2 (2-4 weeks):
   - Add scheduled chaos/load suites to CI + weekly staging drills.
   - Capture evidence artifacts for every drill.
3. Phase 3 (ongoing):
   - Quarterly production-like incident drills with human incident command.
   - Keep external annual pentest and live IR exercises (automation does not replace these).

## Sources
- AWS FIS pricing: https://aws.amazon.com/fis/pricing/
- Azure Chaos Studio pricing: https://azure.microsoft.com/en-us/pricing/details/chaos-studio/
- Locust project: https://locust.io/
- k6 open source project: https://github.com/grafana/k6
