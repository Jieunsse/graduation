import * as styles from './driverCard.css.ts';
import type { Driver } from '../types/driver.ts';

const countryCodeToFlagEmoji = (countryCode: string) => {
  if (countryCode.length !== 2) {
    return '';
  }

  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 0x1f1e6 + char.charCodeAt(0) - 65);

  return String.fromCodePoint(...codePoints);
};

interface DriverCardProps {
  driver: Driver;
}

export const DriverCard = ({ driver }: DriverCardProps) => {
  const flagEmoji = countryCodeToFlagEmoji(driver.countryCode);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={driver.imageUrl}
          alt={`${driver.name} portrait`}
          className={styles.driverImage}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.numberBadge}>#{driver.driverNumber}</span>
          <span
            className={styles.flag}
            role="img"
            aria-label={driver.nationality}
          >
            {flagEmoji || driver.countryCode}
          </span>
        </header>

        <div>
          <h3 className={styles.name}>{driver.name}</h3>
          <p className={styles.team}>{driver.team}</p>
        </div>

        <div className={styles.statList}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>국적</span>
            <span className={styles.statValue}>{driver.nationality}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>포인트</span>
            <span className={styles.statValue}>{driver.points}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>우승</span>
            <span className={styles.statValue}>{driver.wins}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>포디엄</span>
            <span className={styles.statValue}>{driver.podiums}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>폴 포지션</span>
            <span className={styles.statValue}>{driver.poles}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
