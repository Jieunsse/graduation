import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { findGlossaryTerm } from '@src/domain/ruleBook/data/glossary.ts';
import * as styles from '@src/domain/ruleBook/styles/guideDetailPage.css.ts';

interface GuideDetailPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const GuideDetailPage = ({
  appearance,
  setAppearance,
}: GuideDetailPageProps) => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const term = useMemo(
    () => (slug ? findGlossaryTerm(slug) : undefined),
    [slug]
  );

  const handleBack = () => {
    navigate('/guide');
  };

  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />

      <div className={styles.page}>
        <button
          type="button"
          className={styles.backButton}
          onClick={handleBack}
        >
          ← 길라잡이 목록으로
        </button>

        {term ? (
          <>
            <section className={styles.hero}>
              <div className={styles.heroMeta}>
                <span>{term.englishTitle}</span>
                <span>{term.highlight}</span>
              </div>
              <h1 className={styles.heroHeading}>{term.title}</h1>
              <p className={styles.heroTagline}>{term.summary}</p>
            </section>

            <div className={styles.contentLayout}>
              <section className={styles.overview}>
                <h2 className={styles.overviewTitle}>상황 요약</h2>
                <p className={styles.description}>{term.description}</p>
                <ul className={styles.keyPointList}>
                  {term.keyPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {term.sections.map((section) => (
                  <div key={section.heading} className={styles.section}>
                    <h3 className={styles.sectionHeading}>{section.heading}</h3>
                    {section.content.map((paragraph) => (
                      <p key={paragraph} className={styles.sectionParagraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </section>

              <aside className={styles.sidebarPanel}>
                <div className={styles.quickFacts}>
                  <h2 className={styles.quickFactsTitle}>Quick Facts</h2>
                  {term.quickFacts.map((fact) => (
                    <div key={fact.label} className={styles.quickFactItem}>
                      <span className={styles.quickFactLabel}>
                        {fact.label}
                      </span>
                      <span className={styles.quickFactValue}>
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </>
        ) : (
          <section className={styles.emptyState}>
            <h2 className={styles.emptyTitle}>용어 정보를 찾을 수 없어요.</h2>
            <p className={styles.emptyMessage}>
              주소가 정확한지 확인하거나 다른 용어 카드를 선택해 주세요.
              길라잡이 메인으로 돌아가면 모든 용어 목록을 다시 볼 수 있습니다.
            </p>
          </section>
        )}
      </div>

      <Footer />
    </MainContainer>
  );
};
