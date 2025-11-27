import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useMemo } from 'react';
import { useNewsDetail } from '@domain/news/hooks/useNewsDetail.ts';
import * as styles from '@domain/news/styles/newsDetail.css.ts';

interface NewsDetailPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const formatPublishedDate = (isoDate: string) => {
  try {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
};

export const NewsDetailPage = ({
  appearance,
  setAppearance,
}: NewsDetailPageProps) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useNewsDetail(id);

  const formattedDate = useMemo(() => {
    if (!data?.publishedAt) return null;
    return formatPublishedDate(data.publishedAt);
  }, [data?.publishedAt]);

  const handleBack = () => {
    navigate('/news');
  };

  return (
    <MainContainer
      sidebar={<SideBar appearance={appearance} setAppearance={setAppearance} />}
    >
      <Header />

      <div className={styles.page}>
        <button type="button" className={styles.backButton} onClick={handleBack}>
          ← 뉴스 목록으로 돌아가기
        </button>

        {isLoading ? (
          <section className={styles.stateCard}>뉴스를 불러오는 중입니다.</section>
        ) : isError ? (
          <section className={styles.stateCard}>
            뉴스 정보를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
          </section>
        ) : !data ? (
          <section className={styles.stateCard}>
            해당 뉴스 기사를 찾을 수 없습니다.
          </section>
        ) : (
          <article className={styles.article}>
            <header className={styles.header}>
              <div className={styles.metaRow}>
                <span className={styles.source}>{data.source}</span>
                {formattedDate ? (
                  <span className={styles.date}>{formattedDate}</span>
                ) : null}
                {data.readingTime ? (
                  <span className={styles.readingTime}>{`${data.readingTime}분 소요`}</span>
                ) : null}
              </div>

              <h1 className={styles.title}>{data.title}</h1>
              {data.excerpt ? <p className={styles.excerpt}>{data.excerpt}</p> : null}

              <div className={styles.infoRow}>
                {data.author ? (
                  <span className={styles.infoChip}>작성자 {data.author}</span>
                ) : null}
                {data.updatedAt ? (
                  <span className={styles.infoChip}>
                    업데이트 {formatPublishedDate(data.updatedAt)}
                  </span>
                ) : null}
              </div>
            </header>

            <div className={styles.heroImageWrapper}>
              <img
                src={data.thumbnail}
                alt={`${data.title} 대표 이미지`}
                className={styles.heroImage}
                loading="lazy"
              />
            </div>

            <section className={styles.content}>
              {data.content.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>

            <footer className={styles.footer}>
              {data.tags && data.tags.length > 0 ? (
                <div className={styles.tags}>
                  {data.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className={styles.actions}>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sourceButton}
                >
                  원문 보기
                </a>
              </div>
            </footer>
          </article>
        )}
      </div>

      <Footer />
    </MainContainer>
  );
};

export default NewsDetailPage;
