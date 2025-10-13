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

  return (
    <MainContainer
      sidebar={<SideBar appearance={appearance} setAppearance={setAppearance} />}
    >
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden />
          <div className={styles.heroMeta}>
            <span>실시간 이벤트 스트림</span>
            <span>총 {events.length}개 이벤트</span>
            <span>최대 랩 {events.length > 0 ? events[events.length - 1].lap : '-'}</span>
          </div>
          <h1 className={styles.heroTitle}>F1 레이스 타임라인</h1>
          <p className={styles.heroDescription}>
            추월, 사고, 피트스탑부터 레드 플래그까지. 실시간 스트리밍 타임라인으로
            경기의 흐름을 한눈에 파악하세요. 슬라이더를 움직이거나 자동 재생으로
            주요 순간을 다시 체험할 수 있습니다.
          </p>
        </section>

        <div className={styles.layout}>
          <section className={styles.timelineSurface}>
            <div className={styles.surfaceHeader}>
              <h2 className={styles.surfaceTitle}>타임라인</h2>
              <p className={styles.surfaceSubtitle}>
                마우스 휠 혹은 드래그로 시간축을 탐색하고, 이벤트 아이콘을 클릭해
                주요 장면으로 이동하세요.
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
