import type { NewsArticleDetail } from '@domain/news/types/news.ts';

const mockNewsDetail: Record<string, NewsArticleDetail> = {
  'news-001': {
    id: 'news-001',
    title: '레드불, 2025 시즌 사우디 테스트에서 혁신적인 플로어 공개',
    source: 'Motorsport.com',
    publishedAt: '2025-02-15T09:00:00Z',
    updatedAt: '2025-02-15T11:30:00Z',
    author: 'Alex Thompson',
    readingTime: 6,
    thumbnail:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.motorsport.com/f1',
    excerpt:
      '팀 관계자는 새 플로어가 코너링 안정성을 크게 향상시킨다고 밝혔으며, 바레인 프리시즌 테스트에서 첫선을 보일 예정이다.',
    tags: ['레드불', '차량개발', '사우디 테스트'],
    content: [
      '레드불 레이싱이 사우디아라비아 테스트에서 완전히 새로 설계한 플로어 패키지를 공개했다. 팀 내부 소식통에 따르면 이번 업그레이드는 코너링 안정성과 다운포스 밸런스를 동시에 개선하는 것을 목표로 한다.',
      '이번 플로어는 에지 윙과 바지 보드 주변에 새롭게 도입된 채널을 통해 공기 흐름을 더 매끄럽게 유도한다. 또한 리어 타이어 근처의 와류를 적극적으로 제어해 직선 주행 시 효율을 높이는 설계가 적용됐다.',
      '엔지니어링 팀은 “새로운 플로어는 특히 저속 코너에서의 리어 안정성에 크게 기여할 것”이라며 “향후 바레인 프리시즌 테스트에서 더 많은 데이터를 확보해 최종 스펙을 결정할 것”이라고 전했다.',
    ],
  },
  'news-002': {
    id: 'news-002',
    title: 'FIA, 2026 파워유닛 규정 세부안 추가 발표',
    source: 'FIA Official',
    publishedAt: '2025-02-14T16:30:00Z',
    author: 'Marie Dubois',
    readingTime: 5,
    thumbnail:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.fia.com',
    excerpt:
      '하이브리드 시스템 비중을 늘리고 지속 가능한 연료 사용 의무가 강화된다. 각 팀은 2025년 말까지 인증 절차를 마쳐야 한다.',
    tags: ['FIA', '파워유닛', '규정'],
    content: [
      'FIA는 2026년 파워유닛 규정과 관련해 추가 세부안을 발표했다. 가장 큰 변화는 하이브리드 시스템의 출력 비중을 높이고, ERS 관리에 대한 가이드라인을 강화한 점이다.',
      '또한 지속 가능한 합성연료 사용 의무가 확대되면서 각 팀은 2025년 말까지 인증 절차를 완료해야 한다. FIA는 연료 공급업체와 협력해 표준화된 검증 프로세스를 도입할 예정이다.',
      'FIA 기술 책임자는 “규정의 목적은 성능과 지속 가능성을 동시에 달성하는 것”이라며 “팀들이 새 프레임워크에 적응할 수 있도록 충분한 테스트 기간을 제공할 것”이라고 강조했다.',
    ],
  },
  'news-003': {
    id: 'news-003',
    title: '맥라렌, 신규 타이틀 스폰서와 장기 파트너십 체결',
    source: 'Sky Sports F1',
    publishedAt: '2025-02-13T11:15:00Z',
    author: 'James Lee',
    readingTime: 4,
    thumbnail:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.skysports.com/f1',
    excerpt:
      '새 파트너십으로 인한 추가 자본은 공장 업그레이드와 시뮬레이터 고도화에 사용될 예정이다.',
    tags: ['맥라렌', '스폰서십', '파트너십'],
    content: [
      '맥라렌이 글로벌 테크 기업과 신규 타이틀 스폰서 계약을 체결했다. 계약 기간은 최소 5년으로 알려졌으며, 팀 예산의 상당 부분을 지원할 예정이다.',
      '추가 자본은 주로 브랙킹 공장의 업그레이드와 시뮬레이터 고도화에 사용된다. 팀은 이 투자를 통해 데이터 기반 세팅과 전략 시뮬레이션 역량을 강화할 계획이다.',
      '팀 대표는 “이번 파트너십은 맥라렌의 장기적 경쟁력 확보에 핵심적인 역할을 할 것”이라며 “젊은 팬층과의 디지털 접점을 넓히는 협업도 기대된다”고 말했다.',
    ],
  },
  'news-004': {
    id: 'news-004',
    title: '페라리, 이몰라에서 비공개 테스트 진행… 차세대 업그레이드 점검',
    source: 'Gazzetta dello Sport',
    publishedAt: '2025-02-12T08:45:00Z',
    author: 'Lucia Ferraro',
    readingTime: 4,
    thumbnail:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.gazzetta.it',
    excerpt:
      '드라이버들은 새로운 서스펜션 패키지를 시험했고, 특히 저속 구간 트랙션이 개선됐다는 평가가 나왔다.',
    tags: ['페라리', '업그레이드', '테스트'],
    content: [
      '페라리가 이몰라 서킷에서 비공개 테스트를 진행하며 차세대 업그레이드 패키지를 검증했다. 이번 테스트의 핵심은 새롭게 설계된 서스펜션과 업그레이드된 파워유닛 맵핑이다.',
      '팀 내부 보고서에 따르면 저속 구간에서의 트랙션과 타이어 워밍업 능력이 개선된 것으로 나타났다. 또한 새 플로어와 리어 윙 조합에 대한 데이터도 수집해, 바레인 테스트에서 추가 검증할 예정이다.',
      '샤를 르클레르는 “차가 보다 예측 가능해졌다”며 업그레이드에 긍정적인 평가를 내렸다.',
    ],
  },
  'news-005': {
    id: 'news-005',
    title: 'F1, 서울 도심을 포함한 신규 아시안 시티 레이스 후보지 검토',
    source: 'F1 Insider',
    publishedAt: '2025-02-11T14:20:00Z',
    author: 'Daniel Park',
    readingTime: 5,
    thumbnail:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.formula1.com',
    excerpt:
      '프로모터 측은 친환경 모빌리티 쇼케이스와 결합된 야간 레이스 포맷을 제안한 것으로 알려졌다.',
    tags: ['도심 레이스', '아시아', '서울'],
    content: [
      'F1 프로모터가 서울을 포함한 신규 아시안 시티 레이스 후보지를 검토 중인 것으로 알려졌다. 잠실 일대를 활용한 야간 레이스 포맷과 친환경 모빌리티 쇼케이스가 결합된 이벤트가 제안되었다.',
      '현지 관계자는 “도심 인프라와 대중교통 접근성이 뛰어나며, 야간 경기 시 독특한 스카이라인을 보여줄 수 있다”고 설명했다. 다만 소음 규제와 주민 협의가 핵심 과제로 남아있다.',
      'F1 측은 올 하반기까지 후보지 타당성 평가를 마치고, 2026 시즌 캘린더 반영 여부를 결정할 계획이다.',
    ],
  },
  'news-006': {
    id: 'news-006',
    title: '메르세데스, 브랙슬리 공장에 AI 기반 시뮬레이션 허브 구축',
    source: 'The Race',
    publishedAt: '2025-02-10T19:10:00Z',
    author: 'Sophia Grant',
    readingTime: 4,
    thumbnail:
      'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.the-race.com',
    excerpt:
      'AI가 공기역학 해석과 전략 시나리오 생성을 동시에 수행해 개발 속도를 가속화할 계획이다.',
    tags: ['메르세데스', '기술', '시뮬레이션'],
    content: [
      '메르세데스가 브랙슬리 공장에 AI 기반 시뮬레이션 허브를 구축한다고 발표했다. 새 시스템은 공기역학 해석과 전략 시나리오 생성을 동시에 처리해 개발 속도를 끌어올리는 것이 목표다.',
      '팀은 클라우드 연산과 머신러닝 모델을 결합해 패키지별 성능 예측 정확도를 높이고, 실시간으로 전략 변수를 계산하는 기능을 도입할 예정이다.',
      '테크니컬 디렉터는 “AI가 엔지니어의 의사결정을 보조하면서 더 창의적인 세팅 실험이 가능해질 것”이라고 강조했다.',
    ],
  },
  'news-007': {
    id: 'news-007',
    title: '알파타우리, 2025년 팀명 변경과 함께 로고 전면 교체 예고',
    source: 'Autosport',
    publishedAt: '2025-02-09T07:30:00Z',
    author: 'Marco Rossi',
    readingTime: 3,
    thumbnail:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.autosport.com',
    excerpt:
      '팀 관계자는 리브랜딩이 젊은 팬층 공략과 스폰서십 다변화 전략의 핵심이라고 설명했다.',
    tags: ['알파타우리', '리브랜딩', '스폰서십'],
    content: [
      '알파타우리가 2025년을 맞아 팀명을 변경하고 로고를 전면 교체할 것이라고 밝혔다. 리브랜딩은 젊은 팬층을 겨냥한 마케팅 전략과 스폰서십 다변화를 목표로 한다.',
      '새 이름은 시즌 개막 전 공식 발표될 예정이며, 팀은 브랜드 색상과 머천다이즈 라인업도 함께 공개할 계획이다.',
      '팀 대표는 “리브랜딩이 팀 정체성을 강화하고, 새로운 파트너십 기회를 열어줄 것”이라고 기대감을 드러냈다.',
    ],
  },
  'news-008': {
    id: 'news-008',
    title: 'Pirelli, 차세대 하드 컴파운드 공개… 장거리 스틴트에 최적화',
    source: 'Formula1.com',
    publishedAt: '2025-02-08T10:05:00Z',
    author: 'Elena Petrova',
    readingTime: 4,
    thumbnail:
      'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1200&q=80',
    link: 'https://www.formula1.com',
    excerpt:
      '로운 고무 조성은 작동 온도 범위를 넓혀 전략적 다양성을 제공할 것으로 예상된다.',
    tags: ['피렐리', '타이어', '테크'],
    content: [
      '피렐리가 차세대 하드 타이어 컴파운드를 공개했다. 새로운 고무 조성은 작동 온도 범위를 넓혀 장거리 스틴트에서의 일관성을 높이는 것이 특징이다.',
      '타이어는 마모 특성을 개선해 언더컷 전략뿐 아니라 오버컷 전략에서도 효과적으로 활용될 수 있도록 설계되었다.',
      '피렐리는 프리시즌 테스트에서 각 팀의 피드백을 수집한 뒤, 시즌 초반 몇 차례 그랑프리에서 실전 투입을 검토하고 있다.',
    ],
  },
};

export const getNewsDetail = async (
  id: string
): Promise<NewsArticleDetail | null> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockNewsDetail[id] ?? null;
};
