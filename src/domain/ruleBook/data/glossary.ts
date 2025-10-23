import { RuleBookImages } from '@domain/ruleBook/data/images.ts';

export type GlossaryCategory = 'SC' | 'VSC' | 'FLAG' | 'FINISH';

export interface GlossaryTerm {
  slug: string;
  title: string;
  englishTitle: string;
  category: GlossaryCategory;
  img?: string;
  alt?: string;
  summary: string;
  highlight: string;
  description: string;
  keyPoints: string[];
  quickFacts: { label: string; value: string }[];
  sections: { heading: string; content: string[] }[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'safety-car',
    title: '세이프티 카',
    englishTitle: 'Safety Car (SC)',
    category: 'SC',
    img: RuleBookImages.safetyCar,
    alt: 'safety Car',
    summary:
      '트랙 위 심각한 사고나 위험 요소가 발생했을 때 레이스를 통제해 드라이버와 관계자의 안전을 확보하는 절차입니다.',
    highlight: '세이프티 카',
    description:
      '세이프티 카가 투입되면 전체 차량은 세이프티 카 뒤에 줄지어 서행하며, 추월이 금지되고 피트 레인 출구는 통제됩니다.',
    keyPoints: [
      '세이프티 카가 나오는 동안 랩 타임은 일시적으로 중단됩니다.',
      '드라이버는 사전에 정해진 델타 타임을 유지하며 주행해야 합니다.',
      '피트 인은 허용되지만, 세이프티 카 라인을 기준으로 출구 통제가 이뤄집니다.',
    ],
    quickFacts: [
      { label: '투입 기준', value: '트랙 위 물체, 사고, 기상 악화 등' },
      { label: '속도', value: '세이프티 카가 설정한 속도에 맞춰 제한' },
      {
        label: '레이스 재시작',
        value: '세이프티 카 소등 후 리더의 가속 구간에서',
      },
    ],
    sections: [
      {
        heading: '세이프티 카 발동 절차',
        content: [
          '감독 위원회가 트랙에 위험 요소가 있다고 판단하면 즉시 세이프티 카 출동을 명령합니다.',
          '모든 드라이버는 추월이 금지되며, 세이프티 카가 트랙에 합류할 때까지 속도를 줄이고 델타 타임을 준수해야 합니다.',
          '세이프티 카 뒤에 줄을 서면 순위는 그 상태로 고정되고, 피트 스탑 전략은 팀 상황에 따라 다시 계산됩니다.',
        ],
      },
      {
        heading: '레이스 재시작 방식',
        content: [
          '세이프티 카가 소등하면 선두 드라이버가 정해진 구간에서 가속하며 레이스를 재시작합니다.',
          '라인을 넘기 전까지 추월은 금지되며, 세이프티 카 라인을 기준으로 정상 레이스가 다시 진행됩니다.',
        ],
      },
    ],
  },
  {
    slug: 'green-flag',
    title: '그린 플래그',
    englishTitle: 'Green Flag',
    category: 'FLAG',
    img: RuleBookImages.greenFlag,
    summary:
      '트랙이 완전히 정리되어 정상적인 레이스 속도로 주행할 수 있음을 알리는 신호입니다.',
    highlight: '플래그',
    description:
      '그린 플래그가 나오면 모든 차량은 즉시 레이스 페이스로 복귀할 수 있고, 추월 제한도 해제됩니다. 스튜어드는 트랙이 안전하다고 판단했음을 공식적으로 알리는 절차입니다.',
    keyPoints: [
      '코스가 안전해져 정상 주행이 허용되었음을 의미합니다.',
      '그린 플래그 구간에서는 추월과 경쟁이 다시 허용됩니다.',
      '드라이버는 타이어와 브레이크를 빠르게 적정 온도로 되돌려야 합니다.',
    ],
    quickFacts: [
      { label: '주요 상황', value: '사고 수습 후 레이스 재개' },
      {
        label: '표시 위치',
        value: '주로 스타트/피니시 라인 및 현장 마샬 포스트',
      },
      { label: '무전 공지', value: 'Race Control이 동시에 “Green Flag” 방송' },
    ],
    sections: [
      {
        heading: '발령 절차',
        content: [
          '위험 구간에 있던 사고 차량이나 잔해물이 모두 치워지면 마샬이 그린 플래그를 흔들어 레이스 재개를 알립니다.',
          '세이프티 카 또는 VSC 종료와 함께 그린 플래그가 공지되면, 모든 드라이버는 규정 속도로 레이스를 이어갈 수 있습니다.',
        ],
      },
      {
        heading: '드라이버 체크리스트',
        content: [
          '레이스 재개 직후 타이어와 브레이크 온도가 낮아져 있으므로 워밍업을 위해 공격적이되, 휠 스핀이나 잠금에 주의합니다.',
          '전방 차량과의 간격을 빠르게 파악하고, 전략적으로 추월 지점을 준비해야 합니다.',
        ],
      },
    ],
  },
  {
    slug: 'yellow-flag',
    title: '옐로우 플래그',
    englishTitle: 'Yellow Flag',
    category: 'FLAG',
    img: RuleBookImages.yellowFlag,
    summary:
      '위험 구간이 발생했음을 알리며, 속도를 줄이고 추월을 금지하라는 지시를 내리는 가장 기본적인 경고 신호입니다.',
    highlight: '플래그',
    description:
      '옐로우 플래그는 사고 차량, 잔해물, 코스 밖 작업 등 잠재적 위험 요소가 있을 때 사용됩니다. 드라이버는 즉시 속도를 줄이고, 추월 없이 안전하게 통과해야 합니다.',
    keyPoints: [
      '단일 옐로우는 위험 경고, 이중 옐로우는 즉시 감속을 의미합니다.',
      '플래그가 해제될 때까지 추월은 전면 금지됩니다.',
      '드라이버는 마샬 지시에 따라 언제든지 정지할 준비가 되어 있어야 합니다.',
    ],
    quickFacts: [
      { label: '발생 원인', value: '스핀, 접촉, 파편 등' },
      { label: '적용 범위', value: '플래그가 표시된 섹터' },
      { label: '페널티', value: '감속 미준수 시 그리드 강등 또는 타임 페널티' },
    ],
    sections: [
      {
        heading: '드라이버 행동 규정',
        content: [
          '옐로우 플래그 구간에 진입하면 즉시 속도를 줄이고, 안전을 위해 라인을 넓게 사용하며 상황을 주시합니다.',
          '이중 옐로우에서는 필요 시 완전히 정지할 수 있도록 준비하며, 작업 인력이나 차량과의 충돌을 방지해야 합니다.',
        ],
      },
      {
        heading: '레이스 전략 영향',
        content: [
          '옐로우 플래그는 세이프티 카나 VSC로 이어질 수 있으므로, 팀은 즉시 피트 전략을 재검토합니다.',
          '추월이 금지되기 때문에, 앞차와의 간격을 유지하며 이후 재가속 시점을 노리는 것이 중요합니다.',
        ],
      },
    ],
  },
  {
    slug: 'blue-flag',
    title: '블루 플래그',
    englishTitle: 'Blue Flag',
    category: 'FLAG',
    img: RuleBookImages.blueFlag,
    summary:
      '뒤에서 더 빠른 차량이 접근 중이니 즉시 진로를 양보하라는 신호로, 주로 랩다운 차량에게 적용됩니다.',
    highlight: '플래그',
    description:
      '블루 플래그가 제시되면 해당 드라이버는 세 번의 마샬 포스트를 지나기 전에 빠른 차량이 지나가도록 양보해야 하며, 그렇지 않으면 페널티가 부과됩니다.',
    keyPoints: [
      '랩다운 차량은 레이싱 라인을 벗어나 추월을 허용해야 합니다.',
      '경쟁 중인 차량끼리도 속도 차가 크면 블루 플래그가 적용될 수 있습니다.',
      '지시 불이행 시 드라이브 스루 또는 타임 페널티가 내려집니다.',
    ],
    quickFacts: [
      { label: '적용 상황', value: '선두권이 랩 추월을 시도할 때' },
      { label: '양보 기한', value: '최대 세 개의 마샬 포스트 통과 전' },
      { label: '예외', value: '세이프티 카 상황에서는 적용되지 않음' },
    ],
    sections: [
      {
        heading: '올바른 양보 방법',
        content: [
          '블루 플래그를 받은 드라이버는 직선 구간에서 살짝 라인을 비켜주거나, 코너 진입 전에 감속해 뒤차가 안전하게 통과하도록 합니다.',
          '갑작스러운 브레이킹이나 예측 불가한 라인 변경은 금지되며, 무전을 통해 팀과 협력해 안전한 포인트를 선정해야 합니다.',
        ],
      },
      {
        heading: '레이스 매너',
        content: [
          '랩다운 상황에서도 스포츠맨십을 유지하며, 선두권의 배틀에 최소한의 영향을 주도록 노력해야 합니다.',
          '팀은 전략적으로 블루 플래그 구간을 활용해 타이어 관리와 에너지 세이브를 병행할 수 있습니다.',
        ],
      },
    ],
  },
  {
    slug: 'black-flag',
    title: '블랙 플래그',
    englishTitle: 'Black Flag',
    category: 'FLAG',
    img: RuleBookImages.blackFlag,
    summary:
      '심각한 규정 위반이나 차량 결함으로 즉시 피트로 돌아오라는 퇴장 명령을 의미하는 가장 강력한 제재 신호입니다.',
    highlight: '플래그',
    description:
      '블랙 플래그를 받은 드라이버는 즉시 피트로 복귀하여 스튜어드와 면담을 해야 하며, 대부분의 경우 레이스에서 실격됩니다. 이는 안전과 규정 준수를 최우선으로 하기 위한 조치입니다.',
    keyPoints: [
      '즉시 피트인 후 Race Control 지시에 따라야 합니다.',
      '반복적인 위험 운전, 무전 지시 불이행 등이 주요 사유입니다.',
      '실격 처리가 일반적이지만, 상황에 따라 추가 징계가 이어질 수 있습니다.',
    ],
    quickFacts: [
      { label: '대상', value: '규정 위반 드라이버 또는 결함 차량' },
      { label: '부가 표시', value: '차량 번호판과 함께 제시' },
      { label: '추가 처벌', value: '벌금, 다음 경기 출전 정지 등' },
    ],
    sections: [
      {
        heading: '발령 조건',
        content: [
          '위험한 드라이빙, 반복적인 트랙 리미트 위반, 무전을 통한 Race Control 지시를 무시했을 때 블랙 플래그가 내려집니다.',
          '차량의 구조적 결함으로 계속 주행이 위험하다고 판단될 때도 적용됩니다.',
        ],
      },
      {
        heading: '피트 복귀 후 절차',
        content: [
          '드라이버는 피트로 돌아와 즉시 팀과 스튜어드에게 상황 보고를 해야 하며, 필요한 경우 청문회를 거칩니다.',
          '규정 위반 정도에 따라 추가 징계가 결정되고, 레이스 결과는 실격 처리됩니다.',
        ],
      },
    ],
  },
  {
    slug: 'virtual-safety-car',
    title: '버츄얼 세이프티 카',
    englishTitle: 'Virtual Safety Car (VSC)',
    category: 'VSC',
    img: RuleBookImages.virtualSafetyCar,
    summary:
      '트랙 전체를 느리게 만드는 대신 각 차량이 정해진 속도 제한을 지키며 주행하도록 하는 전자 통제 시스템입니다.',
    highlight: '세이프티 카',
    description:
      '세이프티 카보다 빠른 상황 정리가 가능할 때 사용되며, 드라이버는 스티어링 휠에 표시되는 델타 타임을 지속적으로 확인해야 합니다.',
    keyPoints: [
      '모든 차량은 레이스 컨트롤이 지정한 최소 델타 타임보다 느리게 주행해야 합니다.',
      '피트 인은 가능하지만 진입과 출구에서 시간 손해가 커 전략적으로 신중해야 합니다.',
      '위험 요소가 제거되면 곧바로 그린 플래그로 전환됩니다.',
    ],
    quickFacts: [
      { label: '도입 시기', value: '2015년, Bianchi 사고 이후' },
      { label: '장점', value: '세이프티 카 대비 타이어 온도 유지에 유리' },
      { label: '재시작', value: 'VSC 종료 메세지 후 10~15초 뒤 그린 플래그' },
    ],
    sections: [
      {
        heading: 'VSC 상황에서의 규정',
        content: [
          '각 드라이버는 스티어링 휠에 표시되는 델타 타임이 +0.0 이상이 되도록 유지해야 합니다.',
          '델타 타임을 초과해 빠르게 주행하면 즉시 페널티가 부과될 수 있습니다.',
          '추월은 금지되며, 위험 구간에서는 특히 조심스럽게 접근해야 합니다.',
        ],
      },
      {
        heading: '팀 전략 포인트',
        content: [
          'VSC 중 피트 스탑은 타임 로스가 적지만, 타이어 온도 하락과 트래픽 위험을 고려해야 합니다.',
          '세이프티 카 투입 가능성이 있는 상황에서는 VSC 유지 여부에 따라 전략이 크게 달라집니다.',
        ],
      },
    ],
  },
  {
    slug: 'red-flag',
    title: '레드 플래그',
    englishTitle: 'Red Flag',
    category: 'FLAG',
    img: RuleBookImages.redFlag,
    summary:
      '트랙 상황이 매우 위험하거나 레이스 지속이 불가능할 때 모든 세션을 즉시 중단시키는 신호입니다.',
    highlight: '플래그',
    description:
      '레드 플래그가 나오면 모든 차량은 속도를 줄이고 피트 레인으로 돌아와야 하며, 상황에 따라 레이스가 재개되거나 종료됩니다.',
    keyPoints: [
      '레드 플래그 후에는 메인 스트레이트에서 정지 후 재출발하거나 스탠딩 스타트가 진행될 수 있습니다.',
      '차량 세팅 변경은 제한적으로만 허용되며, 타이어 교체 규정도 별도로 적용됩니다.',
      '레이스 재개 시에는 스튜어드가 공지한 순서를 기반으로 그리드가 재정렬됩니다.',
    ],
    quickFacts: [
      { label: '주요 원인', value: '대형 사고, 기상 악화, 바리어 파손' },
      { label: '피트 내 규정', value: '작업 제한, 차량 보호 커버 허용' },
      { label: '재시작 형태', value: '스탠딩 또는 롤링 스타트' },
    ],
    sections: [
      {
        heading: '레드 플래그 선언 조건',
        content: [
          '트랙에 치명적인 장애물이 있거나 의료진 접근이 필요한 경우 레드 플래그가 선언됩니다.',
          '기상 조건이 급격히 악화되어 타이어가 제 기능을 할 수 없을 때도 레이스는 즉시 중단됩니다.',
        ],
      },
      {
        heading: '재시작 및 종료 판단',
        content: [
          '레이스 디렉터는 트랙 복구 상황과 시간 제한을 검토하여 재시작 여부를 결정합니다.',
          '규정상 최소 랩 수를 달성하지 못한 채 종료되면 포인트 배분이 달라집니다.',
        ],
      },
    ],
  },
  {
    slug: 'chequered-flag',
    title: '체커기',
    englishTitle: 'Chequered Flag',
    category: 'FLAG',
    img: RuleBookImages.chequered_flag,
    summary:
      '레이스 또는 세션 종료를 알리는 흑백 깃발로, 모든 차량이 해당 랩을 마치면 공식적으로 종료됩니다.',
    highlight: '플래그',
    description:
      '체커기가 떨어진 후에는 오버테이크가 무효 처리되며, 차량은 쿨다운 랩을 통해 파크 퍼메로 복귀합니다.',
    keyPoints: [
      '선두 차량이 체커기를 통과하면 그 뒤 차량도 같은 랩을 마치면 레이스가 끝납니다.',
      '체커기 이후 발생한 추월은 기록되지 않으며, 페널티는 레이스 결과에 반영됩니다.',
      '파크 퍼메 규정이 적용되어 차량 세팅 변경이 제한됩니다.',
    ],
    quickFacts: [
      { label: '주요 의미', value: '레이스 종료, 결과 확정' },
      { label: '후속 절차', value: '쿨다운 랩 → 파크 퍼메 → 시상식' },
      {
        label: '기록 처리',
        value: '체커기 이후는 타이밍 시트에 반영되지 않음',
      },
    ],
    sections: [
      {
        heading: '체커기 이후 절차',
        content: [
          '드라이버는 쿨다운 랩을 돌며 팀과의 무전으로 상황을 공유하고, 파크 퍼메로 이동합니다.',
          '차량은 FIA의 검차를 받기 전까지 어떠한 세팅 변경도 제한됩니다.',
        ],
      },
      {
        heading: '시상 및 포인트',
        content: [
          '체커기 이후 공식 결과가 발표되면 포디움 세리머니와 포인트 배분이 진행됩니다.',
          '포스트 레이스 페널티가 있을 경우 최종 결과가 뒤늦게 수정될 수 있습니다.',
        ],
      },
    ],
  },
  // 🏎 Tire Types (2025)
  {
    slug: 'tire-soft-2025',
    title: '소프트 타이어 (C5–C3)',
    englishTitle: 'Soft Tyre (C5–C3)',
    category: 'FLAG',
    img: '/images/tires/soft.png',
    alt: 'Soft tyre with red sidewall',
    summary:
      '가장 공격적인 전략에 쓰이는 레드 스트라이프 컴파운드로, 빠른 예열과 최고의 그립을 제공하지만 마모가 극심합니다.',
    highlight: '타이어',
    description:
      '2025년 FIA 규정에서 소프트 타이어는 C5부터 C3 스펙까지 사용되며, 저온에서도 빠르게 최적 온도에 도달해 타임 공격에 활용됩니다.',
    keyPoints: [
      '예선과 스프린트 후반 등 단기 스틴트 전략에 최적화되었습니다.',
      '높은 마찰계수로 코너링 성능이 뛰어나지만 10랩 내외에서 성능 하락이 두드러집니다.',
      '레드 스트라이프 사이드월로 식별되며, 지정량 이상 사용 시 컴파운드 할당량 관리가 중요합니다.',
    ],
    quickFacts: [
      { label: '권장 온도', value: '105~115°C' },
      { label: '대표 용도', value: '예선 Q1~Q3, 스프린트 공격 스틴트' },
      { label: '색상', value: '레드' },
    ],
    sections: [
      {
        heading: '전략 포인트',
        content: [
          '초반 랩에서 타임을 벌어야 하는 언더컷 전략에 자주 투입되며, 타이어 웨어 모니터링을 위해 연속 무전을 유지해야 합니다.',
          '상대가 하드 또는 미디엄을 사용할 때 트랙 포지션을 확보하기 위한 공격 카드로 활용됩니다.',
        ],
      },
      {
        heading: '관리 팁',
        content: [
          '출발 전 번아웃으로 코어 온도를 확보하고, 레이스 중에는 급격한 슬라이드를 방지해 그레인 현상을 최소화합니다.',
          '2025년 타이어 센서 데이터에 따라 웨어 한계치를 넘으면 즉시 피트 인 콜이 내려집니다.',
        ],
      },
    ],
  },
  {
    slug: 'tire-medium-2025',
    title: '미디엄 타이어 (C4–C2)',
    englishTitle: 'Medium Tyre (C4–C2)',
    category: 'FLAG',
    img: '/images/tires/medium.png',
    alt: 'Medium tyre with yellow sidewall',
    summary:
      '밸런스형 옐로우 스트라이프 컴파운드로, 스틴트 길이와 페이스 사이 균형을 잡아 메인 레이스 전략의 기준이 됩니다.',
    highlight: '타이어',
    description:
      '2025 시즌 미디엄은 C4부터 C2까지 지정되며, 그립과 내구성의 중간 지점에 위치해 레이스 페이스 유지에 유리합니다. 트랙 온도와 마모 상황에 따라 전략적 전환이 필요합니다.',
    keyPoints: [
      '대부분의 주말에서 최소 한 번 이상 레이스에 의무 사용됩니다.',
      '타이어 코어 온도가 안정적이어서 스탠딩 스타트 후 일관성이 뛰어납니다.',
      '옐로우 스트라이프로 표시되며, 긴 스틴트에서도 예측 가능한 마모 곡선을 제공합니다.',
    ],
    quickFacts: [
      { label: '권장 온도', value: '95~105°C' },
      { label: '대표 용도', value: '메인 스틴트, 리스타트 안정화' },
      { label: '색상', value: '옐로우' },
    ],
    sections: [
      {
        heading: '전략 포인트',
        content: [
          '세이프티 카 구간 이후 타이어를 보호하며 트래픽 속에서도 일관된 랩 타임을 유지할 수 있습니다.',
          '언더컷과 오버컷 모두에 대응할 수 있는 범용성이 있어 양 팀이 기준 전략으로 삼습니다.',
        ],
      },
      {
        heading: '관리 팁',
        content: [
          '롱런에서 커널 블리스터링을 방지하기 위해 턴-인에서 스로틀 조작을 부드럽게 유지합니다.',
          '피트월은 텔레메트리로 스트레인 한계치를 감시하며, 온도 윈도우를 벗어나면 즉시 타이어 스왑을 검토합니다.',
        ],
      },
    ],
  },
  {
    slug: 'tire-hard-2025',
    title: '하드 타이어 (C3–C1)',
    englishTitle: 'Hard Tyre (C3–C1)',
    category: 'FLAG',
    img: '/images/tires/hard.png',
    alt: 'Hard tyre with white sidewall',
    summary:
      '화이트 스트라이프 내구형 컴파운드로, 긴 스틴트와 높은 트랙 온도에서 안정성을 제공하지만 예열 시간이 길어집니다.',
    highlight: '타이어',
    description:
      '하드 타이어는 C3부터 C1 규격을 사용하며, 2025년에는 장거리 스틴트와 높은 그레인 저항성이 요구되는 서킷에서 필수입니다. 낮은 그립 환경에서도 일관된 성능을 제공합니다.',
    keyPoints: [
      '스틴트 길이 25랩 이상을 목표로 한 전략에 적합합니다.',
      '예열이 더딘 만큼 아웃랩에서 타이어 관리가 승부 포인트가 됩니다.',
      '화이트 스트라이프로 구분되며, 피트 스케줄을 연장해 트랙 포지션을 지킬 때 사용됩니다.',
    ],
    quickFacts: [
      { label: '권장 온도', value: '85~95°C' },
      { label: '대표 용도', value: '고온 서킷, 1스톱 전략' },
      { label: '색상', value: '화이트' },
    ],
    sections: [
      {
        heading: '전략 포인트',
        content: [
          '타이어 웨어가 심한 트랙에서 1스톱 전략을 노릴 때 필수 옵션으로, 연료 절약과 병행해 스틴트를 길게 가져갑니다.',
          '세이프티 카가 나오면 하드에서 미디엄으로 전환해 트랙 포지션을 방어하는 것이 일반적입니다.',
        ],
      },
      {
        heading: '관리 팁',
        content: [
          '아웃랩에서 공격적으로 워밍업하지 않으면 슬라이드로 인한 플랫스팟 위험이 커집니다.',
          '브레이크 밸런스를 뒤로 이동해 앞 타이어 과열을 방지하면서 온도 윈도우를 확보해야 합니다.',
        ],
      },
    ],
  },
  {
    slug: 'tire-intermediate-2025',
    title: '인터미디엇 타이어',
    englishTitle: 'Intermediate Tyre',
    category: 'FLAG',
    img: '/images/tires/intermediate.png',
    alt: 'Intermediate tyre with green sidewall',
    summary:
      '그린 스트라이프의 다용도 레인 컴파운드로, 젖은 노면에서 수막을 배출하면서도 드라잉 라인에서 과열을 억제합니다.',
    highlight: '타이어',
    description:
      '2025 규정은 인터미디엇 타이어에 수막 배출량 70L/s 기준을 적용하며, 슬릭 전환 전까지 안전한 그립을 제공합니다. 패턴 블록이 얕아 드라잉 라인에서도 과열을 최소화합니다.',
    keyPoints: [
      '빗줄기가 약해지는 조건에서 슬릭과의 전환 타이밍을 가늠하는 지표가 됩니다.',
      '그린 사이드월과 얕은 그루브 패턴으로 식별됩니다.',
      '트랙 일부만 젖은 상황에서도 안정적인 브레이킹과 traction을 제공합니다.',
    ],
    quickFacts: [
      { label: '수막 배출량', value: '최대 70L/s (300km/h 기준)' },
      { label: '대표 용도', value: '세션 중 빗물 감소 구간' },
      { label: '색상', value: '그린' },
    ],
    sections: [
      {
        heading: '전략 포인트',
        content: [
          '드라잉 라인이 형성될 때까지 피트 스톱을 미루는 동안 랩 타임을 안정화하는 데 사용됩니다.',
          '세이프티 카 종료 직후 노면 상태를 빠르게 파악하여 슬릭 전환 여부를 결정합니다.',
        ],
      },
      {
        heading: '관리 팁',
        content: [
          '드라잉 라인에서는 과열이 빨리 진행되므로, 드라이버는 노면을 적절히 가로질러 냉각을 시도합니다.',
          '타이어 압력은 슬릭보다 낮게 설정되며, 온도 센서를 통해 블리스터링 징후를 감시합니다.',
        ],
      },
    ],
  },
  {
    slug: 'tire-full-wet-2025',
    title: '풀 웻 타이어',
    englishTitle: 'Full Wet Tyre',
    category: 'FLAG',
    img: '/images/tires/full-wet.png',
    alt: 'Full wet tyre with blue sidewall',
    summary:
      '블루 스트라이프의 깊은 그루브를 가진 레인 타이어로, 폭우 속에서도 수막을 95L/s까지 배출하여 안전한 시야와 그립을 제공합니다.',
    highlight: '타이어',
    description:
      '풀 웻 타이어는 2025년부터 개선된 수막 배출 채널을 적용해 스탠딩 워터가 많은 노면에서도 하이드로플래닝을 억제합니다. 트레드가 깊어 건조 구간에서는 빠르게 마모됩니다.',
    keyPoints: [
      'FIA가 지정한 레드 플래그 조건 직전까지 레이스를 유지하도록 설계되었습니다.',
      '온도 윈도우가 낮아 예열에 시간이 걸리지만 수막에서 빠르게 열을 유지합니다.',
      '블루 스트라이프로 식별되며, 강수량이 많으면 의무적으로 장착해야 합니다.',
    ],
    quickFacts: [
      { label: '수막 배출량', value: '최대 95L/s (300km/h 기준)' },
      { label: '대표 용도', value: '폭우, 스탠딩 워터 발생 시' },
      { label: '색상', value: '블루' },
    ],
    sections: [
      {
        heading: '전략 포인트',
        content: [
          '강수량이 일정 수준 이상이면 레이스 컨트롤의 승인을 받아 풀 웻으로 전환하며, 세이프티 카 뒤에서 온도를 유지합니다.',
          '노면이 마르면 급격한 마모가 발생하므로, 라인이 건조되면 즉시 인터미디엇 또는 슬릭으로 갈아타야 합니다.',
        ],
      },
      {
        heading: '관리 팁',
        content: [
          '물 웅덩이를 통과할 때 스로틀을 부드럽게 유지해 하이드로플래닝을 예방합니다.',
          '타이어 내부 온도를 확보하기 위해 브레이크 예열과 스웨빙을 병행해야 합니다.',
        ],
      },
    ],
  },
  {
    slug: 'tire-qualifier-2025',
    title: '퀄리파이어 타이어 (C5, Q)',
    englishTitle: 'Qualifier Tyre (C5, Q)',
    category: 'FLAG',
    img: '/images/tires/qualifier.png',
    alt: 'Qualifier tyre with purple sidewall',
    summary:
      '2025 시즌 도입 예정인 퍼플 스트라이프 Q 타이어로, 예선 세션당 한 세트만 제공되며 단 한 랩의 최적 성능을 위해 설계되었습니다.',
    highlight: '타이어',
    description:
      '퀄리파이어 타이어는 C5 컴파운드를 기반으로 한 극단적 저수명 타이어로, FIA가 예선 쇼를 강화하기 위해 도입했습니다. 사용 후 즉시 회수되어 레이스 세션에서는 재사용이 금지됩니다.',
    keyPoints: [
      '각 드라이버는 예선에서 단 한 번의 플라잉랩을 위해 사용하며, 쿨다운 랩 후 즉시 회수됩니다.',
      '퍼플 사이드월과 Q 표시로 식별되며, 레이스 세션에서는 사용 금지입니다.',
      '피트 크루는 타이어 워머로 120°C까지 예열해 최대 그립을 확보합니다.',
    ],
    quickFacts: [
      { label: '권장 온도', value: '115~125°C' },
      { label: '대표 용도', value: '예선 Q3 플라잉랩' },
      { label: '색상', value: '퍼플' },
    ],
    sections: [
      {
        heading: '전략 포인트',
        content: [
          '런 플랜은 아웃랩-플라잉랩-쿨다운으로 고정되며, 드라이버는 트랙 에볼루션이 최고조에 달하는 타이밍을 노립니다.',
          '무게를 줄이기 위해 연료는 최소량만 주입하고, 에너지 회수 설정도 플라잉랩에 맞춰 조정됩니다.',
        ],
      },
      {
        heading: '관리 팁',
        content: [
          '예열 후 지체하면 온도가 급락하므로, 피트에서 출발 타이밍을 정밀하게 맞춰야 합니다.',
          '트레드가 얇아 코딩이 거의 없기 때문에 오버스티어를 방지하기 위해 스로틀 모듈레이션이 필수입니다.',
        ],
      },
    ],
  },
  {
    slug: 'tire-compound-overview-2025',
    title: 'C1–C5 컴파운드 개요',
    englishTitle: 'C1–C5 Compound Overview',
    category: 'FLAG',
    img: '/images/tires/compound-overview.png',
    alt: 'All 2025 tyre compounds lined up',
    summary:
      '2025년 FIA가 승인한 C1부터 C5까지 슬릭 컴파운드의 역할과 배정 기준을 정리한 항목으로, 서킷 특성과 주말 포맷에 따라 조합이 달라집니다.',
    highlight: '타이어',
    description:
      'Pirelli는 2025 시즌 각 서킷 특성에 따라 다섯 가지 슬릭 컴파운드를 조합해 공급합니다. C1은 가장 단단하고 C5는 가장 부드러우며, 주말마다 선택된 세 가지 조합이 공인 세트가 됩니다.',
    keyPoints: [
      '각 그랑프리마다 세 가지 슬릭 컴파운드가 공인 세트로 선택됩니다.',
      '스프린트 주말에는 추가 연습 제한에 맞춰 타이어 할당량이 조정됩니다.',
      '전자식 타이어 태그가 도입되어 실시간 마모 데이터가 FIA에 전송됩니다.',
    ],
    quickFacts: [
      { label: '할당 규정', value: '슬릭 11세트, 인터미디엇 4세트, 풀 웻 3세트' },
      { label: '컴파운드 범위', value: 'C1 (가장 단단함) ~ C5 (가장 부드러움)' },
      { label: '색상 코드', value: '화이트/옐로우/레드 + 특수 퍼플(Q)' },
    ],
    sections: [
      {
        heading: '서킷 배정 기준',
        content: [
          '고속 장기 코너가 많은 서킷에는 C1~C3 조합이 주로 배정되어 타이어 디그레이드를 억제합니다.',
          '도심 서킷이나 저그립 트랙에는 C3~C5 조합이 선택되어 초기 그립 부족을 보완합니다.',
        ],
      },
      {
        heading: '전략적 시사점',
        content: [
          '레이스 위켄드 계획은 할당 세트 수에 맞춰 연습 세션 러닝 플랜을 세분화해야 합니다.',
          'FIA의 타이어 사용 보고서를 활용해 각 컴파운드의 웨어 트렌드를 분석하고, 레이스 당일 전략을 업데이트합니다.',
        ],
      },
    ],
  },
];

export const findGlossaryTerm = (slug: string) =>
  glossaryTerms.find((term) => term.slug === slug);
