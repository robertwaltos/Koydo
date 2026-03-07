-- ============================================================
-- StoryForge Cinema — tables for film caching, reading progress,
-- and user bookmarks.
-- ============================================================

-- ── storyforge_films ────────────────────────────────────────
-- Caches the decomposed scenes and quiz breakpoints so we don't
-- re-fetch / re-decompose on every visit.

CREATE TABLE IF NOT EXISTS storyforge_films (
  id            uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  story_id      text NOT NULL UNIQUE,
  user_id       uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title         text NOT NULL,
  author        text NOT NULL,
  scenes        jsonb NOT NULL DEFAULT '[]'::jsonb,
  quiz_breakpoints jsonb NOT NULL DEFAULT '[]'::jsonb,
  scene_count   int NOT NULL DEFAULT 0,
  status        text NOT NULL DEFAULT 'queued'
                  CHECK (status IN (
                    'queued','extracting','decomposing','generating_keyframes',
                    'generating_audio','compositing','review','published'
                  )),
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_storyforge_films_story_id
  ON storyforge_films(story_id);

CREATE INDEX IF NOT EXISTS idx_storyforge_films_user_id
  ON storyforge_films(user_id);

-- ── storyforge_reading_progress ─────────────────────────────
-- Tracks per-user reading position within each story.

CREATE TABLE IF NOT EXISTS storyforge_reading_progress (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  story_id    text NOT NULL,
  scene_index int NOT NULL DEFAULT 0,
  total_scenes int NOT NULL DEFAULT 0,
  completed   boolean NOT NULL DEFAULT false,
  last_read_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, story_id)
);

CREATE INDEX IF NOT EXISTS idx_storyforge_progress_user
  ON storyforge_reading_progress(user_id);

-- ── storyforge_bookmarks ────────────────────────────────────
-- Users can bookmark specific scenes to revisit.

CREATE TABLE IF NOT EXISTS storyforge_bookmarks (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  story_id    text NOT NULL,
  scene_index int NOT NULL,
  note        text,
  created_at  timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, story_id, scene_index)
);

CREATE INDEX IF NOT EXISTS idx_storyforge_bookmarks_user
  ON storyforge_bookmarks(user_id);

-- ── RLS ─────────────────────────────────────────────────────

ALTER TABLE storyforge_films ENABLE ROW LEVEL SECURITY;
ALTER TABLE storyforge_reading_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE storyforge_bookmarks ENABLE ROW LEVEL SECURITY;

-- Films: users can read any published film, service_role can write
CREATE POLICY "storyforge_films_select"
  ON storyforge_films FOR SELECT
  TO authenticated
  USING (status = 'published' OR user_id = auth.uid());

CREATE POLICY "storyforge_films_insert"
  ON storyforge_films FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "storyforge_films_update"
  ON storyforge_films FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Reading progress: owner only
CREATE POLICY "storyforge_progress_all"
  ON storyforge_reading_progress FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Bookmarks: owner only
CREATE POLICY "storyforge_bookmarks_all"
  ON storyforge_bookmarks FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Grant service_role full access for admin writes
GRANT ALL ON storyforge_films TO service_role;
GRANT ALL ON storyforge_reading_progress TO service_role;
GRANT ALL ON storyforge_bookmarks TO service_role;
