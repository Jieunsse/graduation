import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import * as styles from '../styles/raceResult.css.ts';

export interface TeamPointsDatum {
  teamName: string;
  totalPoints: number;
  finishers: number;
  drivers: string[];
  color: string;
}

interface TeamPointsChartProps {
  data: TeamPointsDatum[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: TeamPointsDatum }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (!active || !payload || payload.length === 0) return null;

  const [{ payload: raw }] = payload;
  const item = raw as TeamPointsDatum;

  return (
    <div
      style={{
        background: 'rgba(15, 23, 42, 0.92)',
        padding: '12px 16px',
        borderRadius: 16,
        color: '#f8fafc',
        boxShadow: '0 16px 28px rgba(15, 23, 42, 0.45)',
      }}
    >
      <strong>{item.teamName}</strong>
      <div style={{ marginTop: 6, fontSize: 13 }}>
        포인트 {item.totalPoints.toFixed(1)} • 완주 {item.finishers}명
      </div>
      <div style={{ marginTop: 4, fontSize: 12, opacity: 0.85 }}>
        {item.drivers.join(', ')}
      </div>
    </div>
  );
};

export const TeamPointsChart = ({ data }: TeamPointsChartProps) => {
  return (
    <section className={styles.chartCard}>
      <h2 className={styles.sectionTitle}>Team Points Overview</h2>
      <p className={styles.sectionSubtitle}>
        각 팀의 포인트 합산과 완주 드라이버 수를 비교할 수 있습니다.
      </p>
      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ left: 12, right: 12, top: 24, bottom: 12 }}
          >
            <CartesianGrid
              stroke="rgba(148, 163, 184, 0.18)"
              vertical={false}
            />
            <XAxis
              dataKey="teamName"
              stroke="rgba(226, 232, 240, 0.75)"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: 12 }}
            />
            <YAxis
              stroke="rgba(226, 232, 240, 0.75)"
              tickLine={false}
              axisLine={false}
              width={44}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(148, 163, 184, 0.12)' }}
            />
            <Bar dataKey="totalPoints" radius={[12, 12, 12, 12]}>
              {data.map((entry) => (
                <Cell key={entry.teamName} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
