# Koydo Architecture Refactor: Family & Profiles

## Core Concept
Shift from 1-to-1 Auth-to-User model to a **Family Account Model**.
- **Main Account**: Handles Login, Billing, Parental Controls.
- **Profiles**: Lightweight identities for learners (Children) under the Main Account.

## 1. Schema Changes (Target State)
```sql
-- New Table: Profiles linked to a single Auth User (Parent)
create table public.student_profiles (
  id uuid primary key default gen_random_uuid(),
  account_id uuid references auth.users(id) on delete cascade, -- The Parent
  display_name text not null,
  avatar_theme text default 'robot', -- For visual differentiation
  grade_level text,
  daily_time_limit_minutes int,
  created_at timestamptz default now()
);

-- RLS Policies will allow the 'account_id' owner to CRUD these profiles.
```

## 2. Route Structure

### Public (The Nexus)
- `/`: Landing Page (The "Nexus" design)
- `/auth/sign-in`: Standard Email/Password or OAuth.
- `/auth/sign-up`: Creates the **Family Account**.

### The Gate (Profile Switcher)
- `/select-profile`: Interstitial page after login.
  - Lists all `student_profiles` + "Parent Dashboard" button.
  - User selects a profile -> App sets "Active Profile Context" in global state -> Redirects.

### Zones
- `/student`: **The Immersive App**.
  - All navigation is "Explore" based.
  - No billing/account settings visible.
  - Theme locked to "Immersive".
- `/parent`: **The Command Center**.
  - Dashboard for progress tracking.
  - Profile management (Add/Edit Child).
  - Billing & Settings.
- `/admin`: **Developer/System Admin**.
  - Existing Admin Dashboard.
  - Protected by `is_admin` flag on `user_profiles`.


## 3. Onboarding & Assessment Flow
1. **Parent Adds Child**:
    - **Step 1**: Basic Info (Name, Age, Grade Level).
    - **Step 2**: The "Diagnostic Check".
        - The system presents **5 adaptive questions** based on the selected Grade Level.
        - The child (or parent on behalf of child) answers.
        - **Outcome**: The AI determines a `starting_complexity_level` (e.g., "Grade 4 Math", but "Grade 6 Reading").
    - **Step 3**: Profile Created.
    
2. **AI Curriculum Tailoring**:
    - The AI uses the `starting_complexity_level` to:
        - Confirm manifested skills.
        - Identifying gaps to strengthen.
        - Set the initial difficulty for the "1000X" learning path.

## 4. Implementation Steps
1.  [ ] **Database**: Add `student_profiles` table with `diagnostic_results` JSONB column.
2.  [ ] **UI**: Create `ProfileWizard` component.
    - [ ] Step 1: Input Form.
    - [ ] Step 2: Adaptive Quiz Interface (Placeholder questions for now, wired to AI later).
3.  [ ] **Routing**: Implement `SelectProfile` page (the "Who is learning?" screen).
4.  [ ] **Middleware**: Enforce profile selection on `/student` routes.

