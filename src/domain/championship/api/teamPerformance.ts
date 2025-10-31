import axios from 'axios';

export interface PositionResponse {
  driver_number: number;
  meeting_key: number;
  session_key: number;
  position: number;
  date: string;
}

export interface DriverResponse {
  driver_number: number;
  team_name: string | null;
}

export interface TeamPerformance {
  teamName: string;
  averagePosition: number;
  bestPosition: number;
  worstPosition: number;
  driverCount: number;
}

const OPEN_F1_BASE_URL = 'https://api.openf1.org/v1';

const normalizeTeamName = (teamName: string | null | undefined) => {
  const trimmed = teamName?.trim();
  if (!trimmed) {
    return 'Unassigned Team';
  }
  return trimmed;
};

const selectLatestPositionByDriver = (positions: PositionResponse[]) => {
  const latestByDriver = new Map<number, PositionResponse>();

  positions.forEach((entry) => {
    if (entry.position == null || Number.isNaN(entry.position)) {
      return;
    }

    const existing = latestByDriver.get(entry.driver_number);
    if (!existing) {
      latestByDriver.set(entry.driver_number, entry);
      return;
    }

    const existingDate = new Date(existing.date).getTime();
    const currentDate = new Date(entry.date).getTime();

    if (Number.isNaN(existingDate) || Number.isNaN(currentDate)) {
      latestByDriver.set(entry.driver_number, entry);
      return;
    }

    if (currentDate >= existingDate) {
      latestByDriver.set(entry.driver_number, entry);
    }
  });

  return latestByDriver;
};

const buildTeamPerformance = (
  latestPositionsByDriver: Map<number, PositionResponse>,
  driverTeamMap: Map<number, string>
): TeamPerformance[] => {
  const teamPositions = new Map<string, number[]>();
  const teamDrivers = new Map<string, Set<number>>();

  latestPositionsByDriver.forEach((position) => {
    const teamName = driverTeamMap.get(position.driver_number) ?? 'Unassigned Team';

    const positionsForTeam = teamPositions.get(teamName) ?? [];
    positionsForTeam.push(position.position);
    teamPositions.set(teamName, positionsForTeam);

    const driversForTeam = teamDrivers.get(teamName) ?? new Set<number>();
    driversForTeam.add(position.driver_number);
    teamDrivers.set(teamName, driversForTeam);
  });

  const performances: TeamPerformance[] = [];

  teamPositions.forEach((positionsForTeam, teamName) => {
    if (positionsForTeam.length === 0) {
      return;
    }

    const total = positionsForTeam.reduce((sum, value) => sum + value, 0);
    const averagePosition = Number((total / positionsForTeam.length).toFixed(2));
    const bestPosition = Math.min(...positionsForTeam);
    const worstPosition = Math.max(...positionsForTeam);
    const driverCount = teamDrivers.get(teamName)?.size ?? 0;

    performances.push({
      teamName,
      averagePosition,
      bestPosition,
      worstPosition,
      driverCount,
    });
  });

  return performances.sort((a, b) => a.averagePosition - b.averagePosition);
};

export const fetchTeamPerformance = async (
  sessionKey: string
): Promise<TeamPerformance[]> => {
  if (!sessionKey) {
    return [];
  }

  try {
    const [positionsResponse, driversResponse] = await Promise.all([
      axios.get<PositionResponse[]>(`${OPEN_F1_BASE_URL}/position`, {
        params: { session_key: sessionKey },
      }),
      axios.get<DriverResponse[]>(`${OPEN_F1_BASE_URL}/drivers`, {
        params: { meeting_key: sessionKey },
      }),
    ]);

    const latestPositionsByDriver = selectLatestPositionByDriver(
      positionsResponse.data
    );

    if (latestPositionsByDriver.size === 0) {
      return [];
    }

    const driverTeamMap = new Map<number, string>();
    driversResponse.data.forEach((driver) => {
      driverTeamMap.set(driver.driver_number, normalizeTeamName(driver.team_name));
    });

    return buildTeamPerformance(latestPositionsByDriver, driverTeamMap);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ?? '팀 성과 데이터를 불러오지 못했습니다.'
      );
    }

    throw new Error('팀 성과 데이터를 불러오지 못했습니다.');
  }
};

export const mockTeamStats: TeamPerformance[] = [
  {
    teamName: 'Red Bull Racing',
    averagePosition: 1.5,
    bestPosition: 1,
    worstPosition: 3,
    driverCount: 2,
  },
  {
    teamName: 'Ferrari',
    averagePosition: 3.2,
    bestPosition: 2,
    worstPosition: 5,
    driverCount: 2,
  },
  {
    teamName: 'Mercedes',
    averagePosition: 4,
    bestPosition: 2,
    worstPosition: 6,
    driverCount: 2,
  },
  {
    teamName: 'McLaren',
    averagePosition: 5.3,
    bestPosition: 3,
    worstPosition: 8,
    driverCount: 2,
  },
];
