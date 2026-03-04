# Device Gateway Physical Validation

Generated: 2026-03-04T05:55:50.381Z
Report file: `public/EXPERIENCE-DEVICE-GATEWAY-PHYSICAL-VALIDATION.json`
Schema version: `voyager-zero-device-gateway-physical-v1`
Template seeded this run: no

## Summary

- Validation: FAIL
- Required check rows: 8
- Failures: 41
- Warnings: 10

## Device Checks

### Apple Vision Pro

- Device ID: `apple-vision-pro`
- Tester: (missing)
- Browser: (missing)
- OS: (missing)

| Check | Status | Evidence Count | Notes |
| --- | --- | --- | --- |
| WebXR session launch succeeds | pending | 0 | (empty) |
| Tier classification matches expected hardware tier | pending | 0 | (empty) |
| Telemetry event persisted in /api/telemetry/events | pending | 0 | (empty) |
| Discovery confidence fields logged in telemetry payload | pending | 0 | (empty) |

- Telemetry event timestamp: (missing)
- Telemetry source: (missing)
- Detection version: (missing)
- Tier / GPU Tier: (missing) / (missing)
- Discovery confidence: (missing) (missing)
- Streaming target count: (missing)

### Meta Quest

- Device ID: `meta-quest`
- Tester: (missing)
- Browser: (missing)
- OS: (missing)

| Check | Status | Evidence Count | Notes |
| --- | --- | --- | --- |
| WebXR session launch succeeds | pending | 0 | (empty) |
| Tier classification matches expected hardware tier | pending | 0 | (empty) |
| Telemetry event persisted in /api/telemetry/events | pending | 0 | (empty) |
| Discovery confidence fields logged in telemetry payload | pending | 0 | (empty) |

- Telemetry event timestamp: (missing)
- Telemetry source: (missing)
- Detection version: (missing)
- Tier / GPU Tier: (missing) / (missing)
- Discovery confidence: (missing) (missing)
- Streaming target count: (missing)

## Sign-Off

- Status: pending
- Approver: (missing)
- Approved at: (missing)
- Notes: Pending live non-simulated Vision Pro + Quest telemetry captures.

## Failures

- Apple Vision Pro: Missing tester.
- Apple Vision Pro: Missing runtime.browser.
- Apple Vision Pro: Missing runtime.os.
- Apple Vision Pro :: webxr_session_launch: Status must be pass for sign-off (current: pending).
- Apple Vision Pro :: webxr_session_launch: At least one evidence item is required.
- Apple Vision Pro :: tier_classification_parity: Status must be pass for sign-off (current: pending).
- Apple Vision Pro :: tier_classification_parity: At least one evidence item is required.
- Apple Vision Pro :: telemetry_event_captured: Status must be pass for sign-off (current: pending).
- Apple Vision Pro :: telemetry_event_captured: At least one evidence item is required.
- Apple Vision Pro :: discovery_confidence_logged: Status must be pass for sign-off (current: pending).
- Apple Vision Pro :: discovery_confidence_logged: At least one evidence item is required.
- Apple Vision Pro :: telemetry: Missing telemetry.eventTimestamp.
- Apple Vision Pro :: telemetry: Missing telemetry.eventSource.
- Apple Vision Pro :: telemetry: Missing telemetry.detectionVersion.
- Apple Vision Pro :: telemetry: telemetry.tier must be a number between 0 and 3.
- Apple Vision Pro :: telemetry: telemetry.gpuTier must be a number between 0 and 3.
- Apple Vision Pro :: telemetry: telemetry.discoveryConfidence must be a number between 0 and 1.
- Apple Vision Pro :: telemetry: telemetry.discoveryConfidenceBand must be low|medium|high.
- Apple Vision Pro :: telemetry: telemetry.streamingTargetCount must be a number between 0 and 3.
- Meta Quest: Missing tester.
- Meta Quest: Missing runtime.browser.
- Meta Quest: Missing runtime.os.
- Meta Quest :: webxr_session_launch: Status must be pass for sign-off (current: pending).
- Meta Quest :: webxr_session_launch: At least one evidence item is required.
- Meta Quest :: tier_classification_parity: Status must be pass for sign-off (current: pending).
- Meta Quest :: tier_classification_parity: At least one evidence item is required.
- Meta Quest :: telemetry_event_captured: Status must be pass for sign-off (current: pending).
- Meta Quest :: telemetry_event_captured: At least one evidence item is required.
- Meta Quest :: discovery_confidence_logged: Status must be pass for sign-off (current: pending).
- Meta Quest :: discovery_confidence_logged: At least one evidence item is required.
- Meta Quest :: telemetry: Missing telemetry.eventTimestamp.
- Meta Quest :: telemetry: Missing telemetry.eventSource.
- Meta Quest :: telemetry: Missing telemetry.detectionVersion.
- Meta Quest :: telemetry: telemetry.tier must be a number between 0 and 3.
- Meta Quest :: telemetry: telemetry.gpuTier must be a number between 0 and 3.
- Meta Quest :: telemetry: telemetry.discoveryConfidence must be a number between 0 and 1.
- Meta Quest :: telemetry: telemetry.discoveryConfidenceBand must be low|medium|high.
- Meta Quest :: telemetry: telemetry.streamingTargetCount must be a number between 0 and 3.
- signOff: status must be approved (current: pending).
- signOff: Missing approver.
- signOff: Missing approvedAt timestamp.

## Warnings

- Apple Vision Pro :: webxr_session_launch: Check notes are empty.
- Apple Vision Pro :: tier_classification_parity: Check notes are empty.
- Apple Vision Pro :: telemetry_event_captured: Check notes are empty.
- Apple Vision Pro :: discovery_confidence_logged: Check notes are empty.
- Apple Vision Pro :: telemetry: telemetry.castTargets is empty.
- Meta Quest :: webxr_session_launch: Check notes are empty.
- Meta Quest :: tier_classification_parity: Check notes are empty.
- Meta Quest :: telemetry_event_captured: Check notes are empty.
- Meta Quest :: discovery_confidence_logged: Check notes are empty.
- Meta Quest :: telemetry: telemetry.castTargets is empty.
