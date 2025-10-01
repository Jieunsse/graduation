import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { Card } from '@src/components/card/Card.tsx';
import { glossaryTerms } from '@src/domain/ruleBook/data/glossary.ts';
import * as styles from '@src/domain/ruleBook/styles/guideGlossaryPage.css.ts';

interface GuideGlossaryPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const GuideGlossaryPage = ({
  appearance,
  setAppearance,
}: GuideGlossaryPageProps) => {
  const navigate = useNavigate();

  const meta = useMemo(() => {
    const total = glossaryTerms.length;
    const controlRelated = glossaryTerms.filter((term) =>
      ['SC', 'VSC'].includes(term.category)
    ).length;

    return { total, controlRelated };
  }, []);

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
            <p className={styles.heroMeta}>
              <span>총 {meta.total}개의 핵심 용어</span>
              <span>레이스 통제 관련 {meta.controlRelated}개</span>
            </p>
            <h1 className={styles.heroTitle}>입문자용 룰북</h1>
            <p className={styles.heroSubtitle}>
              규정과 상황에 따라 달라지는 트랙 통제 신호를 한 번에 이해할 수
              있는 초보자용 용어집입니다.
              <br /> 헷갈리는 상황에서는 언제든지 이곳에서 다시 확인하세요.
            </p>
          </div>
        </section>

        <section>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>핵심 용어</h2>
            <span className={styles.helperText}>
              카드를 선택하면 각 용어의 상세 설명 페이지로 이동합니다.
            </span>
          </div>
          <div className={styles.cardGrid}>
            {glossaryTerms.map((term) => (
              <Card
                key={term.slug}
                title={term.title}
                date={term.englishTitle}
                category={term.category}
                description={term.summary}
                driver={term.highlight}
                metaLabel="태그"
                onButtonClick={() => navigate(`/guide/${term.slug}`)}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </MainContainer>
  );
};
