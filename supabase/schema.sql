-- 방콕 여행 경비 트래커 — 테이블 + 접근 정책
-- Supabase 프로젝트의 SQL Editor에서 1회 실행하세요. (seed.sql보다 먼저 실행)

create extension if not exists pgcrypto;

create table if not exists expenses (
  id uuid primary key default gen_random_uuid(),
  date date not null,
  category text not null check (category in ('flight','lodging','transport','food','shopping','other')),
  place text not null,
  detail text,
  thb numeric,
  krw numeric not null,
  method text not null,
  note text,
  is_seed boolean not null default false,
  created_at timestamptz not null default now()
);

alter table expenses enable row level security;

-- 쓰기(등록/삭제) 요청 헤더의 x-app-secret 값이 비밀번호와 일치할 때만 허용.
-- ⚠️ 이 저장소는 public이라 실제 비밀번호를 커밋하면 누구나 볼 수 있습니다.
-- 아래 <YOUR_SECRET> 자리를 실제 비밀번호로 바꿔서 Supabase SQL Editor에서만 실행하고,
-- 그 버전은 커밋하지 마세요. 비밀번호를 바꾸고 싶을 때도 이 함수만 다시 실행하면 됩니다.
create or replace function is_authorized() returns boolean
language sql stable as $$
  select current_setting('request.headers', true)::json->>'x-app-secret' = '<YOUR_SECRET>';
$$;

drop policy if exists "public read" on expenses;
create policy "public read" on expenses
  for select using (true);

drop policy if exists "protected insert" on expenses;
create policy "protected insert" on expenses
  for insert with check (is_authorized());

drop policy if exists "protected delete" on expenses;
create policy "protected delete" on expenses
  for delete using (is_authorized());
