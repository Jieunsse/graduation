import type { NewsArticle } from '@domain/news/types/news.ts';

const mockNewsList: NewsArticle[] = [
  {
    id: 'news-001',
    title: '레드불, 2025 시즌 사우디 테스트에서 혁신적인 플로어 공개',
    source: 'Motorsport.com',
    publishedAt: '2025-02-15T09:00:00Z',
    thumbnail:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.motorsport.com/f1',
    excerpt:
      '팀 관계자는 새 플로어가 코너링 안정성을 크게 향상시킨다고 밝혔으며, 바레인 프리시즌 테스트에서 첫선을 보일 예정이다.',
  },
  {
    id: 'news-002',
    title: 'FIA, 2026 파워유닛 규정 세부안 추가 발표',
    source: 'FIA Official',
    publishedAt: '2025-02-14T16:30:00Z',
    thumbnail:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.fia.com',
    excerpt:
      '하이브리드 시스템 비중을 늘리고 지속 가능한 연료 사용 의무가 강화된다. 각 팀은 2025년 말까지 인증 절차를 마쳐야 한다.',
  },
  {
    id: 'news-003',
    title: '맥라렌, 신규 타이틀 스폰서와 장기 파트너십 체결',
    source: 'Sky Sports F1',
    publishedAt: '2025-02-13T11:15:00Z',
    thumbnail:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.skysports.com/f1',
    excerpt:
      '새 파트너십으로 인한 추가 자본은 공장 업그레이드와 시뮬레이터 고도화에 사용될 예정이다.',
  },
  {
    id: 'news-004',
    title: '페라리, 이몰라에서 비공개 테스트 진행… 차세대 업그레이드 점검',
    source: 'Gazzetta dello Sport',
    publishedAt: '2025-02-12T08:45:00Z',
    thumbnail:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.gazzetta.it',
    excerpt:
      '드라이버들은 새로운 서스펜션 패키지를 시험했고, 특히 저속 구간 트랙션이 개선됐다는 평가가 나왔다.',
  },
  {
    id: 'news-005',
    title: 'F1, 서울 도심을 포함한 신규 아시안 시티 레이스 후보지 검토',
    source: 'F1 Insider',
    publishedAt: '2025-02-11T14:20:00Z',
    thumbnail:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.formula1.com',
    excerpt:
      '프로모터 측은 친환경 모빌리티 쇼케이스와 결합된 야간 레이스 포맷을 제안한 것으로 알려졌다.',
  },
  {
    id: 'news-006',
    title: '메르세데스, 브랙슬리 공장에 AI 기반 시뮬레이션 허브 구축',
    source: 'The Race',
    publishedAt: '2025-02-10T19:10:00Z',
    thumbnail:
      'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.the-race.com',
    excerpt:
      'AI가 공기역학 해석과 전략 시나리오 생성을 동시에 수행해 개발 속도를 가속화할 계획이다.',
  },
  {
    id: 'news-007',
    title: '알파타우리, 2025년 팀명 변경과 함께 로고 전면 교체 예고',
    source: 'Autosport',
    publishedAt: '2025-02-09T07:30:00Z',
    thumbnail:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.autosport.com',
    excerpt:
      '팀 관계자는 리브랜딩이 젊은 팬층 공략과 스폰서십 다변화 전략의 핵심이라고 설명했다.',
  },
  {
    id: 'news-008',
    title: 'Pirelli, 차세대 하드 컴파운드 공개… 장거리 스틴트에 최적화',
    source: 'Formula1.com',
    publishedAt: '2025-02-08T10:05:00Z',
    thumbnail:
      'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.formula1.com',
    excerpt:
      '새로운 고무 조성은 작동 온도 범위를 넓혀 전략적 다양성을 제공할 것으로 예상된다.',
  },
];

export const getNewsList = async (): Promise<NewsArticle[]> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockNewsList;
};
