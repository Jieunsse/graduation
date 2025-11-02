import * as styles from '../styles/driverRanking.css.ts';
import kimiAntonelli from '@domain/driver/img/2025mercedesandant01right.png';

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
    points: 357,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/9col/image.png',
  },
  {
    id: 'charles-leclerc',
    name: '샤를 르클레르',
    code: 'CL',
    teamId: 'ferrari',
    teamName: '페라리',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogowhite.webp',
    points: 210,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/9col/image.png',
  },
  {
    id: 'max-verstappen',
    name: '막스 베르스타펜',
    code: 'MV',
    teamId: 'redbull',
    teamName: '레드불',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/redbullracing/2025redbullracinglogowhite.webp',
    points: 321,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/9col/image.png',
  },
  {
    id: 'oscar-piastri',
    name: '오스카 피아스트리',
    code: 'OP',
    teamId: 'mclaren',
    teamName: '맥라렌',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp',
    points: 356,
    imageUrl:
      'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_auto/content/dam/fom-website/2018-redesign-assets/drivers/2025/oscpia01.png',
  },
  {
    id: 'lewis-hamilton',
    name: '루이스 해밀턴',
    code: 'LH',
    teamId: 'ferrari',
    teamName: '페라리',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/ferrari/2025ferrarilogowhite.webp',
    points: 146,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/9col/image.png',
  },
  {
    id: 'george-russell',
    name: '조지 러셀',
    code: 'GR',
    teamId: 'mercedes',
    teamName: '메르세데스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedeslogowhite.webp',
    points: 258,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/9col/image.png',
  },
  {
    id: 'fernando-alonso',
    name: '페르난도 알론소',
    code: 'FA',
    teamId: 'astonmartin',
    teamName: '애스턴 마틴',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp',
    points: 37,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/9col/image.png',
  },
  {
    id: 'franco-colapinto',
    name: '프랑코 콜라핀토',
    code: 'PC',
    teamId: 'williams',
    teamName: '윌리엄스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp',
    points: 0,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png.transform/9col/image.png',
  },
  {
    id: 'lance-stroll',
    name: '랜스 스트롤',
    code: 'LS',
    teamId: 'astonmartin',
    teamName: '애스턴 마틴',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/astonmartin/2025astonmartinlogowhite.webp',
    points: 32,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/9col/image.png',
  },
  {
    id: 'yuki-tsunoda',
    name: '유키 츠노다',
    code: 'YT',
    teamId: 'redbull',
    teamName: '레드불',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp',
    points: 28,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/9col/image.png',
  },
  {
    id: 'alex-albon',
    name: '알렉산더 알본',
    code: 'AA',
    teamId: 'williams',
    teamName: '윌리엄스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp',
    points: 73,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/9col/image.png',
  },
  {
    id: 'carlos-Sainz',
    name: '카를로스 사인츠',
    code: 'CS',
    teamId: 'williams',
    teamName: '윌리엄스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/williams/2025williamslogowhite.webp',
    points: 38,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/9col/image.png',
  },
  {
    id: 'nico-hulkenberg',
    name: '니코 휠켄베르크',
    code: 'HA',
    teamId: 'haas',
    teamName: '하스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/haasf1team/2025haasf1teamlogowhite.webp',
    points: 41,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/9col/image.png',
  },
  {
    id: 'gabriel-bortoleto',
    name: '가브리엘 보르톨레토',
    code: 'GB',
    teamId: 'haas',
    teamName: '하스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/haasf1team/2025haasf1teamlogowhite.webp',
    points: 19,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png.transform/9col/image.png',
  },
  {
    id: 'kimi antonelli',
    name: '키미 안토넬리',
    code: 'KA',
    teamId: 'mercedes',
    teamName: '메르세데스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mercedes/2025mercedeslogowhite.webp',
    points: 97,
    imageUrl: kimiAntonelli,
  },
  {
    id: 'pierre-gasly',
    name: '피에르 가슬리',
    code: 'PG',
    teamId: 'alpine',
    teamName: '알파인',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/alpine/2025alpinelogowhite.webp',
    points: 20,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/9col/image.png',
  },
  {
    id: 'isack-hadjar',
    name: '이삭 하자르',
    code: 'IH',
    teamId: 'racingbulls',
    teamName: '레이싱불스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp',
    points: 39,
    imageUrl:
      'https://i.namu.wiki/i/aYyQpuIM2Ta41ZbtXIPYHcBHN_rfFZkNWOua_9eEkXap5C-XEEpIzESmCCu5xhbUO2alDOhyvI8IJlu112g9uw.webp',
  },
  {
    id: 'liam-lawson',
    name: '리암 로슨',
    code: 'LL',
    teamId: 'racingbulls',
    teamName: '레이싱불스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/racingbulls/2025racingbullslogowhite.webp',
    points: 30,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/9col/image.png',
  },
  {
    id: 'oliver-bearman',
    name: '올리버 베어맨',
    code: 'OB',
    teamId: 'haas',
    teamName: '하스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/haasf1team/2025haasf1teamlogowhite.webp',
    points: 32,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/9col/image.png',
  },
  {
    id: 'esteban-ocon',
    name: '에스테반 오콘',
    code: 'EO',
    teamId: 'haas',
    teamName: '하스',
    teamLogoUrl:
      'https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/haasf1team/2025haasf1teamlogowhite.webp',
    points: 30,
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/9col/image.png',
  },
];

export const DriverRankingShowcase = () => {
  const sortedDrivers = [...driverRankingData].sort(
    (a, b) => b.points - a.points
  );

  return (
    <section className={styles.rankingSection}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>드라이버 순위</h2>
        <p className={styles.sectionDescription}>
          시즌 누적 데이터를 기반으로 드라이버별 포인트, 소속 팀, 팀 로고와 함께
          각 드라이버의 활약을 확인하세요.
        </p>
      </header>

      <div className={styles.grid}>
        {sortedDrivers.map((driver, index) => (
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
                  <span className={styles.driverCode}>No.{index + 1}</span>
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
