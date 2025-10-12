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

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const getActiveEvent = (events: RaceEvent[], currentTime: number) => {
  let latest: RaceEvent | undefined;
  for (let index = 0; index < events.length; index += 1) {
    const event = events[index];
    if (event.time <= currentTime) {
      latest = event;
    } else {
      break;
    }
  }

  return latest;
};

export const RaceTimelinePage = ({ appearance, setAppearance }: RaceTimelinePageProps) => {
  const { data: events = [], isLoading } = useRaceEvents();
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const minTime = events.length > 0 ? events[0].time : 0;
  const maxTime = events.length > 0 ? events[events.length - 1].time : 0;

  useEffect(() => {
    if (events.length > 0) {
      setCurrentTime((previous) => {
        if (previous === 0) {
          return events[0].time;
        }
        return clamp(previous, events[0].time, maxTime);
      });
    }
  }, [events, maxTime]);

  useEffect(() => {
    if (!isPlaying || events.length === 0) {
      return;
    }

    let animationFrame: number;
    let previousTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (previousTimestamp === null) {
        previousTimestamp = timestamp;
        animationFrame = requestAnimationFrame(step);
        return;
      }

      const deltaSeconds = (timestamp - previousTimestamp) / 1000;
      previousTimestamp = timestamp;

      setCurrentTime((prev) => {
        const next = clamp(prev + deltaSeconds * speed * 6, minTime, maxTime);
        if (next >= maxTime) {
          setIsPlaying(false);
          return maxTime;
        }
        return next;
      });

      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [events.length, isPlaying, maxTime, minTime, speed]);

  const activeEvent = useMemo(
    () => (events.length > 0 ? getActiveEvent(events, currentTime) : undefined),
    [currentTime, events],
  );

  const upcomingEvents = useMemo(() => {
    if (events.length === 0) {
      return [];
    }

    const pivot = activeEvent ? activeEvent.time : currentTime;
    return events.filter((event) => event.time > pivot);
  }, [activeEvent, currentTime, events]);

  const handleTimeChange = (value: number) => {
    setCurrentTime(value);
  };

  const handleTogglePlay = () => {
    if (events.length === 0) {
      return;
    }

    if (!isPlaying && currentTime >= maxTime) {
      setCurrentTime(events[0].time);
    }

    setIsPlaying((prev) => !prev);
  };

  const handleReset = () => {
    if (events.length === 0) {
      return;
    }

    setIsPlaying(false);
    setCurrentTime(events[0].time);
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
