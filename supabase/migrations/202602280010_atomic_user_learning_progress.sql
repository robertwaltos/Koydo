-- Atomic lesson progress upsert to avoid race conditions under concurrent writes.
create or replace function public.upsert_user_learning_progress_atomic(
  p_user_id uuid,
  p_lesson_id text,
  p_quality integer
)
returns table (
  repetitions integer,
  easiness_factor numeric,
  review_interval integer,
  next_review_at timestamptz,
  last_reviewed_at timestamptz
)
language plpgsql
as $$
declare
  v_quality integer := greatest(0, least(5, p_quality));
  v_delta numeric := 0.1 - (5 - v_quality) * (0.08 + (5 - v_quality) * 0.02);
begin
  return query
  insert into public.user_learning_progress (
    user_id,
    lesson_id,
    repetitions,
    easiness_factor,
    interval,
    next_review_at,
    last_reviewed_at
  )
  values (
    p_user_id,
    p_lesson_id,
    case when v_quality < 3 then 0 else 1 end,
    greatest(1.3::numeric, 2.5::numeric + v_delta),
    1,
    now() + make_interval(days => 1),
    now()
  )
  on conflict (user_id, lesson_id)
  do update set
    repetitions = case
      when v_quality < 3 then 0
      else public.user_learning_progress.repetitions + 1
    end,
    interval = case
      when v_quality < 3 then 1
      when public.user_learning_progress.repetitions + 1 = 1 then 1
      when public.user_learning_progress.repetitions + 1 = 2 then 6
      else ceil(public.user_learning_progress.interval * public.user_learning_progress.easiness_factor)::integer
    end,
    easiness_factor = greatest(
      1.3::numeric,
      public.user_learning_progress.easiness_factor + v_delta
    ),
    next_review_at = now() + make_interval(
      days => case
        when v_quality < 3 then 1
        when public.user_learning_progress.repetitions + 1 = 1 then 1
        when public.user_learning_progress.repetitions + 1 = 2 then 6
        else ceil(public.user_learning_progress.interval * public.user_learning_progress.easiness_factor)::integer
      end
    ),
    last_reviewed_at = now()
  returning
    public.user_learning_progress.repetitions,
    public.user_learning_progress.easiness_factor,
    public.user_learning_progress.interval as review_interval,
    public.user_learning_progress.next_review_at,
    public.user_learning_progress.last_reviewed_at;
end;
$$;
