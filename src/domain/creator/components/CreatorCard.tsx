import * as styles from '@domain/creator/components/creatorCard.css.ts';
import type { CreatorContent } from '@domain/creator/types/creatorContent.ts';

interface CreatorCardProps {
  content: CreatorContent;
}

export const CreatorCard = ({ content }: CreatorCardProps) => {
  return (
    <a
      className={styles.card}
      tabIndex={0}
      href={content.link}
      target="_blank"
      rel="noopener norefferer"
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
          <span className={styles.creatorName}>{content.creator}</span>
        </div>

        <p className={styles.description}>{content.description}</p>
      </div>
    </a>
  );
};
