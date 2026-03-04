create table if not exists public.game_seasons (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'draft'
    check (status in ('draft', 'active', 'completed', 'archived')),
  premium_only boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint game_seasons_window_check check (ends_at > starts_at)
);

create table if not exists public.game_season_entries (
  id uuid primary key default gen_random_uuid(),
  season_id uuid not null references public.game_seasons(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  total_points integer not null default 0 check (total_points >= 0),
  best_combo integer not null default 0 check (best_combo >= 0),
  updated_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now()),
  constraint game_season_entries_unique unique (season_id, user_id)
);

create table if not exists public.game_clans (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  description text,
  invite_code text not null unique,
  is_active boolean not null default true,
  premium_only boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.game_clan_members (
  id uuid primary key default gen_random_uuid(),
  clan_id uuid not null references public.game_clans(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null default 'member' check (role in ('owner', 'officer', 'member')),
  status text not null default 'active' check (status in ('active', 'inactive', 'removed')),
  contribution_points integer not null default 0 check (contribution_points >= 0),
  joined_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint game_clan_members_unique unique (clan_id, user_id)
);

create table if not exists public.game_rooms (
  id uuid primary key default gen_random_uuid(),
  host_user_id uuid not null references auth.users(id) on delete cascade,
  room_code text not null unique,
  mode text not null default 'duel' check (mode in ('duel', 'party', 'coop')),
  status text not null default 'open' check (status in ('open', 'active', 'closed')),
  max_players integer not null default 4 check (max_players between 2 and 12),
  premium_only boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.game_room_players (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.game_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  team text not null default 'alpha' check (team in ('alpha', 'beta', 'none')),
  ready boolean not null default false,
  joined_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint game_room_players_unique unique (room_id, user_id)
);

create index if not exists idx_game_seasons_status_window
  on public.game_seasons(status, starts_at desc, ends_at desc);
create index if not exists idx_game_season_entries_rank
  on public.game_season_entries(season_id, total_points desc, best_combo desc, updated_at asc);
create index if not exists idx_game_clan_members_user_status
  on public.game_clan_members(user_id, status);
create index if not exists idx_game_rooms_status_created
  on public.game_rooms(status, created_at desc);
create index if not exists idx_game_room_players_room
  on public.game_room_players(room_id, joined_at asc);

drop trigger if exists game_seasons_set_updated_at on public.game_seasons;
create trigger game_seasons_set_updated_at
before update on public.game_seasons
for each row execute function public.set_updated_at();

drop trigger if exists game_clans_set_updated_at on public.game_clans;
create trigger game_clans_set_updated_at
before update on public.game_clans
for each row execute function public.set_updated_at();

drop trigger if exists game_clan_members_set_updated_at on public.game_clan_members;
create trigger game_clan_members_set_updated_at
before update on public.game_clan_members
for each row execute function public.set_updated_at();

drop trigger if exists game_rooms_set_updated_at on public.game_rooms;
create trigger game_rooms_set_updated_at
before update on public.game_rooms
for each row execute function public.set_updated_at();

drop trigger if exists game_room_players_set_updated_at on public.game_room_players;
create trigger game_room_players_set_updated_at
before update on public.game_room_players
for each row execute function public.set_updated_at();

alter table public.game_seasons enable row level security;
alter table public.game_season_entries enable row level security;
alter table public.game_clans enable row level security;
alter table public.game_clan_members enable row level security;
alter table public.game_rooms enable row level security;
alter table public.game_room_players enable row level security;

drop policy if exists "game_seasons_select_authenticated" on public.game_seasons;
create policy "game_seasons_select_authenticated"
on public.game_seasons
for select
to authenticated
using (true);

drop policy if exists "game_season_entries_select_own" on public.game_season_entries;
create policy "game_season_entries_select_own"
on public.game_season_entries
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "game_season_entries_insert_own" on public.game_season_entries;
create policy "game_season_entries_insert_own"
on public.game_season_entries
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "game_season_entries_update_own" on public.game_season_entries;
create policy "game_season_entries_update_own"
on public.game_season_entries
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "game_clans_select_member" on public.game_clans;
create policy "game_clans_select_member"
on public.game_clans
for select
to authenticated
using (
  owner_user_id = auth.uid()
  or exists (
    select 1 from public.game_clan_members gcm
    where gcm.clan_id = game_clans.id
      and gcm.user_id = auth.uid()
      and gcm.status = 'active'
  )
);

drop policy if exists "game_clans_insert_owner" on public.game_clans;
create policy "game_clans_insert_owner"
on public.game_clans
for insert
to authenticated
with check (owner_user_id = auth.uid());

drop policy if exists "game_clan_members_select_own" on public.game_clan_members;
create policy "game_clan_members_select_own"
on public.game_clan_members
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "game_clan_members_insert_own" on public.game_clan_members;
create policy "game_clan_members_insert_own"
on public.game_clan_members
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "game_clan_members_update_own" on public.game_clan_members;
create policy "game_clan_members_update_own"
on public.game_clan_members
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "game_rooms_select_authenticated" on public.game_rooms;
create policy "game_rooms_select_authenticated"
on public.game_rooms
for select
to authenticated
using (true);

drop policy if exists "game_rooms_insert_host" on public.game_rooms;
create policy "game_rooms_insert_host"
on public.game_rooms
for insert
to authenticated
with check (host_user_id = auth.uid());

drop policy if exists "game_rooms_update_host" on public.game_rooms;
create policy "game_rooms_update_host"
on public.game_rooms
for update
to authenticated
using (host_user_id = auth.uid())
with check (host_user_id = auth.uid());

drop policy if exists "game_room_players_select_own" on public.game_room_players;
create policy "game_room_players_select_own"
on public.game_room_players
for select
to authenticated
using (user_id = auth.uid());

drop policy if exists "game_room_players_insert_own" on public.game_room_players;
create policy "game_room_players_insert_own"
on public.game_room_players
for insert
to authenticated
with check (user_id = auth.uid());

drop policy if exists "game_room_players_update_own" on public.game_room_players;
create policy "game_room_players_update_own"
on public.game_room_players
for update
to authenticated
using (user_id = auth.uid())
with check (user_id = auth.uid());

grant select, insert, update on public.game_seasons to authenticated;
grant select, insert, update on public.game_season_entries to authenticated;
grant select, insert, update on public.game_clans to authenticated;
grant select, insert, update on public.game_clan_members to authenticated;
grant select, insert, update on public.game_rooms to authenticated;
grant select, insert, update on public.game_room_players to authenticated;
