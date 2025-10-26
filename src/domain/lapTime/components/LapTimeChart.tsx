import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import * as styles from '@domain/lapTime/styles/chart.css.ts';
import type { DriverOption } from '@domain/lapTime/components/DriverSelector.tsx';
import type { LapTimeUnit } from '@domain/lapTime/types/lapTime.ts';

export interface LapChartPoint {
  lap: number;
  [driver: string]: number | undefined;
}

interface LapTimeChartProps {
  data: LapChartPoint[];
  drivers: DriverOption[];
  unit: LapTimeUnit;
}

const getUnitLabel = (unit: LapTimeUnit) => (unit === 'seconds' ? 's' : 'min');

export const LapTimeChart = ({ data, drivers, unit }: LapTimeChartProps) => {
  if (data.length === 0 || drivers.length === 0) {
    return <div className={styles.emptyState}>표시할 랩타임 데이터가 없습니다.</div>;
  }

  const unitLabel = getUnitLabel(unit);

  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis dataKey="lap" label={{ value: 'Lap', position: 'insideBottomRight', offset: -10 }} />
          <YAxis
            tickFormatter={(value: number) => value.toFixed(2)}
            label={{
              value: `Lap Time (${unitLabel})`,
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Tooltip
            formatter={(value: number, name: string) => [
              `${value.toFixed(3)} ${unitLabel}`,
              name,
            ]}
            labelFormatter={(label: string | number) => `Lap ${label}`}
          />
          <Legend />
          {drivers.map((driver) => (
            <Line
              key={driver.name}
              type="monotone"
              dataKey={driver.name}
              stroke={driver.color}
              dot={false}
              strokeWidth={2.5}
              isAnimationActive={false}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
