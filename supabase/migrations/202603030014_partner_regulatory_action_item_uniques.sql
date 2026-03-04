alter table public.partner_regulatory_action_items
  drop constraint if exists partner_regulatory_action_items_unique_update;

alter table public.partner_regulatory_action_items
  add constraint partner_regulatory_action_items_unique_update
  unique (regulatory_update_id);
