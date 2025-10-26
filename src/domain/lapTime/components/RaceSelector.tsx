import { useMemo } from 'react';
import * as styles from '@domain/lapTime/styles/controls.css.ts';
import type { RaceSession } from '@domain/lapTime/types/lapTime.ts';

interface RaceSelectorProps {
  sessions: RaceSession[];
  selectedSessionKey?: number;
  onChange: (sessionKey: number) => void;
  isLoading?: boolean;
}

const formatSessionDate = (input: string) => {
  const date = new Date(input);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  try {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(date);
  } catch (error) {
    console.warn('세션 날짜 포맷에 실패했습니다.', error);
    return undefined;
  }
};

export const RaceSelector = ({
  sessions,
  selectedSessionKey,
  onChange,
  isLoading = false,
}: RaceSelectorProps) => {
  const selected = useMemo(
    () => sessions.find((session) => session.sessionKey === selectedSessionKey),
    [sessions, selectedSessionKey],
  );

  const detailText = useMemo(() => {
    if (!selected) {
      return '비교할 그랑프리를 선택하세요.';
    }
    const detailParts = [
      selected.sessionName,
      formatSessionDate(selected.date),
      selected.location,
    ];
    return detailParts.filter(Boolean).join(' • ') || undefined;
  }, [selected]);

  return (
    <div className={styles.optionsContainer}>
      <div className={styles.optionCard}>
        <span className={styles.optionLabel}>Grand Prix</span>
        <select
          className={styles.select}
          value={selectedSessionKey?.toString() ?? ''}
          onChange={(event) => {
            if (!event.target.value) {
              return;
            }
            const nextKey = Number(event.target.value);
            if (Number.isNaN(nextKey)) {
              return;
            }
            onChange(nextKey);
          }}
          disabled={isLoading || sessions.length === 0}
        >
          <option value="">
            {isLoading ? '경기 목록을 불러오는 중...' : '그랑프리를 선택하세요'}
          </option>
          {sessions.map((session) => (
            <option key={session.sessionKey} value={session.sessionKey.toString()}>
              {session.meetingName}
            </option>
          ))}
        </select>
        <span className={styles.helperText}>
          {detailText || '선택된 세션 정보를 찾을 수 없습니다.'}
        </span>
      </div>
    </div>
  );
};
