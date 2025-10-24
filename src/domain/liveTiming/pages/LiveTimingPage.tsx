import * as styles from '../styles/liveChart.css';
import { CarDataChart } from '../components/CarDataChart';

export const LiveTimingPage = () => {
  return (
    <div className={styles.chartContainer}>
      <h2>🏎️ Live Car Data (Lewis Hamilton #44)</h2>
      <CarDataChart driverNumber={44} />
    </div>
  );
};
