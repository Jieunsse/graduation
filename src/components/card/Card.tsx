import { Button } from '@radix-ui/themes';
import * as styles from './card.css';

interface CardProps {
  title: string;
  date: string;
  driver: string;
  category: categoryType;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  metaLabel?: string;
}

type categoryType = 'PIT' | 'SC' | 'VSC' | 'RET' | 'PEN' | 'FLAG' | 'FINISH';

export const Card = ({
  title,
  date,
  category,
  description,
  driver,
  buttonText = '자세히 보기',
  onButtonClick,
  metaLabel = '드라이버',
}: CardProps) => {
  const tagClassName = `${styles.tag} ${styles.category[category]}`;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.body}>
        <span className={tagClassName}>{category}</span>
        <span className={styles.colon}>:</span>
        <span className={styles.description}>{description}</span>
      </div>
      <div className={styles.footer}>
        <span className={styles.driver}>
          {metaLabel} : {driver}
        </span>
        <Button variant="outline" size="2" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
