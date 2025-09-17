import { Button } from '@radix-ui/themes';
import style from './card.module.css';

interface CardProps {
  title: string;
  date: string;
  driver: string;
  category: categoryType;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

type categoryType = 'PIT' | 'SC' | 'VSC' | 'RET' | 'PEN';

export const Card = ({
  title,
  date,
  category,
  description,
  driver,
  buttonText = '자세히 보기',
  onButtonClick,
}: CardProps) => {
  const tagClassName = `${style.tag} ${style[category]}`;

  return (
    <div className={style.card}>
      <div className={style.header}>
        <span className={style.title}>{title}</span>
        <span className={style.date}>{date}</span>
      </div>
      <div className={style.body}>
        <span className={tagClassName}>{category}</span>
        <span className={style.colon}>:</span>
        <span className={style.description}>{description}</span>
      </div>
      <div className={style.footer}>
        <span className={style.driver}>드라이버 : {driver}</span>
        <Button variant="outline" size="2" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
