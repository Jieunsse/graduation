import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import { BoardDetail } from '../../components/boardDetail/boardDetail.tsx';
import * as styles from '../../styles/boardDetail.css.ts';
import { useBoardStore } from '../../store/boardStore.ts';

interface BoardDetailPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

export const BoardDetailPage = ({
  appearance,
  setAppearance,
}: BoardDetailPageProps) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const posts = useBoardStore((state) => state.posts);

  const post = useMemo(
    () => posts.find((item) => item.id === postId),
    [posts, postId]
  );

  const handleBack = () => {
    navigate('/board');
  };

  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />

      <div className={styles.pageWrapper}>
        {post ? (
          <BoardDetail post={post} onBack={handleBack} />
        ) : (
          <section className={styles.emptyState}>
            <h2 className={styles.emptyTitle}>게시글을 찾을 수 없어요.</h2>
            <p className={styles.emptyMessage}>
              주소가 정확한지 확인해 주세요. 게시판 목록에서 다시 선택하면
              원하는 글을 빠르게 찾을 수 있습니다.
            </p>
            <button
              type="button"
              className={styles.emptyAction}
              onClick={handleBack}
            >
              게시판으로 돌아가기
            </button>
          </section>
        )}
      </div>

      <Footer />
    </MainContainer>
  );
};
