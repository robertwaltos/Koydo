# Agent Coordination Board

Use this while multiple agents are active. Update in place; do not rewrite history.

## Rules
1. Every agent updates only its own row.
2. No one runs destructive git commands from this board workflow.
3. Cleanup starts only when every row says `safe_to_pause = yes`.

## Agent Status

| agent | task | branch | last_commit | files_touched_summary | safe_to_pause | notes |
| --- | --- | --- | --- | --- | --- | --- |
| agent-1 |  |  |  |  | no |  |
| agent-2 |  |  |  |  | no |  |
| agent-3 |  |  |  |  | no |  |
| agent-4 |  |  |  |  | no |  |
| agent-5 |  |  |  |  | no |  |

## Ready Check

Set to `yes` only when all rows are ready.

- cleanup_window_ready: no
- coordinator: 
- target_start_time: 
