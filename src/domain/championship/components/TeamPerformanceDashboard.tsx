import * as styles from '../styles/TeamPerformanceDashboard.css.ts';

type DriverInfo = {
  name: string;
  imageUrl: string;
};

type TeamShowcase = {
  id: keyof typeof styles.cardThemes;
  name: string;
  logoUrl: string;
  carImageUrl: string;
  datasetCount: number;
  drivers: DriverInfo[];
};

const teamShowcaseData: TeamShowcase[] = [
  {
    id: 'mclaren',
    name: '맥라렌',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/mclaren/2025mclarencarright.webp',
    datasetCount: 713,
    drivers: [
      {
        name: '랜도 노리스',
        imageUrl: 'https://placehold.co/96x96/ff6f00/ffffff/png?text=LN',
      },
      {
        name: '오스카 피아스트리',
        imageUrl: 'https://placehold.co/96x96/ff6f00/ffffff/png?text=OP',
      },
    ],
  },
  {
    id: 'ferrari',
    name: '페라리',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/ferrari/2025ferraricarright.webp',
    datasetCount: 356,
    drivers: [
      {
        name: '찰스 르클레르',
        imageUrl: 'https://placehold.co/96x96/d90429/ffffff/png?text=CL',
      },
      {
        name: '루이스 해밀턴',
        imageUrl: 'https://placehold.co/96x96/d90429/ffffff/png?text=LH',
      },
    ],
  },
  {
    id: 'mercedes',
    name: '메르세데스',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedeslogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/mercedes/2025mercedescarright.webp',
    datasetCount: 355,
    drivers: [
      {
        name: '조지 러셀',
        imageUrl: 'https://placehold.co/96x96/38bdf8/001427/png?text=GR',
      },
      {
        name: '안드레아 킴 앤토넬리',
        imageUrl: 'https://placehold.co/96x96/38bdf8/001427/png?text=AK',
      },
    ],
  },
  {
    id: 'redbull',
    name: '레드불',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracinglogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/redbullracing/2025redbullracingcarright.webp',
    datasetCount: 346,
    drivers: [
      {
        name: '맥스 페르스타펜',
        imageUrl: 'https://placehold.co/96x96/1d3557/ffffff/png?text=MV',
      },
      {
        name: '유키 쓰노다',
        imageUrl: 'https://placehold.co/96x96/1d3557/ffffff/png?text=YT',
      },
    ],
  },
  {
    id: 'williams',
    name: '윌리엄스',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/williams/2025williamscarright.webp',
    datasetCount: 111,
    drivers: [
      {
        name: '알렉산더 알본',
        imageUrl: 'https://placehold.co/96x96/00b4d8/001845/png?text=AA',
      },
      {
        name: '프랑코 콜라피도',
        imageUrl: 'https://placehold.co/96x96/00b4d8/001845/png?text=FC',
      },
    ],
  },
  {
    id: 'racingbulls',
    name: '레이싱 불스',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/racingbulls/2025racingbullscarright.webp',
    datasetCount: 72,
    drivers: [
      {
        name: '다니엘 리카르도',
        imageUrl: 'https://placehold.co/96x96/4361ee/ffffff/png?text=DR',
      },
      {
        name: '리즈토 히라도',
        imageUrl: 'https://placehold.co/96x96/4361ee/ffffff/png?text=RH',
      },
    ],
  },
  {
    id: 'astonmartin',
    name: '애스턴 마틴',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/astonmartin/2025astonmartincarright.webp',
    datasetCount: 69,
    drivers: [
      {
        name: '페르난도 알론소',
        imageUrl: 'https://placehold.co/96x96/00b894/00332a/png?text=FA',
      },
      {
        name: '랜스 스트롤',
        imageUrl: 'https://placehold.co/96x96/00b894/00332a/png?text=LS',
      },
    ],
  },
  {
    id: 'haas',
    name: '하스 F1 팀',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/haasf1team/2025haasf1teamlogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/haasf1team/2025haasf1teamcarright.webp',
    datasetCount: 62,
    drivers: [
      {
        name: '에스테반 오콘',
        imageUrl: 'https://placehold.co/96x96/f72585/ffffff/png?text=EO',
      },
      {
        name: '올리 베어맨',
        imageUrl: 'https://placehold.co/96x96/f72585/ffffff/png?text=OB',
      },
    ],
  },
  {
    id: 'kicksauber',
    name: '킥자우버',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/kicksauber/2025kicksauberlogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/kicksauber/2025kicksaubercarright.webp',
    datasetCount: 60,
    drivers: [
      {
        name: '발테리 보타스',
        imageUrl: 'https://placehold.co/96x96/00c4b3/001f1d/png?text=VB',
      },
      {
        name: '주 가뉴',
        imageUrl: 'https://placehold.co/96x96/00c4b3/001f1d/png?text=ZG',
      },
    ],
  },
  {
    id: 'alpine',
    name: '알파인',
    logoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/alpine/2025alpinelogowhite.webp',
    carImageUrl:
      'https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/alpine/2025alpinecarright.webp',
    datasetCount: 20,
    drivers: [
      {
        name: '피에르 가슬리',
        imageUrl: 'https://placehold.co/96x96/0096c7/001f2d/png?text=PG',
      },
      {
        name: '잭 두한',
        imageUrl: 'https://placehold.co/96x96/0096c7/001f2d/png?text=JD',
      },
    ],
  },
];

export const TeamPerformanceDashboard = () => {
  return (
    <section className={styles.dashboard}>
      <header className={styles.header}>
        <h2 className={styles.title}>Team Performance Dashboard</h2>
        <p className={styles.description}>
          2025 시즌 기준으로 수집된 최신 데이터를 기반으로 각 팀의 드라이버
          구성과 차량을 한눈에 확인하세요. 시즌이 진행될수록 카드의 데이터
          카운트가 업데이트됩니다.
        </p>
      </header>

      <div className={styles.grid}>
        {teamShowcaseData.map((team) => (
          <article
            key={team.id}
            className={`${styles.card} ${styles.cardThemes[team.id]}`}
            aria-label={`${team.name} 데이터 카드`}
          >
            <div className={styles.cardBody}>
              <div className={styles.teamHeader}>
                <img
                  className={styles.teamLogo}
                  src={team.logoUrl}
                  alt={`${team.name} 로고`}
                  loading="lazy"
                />
                <div className={styles.teamMeta}>
                  <h3 className={styles.teamName}>{team.name}</h3>
                  <span className={styles.dataTag}>
                    컨스트럭터 포인트 : {team.datasetCount.toLocaleString()}
                  </span>
                </div>
              </div>

              <ul className={styles.driverList}>
                {team.drivers.map((driver) => (
                  <li key={driver.name} className={styles.driver}>
                    <img
                      className={styles.driverAvatar}
                      src={driver.imageUrl}
                      alt={`${driver.name} 프로필 이미지`}
                      loading="lazy"
                    />
                    <span className={styles.driverName}>{driver.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <img
              className={styles.carImage}
              src={team.carImageUrl}
              alt={`${team.name} 2025 시즌 차량`}
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  );
};
