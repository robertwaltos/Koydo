# Music API Access Status (Checked 2026-03-07)

## Summary

- **Udio**: No public API (officially stated).
- **Suno**: No official public developer API/signup page found from Suno-owned docs/pages.
- **ElevenLabs**: Music generation API is documented and available on paid plans.

## Findings

### Udio

Official Udio support page states: public API is not available and there is no ETA.

Source:
- https://help.udio.com/en/articles/10716541-does-udio-have-an-api

### Suno

No official Suno developer portal or public API signup flow was found on Suno-owned properties during this check.
Suno Terms also prohibit automated/scraping-style access patterns, so unofficial APIs are high risk.

Sources:
- https://suno.com/terms
- https://about.suno.com/
- https://help.suno.com/

### ElevenLabs

ElevenLabs has official docs for music generation and an API endpoint with API-key flow.
Docs indicate paid-plan requirement.

Sources:
- https://elevenlabs.io/docs/product-guides/music
- https://elevenlabs.io/docs/api-reference/music/generate
- https://elevenlabs.io/docs/capabilities/music

## Practical Signup Path

1. Create account on ElevenLabs.
2. Upgrade to a paid plan.
3. Generate API key in dashboard.
4. Implement API calls against the documented music endpoint.
5. Route through internal moderation + policy checks before publishing output.
