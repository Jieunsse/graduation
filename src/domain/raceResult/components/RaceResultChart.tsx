import type { FC } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { TooltipProps } from 'recharts';
import * as styles from '../styles/raceResultChart.css.ts';

interface RaceResultChartProps {
  title?: string;
  subtitle?: string;
  data: {
    driverNumber: number;
    driverName: string;
    shortCode: string;
    points: number;
    position: number;
    teamColor: string;
  }[];
}

const axisColor = `var(${styles.axisColorVar})`;
const gridColor = `var(${styles.gridColorVar})`;

const renderLegend = () => (
  <div className={styles.legend}>
    <span>• 포인트</span>
    <span>• 순위 (낮을수록 상위)</span>
  </div>
);

const tooltipFormatter = (value: number) => `${value.toLocaleString()} pt`;

const tooltipContent = ({ active, payload }: TooltipProps) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const [{ payload: item, color }] = payload;

  return (
    <div className={styles.tooltip} style={{ borderColor: color }}>
      <h4
        className={styles.tooltipTitle}
      >{`${item.driverName} (${item.shortCode})`}</h4>
      <div className={styles.tooltipStat}>
        <span>포인트</span>
        <strong>{item.points.toLocaleString()}</strong>
      </div>
      <div className={styles.tooltipStat}>
        <span>최종 순위</span>
        <strong>{item.position}위</strong>
      </div>
    </div>
  );
};

export const RaceResultChart: FC<RaceResultChartProps> = ({
  title = '레이스 포인트 분포',
  subtitle = '각 드라이버의 득점과 순위 비교',
  data,
}) => (
  <section className={styles.chartCard} aria-label="레이스 결과 차트">
    <div className={styles.header}>
      <h3 className={styles.chartTitle}>{title}</h3>
      <p className={styles.chartSubtitle}>{subtitle}</p>
    </div>

    <div className={styles.chartArea}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ left: 12, right: 12, bottom: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />

          <XAxis
            dataKey="shortCode"
            stroke={axisColor}
            tick={{ fill: axisColor, fontSize: 12, fontWeight: 600 }}
            axisLine={{ stroke: axisColor }}
            tickLine={{ stroke: axisColor }}
          />

          <YAxis
            yAxisId="points"
            stroke={axisColor}
            tick={{ fill: axisColor, fontSize: 12 }}
            axisLine={{ stroke: axisColor }}
            tickLine={{ stroke: axisColor }}
            tickFormatter={tooltipFormatter}
            allowDecimals={false}
            width={70}
          />

          <Tooltip content={tooltipContent} cursor={{ fill: 'transparent' }} />
          <Legend content={renderLegend} />

          {/* ✅ 커스텀 label 렌더링 + key 명시 */}
          <Bar
            yAxisId="points"
            dataKey="points"
            radius={[12, 12, 0, 0]}
            maxBarSize={38}
            label={({ x, y, width, value, index }) => (
              <text
                key={`label-${index}`}
                x={x + width / 2}
                y={y - 8}
                textAnchor="middle"
                fill={axisColor}
                fontSize={12}
              >
                {value}
              </text>
            )}
          >
            {data.map((entry) => (
              <Cell
                key={`${entry.driverNumber}-${entry.shortCode}-${entry.points}`}
                fill={entry.teamColor}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </section>
);
