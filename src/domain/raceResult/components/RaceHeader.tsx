import { assignInlineVars } from '@vanilla-extract/dynamic';
import type { MeetingInfo, RaceSessionMeta } from '../types.ts';
import * as styles from '../styles/raceResult.css.ts';

interface PodiumDriver {
  position: number;
  driverName: string;
  teamName: string;
  points: number;
}

interface RaceHeaderProps {
  meta: RaceSessionMeta;
  meetingInfo?: MeetingInfo | null;
  topResults: PodiumDriver[];
}

const formatMeetingDate = (value?: string | number) => {
  if (!value) {
    return '';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const RaceHeader = ({ meta, meetingInfo }: RaceHeaderProps) => {
  const dateLabel = formatMeetingDate(meetingInfo?.start_date);
  const locationLabel = [meetingInfo?.location, meetingInfo?.country_name]
    .filter(Boolean)
    .join(' · ');

  return (
    <header
      className={styles.headerContainer}
      style={assignInlineVars({
        [styles.themeColorVar]: meta.themeColor,
        [styles.accentColorVar]: meta.accentColor,
        [styles.heroImageVar]: meta.heroImage,
      })}
    >
      <div className={styles.headerHero} aria-hidden />
      <div className={styles.headerOverlay}>
        <div className={styles.headerMeta}>
          <span>{meetingInfo?.official_name ?? meta.grandPrix}</span>
          {locationLabel ? <span>{locationLabel}</span> : null}
          {dateLabel ? <span>{dateLabel}</span> : null}
        </div>
        <h1 className={styles.headerTitle}>{meta.grandPrix}</h1>
        <p className={styles.headerSub}>
          최종 순위, 팀 포인트, 리타이어 정보를 한눈에 확인하고 경기의 흐름을
          다시 살펴보세요.
        </p>
      </div>
    </header>
  );
};
