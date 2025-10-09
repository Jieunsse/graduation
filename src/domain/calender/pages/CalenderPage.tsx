import React, { useEffect, useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import {
  CalenderEvents,
  type CalenderEvent,
} from '@domain/calender/data/calender.ts';
import { CalenderList } from '@domain/calender/components/calenderList/CalenderList.tsx';
import { CalenderDetail } from '@domain/calender/components/calenderDetail/CalenderDetail.tsx';
import { TrackCard } from '@domain/calender/components/trackCard/trackCard.tsx';
import { findTrackInfo } from '@domain/calender/data/trackMap.ts';
import * as styles from './calenderPage.css.ts';
import { useNavigate, useParams } from 'react-router-dom';

interface CalenderPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const getDefaultEvent = (): CalenderEvent | undefined => {
  const now = Date.now();
  const upcoming = CalenderEvents.find((event) => {
    const end = new Date(event.endDate).getTime();
    return !Number.isNaN(end) && end >= now;
  });

  return upcoming ?? CalenderEvents[0];
};

const formatDateTime = (iso: string | undefined) => {
  if (!iso) {
    return '';
  }
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return '';
  }

  const datePart = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  });
  const timePart = date.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Seoul',
  });

  return `${datePart} ${timePart}`;
};

export const CalenderPage = ({
  appearance,
  setAppearance,
}: CalenderPageProps) => {
  const navigate = useNavigate();
  const { slug: paramSlug } = useParams<{ slug?: string }>();
  const defaultEvent = useMemo(() => getDefaultEvent(), []);
  const [selectedSlug, setSelectedSlug] = useState<string>(() => {
    if (paramSlug) {
      return paramSlug;
    }
    return defaultEvent?.slug ?? CalenderEvents[0]?.slug ?? '';
  });

  useEffect(() => {
    if (!defaultEvent) {
      return;
    }

    if (!paramSlug) {
      navigate(`/calendar/${defaultEvent.slug}`, { replace: true });
      return;
    }

    const exists = CalenderEvents.find((event) => event.slug === paramSlug);
    if (exists) {
      setSelectedSlug(exists.slug);
    } else {
      navigate(`/calendar/${defaultEvent.slug}`, { replace: true });
    }
  }, [defaultEvent, navigate, paramSlug]);

  const selectedEvent = useMemo(() => {
    const fallback = defaultEvent ?? CalenderEvents[0];
    return (
      CalenderEvents.find((event) => event.slug === selectedSlug) ?? fallback
    );
  }, [defaultEvent, selectedSlug]);

  const nextEvent = useMemo(() => {
    const now = Date.now();
    return (
      CalenderEvents.find((event) => {
        const start = new Date(event.startDate).getTime();
        return !Number.isNaN(start) && start > now;
      }) ?? CalenderEvents[CalenderEvents.length - 1]
    );
  }, []);

  const track = useMemo(() => {
    if (!selectedEvent) {
      return undefined;
    }
    return findTrackInfo(selectedEvent.slug);
  }, [selectedEvent]);

  const handleSelect = (slug: string) => {
    setSelectedSlug(slug);
    navigate(`/calendar/${slug}`);
  };

  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />
      <div className={styles.page}>
        <section className={styles.hero}>
          <div>
            <h1 className={styles.heroTitle}>GP 캘린더</h1>
            <p className={styles.heroDescription}>
              2025년 F1 시즌 24개 그랑프리의 주말 일정을 한눈에 확인하세요.
              라운드를 선택하면 세션 세부 정보와 트랙 데이터를 자세히 볼 수
              있습니다.
            </p>
          </div>

          <div className={styles.heroMeta}>
            <div className={styles.heroMetaCard}>
              <span className={styles.heroMetaLabel}>다음 레이스</span>
              <span className={styles.heroMetaValue}>
                {nextEvent?.eventName}
              </span>
              <span className={styles.heroMetaSub}>
                {formatDateTime(nextEvent?.raceStart)}
                {nextEvent
                  ? ` · ${nextEvent.country} / ${nextEvent.locality}`
                  : ''}
              </span>
            </div>
            <div className={styles.heroMetaCard}>
              <span className={styles.heroMetaLabel}>선택된 라운드</span>
              <span className={styles.heroMetaValue}>
                Round {selectedEvent?.round ?? '-'}
              </span>
              <span className={styles.heroMetaSub}>
                {selectedEvent?.eventName}
                {selectedEvent
                  ? ` · ${formatDateTime(selectedEvent.raceStart)}`
                  : ''}
              </span>
            </div>
          </div>
        </section>

        <div className={styles.layout}>
          <CalenderList
            events={CalenderEvents}
            selectedSlug={selectedSlug}
            onSelect={handleSelect}
          />

          <div className={styles.detailColumn}>
            <CalenderDetail event={selectedEvent ?? undefined} />
            <TrackCard track={track} mapImage={track?.mapImage} />
          </div>
        </div>
      </div>
      <Footer />
    </MainContainer>
  );
};
