import React, { useEffect, useMemo, useState } from 'react';
import * as styles from '@domain/board/styles/boardDetail.css.ts';
import type { BoardPost } from '@domain/board/types';
import { useCommentStore } from '@domain/board/store/commentStore.ts';

interface BoardDetailProps {
  post: BoardPost;
  onBack: () => void;
}

const formatDate = (value: string) => value.replace(/-/g, '.');

const formatTimestamp = (value: string | undefined | null) => {
  if (typeof value !== 'string' || value.length === 0) {
    return '';
  }

  const normalized = value.replace(' ', 'T');
  const date = new Date(normalized);

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

type StoreComment = ReturnType<
  typeof useCommentStore.getState
>['comments'][number];

const resolveCommentId = (comment: StoreComment, fallback: number) =>
  comment.commentId ?? comment.id ?? fallback;

const resolveCommentAuthor = (comment: StoreComment) =>
  comment.author ?? comment.username ?? comment.nickname ?? '익명';

const resolveCommentTimestamp = (comment: StoreComment) =>
  formatTimestamp(comment.updatedAt ?? comment.createdAt);

export const BoardDetail = ({ post, onBack }: BoardDetailProps) => {
  const [commentValue, setCommentValue] = useState('');
  const comments = useCommentStore((state) => state.comments);
  const isLoadingComments = useCommentStore((state) => state.isLoading);
  const isSubmittingComment = useCommentStore((state) => state.isSubmitting);
  const commentError = useCommentStore((state) => state.error);
  const fetchComments = useCommentStore((state) => state.fetchComments);
  const addComment = useCommentStore((state) => state.addComment);
  const clearCommentError = useCommentStore((state) => state.clearError);
  const commentCount = isLoadingComments ? post.comments : comments.length;

  const formattedCreatedAt = useMemo(() => {
    const formatted = formatDate(post.createdAt);
    return formatted.split('T')[0];
  }, [post.createdAt]);

  useEffect(() => {
    void fetchComments(post.id);
  }, [fetchComments, post.id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = commentValue.trim();

    if (!trimmed) {
      return;
    }

    clearCommentError();

    void addComment(post.id, trimmed)
      .then(() => {
        setCommentValue('');
      })
      .catch((error) => {
        console.error('댓글 등록에 실패했습니다.', error);
        alert('댓글 등록에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      });
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
            <span className={styles.heroMetaItem}>
              작성일 {formattedCreatedAt}
            </span>
            <span className={styles.heroMetaItem}>
              조회수 {post.views.toLocaleString('ko-KR')}
            </span>
            <span className={styles.heroMetaItem}>
              좋아요 {post.likes.toLocaleString('ko-KR')}
            </span>
            <span className={styles.heroMetaItem}>댓글 {commentCount}</span>
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
          <span className={styles.statPill}>💬 댓글 {commentCount}</span>
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
              로그인 후 댓글을 작성해 주세요. 커뮤니티 운영 원칙을 꼭 지켜
              주세요.
            </span>
            <button
              type="submit"
              className={styles.commentSubmit}
              disabled={!commentValue.trim() || isSubmittingComment}
            >
              {isSubmittingComment ? '등록 중...' : '댓글 등록'}
            </button>
          </div>
        </form>

        <div className={styles.divider} aria-hidden />

        {isLoadingComments ? (
          <div className={styles.emptyComment}>댓글을 불러오는 중입니다...</div>
        ) : commentError ? (
          <div className={styles.emptyComment}>{commentError}</div>
        ) : comments.length > 0 ? (
          <ul className={styles.commentList}>
            {comments.map((comment, index) => (
              <li
                key={resolveCommentId(comment, index)}
                className={styles.commentItem}
              >
                <div className={styles.commentMeta}>
                  <span className={styles.commentAuthor}>
                    {resolveCommentAuthor(comment)}
                  </span>
                  <span>{resolveCommentTimestamp(comment) || '-'}</span>
                </div>
                <p className={styles.commentBody}>
                  {comment.content ?? comment.body ?? ''}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.emptyComment}>댓글이 없습니다.</div>
        )}
      </section>
    </div>
  );
};
