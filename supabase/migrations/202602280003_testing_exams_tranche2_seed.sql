insert into public.testing_exams (
  exam_code,
  name,
  name_pl,
  blueprint,
  question_count,
  timing_minutes,
  passing_score,
  version,
  language,
  is_active,
  cover_image_url
)
values
  (
    'security-plus',
    'CompTIA Security+ Practice',
    'CompTIA Security+ Ćwiczenia',
    '{"domains":[{"name":"General Security Concepts","weight":12},{"name":"Threats, Vulnerabilities, and Mitigations","weight":22},{"name":"Security Architecture","weight":18},{"name":"Security Operations","weight":28},{"name":"Security Program Management and Oversight","weight":20}]}'::jsonb,
    90,
    90,
    75,
    1,
    'en',
    true,
    '/media/generated/job-131d40a0-7cca-4191-abd3-74cc501e0b36.png'
  ),
  (
    'ccna',
    'CCNA Practice',
    'CCNA Ćwiczenia',
    '{"domains":[{"name":"Network Fundamentals","weight":20},{"name":"Network Access","weight":20},{"name":"IP Connectivity","weight":25},{"name":"IP Services","weight":10},{"name":"Security Fundamentals","weight":15},{"name":"Automation and Programmability","weight":10}]}'::jsonb,
    100,
    120,
    70,
    1,
    'en',
    true,
    '/media/generated/job-199be27f-a57c-448d-b693-36e8b7236746.png'
  ),
  (
    'cpa',
    'CPA Practice',
    'CPA Ćwiczenia',
    '{"domains":[{"name":"Accounting and Data Analytics","weight":30},{"name":"Audit and Attestation","weight":25},{"name":"Regulation and Tax","weight":25},{"name":"Business Analysis and Reporting","weight":20}]}'::jsonb,
    100,
    240,
    75,
    1,
    'en',
    true,
    '/media/generated/job-19ff2934-f286-4d78-8bc2-9de02af18a6b.png'
  ),
  (
    'usmle-step-2-ck',
    'USMLE Step 2 CK Practice',
    'USMLE Step 2 CK Ćwiczenia',
    '{"domains":[{"name":"Internal Medicine","weight":50},{"name":"Surgery","weight":25},{"name":"Pediatrics","weight":15},{"name":"Obstetrics and Gynecology","weight":10}]}'::jsonb,
    318,
    540,
    62,
    1,
    'en',
    true,
    '/media/generated/job-1bae76f5-b00d-45cf-a9f8-9c8dfc078d14.png'
  ),
  (
    'bar-exam',
    'Bar Exam Practice',
    'Egzamin Adwokacki Ćwiczenia',
    '{"domains":[{"name":"Constitutional Law","weight":15},{"name":"Contracts","weight":15},{"name":"Criminal Law and Procedure","weight":15},{"name":"Evidence","weight":15},{"name":"Real Property","weight":15},{"name":"Torts","weight":15},{"name":"Civil Procedure","weight":10}]}'::jsonb,
    200,
    360,
    68,
    1,
    'en',
    true,
    '/media/generated/job-1cc58ade-8b2b-427c-b3ac-214ba494b21c.png'
  ),
  (
    'frm',
    'FRM Practice',
    'FRM Ćwiczenia',
    '{"domains":[{"name":"Foundations of Risk Management","weight":20},{"name":"Quantitative Analysis","weight":20},{"name":"Financial Markets and Products","weight":30},{"name":"Valuation and Risk Models","weight":30}]}'::jsonb,
    100,
    240,
    70,
    1,
    'en',
    true,
    '/media/generated/job-2389e232-afaf-42ea-b5d2-2918e5b87d17.png'
  ),
  (
    'series-7',
    'FINRA Series 7 Practice',
    'FINRA Series 7 Ćwiczenia',
    '{"domains":[{"name":"Seeks Business for the Broker-Dealer","weight":9},{"name":"Evaluates Customers Financial Profile and Objectives","weight":11},{"name":"Opens Accounts and Transfers Assets","weight":11},{"name":"Provides Customers with Information and Recommendations","weight":73},{"name":"Obtains and Verifies Customers Purchase and Sales Instructions","weight":6}]}'::jsonb,
    135,
    225,
    72,
    1,
    'en',
    true,
    '/media/generated/job-2433a17a-6e27-49d3-bf4b-e2db2cb89c19.png'
  )
on conflict (exam_code, version, language) do update
set
  name = excluded.name,
  name_pl = excluded.name_pl,
  blueprint = excluded.blueprint,
  question_count = excluded.question_count,
  timing_minutes = excluded.timing_minutes,
  passing_score = excluded.passing_score,
  is_active = excluded.is_active,
  cover_image_url = excluded.cover_image_url,
  updated_at = now();

