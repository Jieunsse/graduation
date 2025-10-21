import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { CreatorCard } from '@domain/creator/components/CreatorCard.tsx';
import { useCreatorContents } from '@domain/creator/hooks/useCreatorContents.ts';
import * as styles from '@domain/creator/pages/creatorContentPage.css.ts';

interface CreatorContentPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const CreatorContentPage = ({
  appearance,
  setAppearance,
}: CreatorContentPageProps) => {
  const { data, isLoading, isError } = useCreatorContents();
  const contents = data ?? [];
  const videoCount = contents.length;
  const creatorCount = new Set(contents.map((item) => item.creator)).size;

  return (
    <MainContainer sidebar={<SideBar appearance={appearance} setAppearance={setAppearance} />}>
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroAccent} aria-hidden />
          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span>크리에이터 {creatorCount}명</span>
              <span>영상 {videoCount}개</span>
            </div>
            <h1 className={styles.heroTitle}>크리에이터 콘텐츠</h1>
            <p className={styles.heroDescription}>
              F1 전문 크리에이터의 하이라이트 영상과 분석 콘텐츠를 한곳에서 만나보세요.
              전략 리뷰부터 서킷 가이드까지, 경주를 더욱 깊이 있게 즐길 수 있는 최신 영상들을
              모았습니다.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>최신 업로드</h2>
            <p className={styles.sectionDescription}>
              다양한 크리에이터의 레이스 분석, 기술 해설, 현장 브이로그를 확인해보세요.
            </p>
          </div>

          {isLoading ? (
            <div className={styles.statusCard}>콘텐츠를 불러오는 중입니다.</div>
          ) : isError ? (
            <div className={styles.statusCard}>
              콘텐츠를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
            </div>
          ) : contents.length === 0 ? (
            <div className={styles.statusCard}>등록된 콘텐츠가 없습니다.</div>
          ) : (
            <div className={styles.grid}>
              {contents.map((content) => (
                <CreatorCard key={content.id} content={content} />
              ))}
            </div>
          )}
        </section>
      </div>

      <Footer />
    </MainContainer>
  );
};
