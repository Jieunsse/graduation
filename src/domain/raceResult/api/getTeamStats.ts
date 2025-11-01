import type { SessionResult, TeamStat } from '../types.ts';

interface DriverLookupItem {
  name: string;
  team?: string;
}

export const getTeamStats = (
  results: SessionResult[],
  driverLookup?: Map<number, DriverLookupItem>,
): TeamStat[] => {
  const teamMap = new Map<string, TeamStat>();

  results.forEach((result) => {
    if (!result) {
      return;
    }

    const driverNumber = result.driver_number;
    const driverInfo = driverLookup?.get(driverNumber);
    const driverName = driverInfo?.name ?? result.driver_name ?? `Driver ${driverNumber}`;
    const teamName =
      driverInfo?.team ?? result.team_name ?? 'Unknown Team';

    if (!teamMap.has(teamName)) {
      teamMap.set(teamName, {
        teamName,
        totalPoints: 0,
        drivers: [],
        finishers: 0,
      });
    }

    const teamStat = teamMap.get(teamName)!;

    teamStat.totalPoints += Number.isFinite(result.points) ? result.points : 0;

    if (!teamStat.drivers.some((driver) => driver.driverNumber === driverNumber)) {
      teamStat.drivers.push({ driverNumber, name: driverName });
    }

    if (!result.dnf && !result.dsq && !result.dns) {
      teamStat.finishers += 1;
    }
  });

  return Array.from(teamMap.values()).sort(
    (a, b) => b.totalPoints - a.totalPoints,
  );
};
