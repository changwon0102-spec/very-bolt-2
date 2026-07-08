create table if not exists public.beauty_actions (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('feature', 'mini', 'cta')),
  title text not null,
  description_line_1 text,
  description_line_2 text,
  icon_key text check (icon_key in ('kid', 'smile')),
  href text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.beauty_actions enable row level security;

drop policy if exists "Anyone can read active beauty actions" on public.beauty_actions;

create policy "Anyone can read active beauty actions"
  on public.beauty_actions
  for select
  using (is_active = true);

insert into public.beauty_actions
  (kind, title, description_line_1, description_line_2, icon_key, href, sort_order)
values
  (
    'feature',
    '1분 피부 고민 체크',
    '나의 피부 타입과 고민을 정밀하게 분석',
    '합니다.',
    'kid',
    'https://www.musinsa.com/main/beauty/recommend?gf=A',
    10
  ),
  (
    'feature',
    '입문자용 제품만 추천',
    '복잡한 단계 없이 꼭 필요한 필수템만 골',
    '라드려요.',
    'kid',
    'https://www.musinsa.com/products/680655',
    20
  ),
  (
    'mini',
    '매장 테스트',
    '무신사 뷰티 스토어에서 바',
    '로 확인',
    'smile',
    'https://www.musinsa.com/main/beauty/recommend?gf=A',
    30
  ),
  (
    'mini',
    '샘플 사용 후 재구매',
    '샘플 써보고 앱에서 편하게',
    '결제',
    'smile',
    'https://www.musinsa.com/products/680655',
    40
  ),
  (
    'cta',
    '내 피부 타입 찾기',
    null,
    null,
    null,
    'https://www.musinsa.com/main/beauty/recommend?gf=A',
    50
  ),
  (
    'cta',
    '설문 없이 제품 둘러보기',
    null,
    null,
    null,
    'https://www.musinsa.com/main/beauty/recommend?gf=A',
    60
  )
on conflict do nothing;
