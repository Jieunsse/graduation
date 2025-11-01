export const teamColors: Record<string, string> = {
  'Oracle Red Bull Racing': '#3671C6',
  'Red Bull Racing': '#3671C6',
  'Scuderia Ferrari': '#E10600',
  Ferrari: '#E10600',
  'Mercedes-AMG PETRONAS F1 Team': '#00D2BE',
  Mercedes: '#00D2BE',
  'McLaren Formula 1 Team': '#FF6F1D',
  McLaren: '#FF6F1D',
  'Aston Martin Aramco F1 Team': '#006F62',
  'Aston Martin': '#006F62',
  'BWT Alpine F1 Team': '#0090FF',
  Alpine: '#0090FF',
  'Visa Cash App RB Formula One Team': '#1436B0',
  'Visa Cash App RB': '#1436B0',
  'Racing Bulls': '#1436B0',
  'MoneyGram Haas F1 Team': '#B6BABD',
  Haas: '#B6BABD',
  'Kick Sauber F1 Team': '#00E701',
  'Sauber': '#00E701',
  'Williams Racing': '#005AFF',
  Williams: '#005AFF',
  'RB F1 Team': '#1436B0',
  'Stake F1 Team Kick Sauber': '#00E701',
};

export const getTeamColor = (teamName?: string, fallback = '#4C516D') => {
  if (!teamName) {
    return fallback;
  }

  const normalized = teamName.trim();
  return teamColors[normalized] ?? teamColors[normalized.replace(/ F1 Team$/i, '')] ?? fallback;
};
