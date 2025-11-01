import { driverNameMap } from '@domain/lapTime/data/driverNameMap.ts';
import type { StartingGrid } from '@domain/grid/api/getStartingGrid.ts';
import kimiAntonelli from '@domain/driver/img/2025mercedesandant01right.png';
import { teamColors } from '@shared/data/teamColors.ts';

export interface DriverMetadata {
  driverNumber: number;
  englishName: string;
  teamName: string;
  teamColor: string;
  imageUrl: string;
}

export interface ResolvedDriverMetadata extends DriverMetadata {
  koreanName: string;
}

const driverEntries: DriverMetadata[] = [
  {
    driverNumber: 1,
    englishName: 'Max Verstappen',
    teamName: 'Oracle Red Bull Racing',
    teamColor: teamColors['Oracle Red Bull Racing'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/9col/image.png',
  },
  {
    driverNumber: 22,
    englishName: 'Yuki Tsunoda',
    teamName: 'Visa Cash App RB Formula One Team',
    teamColor: teamColors['Racing Bulls'] ?? '#1436B0',
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/9col/image.png',
  },
  {
    driverNumber: 16,
    englishName: 'Charles Leclerc',
    teamName: 'Scuderia Ferrari',
    teamColor: teamColors['Scuderia Ferrari'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/9col/image.png',
  },
  {
    driverNumber: 55,
    englishName: 'Carlos Sainz',
    teamName: 'Williams Racing',
    teamColor: teamColors['Williams Racing'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/9col/image.png',
  },
  {
    driverNumber: 44,
    englishName: 'Lewis Hamilton',
    teamName: 'Scuderia Ferrari',
    teamColor: teamColors['Scuderia Ferrari'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/9col/image.png',
  },
  {
    driverNumber: 12,
    englishName: 'Kimi Antonelli',
    teamName: 'Mercedes-AMG PETRONAS F1 Team',
    teamColor: teamColors['Mercedes-AMG PETRONAS F1 Team'],
    imageUrl: kimiAntonelli,
  },
  {
    driverNumber: 63,
    englishName: 'George Russell',
    teamName: 'Mercedes-AMG PETRONAS F1 Team',
    teamColor: teamColors['Mercedes-AMG PETRONAS F1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/9col/image.png',
  },
  {
    driverNumber: 4,
    englishName: 'Lando Norris',
    teamName: 'McLaren Formula 1 Team',
    teamColor: teamColors['McLaren Formula 1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/9col/image.png',
  },
  {
    driverNumber: 81,
    englishName: 'Oscar Piastri',
    teamName: 'McLaren Formula 1 Team',
    teamColor: teamColors['McLaren Formula 1 Team'],
    imageUrl:
      'https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_auto/content/dam/fom-website/2018-redesign-assets/drivers/2025/oscpia01.png',
  },
  {
    driverNumber: 14,
    englishName: 'Fernando Alonso',
    teamName: 'Aston Martin Aramco F1 Team',
    teamColor: teamColors['Aston Martin Aramco F1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/9col/image.png',
  },
  {
    driverNumber: 18,
    englishName: 'Lance Stroll',
    teamName: 'Aston Martin Aramco F1 Team',
    teamColor: teamColors['Aston Martin Aramco F1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/9col/image.png',
  },
  {
    driverNumber: 31,
    englishName: 'Esteban Ocon',
    teamName: 'BWT Alpine F1 Team',
    teamColor: teamColors['BWT Alpine F1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/9col/image.png',
  },
  {
    driverNumber: 10,
    englishName: 'Pierre Gasly',
    teamName: 'BWT Alpine F1 Team',
    teamColor: teamColors['BWT Alpine F1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/9col/image.png',
  },
  {
    driverNumber: 27,
    englishName: 'Nico Hulkenberg',
    teamName: 'MoneyGram Haas F1 Team',
    teamColor: teamColors['MoneyGram Haas F1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/9col/image.png',
  },
  {
    driverNumber: 23,
    englishName: 'Alexander Albon',
    teamName: 'Williams Racing',
    teamColor: teamColors['Williams Racing'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/9col/image.png',
  },
  {
    driverNumber: 43,
    englishName: 'Franco Colapinto',
    teamName: 'BWT Alpine F1 Team',
    teamColor: teamColors['BWT Alpine F1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/F/FRACOL01_Franco_Colapinto/fracol01.png.transform/9col/image.png',
  },
  {
    driverNumber: 5,
    englishName: 'Gabriel Bortoleto',
    teamName: 'Kick Sauber F1 Team',
    teamColor: teamColors['Kick Sauber F1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png.transform/9col/image.png',
  },
  {
    driverNumber: 30,
    englishName: 'Liam Lawson',
    teamName: 'Racing Bulls',
    teamColor: teamColors['Racing Bulls'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/9col/image.png',
  },
  {
    driverNumber: 20,
    englishName: 'Isack Hadjar',
    teamName: 'Racing Bulls',
    teamColor: teamColors['Racing Bulls'],
    imageUrl:
      'https://i.namu.wiki/i/aYyQpuIM2Ta41ZbtXIPYHcBHN_rfFZkNWOua_9eEkXap5C-XEEpIzESmCCu5xhbUO2alDOhyvI8IJlu112g9uw.webp',
  },
  {
    driverNumber: 87,
    englishName: 'Oliver Bearman',
    teamName: 'MoneyGram Haas F1 Team',
    teamColor: teamColors['MoneyGram Haas F1 Team'],
    imageUrl:
      'https://www.formula1.com/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/9col/image.png',
  },
];

export const driverMetadataMap: Record<number, ResolvedDriverMetadata> =
  driverEntries.reduce(
    (acc, driver) => {
      const koreanName =
        driverNameMap[driver.englishName.toLowerCase()] ?? driver.englishName;

      acc[driver.driverNumber] = { ...driver, koreanName };
      return acc;
    },
    {} as Record<number, ResolvedDriverMetadata>
  );

export const fallbackGridOrder: number[] = [
  1, 16, 55, 44, 63, 4, 81, 14, 18, 31, 10, 22, 27, 23, 43, 5, 30, 20, 87, 12,
];

export const fallbackGridData: StartingGrid[] = fallbackGridOrder.map(
  (driverNumber, index) => ({
    position: index + 1,
    driver_number: driverNumber,
    lap_duration: 0,
    meeting_key: 0,
    session_key: 0,
  })
);

export const resolveDriverMetadata = (driverNumber: number) =>
  driverMetadataMap[driverNumber];
