-- Notes, Bookmarks, Discussions, Leaderboards, Study Sessions, Certificates
-- Migration: 202603050006

-- ── User Notes ──────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id TEXT,
  lesson_id TEXT,
  content TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_user_notes_user ON user_notes(user_id, updated_at DESC);
ALTER TABLE user_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own notes" ON user_notes FOR ALL USING (auth.uid() = user_id);

-- ── Bookmarks ───────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_type TEXT NOT NULL CHECK (item_type IN ('module','lesson','game','exam')),
  item_id TEXT NOT NULL,
  item_title TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, item_type, item_id)
);
CREATE INDEX idx_user_bookmarks_user ON user_bookmarks(user_id, created_at DESC);
ALTER TABLE user_bookmarks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own bookmarks" ON user_bookmarks FOR ALL USING (auth.uid() = user_id);

-- ── Discussion Threads ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS discussion_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  module_id TEXT NOT NULL,
  lesson_id TEXT,
  parent_id UUID REFERENCES discussion_posts(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  upvotes INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_discussion_module ON discussion_posts(module_id, created_at DESC);
ALTER TABLE discussion_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read discussions" ON discussion_posts FOR SELECT USING (true);
CREATE POLICY "Auth users create discussions" ON discussion_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users delete own posts" ON discussion_posts FOR DELETE USING (auth.uid() = user_id);

-- ── Study Sessions (Focus Timer) ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS study_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  duration_seconds INTEGER NOT NULL,
  subject TEXT,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ended_at TIMESTAMPTZ
);
CREATE INDEX idx_study_sessions_user ON study_sessions(user_id, started_at DESC);
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own sessions" ON study_sessions FOR ALL USING (auth.uid() = user_id);

-- ── Certificates ────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS user_certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  certificate_type TEXT NOT NULL CHECK (certificate_type IN ('module_completion','exam_pass','milestone')),
  title TEXT NOT NULL,
  description TEXT,
  issued_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  module_id TEXT,
  exam_id TEXT,
  score NUMERIC,
  UNIQUE(user_id, certificate_type, COALESCE(module_id,''), COALESCE(exam_id,''))
);
CREATE INDEX idx_user_certificates_user ON user_certificates(user_id, issued_at DESC);
ALTER TABLE user_certificates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own certificates" ON user_certificates FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "System inserts certificates" ON user_certificates FOR INSERT WITH CHECK (auth.uid() = user_id);
