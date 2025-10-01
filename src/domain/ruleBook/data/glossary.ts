export type GlossaryCategory = 'SC' | 'VSC' | 'FLAG' | 'FINISH';

export interface GlossaryTerm {
  slug: string;
  title: string;
  englishTitle: string;
  category: GlossaryCategory;
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
    slug: 'virtual-safety-car',
    title: '버츄얼 세이프티 카',
    englishTitle: 'Virtual Safety Car (VSC)',
    category: 'VSC',
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
];

export const findGlossaryTerm = (slug: string) =>
  glossaryTerms.find((term) => term.slug === slug);
