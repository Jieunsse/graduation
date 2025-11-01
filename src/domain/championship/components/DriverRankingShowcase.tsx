import * as styles from '../styles/driverRanking.css.ts';

type TeamIdentifier = keyof typeof styles.cardThemes;

type DriverRanking = {
  id: string;
  name: string;
  code: string;
  teamId: TeamIdentifier;
  teamName: string;
  teamLogoUrl: string;
  points: number;
  imageUrl: string;
};

const driverRankingData: DriverRanking[] = [
  {
    id: 'lando-norris',
    name: '랜도 노리스',
    code: 'LN',
    teamId: 'mclaren',
    teamName: '맥라렌',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp',
    points: 312,
    imageUrl: '/assets/drivers/LN.png',
  },
  {
    id: 'charles-leclerc',
    name: '샤를 르클레르',
    code: 'CL',
    teamId: 'ferrari',
    teamName: '페라리',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogowhite.webp',
    points: 287,
    imageUrl: '/assets/drivers/CL.png',
  },
  {
    id: 'max-verstappen',
    name: '맥스 페르스타펜',
    code: 'MV',
    teamId: 'redbull',
    teamName: '레드불',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracinglogowhite.webp',
    points: 264,
    imageUrl: '/assets/drivers/MV.png',
  },
  {
    id: 'oscar-piastri',
    name: '오스카 피아스트리',
    code: 'OP',
    teamId: 'mclaren',
    teamName: '맥라렌',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp',
    points: 201,
    imageUrl: '/assets/drivers/OP.png',
  },
  {
    id: 'lewis-hamilton',
    name: '루이스 해밀턴',
    code: 'LH',
    teamId: 'ferrari',
    teamName: '페라리',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogowhite.webp',
    points: 188,
    imageUrl: '/assets/drivers/LH.png',
  },
  {
    id: 'george-russell',
    name: '조지 러셀',
    code: 'GR',
    teamId: 'mercedes',
    teamName: '메르세데스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedeslogowhite.webp',
    points: 174,
    imageUrl: '/assets/drivers/GR.png',
  },
  {
    id: 'fernando-alonso',
    name: '페르난도 알론소',
    code: 'FA',
    teamId: 'astonmartin',
    teamName: '애스턴 마틴',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp',
    points: 162,
    imageUrl: '/assets/drivers/FA.png',
  },
  {
    id: 'sergio-perez',
    name: '세르히오 페레즈',
    code: 'SP',
    teamId: 'redbull',
    teamName: '레드불',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracinglogowhite.webp',
    points: 154,
    imageUrl: '/assets/drivers/SP.png',
  },
  {
    id: 'lance-stroll',
    name: '랜스 스트롤',
    code: 'LS',
    teamId: 'astonmartin',
    teamName: '애스턴 마틴',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp',
    points: 118,
    imageUrl: '/assets/drivers/LS.png',
  },
  {
    id: 'yuki-tsunoda',
    name: '유키 츠노다',
    code: 'YT',
    teamId: 'racingbulls',
    teamName: '레이싱 불스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp',
    points: 102,
    imageUrl: '/assets/drivers/YT.png',
  },
  {
    id: 'alex-albon',
    name: '알렉산더 알본',
    code: 'AA',
    teamId: 'williams',
    teamName: '윌리엄스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp',
    points: 94,
    imageUrl: '/assets/drivers/AA.png',
  },
];

export const DriverRankingShowcase = () => {
  return (
    <section className={styles.rankingSection}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Driver Performance Spotlight</h2>
        <p className={styles.sectionDescription}>
          시즌 누적 데이터를 기반으로 드라이버별 포인트, 소속 팀, 팀 로고와 함께
          각 드라이버의 활약을 확인하세요.
        </p>
      </header>

      <div className={styles.grid}>
        {driverRankingData.map((driver) => (
          <article
            key={driver.id}
            className={`${styles.card} ${styles.cardThemes[driver.teamId]}`}
            aria-label={`${driver.name} 순위 카드`}
          >
            <div className={styles.cardBody}>
              <div className={styles.driverHeader}>
                <img
                  className={styles.teamLogo}
                  src={driver.teamLogoUrl}
                  alt={`${driver.teamName} 로고`}
                  loading="lazy"
                />
                <div className={styles.driverMeta}>
                  <span className={styles.driverCode}>{driver.code}</span>
                  <h3 className={styles.driverName}>{driver.name}</h3>
                </div>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.teamBadge}>{driver.teamName}</span>
                <div className={styles.points}>
                  <span className={styles.pointsLabel}>드라이버 포인트</span>
                  <span className={styles.pointsValue}>
                    {driver.points.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <img
              className={styles.driverImage}
              src={driver.imageUrl}
              alt={`${driver.name} 드라이버 이미지`}
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  );
};
