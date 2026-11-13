-- Nomad Consulting: база данных для сайта.
-- Вставьте весь этот текст в Supabase → SQL Editor → New query и нажмите Run.

-- Заявки с формы на главной странице
create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 200),
  phone text not null check (char_length(phone) between 3 and 50),
  program text check (char_length(program) <= 50),
  message text check (char_length(message) <= 2000),
  processed boolean not null default false,
  created_at timestamptz not null default now()
);

-- Университеты-партнёры
create table if not exists universities (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text default '',
  deadline date,
  programs text default '',
  contact text default '',
  note text default '',
  updated_at timestamptz not null default now()
);

-- Студенты
create table if not exists students (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text default '',
  parent_phone text default '',
  birth_date date,
  passport_expiry date,
  program text default 'lang',
  intake text default '',
  university_id uuid references universities(id) on delete set null,
  major text default '',
  scholarship text default 'none',
  status text not null default 'new',
  docs jsonb not null default '{}'::jsonb,
  next_date date,
  next_action text default '',
  note text default '',
  history jsonb not null default '[]'::jsonb,
  application_id uuid references applications(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Заметки команды
create table if not exists notes (
  id uuid primary key default gen_random_uuid(),
  text text not null,
  pinned boolean not null default false,
  created_at timestamptz not null default now()
);

-- Сотрудники: только эти почты видят и меняют данные в панели.
-- ВАЖНО: замените адрес ниже на свой. Добавить коллегу: insert into staff values ('почта@пример.kg');
create table if not exists staff (
  email text primary key
);
alter table staff enable row level security;
insert into staff (email) values ('ВАША_ПОЧТА@gmail.com') on conflict do nothing;

create or replace function is_staff() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from staff where lower(email) = lower(auth.jwt() ->> 'email'));
$$;

-- Доступ: посетители сайта могут только ОТПРАВИТЬ заявку.
-- Читать и менять данные могут только сотрудники из таблицы staff.
alter table applications enable row level security;
alter table universities enable row level security;
alter table students     enable row level security;
alter table notes        enable row level security;

drop policy if exists "public can apply" on applications;
create policy "public can apply" on applications
  for insert to anon with check (processed = false);

drop policy if exists "staff all applications" on applications;
create policy "staff all applications" on applications
  for all to authenticated using (is_staff()) with check (is_staff());

drop policy if exists "staff all universities" on universities;
create policy "staff all universities" on universities
  for all to authenticated using (is_staff()) with check (is_staff());

drop policy if exists "staff all students" on students;
create policy "staff all students" on students
  for all to authenticated using (is_staff()) with check (is_staff());

drop policy if exists "staff all notes" on notes;
create policy "staff all notes" on notes
  for all to authenticated using (is_staff()) with check (is_staff());

-- Первый вуз-партнёр
insert into universities (name, city)
select 'NJCIT — Nanjing Vocational College of Information Technology', 'Нанкин'
where not exists (select 1 from universities where name like 'NJCIT%');

-- Живое обновление панели (изменения коллег видны без перезагрузки)
do $$
declare t text;
begin
  foreach t in array array['applications','universities','students','notes'] loop
    begin
      execute format('alter publication supabase_realtime add table %I', t);
    exception when duplicate_object then null;
    end;
  end loop;
end $$;
