import { useMemo, useState } from 'react';
import { MainContainer } from '@shared/layout/MainContainer.tsx';
import { SideBar } from '@shared/ui/sidebar/SideBar.tsx';
import { Header } from '@shared/ui/header/Header.tsx';
import { Footer } from '@shared/ui/footer/Footer.tsx';
import * as styles from '../styles/boardPage.css.ts';
import { mockBoardPosts } from '../data/mockPosts.ts';
import type { BoardPost } from '../types.ts';

const categories = ['전체', '공지', '정보', '잡담', '후기', '질문'] as const;

type CategoryFilter = (typeof categories)[number];

interface BoardPageProps {
  appearance: 'light' | 'dark';
  setAppearance: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const formatNumber = (value: number) => value.toLocaleString('ko-KR');

const formatDate = (value: string) => value.replace(/-/g, '.');

const getBadgeLabel = (post: BoardPost) => {
  if (post.isNotice) {
    return '공지';
  }

  if (post.isHot) {
    return 'HOT';
  }

  if (post.isNew) {
    return 'NEW';
  }

  return null;
};

export const BoardPage = ({ appearance, setAppearance }: BoardPageProps) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const summary = useMemo(() => {
    const total = mockBoardPosts.length;
    const hot = mockBoardPosts.filter((post) => post.isHot).length;
    const today = mockBoardPosts.filter((post) => post.isNew).length;

    return { total, hot, today };
  }, []);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return mockBoardPosts
      .filter((post) => {
        const categoryMatch =
          activeCategory === '전체' ? true : post.category === activeCategory;

        if (!categoryMatch) {
          return false;
        }

        if (!normalizedQuery) {
          return true;
        }

        const combined = `${post.title} ${post.author} ${post.tags?.join(' ') ?? ''}`;
        return combined.toLowerCase().includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (a.isNotice && !b.isNotice) {
          return -1;
        }

        if (!a.isNotice && b.isNotice) {
          return 1;
        }

        return b.id - a.id;
      });
  }, [activeCategory, searchQuery]);

  return (
    <MainContainer
      sidebar={
        <SideBar appearance={appearance} setAppearance={setAppearance} />
      }
    >
      <Header />

      <div className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay} aria-hidden />

          <div className={styles.heroContent}>
            <div className={styles.heroMeta}>
              <span>총 {formatNumber(summary.total)}개의 게시글</span>
              {/*<span>HOT {formatNumber(summary.hot)}</span>*/}
              {/*<span>NEW {formatNumber(summary.today)}</span>*/}
            </div>
            <h1 className={styles.heroTitle}>자유 게시판</h1>
            <p className={styles.heroDescription}>
              서로의 관람 경험, 전략 분석, 그리고 작은 루머까지 자유롭게 나누고
              기록하는 공간입니다. <br />
            </p>
          </div>

          <div className={styles.heroActions}>
            <button type="button" className={styles.primaryButton}>
              ✍️ 새 글 작성하기
            </button>
            <button type="button" className={styles.secondaryButton}>
              내가 쓴 글 보기
            </button>
          </div>
        </section>

        <section className={styles.boardSurface}>
          <div className={styles.toolbar}>
            <div className={styles.categoryList}>
              {categories.map((category) => {
                const isActive = activeCategory === category;
                const categoryClass = `${styles.categoryButton} ${
                  isActive ? styles.categoryButtonActive : ''
                }`;

                return (
                  <button
                    key={category}
                    type="button"
                    className={categoryClass}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className={styles.searchArea}>
              <input
                type="search"
                className={styles.searchInput}
                placeholder="제목, 작성자, 태그 검색"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <button type="button" className={styles.searchButton}>
                검색
              </button>
            </div>
          </div>

          <div className={styles.listHeader}>
            <span>제목</span>
            <span>작성자</span>
            <span>작성일</span>
            <span>조회수</span>
            <span>댓글</span>
          </div>

          <div className={styles.list}>
            {filteredPosts.length === 0 ? (
              <div className={styles.emptyState}>
                아직 등록된 글이 없습니다. 새로운 이야기를 가장 먼저 남겨보세요!
              </div>
            ) : (
              filteredPosts.map((post) => {
                const badgeLabel = getBadgeLabel(post);
                const rowClass = `${styles.listRow} ${
                  post.isNotice ? styles.listRowNotice : ''
                }`;

                return (
                  <div key={post.id} className={rowClass}>
                    <div className={styles.titleCell}>
                      <p className={styles.titleMain}>
                        {badgeLabel ? (
                          <span className={styles.badge}>{badgeLabel}</span>
                        ) : null}
                        {post.title}
                      </p>
                      {post.tags && post.tags.length > 0 ? (
                        <div className={styles.tagGroup}>
                          {post.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <span className={styles.statCell}>{post.author}</span>
                    <span className={styles.statCell}>
                      {formatDate(post.createdAt)}
                    </span>
                    <span className={styles.statCell}>
                      {formatNumber(post.views)}
                    </span>
                    <span className={styles.statCell}>
                      💬 {formatNumber(post.comments)}
                    </span>
                  </div>
                );
              })
            )}
          </div>

          <div className={styles.pagination}>
            <button type="button" className={styles.pageButton}>
              ←
            </button>
            <button
              type="button"
              className={`${styles.pageButton} ${styles.pageButtonActive}`}
            >
              1
            </button>
            <button type="button" className={styles.pageButton}>
              2
            </button>
            <button type="button" className={styles.pageButton}>
              3
            </button>
            <button type="button" className={styles.pageButton}>
              →
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </MainContainer>
  );
};
