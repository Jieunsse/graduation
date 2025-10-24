import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useCarData } from '../hooks/useCarData';

interface CarDataChartProps {
  driverNumber: number;
}

export const CarDataChart = ({ driverNumber }: CarDataChartProps) => {
  const { data, isLoading } = useCarData(driverNumber);

  if (isLoading || !data) return <p>Loading live car data...</p>;

  const formattedData = data.map((d) => ({
    time: new Date(d.date).toLocaleTimeString('ko-KR', {
      minute: '2-digit',
      second: '2-digit',
    }),
    speed: d.speed,
    rpm: d.rpm,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formattedData}>
        <XAxis dataKey="time" />
        <YAxis
          label={{ value: 'Speed (km/h)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="speed"
          stroke="#ff1e00"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="rpm"
          stroke="#0044ff"
          strokeWidth={1}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
