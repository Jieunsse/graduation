import * as styles from '../styles/TeamPerformanceDashboard.css.ts';
import kimiAntonelli from '@domain/driver/img/2025mercedesandant01right.png';

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
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/9col/image.png',
      },
      {
        name: '오스카 피아스트리',
        imageUrl:
          'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_auto/content/dam/fom-website/2018-redesign-assets/drivers/2025/oscpia01.png',
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
        name: '샤를 르클레르',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/9col/image.png',
      },
      {
        name: '루이스 해밀턴',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/9col/image.png',
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
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/9col/image.png',
      },
      {
        name: '키미 안토넬리',
        imageUrl: kimiAntonelli,
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
        name: '막스 베르스타펜',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/9col/image.png',
      },
      {
        name: '유키 츠노다',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/9col/image.png',
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
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/9col/image.png',
      },
      {
        name: '프랑코 콜라핀토',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png.transform/9col/image.png',
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
        name: '리암 로슨',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/9col/image.png',
      },
      {
        name: '이삭 하자르',
        imageUrl:
          'https://i.namu.wiki/i/aYyQpuIM2Ta41ZbtXIPYHcBHN_rfFZkNWOua_9eEkXap5C-XEEpIzESmCCu5xhbUO2alDOhyvI8IJlu112g9uw.webp',
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
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/9col/image.png',
      },
      {
        name: '랜스 스트롤',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/9col/image.png',
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
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/9col/image.png',
      },
      {
        name: '올리버 베어맨',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/9col/image.png',
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
        name: '니코 휠켄베르크',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/9col/image.png',
      },
      {
        name: '가브리엘 보르톨레토',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png.transform/9col/image.png',
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
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/9col/image.png',
      },
      {
        name: '프랑코 콜라핀토',
        imageUrl:
          'https://www.formula1.com/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png.transform/9col/image.png',
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
          구성과 차량을 한눈에 확인하세요.
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
