import React from 'react';
import type { TrackInfo } from '@domain/calander/data/trackMap.ts';
import * as styles from './trackCard.css.ts';

interface TrackCardProps {
  track?: TrackInfo;
  mapImage?: string;
}

const formatDistance = (value: number) => `${value.toFixed(3)} km`;

export const TrackCard = ({ track, mapImage }: TrackCardProps) => {
  if (!track) {
    return (
      <section className={styles.container} aria-label="트랙 정보 없음">
        <div className={styles.header}>
          <h2 className={styles.title}>트랙 정보</h2>
          <p className={styles.subtitle}>
            선택한 그랑프리에 해당하는 서킷 정보를 불러오는 중입니다.
          </p>
        </div>
        <div className={styles.mapContainer}>
          <p className={styles.mapPlaceholder}>트랙을 선택하면 상세 정보가 표시됩니다.</p>
        </div>
      </section>
    );
  }

  const statItems: { label: string; value: React.ReactNode }[] = [
    { label: '첫 그랑프리', value: track.firstGrandPrix },
    { label: '랩 카운트', value: track.numberOfLaps },
    { label: '서킷 길이', value: formatDistance(track.circuitLengthKm) },
    { label: '레이스 거리', value: formatDistance(track.raceDistanceKm) },
    { label: '코너 수', value: track.cornerCount },
    { label: 'DRS 존', value: track.drsZones },
    {
      label: '랩 레코드',
      value: (
        <div className={styles.recordHighlight}>
          <span className={styles.infoValue}>{track.lapRecord.time}</span>
          <span className={styles.recordDriver}>
            {track.lapRecord.driver} ({track.lapRecord.year})
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className={styles.container} aria-labelledby={`${track.slug}-track-title`}>
      <div className={styles.header}>
        <h2 id={`${track.slug}-track-title`} className={styles.title}>
          트랙 정보
        </h2>
        <p className={styles.subtitle}>
          {track.circuit} · {track.location}
        </p>
      </div>

      <div className={styles.infoGrid}>
        {statItems.map((item) => (
          <div key={item.label} className={styles.infoItem}>
            <span className={styles.infoLabel}>{item.label}</span>
            {typeof item.value === 'string' || typeof item.value === 'number' ? (
              <span className={styles.infoValue}>{item.value}</span>
            ) : (
              item.value
            )}
          </div>
        ))}
      </div>

      <div className={styles.mapSection}>
        <div className={styles.tabList}>
          <span className={styles.tabButton}>트랙맵</span>
        </div>
        <div className={styles.mapContainer}>
          {mapImage ? (
            <img
              src={mapImage}
              alt={track.alt ?? `${track.circuit} 트랙맵`}
              className={styles.mapImage}
            />
          ) : (
            <p className={styles.mapPlaceholder}>
              트랙 레이아웃 이미지는 곧 업데이트될 예정입니다.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
