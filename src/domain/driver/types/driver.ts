export interface Driver {
  id: string;
  driverNumber: number;
  name: string;
  team: string;
  nationality: string;
  /**
   * Two-letter ISO 3166-1 alpha-2 country code used for generating flag emojis.
   */
  countryCode: string;
  points: number;
  wins: number;
  podiums: number;
  poles: number;
  imageUrl: string;
}
