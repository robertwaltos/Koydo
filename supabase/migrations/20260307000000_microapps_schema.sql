CREATE TABLE public.flashcard_decks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  cards JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.focus_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  mode TEXT NOT NULL CHECK (mode IN ('focus', 'break')),
  duration_minutes INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  claimed_at TIMESTAMPTZ
);

CREATE TABLE public.wardrobe_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  state TEXT NOT NULL,
  color_hint TEXT,
  price TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.trivia_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer BOOLEAN NOT NULL,
  category TEXT NOT NULL,
  module_id TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE public.user_balances (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  focus_crystals INTEGER DEFAULT 0 NOT NULL,
  knowledge_shards INTEGER DEFAULT 0 NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- --- RPC: Claim Focus Rewards ---
CREATE OR REPLACE FUNCTION public.claim_focus_rewards()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user_id UUID;
  v_total_minutes INTEGER;
  v_crystals_earned INTEGER;
  v_rate INTEGER := 10; -- 10 crystals per minute
BEGIN
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- Calculate earned crystals
  SELECT COALESCE(SUM(duration_minutes), 0)
  INTO v_total_minutes
  FROM public.focus_sessions
  WHERE user_id = v_user_id AND claimed_at IS NULL AND mode = 'focus';

  v_crystals_earned := v_total_minutes * v_rate;

  IF v_crystals_earned > 0 THEN
    -- Update balance
    INSERT INTO public.user_balances (user_id, focus_crystals)
    VALUES (v_user_id, v_crystals_earned)
    ON CONFLICT (user_id) DO UPDATE
    SET focus_crystals = user_balances.focus_crystals + v_crystals_earned,
        updated_at = now();

    -- Mark as claimed
    UPDATE public.focus_sessions
    SET claimed_at = now()
    WHERE user_id = v_user_id AND claimed_at IS NULL AND mode = 'focus';
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'minutes_claimed', v_total_minutes,
    'crystals_earned', v_crystals_earned
  );
END;
$$;
