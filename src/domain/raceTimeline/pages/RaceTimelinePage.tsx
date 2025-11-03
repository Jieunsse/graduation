import React, { useEffect, useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { useRaceEvents } from '../hooks/useRaceEvents.ts';
import { TimelineSlider } from '../components/TimelineSlider.tsx';
import { PlaybackControls } from '../components/PlaybackControls.tsx';
import { EventCard } from '../components/EventCard.tsx';
import * as styles from '../styles/timeline.css.ts';
import type { RaceEvent } from '../types/raceEvent.ts';
import { raceEventTypeLabel } from '../types/raceEvent.ts';

interface RaceTimelinePageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const findNearestEventIndex = (events: RaceEvent[], time: number) => {
  if (events.length === 0) {
    return 0;
  }

  let nearestIndex = 0;
  let smallestDistance = Math.abs(events[0].time - time);

  for (let index = 1; index < events.length; index += 1) {
    const distance = Math.abs(events[index].time - time);
    if (distance < smallestDistance) {
      smallestDistance = distance;
      nearestIndex = index;
    }
  }

  return nearestIndex;
};

export const RaceTimelinePage = ({ appearance, setAppearance }: RaceTimelinePageProps) => {
  const { data: events = [], isLoading } = useRaceEvents();
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const currentEvent = events[currentEventIndex];
  const currentTime = currentEvent?.time ?? 0;

  useEffect(() => {
    if (events.length > 0) {
      setCurrentEventIndex((previous) => {
        if (previous === 0) {
          return 0;
        }
        return Math.min(previous, events.length - 1);
      });
    } else {
      setCurrentEventIndex(0);
    }
  }, [events]);

  useEffect(() => {
    if (!isPlaying || events.length === 0) {
      return;
    }

    if (currentEventIndex >= events.length - 1) {
      setIsPlaying(false);
      return;
    }

    const duration = Math.max(100, Math.round(3000 / speed));

    const timeoutId = window.setTimeout(() => {
      setCurrentEventIndex((prev) => {
        if (prev >= events.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, duration);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [currentEventIndex, events.length, isPlaying, speed]);

  const activeEvent = useMemo(
    () => (events.length > 0 ? events[currentEventIndex] : undefined),
    [currentEventIndex, events],
  );

  const upcomingEvents = useMemo(() => {
    if (events.length === 0) {
      return [];
    }

    return events.slice(currentEventIndex + 1);
  }, [currentEventIndex, events]);

  const handleTimeChange = (value: number) => {
    if (events.length === 0) {
      return;
    }

    setCurrentEventIndex(findNearestEventIndex(events, value));
  };

  const handleTogglePlay = () => {
    if (events.length === 0) {
      return;
    }

    if (!isPlaying && currentEventIndex >= events.length - 1) {
      setCurrentEventIndex(0);
    }

    setIsPlaying((prev) => !prev);
  };

  const handleReset = () => {
    if (events.length === 0) {
      return;
    }

    setIsPlaying(false);
    setCurrentEventIndex(0);
  };

  const handleSpeedChange = (nextSpeed: number) => {
    setSpeed(nextSpeed);
  };

  const totalLaps = events.length > 0 ? events[events.length - 1].lap : 0;
  const currentLabel = activeEvent
    ? raceEventTypeLabel[activeEvent.type]
    : '대기 중';
  const remainingCount = upcomingEvents.length;

  return (
    <MainContainer
      sidebar={<SideBar appearance={appearance} setAppearance={setAppearance} />}
    >
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroHeader}>
            <span className={styles.heroEyebrow}>실시간 이벤트 스트림</span>
            <h1 className={styles.heroTitle}>F1 레이스 타임라인</h1>
            <p className={styles.heroDescription}>
              추월, 사고, 피트스탑부터 레드 플래그까지. 정제된 타임라인에서 경기의 흐름을
              빠르게 파악하고, 자동 재생으로 주요 순간을 다시 체험해보세요.
            </p>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>전체 이벤트</span>
              <span className={styles.statValue}>{events.length}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>최대 랩</span>
              <span className={styles.statValue}>{totalLaps || '-'}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>현재 이벤트</span>
              <span className={styles.statValue}>{currentLabel}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>남은 이벤트</span>
              <span className={styles.statValue}>{remainingCount}</span>
            </div>
          </div>
        </section>

        <div className={styles.layout}>
          <section className={styles.timelineSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>타임라인</h2>
              <p className={styles.sectionSubtitle}>
                마우스 휠 혹은 드래그로 시간축을 탐색하고, 이벤트 배지를 클릭해 주요 장면으로
                이동하세요.
              </p>
            </div>

            <TimelineSlider
              events={events}
              currentTime={currentTime}
              onTimeChange={handleTimeChange}
            />

            <PlaybackControls
              isPlaying={isPlaying}
              onTogglePlay={handleTogglePlay}
              onReset={handleReset}
              speed={speed}
              onSpeedChange={handleSpeedChange}
              isDisabled={events.length === 0 || isLoading}
            />
          </section>

          <EventCard
            activeEvent={activeEvent}
            upcomingEvents={upcomingEvents}
            currentTime={currentTime}
          />
        </div>
      </div>

      <Footer />
    </MainContainer>
  );
};
