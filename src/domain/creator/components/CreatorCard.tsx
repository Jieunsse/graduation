import { useCallback } from 'react';
import type { KeyboardEventHandler } from 'react';
import * as styles from '@domain/creator/components/creatorCard.css.ts';
import { useCreatorVideoStore } from '@domain/creator/store/creatorVideoStore.ts';
import type { CreatorContent } from '@domain/creator/types/creatorContent.ts';

interface CreatorCardProps {
  content: CreatorContent;
}

export const CreatorCard = ({ content }: CreatorCardProps) => {
  const { selectedVideoId, selectVideo } = useCreatorVideoStore((state) => ({
    selectedVideoId: state.selectedVideoId,
    selectVideo: state.selectVideo,
  }));
  const isSelected = selectedVideoId === content.id;
  const videoUrl = content.videoUrl ?? `https://www.youtube.com/watch?v=${content.id}`;

  const openVideo = useCallback(() => {
    selectVideo(content.id);

    if (typeof window !== 'undefined') {
      window.open(videoUrl, '_blank', 'noopener,noreferrer');
    }
  }, [content.id, selectVideo, videoUrl]);

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLElement>>(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openVideo();
      }
    },
    [openVideo],
  );

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
      data-selected={isSelected}
      onClick={openVideo}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.thumbnailWrapper}>
        <img
          src={content.thumbnail}
          alt={`${content.creator} - 영상 썸네일`}
          className={styles.thumbnail}
          loading="lazy"
        />
        <span className={styles.durationBadge}>{content.duration}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.creatorInfo}>
          <img
            src={content.profileImage}
            alt={`${content.creator} 프로필 이미지`}
            className={styles.profileImage}
            loading="lazy"
          />
          <span className={styles.creatorName}>{content.creator}</span>
        </div>

        <p className={styles.description}>{content.description}</p>
      </div>
    </article>
  );
};
