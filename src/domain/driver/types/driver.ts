export interface Driver {
  id: string;
  driverNumber: number;
  name: string;
  team: string;
  nationality: string;

  countryCode: string;
  points: number;
  wins: number;
  podiums: number;
  poles: number;
  imageUrl: string;
}
