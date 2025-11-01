import React from 'react';
import * as styles from '../styles/raceResult.css.ts';

export interface DriverHighlight {
  position: number;
  driverName: string;
  teamName: string;
  points: number;
  gapToLeader: string;
  totalTime: string;
  teamColor: string;
  imageUrl?: string;
}

interface TopDriversProps {
  drivers: DriverHighlight[];
}

const gradientFor = (color: string) =>
  `linear-gradient(135deg, ${color}33 0%, rgba(12, 18, 33, 0.92) 100%)`;

export const TopDrivers = ({ drivers }: TopDriversProps) => {
  const podium = drivers.slice(0, 3);
  const rest = drivers.slice(3, 10);

  return (
    <section className={styles.topDriversSection}>
      <div>
        <h2 className={styles.sectionTitle}>Top 10 Drivers</h2>
        <p className={styles.sectionSubtitle}>
          상위권 드라이버의 포인트, 팀 색상, 리더와의 격차를 시각적으로 확인하세요.
        </p>
      </div>

      <div className={styles.podiumRow}>
        {podium.map((driver) => {
          let medal = '🥉';
          if (driver.position === 1) {
            medal = '🥇';
          } else if (driver.position === 2) {
            medal = '🥈';
          }

          return (
            <div
              key={driver.position}
              className={styles.topPodiumCard}
              style={{ background: gradientFor(driver.teamColor) }}
            >
              <div className={styles.podiumAccent}>{medal}</div>
              {driver.imageUrl ? (
                <img
                  src={driver.imageUrl}
                  alt={driver.driverName}
                  className={styles.driverAvatar}
                />
              ) : null}
              <div className={styles.driverInfo}>
                <span className={styles.driverName}>{driver.driverName}</span>
                <span className={styles.driverMeta}>
                  {driver.teamName} • {driver.points.toFixed(1)} pts
                </span>
                <span className={styles.driverStat}>
                  Gap {driver.gapToLeader || '—'} • {driver.totalTime || '—'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.topDriverGrid}>
        {rest.map((driver) => (
          <div
            key={driver.position}
            className={styles.topDriverCard}
            style={{ background: gradientFor(driver.teamColor) }}
          >
            {driver.imageUrl ? (
              <img
                src={driver.imageUrl}
                alt={driver.driverName}
                className={styles.driverAvatar}
              />
            ) : null}
            <div className={styles.driverInfo}>
              <span className={styles.driverName}>
                #{driver.position} {driver.driverName}
              </span>
              <span className={styles.driverMeta}>{driver.teamName}</span>
              <span className={styles.driverStat}>
                {driver.points.toFixed(1)} pts • Gap {driver.gapToLeader || '—'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
