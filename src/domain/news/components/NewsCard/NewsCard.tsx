import * as styles from '@domain/news/components/NewsCard/newsCard.css.ts';
import type { NewsArticle } from '@domain/news/types/news.ts';

interface NewsCardProps {
  article: NewsArticle;
}

const formatPublishedDate = (isoDate: string) => {
  try {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
};

export const NewsCard = ({ article }: NewsCardProps) => {
  const formattedDate = formatPublishedDate(article.publishedAt);

  return (
    <a
      className={styles.card}
      tabIndex={0}
      href={article.link ?? '#'}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.thumbnailWrapper}>
        <img
          src={article.thumbnail}
          alt={`${article.title} 썸네일`}
          className={styles.thumbnail}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.source}>{article.source}</span>
          <span className={styles.date}>{formattedDate}</span>
        </div>

        <h3 className={styles.title}>{article.title}</h3>
        {article.excerpt ? <p className={styles.excerpt}>{article.excerpt}</p> : null}
      </div>
    </a>
  );
};
