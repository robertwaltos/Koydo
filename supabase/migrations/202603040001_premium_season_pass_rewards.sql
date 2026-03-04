create table if not exists public.game_season_reward_claims (
  id uuid primary key default gen_random_uuid(),
  season_id uuid not null references public.game_seasons(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  tier_index integer not null check (tier_index >= 0),
  reward_code text not null,
  reward_payload jsonb not null default '{}'::jsonb,
  claimed_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint game_season_reward_claims_unique unique (season_id, user_id, tier_index)
);

create index if not exists idx_game_season_reward_claims_user_season
  on public.game_season_reward_claims(user_id, season_id, tier_index);

drop trigger if exists game_season_reward_claims_set_updated_at on public.game_season_reward_claims;
create trigger game_season_reward_claims_set_updated_at
before update on public.game_season_reward_claims
for each row execute function public.set_updated_at();

alter table public.game_season_reward_claims enable row level security;

drop policy if exists "game_season_reward_claims_select_own" on public.game_season_reward_claims;
create policy "game_season_reward_claims_select_own"
on public.game_season_reward_claims
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "game_season_reward_claims_insert_own" on public.game_season_reward_claims;
create policy "game_season_reward_claims_insert_own"
on public.game_season_reward_claims
for insert
to authenticated
with check (user_id = auth.uid());

grant select, insert, update on public.game_season_reward_claims to authenticated;
