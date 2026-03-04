-- Add 'audio' to media_generation_jobs.asset_type constraint.
-- Previously, audio jobs used asset_type='animation' with metadata.is_audio=true as a workaround.
-- This migration allows proper asset_type='audio' values.

alter table public.media_generation_jobs
  drop constraint if exists media_generation_jobs_asset_type_check;

alter table public.media_generation_jobs
  add constraint media_generation_jobs_asset_type_check
    check (asset_type in ('video', 'animation', 'image', 'audio'));

-- Migrate any existing audio-hack rows to use the proper asset_type
update public.media_generation_jobs
  set asset_type = 'audio',
      updated_at = now()
  where asset_type = 'animation'
    and (metadata->>'is_audio')::boolean = true;
