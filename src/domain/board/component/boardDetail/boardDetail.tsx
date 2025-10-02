import React, { useMemo, useState } from 'react';
import * as styles from '@domain/board/styles/boardDetail.css.ts';
import type { BoardPost } from '@domain/board/types';

interface BoardDetailProps {
  post: BoardPost;
  onBack: () => void;
}

interface CommentItem {
  id: number;
  author: string;
  createdAt: string;
  body: string;
}

const formatDate = (value: string) => value.replace(/-/g, '.');

const formatTimestamp = (value: string) => {
  const date = new Date(value.replace(' ', 'T'));

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const mockCommentSeed: Record<number, CommentItem[]> = {
  1: [
    {
      id: 1,
      author: 'SilverArrow',
      createdAt: '2025-02-01T12:20:00',
      body: '가이드 잘 읽었습니다. 신규 팬들에게 큰 도움이 될 것 같아요!',
    },
    {
      id: 2,
      author: 'Trackside',
      createdAt: '2025-02-01T15:08:00',
      body: '커뮤니티 규칙을 지키면서 더 즐거운 게시판 만들어봐요 :)',
    },
  ],
  2: [
    {
      id: 1,
      author: 'GarageReporter',
      createdAt: '2025-02-10T22:10:00',
      body: '현장 분위기 사진 멋지네요. 패독 쪽도 혹시 더 있나요?',
    },
  ],
  3: [
    {
      id: 1,
      author: 'PowerUnitLab',
      createdAt: '2025-02-10T18:45:00',
      body: '냉각 덕트 규제는 FIA TD-011에 정리되어 있어요. 한 번 참고해 보세요.',
    },
  ],
  4: [
    {
      id: 1,
      author: 'Tifosi88',
      createdAt: '2025-02-09T13:40:00',
      body: '루머지만 꽤 신뢰도 있는 출처네요. 정리 감사드립니다.',
    },
    {
      id: 2,
      author: 'PitStopGuru',
      createdAt: '2025-02-09T16:05:00',
      body: '작년 페라리 평균 기록은 2.75초였죠. 변화가 기대됩니다.',
    },
  ],
  5: [
    {
      id: 1,
      author: 'CampingPro',
      createdAt: '2025-02-08T10:15:00',
      body: '셔틀 예약 링크 공유 가능할까요? 이번에 처음 가보려고 합니다.',
    },
  ],
  6: [
    {
      id: 1,
      author: 'GridGirl',
      createdAt: '2025-02-08T09:20:00',
      body: '초보자에게 꼭 필요한 내용이에요. 정리 감사합니다!',
    },
    {
      id: 2,
      author: 'TechNerd',
      createdAt: '2025-02-08T11:42:00',
      body: 'DRS 관련 항목도 추가되면 좋겠습니다. 요청 드려요.',
    },
  ],
  7: [
    {
      id: 1,
      author: 'Volunteer',
      createdAt: '2025-02-07T17:05:00',
      body: '작년에는 시청에서 진행하는 공식 모집이었어요. 올해도 비슷할 듯합니다.',
    },
  ],
  8: [
    {
      id: 1,
      author: 'RegulationManiac',
      createdAt: '2025-02-06T21:05:00',
      body: '추가적으로 TD-004에서도 유사한 조항이 있으니 참고해 보세요.',
    },
  ],
  9: [
    {
      id: 1,
      author: 'NightShift',
      createdAt: '2025-02-05T14:10:00',
      body: '랜턴은 헤드랜턴이 최고예요. 손이 자유로워집니다!',
    },
  ],
  10: [
    {
      id: 1,
      author: 'FanArtist',
      createdAt: '2025-02-05T00:32:00',
      body: '맥라렌 팬덤 모임 정보 좀 알려주세요! 저도 참여하고 싶어요.',
    },
  ],
};

export const BoardDetail = ({ post, onBack }: BoardDetailProps) => {
  const [commentValue, setCommentValue] = useState('');
  const [comments, setComments] = useState<CommentItem[]>(
    () => mockCommentSeed[post.id] ?? []
  );

  const formattedCreatedAt = useMemo(
    () => formatDate(post.createdAt),
    [post.createdAt]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = commentValue.trim();

    if (!trimmed) {
      return;
    }

    const newComment: CommentItem = {
      id: Date.now(),
      author: '방문자',
      createdAt: new Date().toISOString(),
      body: trimmed,
    };

    setComments((prev) => [...prev, newComment]);
    setCommentValue('');
  };

  return (
    <div className={styles.page}>
      <button type="button" className={styles.backButton} onClick={onBack}>
        ← 게시판으로 돌아가기
      </button>

      <section className={styles.hero}>
        <div className={styles.heroHeader}>
          <span className={styles.heroCategory}>#{post.category}</span>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <div className={styles.heroMeta}>
            <span className={styles.heroMetaItem}>
              작성자 <strong>{post.author}</strong>
            </span>
            <span className={styles.heroMetaItem}>작성일 {formattedCreatedAt}</span>
            <span className={styles.heroMetaItem}>조회수 {post.views.toLocaleString('ko-KR')}</span>
            <span className={styles.heroMetaItem}>좋아요 {post.likes.toLocaleString('ko-KR')}</span>
            <span className={styles.heroMetaItem}>댓글 {comments.length}</span>
          </div>
        </div>

        {post.tags && post.tags.length > 0 ? (
          <div className={styles.tagGroup}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        ) : null}

        <div className={styles.statGroup}>
          <span className={styles.statPill}>
            🔥 HOT 지수 {post.likes.toLocaleString('ko-KR')}
          </span>
          <span className={styles.statPill}>
            👀 누적 조회 {post.views.toLocaleString('ko-KR')}
          </span>
          <span className={styles.statPill}>💬 댓글 {comments.length}</span>
        </div>
      </section>

      <article className={styles.contentSection}>
        <h2 className={styles.contentHeading}>본문 내용</h2>
        {post.content && post.content.length > 0 ? (
          post.content.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))
        ) : (
          <p className={styles.paragraph}>
            본문 내용은 준비 중입니다. 조금만 기다려 주세요!
          </p>
        )}
      </article>

      <section className={styles.commentSection}>
        <div className={styles.commentHeader}>
          <h2 className={styles.commentTitle}>댓글</h2>
          <p className={styles.commentSubtitle}>
            서로를 존중하며 이야기를 나눠 주세요. 현재 {comments.length}
            개의 댓글이 있어요.
          </p>
        </div>

        <form className={styles.commentForm} onSubmit={handleSubmit}>
          <textarea
            className={styles.commentTextArea}
            placeholder="댓글을 입력해 주세요."
            value={commentValue}
            onChange={(event) => setCommentValue(event.target.value)}
          />

          <div className={styles.commentActions}>
            <span className={styles.commentHelper}>
              Enter로 줄바꿈, 등록 버튼으로 댓글을 남길 수 있어요.
            </span>
            <button
              type="submit"
              className={styles.commentSubmit}
              disabled={!commentValue.trim()}
            >
              댓글 등록
            </button>
          </div>
        </form>

        <div className={styles.divider} aria-hidden />

        {comments.length > 0 ? (
          <ul className={styles.commentList}>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.commentItem}>
                <div className={styles.commentMeta}>
                  <span className={styles.commentAuthor}>{comment.author}</span>
                  <span>{formatTimestamp(comment.createdAt)}</span>
                </div>
                <p className={styles.commentBody}>{comment.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.emptyComment}>
            아직 댓글이 없습니다. 첫 댓글을 남겨 보세요!
          </div>
        )}
      </section>
    </div>
  );
};
