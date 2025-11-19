import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { NewsCard } from '@domain/news/components/NewsCard/NewsCard.tsx';
import { useNewsList } from '@domain/news/hooks/useNewsList.ts';
import * as styles from '@domain/news/styles/newsList.css.ts';
import React from 'react';

interface NewsListPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const NewsListPage = ({ appearance, setAppearance }: NewsListPageProps) => {
  const { data, isLoading, isError } = useNewsList();
  const articles = data ?? [];
  const sourceCount = new Set(articles.map((article) => article.source)).size;

  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroAccent} aria-hidden />
          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span>주요 매체 {sourceCount}곳</span>
              <span>뉴스 {articles.length}건</span>
            </div>
            <h1 className={styles.heroTitle}>F1 뉴스 레이더</h1>
            <p className={styles.heroDescription}>
              그랑프리 현장 속보부터 규정 변화, 팀 전략 분석까지. 최신 F1 뉴스를
              한눈에 살펴보고, 앞으로의 레이스를 미리 예측해보세요.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>오늘의 주요 소식</h2>
            <p className={styles.sectionDescription}>
              신뢰할 수 있는 글로벌 모터스포츠 매체들의 헤드라인을 모아
              전달합니다.
            </p>
          </div>

          {isLoading ? (
            <div className={styles.statusCard}>뉴스를 불러오는 중입니다.</div>
          ) : isError ? (
            <div className={styles.statusCard}>
              뉴스를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
            </div>
          ) : articles.length === 0 ? (
            <div className={styles.statusCard}>등록된 뉴스가 없습니다.</div>
          ) : (
            <div className={styles.grid}>
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </MainContainer>
  );
};

export default NewsListPage;
